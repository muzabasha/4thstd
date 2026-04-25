const fs = require('fs');
let content = fs.readFileSync('./lib/curriculum.ts', 'utf8');

// Fix 1: Missing parenthesis
content = content.replace(
  `'Girls can be as strong as boys!'] , quiz:`,
  `'Girls can be as strong as boys!')] , quiz:`
);

// Fix 2: Broken line 732
content = content.replace(
  `'Twigs', 'Grass', 'Mud'], 'Is it easy to    { id: 'e22', title: '22. The World in my Home', topics: [`,
  `'Twigs', 'Grass', 'Mud'], 'Is it easy to build a nest?')], quiz: [q('Which bird stitches its nest?', ['Tailor bird', 'Crow'], 'Tailor bird')], learningOutcomes: ['Understand animal homes'] }\n    ]},\n    { id: 'e22', title: '22. The World in my Home', topics: [`
);

// Fix 3: Delete duplicate corrupted h1-h14
// Looking at the file, the end of hindiSubject looks like this:
//     { id: 'h14', ... ]}
//   ]
// }; \n  { id: 'h6-t2', ...
// Let's split by lines to handle the deletion
let lines = content.split('\n');

// Find where `};` is, which ends hindiSubject.
let hindiEndLine = -1;
for (let i = 815; i < lines.length; i++) {
  if (lines[i].startsWith('};')) {
    hindiEndLine = i;
    break;
  }
}

let englishStartLine = -1;
for (let i = hindiEndLine; i < lines.length; i++) {
  if (lines[i].includes('ENGLISH (Marigold)')) {
    englishStartLine = i;
    break;
  }
}

if (hindiEndLine !== -1 && englishStartLine !== -1) {
  // delete lines after hindiEndLine up to englishStartLine - 1
  lines.splice(hindiEndLine + 1, englishStartLine - hindiEndLine - 2);
}

// ensure hindiEnd is just '};'
lines[hindiEndLine] = '};';

fs.writeFileSync('./lib/curriculum.ts', lines.join('\n'));
console.log("Fixes applied");
