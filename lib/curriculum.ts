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
        id: "math-c7",
        title: "Jugs and Mugs",
        topics: [
          { 
            id: "math-c7-t1", 
            title: "Measuring Capacity", 
            subtopics: ["Liters", "Milliliters"],
            activities: [
              { level: 'low', title: "Spoon Counter", description: "How many spoons of water fill a small cup?", skill: "performing", steps: ["Take a small cup", "Fill a spoon with water", "Count until cup is full"] },
              { level: 'mid', title: "Liquid Mixologist", description: "Mix juice in a bottle and mark the half level.", skill: "performing", steps: ["Take a bottle", "Pour water exactly halfway", "Discuss why it is half"] }
            ],
            learningOutcomes: ["Understand liters and milliliters"],
            crossCurricularLink: "Science: Liquid states."
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
    id: "hindi",
    title: "हिन्दी (रिमझिम)",
    chapters: [
      {
        id: "hi-c1",
        title: "मन के भोले-भाले बादल",
        topics: [
          {
            id: "hi-c1-t1",
            title: "बादल कविता (Cloud Poetry)",
            subtopics: ["Recitation", "Rhymes"],
            activities: [
              { level: 'low', title: "सुनो और दोहराओ", description: "कविता की पहली पंक्ति को दोहराएं।", skill: "listening", steps: ["प्रोफेसर स्पार्क की आवाज़ सुनें", "शुद्ध उच्चारण करें"] },
              { level: 'high', title: "बोलना सीखें", description: "बादलों का वर्णन हिन्दी में करें।", skill: "speaking", steps: ["आकाश की ओर देखें", "हिन्दी में बोलें"] }
            ],
            learningOutcomes: ["हिन्दी वर्णमाला का सही उच्चारण"],
            crossCurricularLink: "Science: जल चक्र."
          }
        ]
      }
    ]
  },
  {
    id: "kannada",
    title: "ಕನ್ನಡ (ಸಿರಿ ಕನ್ನಡ)",
    chapters: [
      {
        id: "kn-c1",
        title: "ಕನ್ನಡ ತಾಯಿ",
        topics: [
          {
            id: "kn-c1-t1",
            title: "ವರ್ಣಮಾಲೆ (Varnamale)",
            subtopics: ["Swaragalu"],
            activities: [
              { level: 'low', title: "ಅಕ್ಷರ ಗುರುತಿಸಿ", description: "ಅಕ್ಷರಗಳನ್ನು ಪಟ್ಟಿಯಲ್ಲಿ ಹುಡುಕಿ.", skill: "listening", steps: ["ಅಕ್ಷರವನ್ನು ಕೇಳಿ", "ಅದನ್ನು ತೋರಿಸಿ"] }
            ],
            learningOutcomes: ["ಕನ್ನಡ ಅಕ್ಷರಗಳ ಅರಿವು"],
            crossCurricularLink: "Social Studies: ಕರ್ನಾಟಕ ಸಂಸ್ಕೃತಿ."
          }
        ]
      }
    ]
  }
];
