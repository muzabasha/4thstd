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

const emptyTopic = (id: string, title: string): Topic => ({
  id, title, subtopics: ["Introduction", "Core Concepts", "Summary"],
  activities: [], quiz: [], learningOutcomes: []
});

export const syllabus: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics (Math-Magic)",
    chapters: [
      { id: "m1", title: "1. Building with Bricks", topics: [emptyTopic("m1-t1", "Bricks Patterns")] },
      { id: "m2", title: "2. Long and Short", topics: [emptyTopic("m2-t1", "Measuring Distance")] },
      { id: "m3", title: "3. A Trip to Bhopal", topics: [emptyTopic("m3-t1", "Number Operations")] },
      { id: "m4", title: "4. Tick-Tick-Tick", topics: [emptyTopic("m4-t1", "Time and Calendar")] },
      { id: "m5", title: "5. The Way The World Looks", topics: [emptyTopic("m5-t1", "Perspective Drawing")] },
      { id: "m6", title: "6. The Junk Seller", topics: [emptyTopic("m6-t1", "Money and Profit")] },
      { id: "m7", title: "7. Jugs and Mugs", topics: [emptyTopic("m7-t1", "Capacity and Volume")] },
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
      { id: "e1", title: "1. Going to School", topics: [emptyTopic("e1-t1", "Transport")] },
      { id: "e2", title: "2. Ear to Ear", topics: [emptyTopic("e2-t1", "Animals")] },
      { id: "e3", title: "3. A Day with Nandu", topics: [emptyTopic("e3-t1", "Elephants")] },
      { id: "e4", title: "4. The Story of Amrita", topics: [emptyTopic("e4-t1", "Conservation")] },
      { id: "e5", title: "5. Anita and the Honeybees", topics: [emptyTopic("e5-t1", "Insects")] },
      { id: "e6", title: "6. Omana’s Journey", topics: [emptyTopic("e6-t1", "Train Travel")] },
      { id: "e7", title: "7. From the Window", topics: [emptyTopic("e7-t1", "Nature View")] },
      { id: "e8", title: "8. Reaching Grandmother’s House", topics: [emptyTopic("e8-t1", "Travel End")] },
      { id: "e9", title: "9. Changing Families", topics: [emptyTopic("e9-t1", "Social Structure")] },
      { id: "e10", title: "10. Hu Tu Tu, Hu Tu Tu", topics: [emptyTopic("e10-t1", "Games")] },
      { id: "e11", title: "11. The Valley of Flowers", topics: [emptyTopic("e11-t1", "Botany")] },
      { id: "e12", title: "12. Changing Times", topics: [emptyTopic("e12-t1", "History")] },
      { id: "e13", title: "13. A River’s Tale", topics: [emptyTopic("e13-t1", "Water pollution")] },
      { id: "e14", title: "14. Basva’s Farm", topics: [emptyTopic("e14-t1", "Farming")] },
      { id: "e15", title: "15. From Market to Home", topics: [emptyTopic("e15-t1", "Vegetables")] },
      { id: "e16", title: "16. A Busy Month", topics: [emptyTopic("e16-t1", "Birds")] },
      { id: "e17", title: "17. Nandita in Mumbai", topics: [emptyTopic("e17-t1", "City Life")] },
      { id: "e18", title: "18. Water", topics: [emptyTopic("e18-t1", "Cleanliness")] },
      { id: "e19", title: "19. Abdul in the Garden", topics: [emptyTopic("e19-t1", "Roots")] },
      { id: "e20", title: "20. Eat Together", topics: [emptyTopic("e20-t1", "Community Eating")] },
      { id: "e21", title: "21. Food and Fun", topics: [emptyTopic("e21-t1", "Cooking")] },
      { id: "e22", title: "22. The World in my Home", topics: [emptyTopic("e22-t1", "Family Values")] },
      { id: "e23", title: "23. Pochampalli", topics: [emptyTopic("e23-t1", "Weaving")] },
      { id: "e24", title: "24. Food", topics: [emptyTopic("e24-t1", "Agriculture")] },
      { id: "e25", title: "25. Spicy Riddles", topics: [emptyTopic("e25-t1", "Spices")] },
      { id: "e26", title: "26. Defence Officer: Wahida", topics: [emptyTopic("e26-t1", "Biography")] },
      { id: "e27", title: "27. Chuskit Goes to School", topics: [emptyTopic("e27-t1", "Inclusion")] }
    ]
  },
  {
    id: "hindi",
    title: "हिन्दी (रिमझिम)",
    chapters: [
      { id: "h1", title: "1. मन के भोले-भाले बादल", topics: [emptyTopic("h1-t1", "कविता")] },
      { id: "h2", title: "2. जैसा सवाल वैसा जवाब", topics: [emptyTopic("h2-t2", "कहानी")] },
      { id: "h3", title: "3. किरमिच की गेंद", topics: [emptyTopic("h3-t1", "खेल")] },
      { id: "h4", title: "4. पापा जब बच्चे थे", topics: [emptyTopic("h4-t1", "संस्मरण")] },
      { id: "h5", title: "5. दोस्त की पोशाक", topics: [emptyTopic("h5-t1", "मैत्री")] },
      { id: "h6", title: "6. नाव बनाओ", topics: [emptyTopic("h6-t1", "रचनात्मकता")] },
      { id: "h7", title: "7. दान का हिसाब", topics: [emptyTopic("h7-t1", "नैतिकता")] },
      { id: "h8", title: "8. कौन?", topics: [emptyTopic("h8-t1", "पहेली")] },
      { id: "h9", title: "9. स्वतंत्रता की ओर", topics: [emptyTopic("h9-t1", "इतिहास")] },
      { id: "h10", title: "10. थप्प रोटी थप्प दाल", topics: [emptyTopic("h10-t1", "नाटक")] },
      { id: "h11", title: "11. पढ़क्कू की सूझ", topics: [emptyTopic("h11-t1", "कविता")] },
      { id: "h12", title: "12. सुनीता की पहिया कुर्सी", topics: [emptyTopic("h12-t1", "प्रेरणा")] },
      { id: "h13", title: "13. हुदहुद", topics: [emptyTopic("h13-t1", "पक्षी")] },
      { id: "h14", title: "14. मुफ्त ही मुफ्त", topics: [emptyTopic("h14-t1", "लोककथा")] }
    ]
  },
  {
    id: "english",
    title: "English (Marigold)",
    chapters: [
      { id: "en1", title: "Unit 1: Wake Up!", topics: [emptyTopic("en1-t1", "Poem Recitation")] },
      { id: "en2", title: "Unit 2: Neha's Alarm Clock", topics: [emptyTopic("en2-t1", "Morning Routine")] },
      { id: "en3", title: "Unit 3: Nasruddin's Aim", topics: [emptyTopic("en3-t1", "Humor Story")] },
      { id: "en4", title: "Unit 4: Alice in Wonderland", topics: [emptyTopic("en4-t1", "Fantasy Reading")] },
      { id: "en5", title: "Unit 5: Helen Keller", topics: [emptyTopic("en5-t1", "Inspiring Story")] },
      { id: "en6", title: "Unit 6: The Milkman's Cow", topics: [emptyTopic("en6-t1", "Fun Story")] },
      { id: "en7", title: "Unit 7: The Giving Tree", topics: [emptyTopic("en7-t1", "Moral Values")] },
      { id: "en8", title: "Unit 8: Going to Buy a Book", topics: [emptyTopic("en8-t1", "Interest in Books")] },
      { id: "en9", title: "Unit 9: Pinocchio", topics: [emptyTopic("en9-t1", "Classic Tale")] }
    ]
  },
  {
    id: "computers",
    title: "Computer Science",
    chapters: [
      { id: "c1", title: "1. Hardware & Components", topics: [emptyTopic("c1-t1", "CPU & Memory")] },
      { id: "c2", title: "2. Operating Systems", topics: [emptyTopic("c2-t1", "Windows Basics")] },
      { id: "c3", title: "3. MS Word Mastery", topics: [emptyTopic("c3-t1", "Advanced Formatting")] },
      { id: "c4", title: "4. Powerpoint Fun", topics: [emptyTopic("c4-t1", "Creating Slides")] },
      { id: "c5", title: "5. Internet Safety", topics: [emptyTopic("c5-t1", "Cyber Security")] },
      { id: "c6", title: "6. Coding Basics", topics: [emptyTopic("c6-t1", "Intro to Scratch")] },
      { id: "c7", title: "7. AI for Kids", topics: [emptyTopic("c7-t1", "What is AI?")] }
    ]
  },
  {
    id: "kannada",
    title: "ಕನ್ನಡ (ಸಿರಿ ಕನ್ನಡ)",
    chapters: [
      { id: "k1", title: "೧. ಕನ್ನಡ ತಾಯಿ", topics: [emptyTopic("k1-t1", "ಕವಿತೆ")] },
      { id: "k2", title: "೨. ಬುದ್ಧಿವಂತ ರಾಮ", topics: [emptyTopic("k2-t1", "ಕಥೆ")] },
      { id: "k3", title: "೩. ನಾಗರಹಾವೆ", topics: [emptyTopic("k3-t1", "ಪದ್ಯ")] },
      { id: "k4", title: "೪. ಪರಿಸರ ರಕ್ಷಣೆ", topics: [emptyTopic("k4-t1", "ಜಾಗೃತಿ")] }
    ]
  }
];
