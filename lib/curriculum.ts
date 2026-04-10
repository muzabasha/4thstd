export interface Activity {
  title: string;
  description: string;
  skill: 'listening' | 'speaking' | 'writing' | 'performing';
  level: 'low' | 'mid' | 'high';
  steps: string[];
  materials?: string[];
}

export interface VirtualLab {
  title: string;
  simulation: string;
  task: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: string[];
  activities: Activity[];
  virtualLab?: VirtualLab;
  quiz: QuizQuestion[];
  learningOutcomes: string[];
  crossCurricularLink?: string;
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  chapters: Chapter[];
}

export const syllabus: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics (Math-Magic)",
    chapters: [
      {
        id: "math-c1",
        title: "Building with Bricks",
        topics: [
          { 
            id: "math-c1-t1", title: "Patterns of Bricks", subtopics: ["Jaali patterns", "Jharokha patterns"],
            activities: [{ level: 'low', title: "Pattern Spotter", description: "Find patterns in your house.", skill: "performing", steps: ["Observe"] }],
            quiz: [{ question: "What is a Jaali?", options: ["Hole pattern", "Solid wall"], correctAnswer: "Hole pattern" }],
            learningOutcomes: ["Pattern recognition"]
          },
          { 
            id: "math-c1-t2", title: "Brick Symmetry", subtopics: ["Line of symmetry", "Mirror halves"],
            activities: [{ level: 'mid', title: "Mirror Drawing", description: "Draw half a brick and use a mirror to see the full.", skill: "performing", steps: ["Draw half", "Use mirror"] }],
            quiz: [{ question: "Does a brick have symmetry?", options: ["Yes", "No"], correctAnswer: "Yes" }],
            learningOutcomes: ["Understanding symmetry"]
          }
        ]
      },
      {
        id: "math-c2", title: "Long and Short",
        topics: [
          { id: "math-c2-t1", title: "Standard Units", subtopics: ["cm, m, km"], activities: [], quiz: [], learningOutcomes: [] },
          { id: "math-c2-t2", title: "Height Comparison", subtopics: ["Who is taller?", "Measuring friends"], activities: [], quiz: [], learningOutcomes: [] }
        ]
      },
      {
        id: "math-c4", title: "Tick-Tick-Tick",
        topics: [
          { id: "math-c4-t1", title: "The Clock", subtopics: ["Hours & Minutes"], activities: [], quiz: [], learningOutcomes: [] },
          { id: "math-c4-t2", title: "24-Hour Clock", subtopics: ["Railway Time", "AM/PM"], activities: [], quiz: [], learningOutcomes: [] }
        ]
      }
    ]
  },
  {
    id: "science",
    title: "EVS (Looking Around)",
    chapters: [
      {
        id: "evs-c1", title: "Going to School",
        topics: [
          { id: "evs-c1-t1", title: "Different Bridges", subtopics: ["Cement vs Bamboo"], activities: [], quiz: [], learningOutcomes: [] },
          { id: "evs-c1-t2", title: "Trolleys & Vallams", subtopics: ["Kerala travel", "Ladakh travel"], activities: [], quiz: [], learningOutcomes: [] }
        ]
      },
      {
        id: "evs-c2", title: "Ear to Ear",
        topics: [
          { id: "evs-c2-t1", title: "Animal Skins", subtopics: ["Why patterns?", "Camouflage"], activities: [], quiz: [], learningOutcomes: [] },
          { id: "evs-c2-t2", title: "Ears and Sounds", subtopics: ["Internal ears in birds"], activities: [], quiz: [], learningOutcomes: [] }
        ]
      }
    ]
  },
  {
    id: "computers",
    title: "Computer Science",
    chapters: [
      {
        id: "comp-c4", title: "Intro to AI",
        topics: [
          { id: "comp-c4-t1", title: "Smart Machines", subtopics: ["What is AI?", "Daily AI examples"], activities: [], quiz: [], learningOutcomes: [] },
          { id: "comp-c4-t2", title: "Pattern Recognition", subtopics: ["How AI 'sees' faces"], activities: [], quiz: [], learningOutcomes: [] }
        ]
      }
    ]
  }
];
