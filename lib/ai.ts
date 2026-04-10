export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // Math - Patterns
  "Jaali patterns": "Jaali is like a beautiful stone window with holes! It lets cool air and sunlight into the building while making it look like a palace. In old forts, kings used these to see outside without being seen.",
  "Jharokha patterns": "A Jharokha is a balcony that pops out from the wall. It's used to get a better view and to provide cross-ventilation. Think of it as a 3D window!",
  "Arch patterns": "Arches are curved tops over doors or windows. They aren't just pretty; they are very strong! The curve helps distribute the weight of the wall above it.",
  
  // Math - Symmetry
  "Brick Symmetry": "Symmetry means that one half of a shape is a mirror image of the other half. If you cut a brick exactly in the middle, both sides look exactly the same! This is why bricks are so good for building straight walls.",
  
  // Math - Time
  "24-Hour Clock": "Did you know there's a clock that goes all the way to 24? Instead of saying 1 PM, we say 13:00. It's used by railways and pilots so they never get confused between morning and evening!",
  "Railway Time": "Railways in India use 24-hour time. This means if a train arrives at 14:30, it actually mean 2:30 in the afternoon. It's a very smart way to stay on schedule!",
  
  // Math - Capacity
  "Liters": "A liter is how we measure big amounts of liquid, like a large bottle of water or a bucket of milk. One liter is quite a lot for a single cup!",
  "Milliliters": "Milliliters (ml) are for tiny amounts. One teaspoon holds about 5ml. We use ml for medicine or for measuring small drops of juice.",
  
  // Science - Photosynthesis
  "Making food": "Plants make their own food using sunlight, water, and air (Carbon Dioxide). This process is called Photosynthesis! Their leaves are like little solar panels and kitchens combined.",
  
  // Science - Travel
  "Different Bridges": "Bridges can be made of bamboo, cement, or even iron! Bamboo bridges are light and used in places like Assam, while big iron bridges can carry heavy trains across huge rivers.",
  "Animal Skins": "Why do zebras have stripes or tigers have spots? It's called camouflage! These patterns help them hide in the grass or trees so they can stay safe or catch their food.",

  "Length, width, height": "Every 3D object like a brick has three sides we can measure. Length is how long it is, Width is how wide, and Height is how tall it stands!",
  "Drawing a brick": "To draw a brick, we first draw a rectangle, then add lines to make it look like it's popping out! It's like turning a square into a box.",
  
  // Computers
  "Visual output": "A Monitor is like the eyes of the computer. It shows us pictures, videos, and our homework! Since it shows us things, we call it an Output Device.",
  
  // AI
  "Smart Machines": "Artificial Intelligence or AI is when a machine can 'think' and 'learn' like a human. It can recognize your face, translate languages, and even help you solve math problems!",
  
  "Pattern Recognition": "How does AI know a drawing is a cat? It looks for patterns like pointy ears and whiskers! AI is very good at finding these patterns in thousands of pictures.",
  
  // Social Studies - Himalayas
  "Landmarks": "The Himalayas are the highest mountains in the world! They have Mount Everest, which is almost 9 kilometers high. These mountains protect India from cold winds and are the source of many great rivers like the Ganga.",
  
  // Hindi
  "Recitation": "कविता 'मन के भोले-भाले बादल' में बादलों को बहुत शरारती और प्यारा बताया गया है। वे कभी झब्बर-झब्बर बालों वाले लगते हैं, तो कभी गुब्बारों जैसे गालों वाले!",
  
  // Kannada
  "Swaragalu": "ಕನ್ನಡ ವರ್ಣಮಾಲೆಯಲ್ಲಿ ೧೩ ಸ್ವರಗಳಿವೆ. ಅವುಗಳು ಅ ಇಂದ ಔ ವರೆಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಉಚ್ಚರಿಸಲ್ಪಡುವ ಅಕ್ಷರಗಳು.",
  
  // Default
  "default": "This is a fascinating part of our world! It reveals how different things work together. As we explore more, you'll see why this is such an important skill to learn!"
};

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate' | 'activity',
  topic: string,
  context?: string
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'explain') {
        let explanation = KNOWLEDGE_BASE[context || ""] || KNOWLEDGE_BASE[topic] || KNOWLEDGE_BASE["default"];
        
        // Dynamic handling for generic Intro/Core subtopics
        if (context === 'Introduction') {
          explanation = `Welcome to our lesson on ${topic}! This is where we learn why this topic is so useful. Whether it's for building things or understanding nature, ${topic} is all around us!`;
        } else if (context === 'Core Concepts') {
          explanation = `In this part of ${topic}, we look at the most important ideas. These are the building blocks that will help you master the whole subject!`;
        }
        
        resolve(explanation);
      } else if (promptType === 'quiz') {
        resolve(`Ready for a challenge? Can you tell me one thing you remember about ${topic}? I'll check if you're right!`);
      } else if (promptType === 'activity') {
        resolve(`Great! Let's start the ${topic} activity. Follow the steps on your screen, and let me know if you need any help!`);
      } else {
        resolve(`Excellent job! You're becoming an expert in ${topic}. Let's move to the next part!`);
      }
    }, 1200);
  });
};
