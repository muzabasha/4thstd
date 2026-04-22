import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'lib', 'curriculum.ts');

const content = `/* AUTO-GENERATED — CBSE Grade 4 Full Syllabus */
export interface Activity {
  title: string; description: string;
  skill: 'listening'|'speaking'|'writing'|'performing'|'drawing'|'calculating';
  level: 'low'|'mid'|'high';
  steps: string[]; materials?: string[]; doItYourself?: string;
}
export interface VirtualLab { title: string; simulation: string; task: string; interactiveType?: 'drag'|'click'|'draw'|'count'; }
export interface QuizQuestion { question: string; options: string[]; correctAnswer: string; explanation?: string; hint?: string; }
export interface Topic {
  id: string; title: string; subtopics: string[];
  activities: Activity[]; virtualLab?: VirtualLab; quiz: QuizQuestion[];
  learningOutcomes: string[]; crossCurricularLink?: string;
  readingText?: { en: string; hi?: string; kn?: string };
}
export interface Chapter { id: string; title: string; topics: Topic[]; }
export interface Subject { id: string; title: string; icon: string; color: string; chapters: Chapter[]; }

const q = (question: string, options: string[], correctAnswer: string, explanation?: string): QuizQuestion =>
  ({ question, options, correctAnswer, explanation });
const act = (title: string, description: string, skill: Activity['skill'], level: Activity['level'],
  steps: string[], materials?: string[], doItYourself?: string): Activity =>
  ({ title, description, skill, level, steps, materials, doItYourself });
`;

writeFileSync(out, content, 'utf8');
console.log('Part 1 written');
