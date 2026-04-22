/**
 * Full curriculum generator — node scripts/fullgen.js
 * Assembles all parts and writes lib/curriculum.ts
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'lib', 'curriculum.ts');
const P = path.join(__dirname, 'parts');

const files = fs.readdirSync(P)
    .filter(f => f.endsWith('.ts'))
    .sort()
    .map(f => fs.readFileSync(path.join(P, f), 'utf8'));

// Read the header (p1.ts) then all data parts, then append the export
const header = files[0];
const body = files.slice(1).join('\n');

const footer = `
// ── EXPORT ───────────────────────────────────────────────────────────────────
export const syllabus: Subject[] = [
  mathSubject,
  evsSubject,
  englishSubject,
  hindiSubject,
  kannadaSubject,
  computersSubject,
];
`;

fs.writeFileSync(OUT, header + '\n' + body + '\n' + footer, 'utf8');
console.log('curriculum.ts written — ' + (header + body + footer).length + ' chars');
