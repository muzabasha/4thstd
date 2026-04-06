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
              { level: 'low', title: "Pattern Spotter", description: "Look at your kitchen tiles or walls. Why do you think they are arranged like that?", skill: "performing", materials: ["Observation Notebook", "Pencil"], steps: ["Go to the kitchen or bathroom", "Find the tile pattern", "Sketch one specific pattern you see", "Count how many times it repeats"] },
              { level: 'mid', title: "Jaali Weaver", description: "Using paper strips, weave a simple checkerboard pattern and see how air passes through it.", skill: "performing" , materials: ["Color paper strips (2 colors)", "Glue", "Scissors"], steps: ["Cut 10 strips of each color", "Lay one color vertically", "Weave the second color horizontally (over and under)", "Check for holes - these are your Jaali!"] },
              { level: 'high', title: "Brick Architect", description: "Design a wall with a unique 'Eye' pattern. Explain how it stays strong.", skill: "speaking" , steps: ["Sketch a brick wall with 3 different patterns", "Explain to your tutor how the patterns look", "Discuss which one is strongest"] }
            ],
            virtualLab: { title: "Digital Brick Builder", simulation: "A 2D grid where you can place colored bricks.", task: "Construct a wall with exactly 5 Jaali holes in a row." },
            learningOutcomes: ["Identify and reproduce geometric patterns"],
            crossCurricularLink: "Social Studies: Taj Mahal's architecture."
          },
          { 
            id: "math-c1-t2", 
            title: "Brick Dimensions", 
            subtopics: ["Length, width, height", "Drawing a brick"],
            activities: [
              { level: 'low', title: "Dimension Detective", description: "Point to the longest side of a matchbox. Why is it longer than the height?", skill: "listening" , steps: ["Find a matchbox", "Measure length, width and height with your finger", "Point to the longest edge"] },
              { level: 'mid', title: "Master Measurer", description: "Estimate how many matchboxes fit in your hand. How close were you?", skill: "performing" , steps: ["Take 3 matchboxes", "Hold them in your hand", "Try to see if a 4th can fit", "Describe the shape they make"] },
              { level: 'high', title: "Volume Explorer", description: "If a brick is twice as big, how much heavier would it be? Tell me your reasoning.", skill: "speaking" , steps: ["Imagine a small and big brick", "Discuss weight difference with professor spark", "Explain your reasoning through voice"] }
            ],
            virtualLab: { title: "Volume Slider Lab", simulation: "Adjust sliders to change brick size (L, W, H).", task: "Make a brick that has a length of 20 and a height of 5." },
            learningOutcomes: ["Measure 3D objects", "Estimate volume intuitively"],
            crossCurricularLink: "Science: Physical properties of matter."
          }
        ]
      },
      {
        id: "math-c2",
        title: "Long and Short",
        topics: [
          { 
            id: "math-c2-t1", title: "Units of Measurement", subtopics: ["cm, m, km"],
            activities: [
              { level: 'low', title: "Ruler Fun", description: "Measure your pencil.", skill: "performing" , steps: ["Find a 15cm ruler", "Align 0 to the tip of pencil", "Record length"] },
              { level: 'mid', title: "Metre Walk", description: "Estimate 1 metre distance.", skill: "performing" , steps: ["Take one long step", "Measure it with a tape", "Check if it was 1 metre"] }
            ],
            learningOutcomes: ["Differentiate units of length"]
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
             subtopics: ["Clock Mapping"],
             activities: [
               { level: 'low', title: "Clock Mimic", description: "Show 3 o'clock with your arms.", skill: "performing", steps: ["Stand up", "Left arm at 12", "Right arm at 3"] }
             ],
             virtualLab: { title: "Clock Face Lab", simulation: "Move digital hands", task: "Set time to 10:30" },
             learningOutcomes: ["Tell time accurately"]
           }
         ]
      }
    ]
  },
  {
    id: "science",
    title: "General Science",
    chapters: [
      {
        id: "sci-c1",
        title: "Plant Life",
        topics: [
          { 
            id: "sci-c1-t1", title: "Photosynthesis", subtopics: ["Making food"],
            activities: [
               { level: 'low', title: "Leaf Search", description: "Find a green leaf.", skill: "performing", steps: ["Go to garden", "Pickup a fallen leaf", "Look at the tiny pores"] }
            ],
            virtualLab: { title: "Light Lab", simulation: "Change leaf color with light", task: "Keep plant in dark for 2 days" },
            learningOutcomes: ["Identify how plants breathe"],
            crossCurricularLink: "Social Studies: Food crops in India."
          }
        ]
      },
      {
        id: "sci-c2",
        title: "Teeth and Digestion",
        topics: [
          { 
            id: "sci-c2-t1", title: "Types of Teeth", subtopics: ["Incisors, Canines"],
            activities: [
               { level: 'low', title: "Mirror Mirror", description: "Count your teeth.", skill: "performing" , steps: ["Stand before mirror", "Count front teeth", "Count pointy teeth"] }
            ],
            learningOutcomes: ["Categorize teeth type"]
          }
        ]
      }
    ]
  },
  {
    id: "social-studies",
    title: "Social Studies",
    chapters: [
      {
        id: "soc-c1",
        title: "Northern India",
        topics: [
          { 
            id: "soc-c1-t1", title: "The Great Himalayas", subtopics: ["Landmarks"],
            activities: [
               { level: 'low', title: "Paper Mountain", description: "Fold paper to make peaks.", skill: "performing", steps: ["Fold A4 paper into cone", "Mark 'snow' on top", "Label Everest"] }
            ],
            virtualLab: { title: "India Map Lab", simulation: "Satellite clickable map", task: "Find Everest on the map" },
            learningOutcomes: ["Locate landmarks on map"],
            crossCurricularLink: "Math: Calculating height of mountains."
          }
        ]
      }
    ]
  },
  {
    id: "hindi",
    title: "Hindi (Rimjhim)",
    chapters: [
      {
        id: "hi-c1",
        title: "Man Ke Bhole Bhale Badal",
        topics: [
          { 
            id: "hi-c1-t1", title: "Cloud Rhythm", subtopics: ["Recitation"],
            activities: [
               { level: 'low', title: "Listen and Repeat", description: "Repeat the first stanza.", skill: "listening", steps: ["Listen to tutor", "Speak slowly", "Clap on rhymes"] }
            ],
            learningOutcomes: ["Pronounce basic Hindi words"]
          }
        ]
      }
    ]
  },
  {
    id: "kannada",
    title: "Kannada (Siri Kannada)",
    chapters: [
      {
        id: "kn-c1",
        title: "Varnamale",
        topics: [
          { 
            id: "kn-c1-t1", title: "Kannada Alphabets", subtopics: ["Swaragalu"],
            activities: [
               { level: 'low', title: "Air Writing", description: "Write 'Aa' in the air.", skill: "performing", steps: ["Follow tutor's hand", "Draw big arcs", "Say the sound"] }
            ],
            learningOutcomes: ["Recognize Kannada vowels"]
          }
        ]
      }
    ]
  },
  {
    id: "computers",
    title: "Computer Science",
    chapters: [
      {
        id: "comp-c1",
        title: "PC Components",
        topics: [
          { 
            id: "comp-c1-t1", title: "The Monitor", subtopics: ["Visual output"],
            activities: [
               { level: 'low', title: "Parts Label", description: "Identify screen and buttons.", skill: "performing", steps: ["Point to power button", "Point to the screen", "Discuss what we see"] }
            ],
            virtualLab: { title: "PC Builder Lab", simulation: "Assemble PC logic", task: "Connect monitor to CPU" },
            learningOutcomes: ["Identify Monitor as O/P device"]
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
           { id: "eng-c1-t1", title: "Morning Scene", subtopics: ["Imagery"], activities: [{ level: 'low', title: "Sketch it", description: "Draw bird singing", skill: "performing", steps: ["Draw a sun", "Draw a bird", "Add notes"] }], learningOutcomes: ["Interpreting text into art"] }
        ]
      }
    ]
  },
  {
    id: "grammar",
    title: "Grammar Tools",
    chapters: [
      {
        id: "g-c1",
        title: "Punctuation",
        topics: [
           { id: "g-c1-t1", title: "Capital Letters", subtopics: ["Usage"], activities: [{ level: 'low', title: "Rule Book", description: "Capitalize your name.", skill: "writing", steps: ["Write name in smalls", "Correct first letter", "Discuss why"] }], learningOutcomes: ["Apply basic grammar rules"] }
        ]
      }
    ]
  }
];
