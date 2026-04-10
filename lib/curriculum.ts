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

const emptyTopic = (id: string, title: string, customQuiz?: QuizQuestion[]): Topic => ({
  id, title, subtopics: ["Introduction", "Core Concepts", "Summary"],
  activities: [
    { title: "Discussion", description: "Talk about this topic with Spark.", skill: "speaking", level: "low", steps: ["Listen to explanation", "Ask a question"] }
  ], 
  quiz: customQuiz || [
    { question: `What is the most important thing about ${title}?`, options: ["Option A", "Option B", "Option C", "Option D"], correctAnswer: "Option A" }
  ], 
  learningOutcomes: ["General understanding of " + title]
});

export const syllabus: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics (Math-Magic)",
    chapters: [
      { 
        id: "m1", title: "1. Building with Bricks", 
        topics: [
          {
            id: "m1-t1", title: "Patterns & Symmetry",
            subtopics: ["Jaali patterns", "Mirror halves", "Brick dimensions"],
            activities: [{ title: "Wall Designer", description: "Draw a wall.", skill: "performing", level: "mid", steps: ["Sketch", "Repeat"] }],
            quiz: [
              { question: "How many faces does a brick have?", options: ["4", "6", "8", "12"], correctAnswer: "6" },
              { question: "What is a 'Jaali'?", options: ["A solid wall", "A decorative hole", "A window frame", "A door"], correctAnswer: "A decorative hole" }
            ],
            learningOutcomes: ["Identify patterns"],
            virtualLab: { title: "Brick Builder", simulation: "Place bricks on a grid", task: "Make a 3x3 wall" }
          }
        ] 
      },
      { id: "m2", title: "2. Long and Short", topics: [emptyTopic("m2-t1", "Measuring Distance", [{ question: "1 km is how many meters?", options: ["100", "500", "1000", "2000"], correctAnswer: "1000" }])] },
      { id: "m3", title: "3. A Trip to Bhopal", topics: [emptyTopic("m3-t1", "Number Operations")] },
      { id: "m4", title: "4. Tick-Tick-Tick", topics: [emptyTopic("m4-t1", "Time and Calendar", [{ question: "How many hours in a day?", options: ["12", "24", "48", "60"], correctAnswer: "24" }])] },
      { id: "m5", title: "5. The Way The World Looks", topics: [emptyTopic("m5-t1", "Perspective Drawing")] },
      { id: "m6", title: "6. The Junk Seller", topics: [emptyTopic("m6-t1", "Money and Profit")] },
      { id: "m7", title: "7. Jugs and Mugs", topics: [emptyTopic("m7-t1", "Capacity and Volume", [{ question: "1 liter is how many ml?", options: ["10", "100", "1000", "10000"], correctAnswer: "1000" }])] },
      { id: "m8", title: "8. Carts and Wheels", topics: [emptyTopic("m8-t1", "Circles and Shapes")] },
      { id: "m9", title: "9. Halves and Quarters", topics: [emptyTopic("m9-t1", "Basic Fractions")] },
      { id: "m10", title: "10. Play with Patterns", topics: [emptyTopic("m10-t1", "Sequences")] },
      { id: "m11", title: "11. Tables and Shares", topics: [emptyTopic("m11-t1", "Multiplication & Division")] },
      { id: "m12", title: "12. How Heavy? How Light?", topics: [emptyTopic("m12-t1", "Weight and Mass")] },
      { id: "m13", title: "13. Fields and Fences", topics: [emptyTopic("m13-t1", "Area and Perimeter")] },
      { id: "m14", title: "14. Smart Charts", topics: [emptyTopic("m14-t1", "Handling Data")] }
    ]
  },
  {
    id: "science",
    title: "EVS (Looking Around)",
    chapters: [
      { id: "e1", title: "1. Going to School", topics: [emptyTopic("e1-t1", "Transport", [{ question: "Which bridge is made of bamboo?", options: ["Cement", "Bamboo", "Iron", "Bricks"], correctAnswer: "Bamboo" }])] },
      { id: "e2", title: "2. Ear to Ear", topics: [emptyTopic("e2-t1", "Animals", [{ question: "Which animal has ears like fans?", options: ["Rabbit", "Elephant", "Dog", "Cat"], correctAnswer: "Elephant" }])] },
      { id: "e3", title: "3. A Day with Nandu", topics: [emptyTopic("e3-t1", "Elephants", [{ question: "Who is the leader of an elephant herd?", options: ["Youngest", "Oldest male", "Oldest female", "Strongest"], correctAnswer: "Oldest female" }])] },
      { id: "e4", title: "4. The Story of Amrita", topics: [emptyTopic("e4-t1", "Conservation")] },
      { id: "e5", title: "5. Anita and the Honeybees", topics: [emptyTopic("e5-t1", "Insects", [{ question: "Every beehive has one ___ bee.", options: ["King", "Prince", "Queen", "Soldier"], correctAnswer: "Queen" }])] },
      { id: "e11", title: "11. The Valley of Flowers", topics: [emptyTopic("e11-t1", "Botany", [{ question: "Which state is famous for the Valley of Flowers?", options: ["Kerala", "Uttarakhand", "Punjab", "Bihar"], correctAnswer: "Uttarakhand" }])] },
      { id: "e27", title: "27. Chuskit Goes to School", topics: [emptyTopic("e27-t1", "Inclusion")] }
    ]
  },
  {
    id: "hindi",
    title: "हिन्दी (रिमझिम)",
    chapters: [
      { id: "h1", title: "1. मन के भोले-भाले बादल", topics: [emptyTopic("h1-t1", "कविता", [{ question: "बादल कैसे हैं?", options: ["गुस्सैल", "भोले-भाले", "कठोर", "छोटे"], correctAnswer: "भोಲೆ-भाले" }])] }
    ]
  },
  {
    id: "english",
    title: "English (Marigold)",
    chapters: [
      { id: "en1", title: "Unit 1: Wake Up!", topics: [emptyTopic("en1-t1", "Poem", [{ question: "Who says 'Buzz-buzz' in the poem?", options: ["Birds", "Bees", "Dogs", "Cats"], correctAnswer: "Bees" }])] }
    ]
  },
  {
    id: "computers",
    title: "Computer Science",
    chapters: [
      { id: "c1", title: "1. Hardware & Components", topics: [emptyTopic("c1-t1", "CPU & Memory", [{ question: "Which part is the brain of the computer?", options: ["Mouse", "Keyboard", "CPU", "Monitor"], correctAnswer: "CPU" }])] },
      { id: "c7", title: "7. AI for Kids", topics: [emptyTopic("c7-t1", "What is AI?", [{ question: "AI can help a machine ____ like a human.", options: ["Sleep", "Think", "Eat", "Grow"], correctAnswer: "Think" }])] }
    ]
  },
  {
    id: "kannada",
    title: "ಕನ್ನಡ (ಸಿರಿ ಕನ್ನಡ)",
    chapters: [
      { id: "k1", title: "೧. ಕನ್ನಡ ತಾಯಿ", topics: [emptyTopic("k1-t1", "ಕವಿತೆ", [{ question: "ಕನ್ನಡ ವರ್ಣಮಾಲೆಯಲ್ಲಿ ಎಷ್ಟು ಸ್ವರಗಳಿವೆ?", options: ["೧೦", "೧೩", "೧೫", "೨೦"], correctAnswer: "೧೩" }])] }
    ]
  }
];
