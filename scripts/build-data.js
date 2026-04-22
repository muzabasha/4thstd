// build-data.js — assembles lib/curriculum.ts from parts
const fs = require('fs'), path = require('path');
const P = (...f) => path.join(__dirname, ...f);
const read = f => fs.existsSync(P(f)) ? fs.readFileSync(P(f), 'utf8') : '';
const out = P('..', 'lib', 'curriculum.ts');
const parts = [
    read('parts/p1.ts'),
    read('parts/p2.ts'), read('parts/p2b.ts'), read('parts/p2c.ts'), read('parts/p2d.ts'),
    read('parts/p3.ts'), read('parts/p3b.ts'), read('parts/p3c.ts'),
    read('parts/p4.ts'), read('parts/p4b.ts'), read('parts/p4c.ts'), read('parts/p4d.ts'),
    read('parts/p4e.ts'), read('parts/p4f.ts'), read('parts/p4g.ts'), read('parts/p4h.ts'), read('parts/p4i.ts'),
    read('parts/p5.ts'), read('parts/p5b.ts'), read('parts/p5c.ts'),
    read('parts/p6.ts'), read('parts/p6b.ts'), read('parts/p6c.ts'),
    read('parts/p6d.ts'), read('parts/p6e.ts'), read('parts/p6f.ts'),
    read('parts/p7.ts'), read('parts/p7b.ts'), read('parts/p7c.ts'),
    read('parts/p7d.ts'), read('parts/p7e.ts'), read('parts/p7f.ts'),
];
fs.writeFileSync(out, parts.join('\n'), 'utf8');
const lines = parts.join('\n').split('\n').length;
console.log('Written', lines, 'lines to lib/curriculum.ts');
