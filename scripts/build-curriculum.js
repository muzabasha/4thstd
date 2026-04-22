const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'lib', 'curriculum.ts');
fs.writeFileSync(out, CONTENT);
console.log('Done');
