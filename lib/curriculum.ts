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
  // ... Mathematics, Science etc previously added
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
              { level: 'low', title: "Pattern Spotter", description: "Look at your kitchen tiles or walls.", skill: "performing", steps: ["Go to kitchen", "Find patterns"] },
            ],
            learningOutcomes: ["Identify patterns"],
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
              { 
                level: 'low', 
                title: "सुनो और दोहराओ (Listen and Repeat)", 
                description: "कविता की पहली पंक्ति को ध्यान से सुनें और दोहराएं।", 
                skill: "listening", 
                steps: ["प्रोफेसर स्पार्क की आवाज़ सुनें", "शुद्ध उच्चारण के साथ बोलें", "लय और ताल का ध्यान रखें"] 
              },
              { 
                level: 'mid', 
                title: "लिखने का अभ्यास (Writing Practice)", 
                description: "अपनी नोटबुक में 'बादल' शब्द को 5 बार सुंदर लिखावट में लिखें।", 
                skill: "writing", 
                steps: ["कलम उठाएं", "साफ-साफ लिखें", "माता-पिता को दिखाएं"] 
              },
              { 
                level: 'high', 
                title: "बोलना सीखें (Speaking Skill)", 
                description: "बादलों का वर्णन 3 वाक्यों में हिन्दी में करें।", 
                skill: "speaking", 
                steps: ["आकाश की ओर देखें", "बादलों के रंग और आकार के बारे में सोचें", "हिन्दी में बोलें"] 
              }
            ],
            learningOutcomes: ["हिन्दी वर्णमाला और शब्दों का सही उच्चारण", "कविता वाचन"],
            crossCurricularLink: "Science: जल चक्र (Water Cycle)."
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
        title: "ಕನ್ನಡ ತಾಯಿ (Kannada Taayi)",
        topics: [
          {
            id: "kn-c1-t1",
            title: "ವರ್ಣಮಾಲೆ (Varnamale)",
            subtopics: ["ಸ್ವರಗಳು", "ವ್ಯಂಜನಗಳು"],
            activities: [
              { 
                level: 'low', 
                title: "ಅಕ್ಷರ ಗುರುತಿಸಿ (Identify Letters)", 
                description: "ಕನ್ನಡ ಅಕ್ಷರಗಳನ್ನು ಪಟ್ಟಿಯಲ್ಲಿ ಹುಡುಕಿ.", 
                skill: "listening", 
                steps: ["ಅಕ್ಷರವನ್ನು ಕೇಳಿ", "ಅದನ್ನು ತೋರಿಸಿ", "ಗಟ್ಟಿಯಾಗಿ ಹೇಳಿ"] 
              },
              { 
                level: 'mid', 
                title: "ಬರವಣಿಗೆ ಅಭ್ಯಾಸ (Writing)", 
                description: "ಅ ಇ ಈ ಉ ಊ - ಇವುಗಳನ್ನು ಬರೆಯಿರಿ.", 
                skill: "writing", 
                steps: ["ಪುಸ್ತಕ ತೆರೆಯಿರಿ", "ಅಕ್ಷರಗಳನ್ನು ಗಮನಿಸಿ", "ಸಾಲಾಗಿ ಬರೆಯಿರಿ"] 
              }
            ],
            learningOutcomes: ["ಕನ್ನಡ ವರ್ಣಮಾಲೆಯ ಅರಿವು", "ಶಬ್ದಗಳ ಉಚ್ಚಾರಣೆ"],
            crossCurricularLink: "Social Studies: ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ."
          }
        ]
      }
    ]
  }
  // Others subjects keep English structure
];
