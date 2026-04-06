export interface Activity {
  title: string;
  description: string;
  skill: 'listening' | 'speaking' | 'writing' | 'performing';
  level: 'low' | 'mid' | 'high';
}

export interface VirtualLab {
  title: string;
  simulation: string;
  task: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: string[];
  activities: Activity[];
  virtualLab?: VirtualLab;
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
              { level: 'low', title: "Pattern Spotter", description: "Look at your kitchen tiles or walls. Why do you think they are arranged like that?", skill: "performing" },
              { level: 'mid', title: "Jaali Weaver", description: "Using paper strips, weave a simple checkerboard pattern and see how air passes through it.", skill: "performing" },
              { level: 'high', title: "Brick Architect", description: "Design a wall with a unique 'Eye' pattern. Explain how it stays strong.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Digital Brick Builder",
              simulation: "A 2D grid where you can place colored bricks.",
              task: "Construct a wall with exactly 5 Jaali holes in a row."
            },
            learningOutcomes: ["Identify and reproduce geometric patterns", "Understand symmetry in architecture"],
            crossCurricularLink: "EVS: Changing Times - Evolution of building materials."
          },
          { 
            id: "math-c1-t2", 
            title: "Brick Dimensions", 
            subtopics: ["Length, width, height", "Drawing a brick"],
            activities: [
              { level: 'low', title: "Dimension Detective", description: "Point to the longest side of a matchbox. Why is it longer than the height?", skill: "listening" },
              { level: 'mid', title: "Master Measurer", description: "Estimate how many matchboxes fit in your hand. How close were you?", skill: "performing" },
              { level: 'high', title: "Volume Explorer", description: "If a brick is twice as big, how much heavier would it be? Tell me your reasoning.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Volume Slider Lab",
              simulation: "Adjust sliders to change brick size (L, W, H).",
              task: "Make a brick that has a length of 20 and a height of 5."
            },
            learningOutcomes: ["Measure 3D objects", "Estimate volume intuitively"],
            crossCurricularLink: "Science: Physical properties of matter."
          }
        ]
      },
      {
        id: "math-c4",
        title: "Tick-Tick-Tick",
        topics: [
          { 
            id: "math-c4-t1", 
            title: "Reading Time", 
            subtopics: ["Clock faces", "12-hour vs 24-hour"],
            activities: [
              { level: 'low', title: "Clock Mimic", description: "Show 3 o'clock with your arms. Why do we have two hands on a clock?", skill: "performing" },
              { level: 'mid', title: "Time Log", description: "Note down your daily schedule. How much time do you spend playing?", skill: "writing" },
              { level: 'high', title: "Schedule Master", description: "Create a travel plan for a 1-day trip to a park.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Clock Face Lab",
              simulation: "A digital clock with movable hands.",
              task: "Set the clock to 10:15."
            },
            learningOutcomes: ["Read and tell time", "Calculate time intervals"],
            crossCurricularLink: "EVS: Omana's Journey - Reading train timetables."
          }
        ]
      }
    ]
  },
  {
    id: "environmental-studies",
    title: "Environmental Studies (Looking Around)",
    chapters: [
      {
        id: "evs-c1",
        title: "Going to School",
        topics: [
          { 
            id: "evs-c1-t1", 
            title: "Modes of Transport", 
            subtopics: ["Bamboo Bridge", "Trolley", "Vallam"],
            activities: [
              { level: 'low', title: "Sound Matcher", description: "Identify vehicle sounds. Which one is the loudest?", skill: "listening" },
              { level: 'mid', title: "Bridge Builder", description: "Build a bridge with sticks. Why do some bridges have arches?", skill: "performing" },
              { level: 'high', title: "Travel Reporter", description: "Describe a difficult journey you imagine. How would you overcome it?", skill: "speaking" }
            ],
            learningOutcomes: ["Identify diverse transport modes", "Understand geographical challenges"],
            crossCurricularLink: "Social Studies: Geographical regions of India."
          }
        ]
      },
      {
        id: "evs-c3",
        title: "A Day with Nandu",
        topics: [
          { 
            id: "evs-c3-t1", 
            title: "Elephant Herds", 
            subtopics: ["Social Life", "Roles"],
            activities: [
              { level: 'low', title: "Elephant Mask", description: "Create a trunk. How do elephants use it?", skill: "performing" },
              { level: 'mid', title: "Herd Storyteller", description: "Write about a group of animals living together.", skill: "writing" },
              { level: 'high', title: "Social Expert", description: "Why do animals live in herds? Discuss the benefits.", skill: "speaking" }
            ],
            learningOutcomes: ["Understand animal behavior", "Identify social structures in nature"],
            crossCurricularLink: "English: The Giving Tree - Nature and social bonds."
          }
        ]
      }
    ]
  },
  {
    id: "english",
    title: "English (Marigold)",
    chapters: [
      {
        id: "eng-c1",
        title: "Wake Up!",
        topics: [
          { 
            id: "eng-c1-t1", title: "Wake Up! (Poem)", subtopics: ["Recitation", "Rhymes"],
            activities: [
              { level: 'low', title: "Word Finder", description: "Find rhyming words. Why do poems rhyme?", skill: "listening" },
              { level: 'high', title: "Poet Voice", description: "Recite with emotion. How does the poem make you feel?", skill: "speaking" }
            ],
            learningOutcomes: ["Recite poems with rhythm", "Identify rhyming patterns"],
            crossCurricularLink: "EVS: A Busy Month - Birds waking up in the morning."
          }
        ]
      }
    ]
  },
  {
    id: "grammar",
    title: "Grammar & Communication",
    chapters: [
      {
        id: "g-c1",
        title: "Nouns",
        topics: [
          { 
            id: "g-c1-t1", title: "Proper & Common", subtopics: ["Categorization"],
            activities: [
              { level: 'low', title: "Noun Hunt", description: "Find 3 nouns. Why is your name a 'Proper' noun?", skill: "performing" },
              { level: 'mid', title: "Naming Game", description: "List proper nouns for your favorite places.", skill: "writing" }
            ],
            learningOutcomes: ["Classify nouns", "Use capitalization correctly"],
            crossCurricularLink: "Math: Smart Charts - Categorizing data names."
          }
        ]
      }
    ]
  }
];
