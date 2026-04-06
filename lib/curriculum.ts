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
              { 
                level: 'low', 
                title: "Pattern Spotter", 
                description: "Look at your kitchen tiles or walls. Why do you think they are arranged like that?", 
                skill: "performing",
                materials: ["Observation Notebook", "Pencil"],
                steps: ["Go to the kitchen or bathroom", "Find the tile pattern", "Sketch one specific pattern you see", "Count how many times it repeats"]
              },
              { 
                level: 'mid', 
                title: "Jaali Weaver", 
                description: "Using paper strips, weave a simple checkerboard pattern and see how air passes through it.", 
                skill: "performing" ,
                materials: ["Color paper strips (2 colors)", "Glue", "Scissors"],
                steps: ["Cut 10 strips of each color", "Lay one color vertically", "Weave the second color horizontally (over and under)", "Check for holes - these are your Jaali!"]
              }
            ],
            learningOutcomes: ["Identify and reproduce geometric patterns"],
            crossCurricularLink: "EVS: Changing Times."
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
            subtopics: ["Chlorophyll", "Stomata"],
            activities: [
              { 
                level: 'low', 
                title: "Leaf Collector", 
                description: "Find a green leaf and a non-green leaf. What is the difference?", 
                skill: "performing",
                materials: ["Two different leaves", "Magnifying glass (optional)"],
                steps: ["Go to the garden", "Find a bright green leaf", "Find a leaf of another color (red/yellow/brown)", "Feel them both - which one is softer?"]
              }
            ],
            learningOutcomes: ["Understand how plants make food"],
            crossCurricularLink: "EVS: The Giving Tree."
          }
        ]
      }
    ]
  }
  // All other topics follow this enhanced structure
];
