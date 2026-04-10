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
            id: "math-c1-t1", 
            title: "Patterns of Bricks", 
            subtopics: ["Jaali patterns", "Jharokha patterns", "Arch patterns"],
            activities: [
              { level: 'low', title: "Pattern Spotter", description: "Look at your kitchen tiles or walls.", skill: "performing", steps: ["Observation"] },
              { level: 'mid', title: "Jaali Weaver", description: "Weave paper strips.", skill: "performing" , steps: ["Weaving"] }
            ],
            quiz: [
              { question: "What is a 'Jaali'?", options: ["Hole pattern", "Solid wall", "Cement", "Door"], correctAnswer: "Hole pattern" }
            ],
            learningOutcomes: ["Geometric patterns"]
          },
          { 
            id: "math-c1-t2", title: "Brick Dimensions", subtopics: ["L, W, H"],
            activities: [], quiz: [], learningOutcomes: []
          }
        ]
      },
      { id: "math-c2", title: "Long and Short", topics: [{ id: "math-c2-t1", title: "Centimeters & Meters", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c3", title: "A Trip to Bhopal", topics: [{ id: "math-c3-t1", title: "Large Numbers", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c4", title: "Tick-Tick-Tick", topics: [{ id: "math-c4-t1", title: "Telling Time", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c5", title: "The Way The World Looks", topics: [{ id: "math-c5-t1", title: "Drawings", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c6", title: "The Junk Seller", topics: [{ id: "math-c6-t1", title: "Currency", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c7", title: "Jugs and Mugs", topics: [{ id: "math-c7-t1", title: "Volume", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c8", title: "Carts and Wheels", topics: [{ id: "math-c8-t1", title: "Circles", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c9", title: "Halves and Quarters", topics: [{ id: "math-c9-t1", title: "Fractions", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c10", title: "Play with Patterns", topics: [{ id: "math-c10-t1", title: "Sequencing", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c11", title: "Tables and Shares", topics: [{ id: "math-c11-t1", title: "Dividing", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c12", title: "How Heavy? How Light?", topics: [{ id: "math-c12-t1", title: "Weight", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c13", title: "Fields and Fences", topics: [{ id: "math-c13-t1", title: "Perimeter", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "math-c14", title: "Smart Charts", topics: [{ id: "math-c14-t1", title: "Graphs", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "science",
    title: "EVS (Looking Around)",
    chapters: [
      { id: "evs-c1", title: "Going to School", topics: [{ id: "evs-c1-t1", title: "Travel", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c2", title: "Ear to Ear", topics: [{ id: "evs-c2-t1", title: "Animal Body Parts", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c3", title: "A Day with Nandu", topics: [{ id: "evs-c3-t1", title: "Elephants", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c4", title: "The Story of Amrita", topics: [{ id: "evs-c4-t1", title: "Trees", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c5", title: "Anita and the Honeybees", topics: [{ id: "evs-c5-t1", title: "Bees", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c6", title: "Omana's Journey", topics: [{ id: "evs-c6-t1", title: "Railway", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c11", title: "The Valley of Flowers", topics: [{ id: "evs-c11-t1", title: "Floriculture", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c15", title: "From Market to Home", topics: [{ id: "evs-c15-t1", title: "Food Supply", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "evs-c27", title: "Chuskit Goes to School", topics: [{ id: "evs-c27-t1", title: "Accessibility", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "hindi",
    title: "हिन्दी (रिमझिम)",
    chapters: [
      { id: "hi-c1", title: "मन के भोले-भाले बादल", topics: [{ id: "hi-c1-t1", title: "कविता", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "hi-c2", title: "जैसा सवाल वैसा जवाब", topics: [{ id: "hi-c2-t1", title: "कहानी", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "hi-c3", title: "किर्च की गेंद", topics: [{ id: "hi-c3-t1", title: "नाटक", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "hi-c4", title: "पापा जब बच्चे थे", topics: [{ id: "hi-c4-t1", title: "संस्मरण", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "english",
    title: "English (Marigold)",
    chapters: [
      { id: "en-c1", title: "Wake Up!", topics: [{ id: "en-c1-t1", title: "Reading", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "en-c2", title: "Neha's Alarm Clock", topics: [{ id: "en-c2-t1", title: "Story", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "en-c3", title: "The Little Fir Tree", topics: [{ id: "en-c3-t1", title: "Moral", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "en-c4", title: "Alice in Wonderland", topics: [{ id: "en-c4-t1", title: "Fantasy", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "computers",
    title: "Computer Science",
    chapters: [
      { id: "comp-c1", title: "Inside the Computer", topics: [{ id: "comp-c1-t1", title: "Hardware", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "comp-c2", title: "MS Word", topics: [{ id: "comp-c2-t1", title: "Formatting", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "comp-c3", title: "The Internet", topics: [{ id: "comp-c3-t1", title: "Safety", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "comp-c4", title: "Intro to AI", topics: [{ id: "comp-c4-t1", title: "Digital Assistants", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "social-studies",
    title: "Social Studies",
    chapters: [
      { id: "soc-c1", title: "Geography of India", topics: [{ id: "soc-c1-t1", title: "The Great Himalayas", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "soc-c2", title: "States and Capitals", topics: [{ id: "soc-c2-t1", title: "Civics", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  },
  {
    id: "kannada",
    title: "ಕನ್ನಡ (ಸಿರಿ ಕನ್ನಡ)",
    chapters: [
      { id: "kn-c1", title: "ಕನ್ನಡ ತಾಯಿ", topics: [{ id: "kn-c1-t1", title: "ವರ್ಣಮಾಲೆ", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] },
      { id: "kn-c2", title: "ನಾಗರಹಾವೆ", topics: [{ id: "kn-c2-t1", title: "ಕವಿತೆ", subtopics: [], activities: [], quiz: [], learningOutcomes: [] }] }
    ]
  }
];
