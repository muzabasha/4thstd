/**
 * CBSE Grade 4 Full Curriculum Builder — node scripts/build.js
 */
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', 'lib', 'curriculum.ts');

// helpers
const q = (question, options, correctAnswer, explanation, hint) =>
    ({ question, options, correctAnswer, explanation, ...(hint ? { hint } : {}) });
const a = (title, description, skill, level, steps, materials, diy) =>
({
    title, description, skill, level, steps,
    ...(materials && materials.length ? { materials } : {}),
    ...(diy ? { doItYourself: diy } : {})
});
const tp = (id, title, subtopics, en, hi, kn, activities, quiz, learningOutcomes, cross, vlab) =>
({
    id, title, subtopics, readingText: { en, hi, kn }, activities, quiz,
    learningOutcomes, crossCurricularLink: cross,
    ...(vlab ? { virtualLab: vlab } : {})
});
const lab = (title, simulation, task) => ({ title, simulation, task });

const SUBJECTS = [];
// END_SUBJECTS

const SUBJECTS = [];
