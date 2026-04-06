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
              { level: 'low', title: "Pattern Spotter", description: "Look at your kitchen tiles or walls. Draw 1 pattern you see.", skill: "performing" },
              { level: 'mid', title: "Jaali Weaver", description: "Using paper strips, weave a simple checkerboard pattern.", skill: "performing" },
              { level: 'high', title: "Brick Architect", description: "Design a wall with a unique 'Eye' pattern and describe it.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Digital Brick Builder",
              simulation: "A 2D grid where you can place colored bricks.",
              task: "Construct a wall with exactly 5 Jaali holes in a row."
            }
          },
          { 
            id: "math-c1-t2", 
            title: "Brick Dimensions", 
            subtopics: ["Length, width, height", "Drawing a brick"],
            activities: [
              { level: 'low', title: "Dimension Detective", description: "Point to the longest side of a matchbox.", skill: "listening" },
              { level: 'mid', title: "Master Measurer", description: "Estimate how many matchboxes fit in your hand.", skill: "performing" },
              { level: 'high', title: "Volume Explorer", description: "If a brick is twice as big, how much heavier would it be? Tell me why.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Volume Slider Lab",
              simulation: "Adjust sliders to change brick size (L, W, H).",
              task: "Make a brick that has a length of 20 and a height of 5."
            }
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
              { level: 'low', title: "Clock Mimic", description: "Show the time 3 o'clock using your arms as hands.", skill: "performing" },
              { level: 'mid', title: "Time Log", description: "Note down the time you brush, eat, and play today.", skill: "writing" },
              { level: 'high', title: "Schedule Master", description: "Think of a school trip. Present a 1-hour schedule for it.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Clock Face Lab",
              simulation: "A digital clock with movable hour and minute hands.",
              task: "Set the clock to 10:15 and then move it forward by 45 minutes."
            }
          }
        ]
      },
      {
        id: "math-c7",
        title: "Jugs and Mugs",
        topics: [
          { 
            id: "math-c7-t1", 
            title: "Measuring Capacity", 
            subtopics: ["Liters", "Milliliters"],
            activities: [
              { level: 'low', title: "Spoon Counter", description: "How many spoons of water fill a small cup?", skill: "performing" },
              { level: 'mid', title: "Liquid Mixologist", description: "Mix juice in a 1L bottle and mark the 500ml line.", skill: "performing" },
              { level: 'high', title: "Capacity Cook", description: "Explain to me how much water you need for a tea cup.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Measurement Lab",
              simulation: "Virtual jugs of different sizes with pouring physics.",
              task: "Fill a 2L jug exactly halfway using a 250ml cup."
            }
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
              { level: 'low', title: "Sound Matcher", description: "Identify transport sounds.", skill: "listening" },
              { level: 'mid', title: "Bridge Builder", description: "Use sticks to make a bridge.", skill: "performing" },
              { level: 'high', title: "Travel Reporter", description: "Interview a person about their school transport story.", skill: "speaking" }
            ],
            virtualLab: { title: "Bridge Simulator", simulation: "Test weights on different bridges.", task: "Build a bridge that holds 3 trucks." }
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
            subtopics: ["Social Life", "Roles in a herd"],
            activities: [
              { level: 'low', title: "Elephant Mask", description: "Make an elephant mask using a paper plate.", skill: "performing" },
              { level: 'mid', title: "Herd Storyteller", description: "Imagine you are Nandu. Write 3 lines about your day.", skill: "writing" },
              { level: 'high', title: "Social Expert", description: "Compare an elephant family to your own family. What is same?", skill: "speaking" }
            ],
            virtualLab: {
              title: "Wildlife Observer Lab",
              simulation: "A panning 360 view of an elephant herd.",
              task: "Count how many adult elephants and calves you can see."
            }
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
              { level: 'low', title: "Word Finder", description: "Find rhyming words.", skill: "listening" },
              { level: 'mid', title: "Nature Sketch", description: "Draw the morning scene from the poem.", skill: "performing" },
              { level: 'high', title: "Poet Voice", description: "Record yourself reciting with emotion.", skill: "speaking" }
            ],
            virtualLab: { title: "Rhyme Lab", simulation: "Click words to find pairs.", task: "Find 5 pairs of rhyming words." }
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
              { level: 'low', title: "Noun Hunt", description: "Find 3 nouns in your room.", skill: "performing" },
              { level: 'mid', title: "Naming Game", description: "List 5 proper nouns for cities.", skill: "writing" },
              { level: 'high', title: "Grammar Guru", description: "Teach me the difference using examples from your family.", skill: "speaking" }
            ],
            virtualLab: { title: "Noun Sorter", simulation: "Drag words into buckets.", task: "Sort 10 words into Proper or Common." }
          }
        ]
      },
      {
        id: "g-c2",
        title: "Verbs",
        topics: [
          { 
            id: "g-c2-t1", title: "Action Words", subtopics: ["Identification"],
            activities: [
              { level: 'low', title: "Dumb Charades", description: "Act out an action. Can others guess the verb?", skill: "performing" },
              { level: 'mid', title: "Verb Collector", description: "Write 10 verbs you common use in a day.", skill: "writing" },
              { level: 'high', title: "Action Story", description: "Tell a story where every sentence has a strong verb.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Verb Animator",
              simulation: "An avatar that performs actions based on verbs typed.",
              task: "Make the avatar run, jump, and wave in sequence."
            }
          }
        ]
      }
    ]
  }
];
