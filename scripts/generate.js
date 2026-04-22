/**
 * CBSE Grade 4 – Curriculum Generator
 * node scripts/generate.js  →  writes lib/curriculum.ts
 */
const fs = require('fs');
const path = require('path');
const data = require('../lib/curriculum-data.json');

const ts = `/* AUTO-GENERATED – do not edit directly, run: node scripts/generate.js */

export interface Activity {
  title: string; description: string;
  skill: 'listening'|'speaking'|'writing'|'performing'|'drawing'|'calculating';
  level: 'low'|'mid'|'high';
  steps: string[]; materials?: string[]; doItYourself?: string;
}
export interface VirtualLab { title: string; simulation: string; task: string; }
export interface QuizQuestion {
  question: string; options: string[]; correctAnswer: string;
  explanation: string; hint?: string;
}
export interface Topic {
  id: string; title: string; subtopics: string[];
  activities: Activity[]; virtualLab?: VirtualLab; quiz: QuizQuestion[];
  learningOutcomes: string[]; crossCurricularLink?: string;
  readingText: { en: string; hi: string; kn: string };
}
export interface Chapter { id: string; title: string; emoji: string; topics: Topic[]; }
export interface Subject { id: string; title: string; icon: string; color: string; chapters: Chapter[]; }

export const syllabus: Subject[] = ${JSON.stringify(data.subjects, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'lib', 'curriculum.ts'), ts, 'utf8');
console.log('✓ lib/curriculum.ts written –', data.subjects.length, 'subjects');
