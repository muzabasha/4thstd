// scripts/write-curriculum-nep.js
// Generates lib/curriculum.ts with complete NEP 2020 "Learn by Doing" content
'use strict';
const fs = require('fs');
const path = require('path');

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function esc(s) { return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${'); }

function topic(id, title, subtopics, readEn, readHi, readKn,
    a1Title, a1Desc, a1Skill, a1Level, a1Steps, a1Mats, a1Diy,
    a2Title, a2Desc, a2Skill, a2Level, a2Steps, a2Mats, a2Diy,
    a3Title, a3Desc, a3Skill, a3Level, a3Steps, a3Mats, a3Diy,
    q1, q1o, q1a, q1e,
    q2, q2o, q2a, q2e,
    q3, q3o, q3a, q3e,
    q4, q4o, q4a, q4e,
    outcomes, crossLink, labTitle, labSim, labTask) {

    const stepsStr = (arr) => arr.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ');
    const matsStr = (arr) => arr ? `[${arr.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ')}]` : 'undefined';
    const diyStr = (s) => s ? `'${s.replace(/'/g, "\\'")}'` : 'undefined';
    const outStr = outcomes.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ');
    const subStr = subtopics.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ');
    const optsStr = (arr) => `[${arr.map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ')}]`;

    const lab = labTitle
        ? `virtualLab: { title: '${labTitle.replace(/'/g, "\\'")}', simulation: '${labSim.replace(/'/g, "\\'")}', task: '${labTask.replace(/'/g, "\\'")}' },`
        : '';

    return `{
        id: '${id}', title: '${title.replace(/'/g, "\\'")}',
        subtopics: [${subStr}],
        readingText: {
          en: '${readEn.replace(/'/g, "\\'")}',
          hi: '${readHi.replace(/'/g, "\\'")}',
          kn: '${readKn.replace(/'/g, "\\'")}'
        },
        activities: [
          act('${a1Title.replace(/'/g, "\\'")}', '${a1Desc.replace(/'/g, "\\'")}', '${a1Skill}', '${a1Level}',
            [${stepsStr(a1Steps)}], ${matsStr(a1Mats)}, ${diyStr(a1Diy)}),
          act('${a2Title.replace(/'/g, "\\'")}', '${a2Desc.replace(/'/g, "\\'")}', '${a2Skill}', '${a2Level}',
            [${stepsStr(a2Steps)}], ${matsStr(a2Mats)}, ${diyStr(a2Diy)}),
          act('${a3Title.replace(/'/g, "\\'")}', '${a3Desc.replace(/'/g, "\\'")}', '${a3Skill}', '${a3Level}',
            [${stepsStr(a3Steps)}], ${matsStr(a3Mats)}, ${diyStr(a3Diy)})
        ],
        ${lab}
        quiz: [
          q('${q1.replace(/'/g, "\\'")}', ${optsStr(q1o)}, '${q1a.replace(/'/g, "\\'")}', '${q1e.replace(/'/g, "\\'")}'),
          q('${q2.replace(/'/g, "\\'")}', ${optsStr(q2o)}, '${q2a.replace(/'/g, "\\'")}', '${q2e.replace(/'/g, "\\'")}'),
          q('${q3.replace(/'/g, "\\'")}', ${optsStr(q3o)}, '${q3a.replace(/'/g, "\\'")}', '${q3e.replace(/'/g, "\\'")}'),
          q('${q4.replace(/'/g, "\\'")}', ${optsStr(q4o)}, '${q4a.replace(/'/g, "\\'")}', '${q4e.replace(/'/g, "\\'")}')
        ],
        learningOutcomes: [${outStr}],
        crossCurricularLink: '${crossLink.replace(/'/g, "\\'")}'
      }`;
}

// ─── BUILD SECTIONS ────────────────────────────────────────────────────────────
const header = `/* CBSE Grade 4 — NEP 2020 Learn by Doing Curriculum */
export interface Activity {
  title: string; description: string;
  skill: 'listening' | 'speaking' | 'writing' | 'performing' | 'drawing' | 'calculating';
  level: 'low' | 'mid' | 'high';
  steps: string[]; materials?: string[]; doItYourself?: string;
}
export interface VirtualLab { title: string; simulation: string; task: string; }
export interface QuizQuestion {
  question: string; options: string[]; correctAnswer: string;
  explanation?: string; hint?: string;
}
export interface Topic {
  id: string; title: string; subtopics: string[];
  activities: Activity[]; virtualLab?: VirtualLab; quiz: QuizQuestion[];
  learningOutcomes: string[]; crossCurricularLink?: string;
  readingText?: { en: string; hi?: string; kn?: string };
}
export interface Chapter { id: string; title: string; topics: Topic[]; }
export interface Subject { id: string; title: string; icon: string; color: string; chapters: Chapter[]; }

function q(question: string, options: string[], correctAnswer: string, explanation?: string): QuizQuestion {
  return { question, options, correctAnswer, explanation };
}
function act(title: string, description: string, skill: Activity['skill'], level: Activity['level'],
  steps: string[], materials?: string[], doItYourself?: string): Activity {
  return { title, description, skill, level, steps, materials, doItYourself };
}
`;
