const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', 'lib', 'curriculum.ts');
const existing = fs.readFileSync(OUT, 'utf8');
// Keep only the interfaces + helpers (everything before the first subject)
const base = existing.split('\n').slice(0, 35).join('\n');
fs.writeFileSync(OUT, base + DATA, 'utf8');
console.log('Done. Lines:', (base + DATA).split('\n').length);
