export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // Math - Patterns
  "Jaali patterns": "Jaali is like a beautiful stone window with holes! It lets cool air and sunlight into the building while making it look like a palace. In old forts, kings used these to see outside without being seen.",
  "Jharokha patterns": "A Jharokha is a balcony that pops out from the wall. It's used to get a better view and to provide cross-ventilation. Think of it as a 3D window!",
  "Arch patterns": "Arches are curved tops over doors or windows. They aren't just pretty; they are very strong! The curve helps distribute the weight of the wall above it.",
  
  // Math - Capacity
  "Liters": "A liter is how we measure big amounts of liquid, like a large bottle of water or a bucket of milk. One liter is quite a lot for a single cup!",
  "Milliliters": "Milliliters (ml) are for tiny amounts. One teaspoon holds about 5ml. We use ml for medicine or for measuring small drops of juice.",
  
  // Science - Photosynthesis
  "Making food": "Plants make their own food using sunlight, water, and air (Carbon Dioxide). This process is called Photosynthesis! Their leaves are like little solar panels and kitchens combined.",
  
"Length, width, height": "Every 3D object like a brick has three sides we can measure. Length is how long it is, Width is how wide, and Height is how tall it stands!",
  "Drawing a brick": "To draw a brick, we first draw a rectangle, then add lines to make it look like it's popping out! It's like turning a square into a box.",
  
  // Computers
  "Visual output": "A Monitor is like the eyes of the computer. It shows us pictures, videos, and our homework! Since it shows us things, we call it an Output Device.",
  
  // Social Studies - Himalayas
  "Landmarks": "The Himalayas are the highest mountains in the world! They have Mount Everest, which is almost 9 kilometers high. These mountains protect India from cold winds and are the source of many great rivers like the Ganga.",
  
  // Hindi
  "Recitation": "कविता 'मन के भोले-भाले बादल' में बादलों को बहुत शरारती और प्यारा बताया गया है। वे कभी झब्बर-झब्बर बालों वाले लगते हैं, तो कभी गुब्बारों जैसे गालों वाले!",
  
  // Kannada
  "Swaragalu": "ಕನ್ನಡ ವರ್ಣಮಾಲೆಯಲ್ಲಿ ೧೩ ಸ್ವರಗಳಿವೆ. ಅವುಗಳು ಅ ಇಂದ ಔ ವರೆಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಉಚ್ಚರಿಸಲ್ಪಡುವ ಅಕ್ಷರಗಳು.",
  
  // Default
  "default": "That's a very interesting part of what we are learning! It helps us understand how things are connected in the real world. Would you like to know more about it?"
};

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate' | 'activity',
  topic: string,
  context?: string
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'explain') {
        const explanation = KNOWLEDGE_BASE[context || ""] || KNOWLEDGE_BASE[topic] || KNOWLEDGE_BASE["default"];
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
