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
            id: "sci-c1-t1",
            title: "Photosynthesis",
            subtopics: ["Chlorophyll", "Stomata", "Sunlight requirement"],
            activities: [
              { level: 'low', title: "Leaf Collector", description: "Find a green leaf and a non-green leaf. What is the difference?", skill: "performing" },
              { level: 'mid', title: "Starch Test", description: "Put iodine on a potato (with parent). Why did it turn blue?", skill: "performing" },
              { level: 'high', title: "Oxygen Expert", description: "Explain why plants are called 'Earth's Lungs'.", skill: "speaking" }
            ],
            virtualLab: {
              title: "Photosynthesis Simulator",
              simulation: "A plant where you control Sunlight, Water, and CO2.",
              task: "Make the plant grow by finding the perfect balance."
            },
            learningOutcomes: ["Understand how plants make food", "Identify parts of a leaf"],
            crossCurricularLink: "EVS: The Giving Tree - Our dependence on plants."
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
        title: "Geography of India",
        topics: [
          {
            id: "soc-c1-t1",
            title: "Northern Mountains",
            subtopics: ["Himalayas", "States in the north", "Climate"],
            activities: [
              { level: 'low', title: "Mountain Modeler", description: "Use clay to make a mountain range.", skill: "performing" },
              { level: 'mid', title: "Climate Reporter", description: "Record a weather report for Kashmir.", skill: "speaking" },
              { level: 'high', title: "Trek Planner", description: "Write down 5 things you'd pack for a Himalayan trek.", skill: "writing" }
            ],
            virtualLab: {
              title: "India Map Lab",
              simulation: "A satellite view map where you click on landmarks.",
              task: "Find the 3 highest peaks of India."
            },
            learningOutcomes: ["Identify physical features of India", "Understand regional climates"],
            crossCurricularLink: "EVS: Going to School - Challenging terrains."
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
            id: "hi-c1-t1",
            title: "Cloud Poetry",
            subtopics: ["Recitation", "Rhymes"],
            activities: [
              { level: 'low', title: "Cloud Painter", description: "Paint different types of clouds (Nimbo, Cirrus).", skill: "performing" },
              { level: 'mid', title: "Rhyme Maker", description: "Create 2 rhyming words for 'Badal'.", skill: "writing" },
              { level: 'high', title: "Cloud Story", description: "Tell me a story about a cloud that never rained.", skill: "speaking" }
            ],
            learningOutcomes: ["Recite Hindi poetry with expression", "Identify metaphors in clouds"],
            crossCurricularLink: "Science: The Water Cycle."
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
        title: "Kannada Taayi",
        topics: [
          {
            id: "kn-c1-t1",
            title: "Akshara Maley",
            subtopics: ["Vowels", "Consonants"],
            activities: [
              { level: 'low', title: "Letter Match", description: "Find Kannada letters in a newspaper.", skill: "performing" },
              { level: 'mid', title: "Word Weaver", description: "Write 5 two-letter words in Kannada.", skill: "writing" },
              { level: 'high', title: "Spoken Kannada", description: "Introduce yourself in 3 sentences of Kannada.", skill: "speaking" }
            ],
            learningOutcomes: ["Identify Kannada alphabets", "Form basic words in Kannada"],
            crossCurricularLink: "Social Studies: Regional languages of India."
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
        title: "Input and Output Devices",
        topics: [
          {
            id: "comp-c1-t1",
            title: "Identifying Hardware",
            subtopics: ["Keyboard", "Mouse", "Printer", "Monitor"],
            activities: [
              { level: 'low', title: "Hardware Hunt", description: "Find 3 computer parts in your home/school.", skill: "performing" },
              { level: 'mid', title: "Typing Pro", description: "Type your name 5 times in MS Word.", skill: "writing" },
              { level: 'high', title: "System Architect", description: "Explain how a mouse command reaches the CPU.", skill: "speaking" }
            ],
            virtualLab: {
              title: "PC Builder Lab",
              simulation: "Drag and drop hardware into a virtual CPU case.",
              task: "Connect the Monitor and Keyboard correctly."
            },
            learningOutcomes: ["Identify I/O devices", "Understand basic PC architecture"],
            crossCurricularLink: "Science: Living vs Non-living (Robots)."
          }
        ]
      }
    ]
  }
];
