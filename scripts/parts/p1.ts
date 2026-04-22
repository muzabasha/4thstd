/* CBSE Grade 4 — Full Syllabus for Yasmeen */
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
