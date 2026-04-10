export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // MATHEMATICS
  "m1": "Imagine your house is wearing a beautiful lace dress! Bricks can be arranged in 'Jaali' patterns (with holes) to let the breeze in, or 'Jharokhas' (balconies) to see the world. It's like building with giant Lego blocks that have super-symmetry!",
  "m2": "Think of yourself as a giant! To you, 1 centimeter is like a tiny ant's step, but 1 kilometer is a long journey. Remember, it takes exactly 1,000 meters to make 1 kilometer. If you ran a 1km race, you'd be passing 1000 meter-sticks!",
  "m3": "Imagine you are the leader of a school trip with 210 students! You need to calculate how many buses you need. It's like being a detective with numbers—adding up seats and dividing the kids so everyone gets a window view!",
  "m4": "Meet the 24-Hour Clock! It's a marathon runner that doesn't stop at 12. Instead of 1 PM, it says 13:00. It's used by trains and planes so they never get their morning and evening mixed up. 2:30 PM is just 14:30 in 'Railway Time'!",
  "m6": "You are now a 'Recycle Superhero'! Just like Kiran from Patna, you buy junk and sell it for a profit. Profit is your 'Magic Grow Potion'—if you buy for ₹20 and sell for ₹25, your money just grew by ₹5!",
  "m7": "Meet the 'Liter Boss' and the '1,000 mL Soldiers'. To fill one big 1-Liter bottle, you need exactly 1,000 tiny milliliters. If one soldier is missing, the Boss isn't full! It's like building a giant tower out of 1000 tiny blocks.",
  "m9": "Imagine a giant chocolate bar! Halves are when you share it equally with one friend. Quarters are when four of you want a piece. It's like cutting a pizza into 4 'Quarter' slices so everyone is happy!",
  "m13": "You are a Farmer protecting your crops! The 'Perimeter' is the fence you build around your field. It's like measuring the belt around your waist. If your field is a square, the fence has to go all the way around all four sides!",

  // EVS
  "e1": "Imagine you're an ant crossing a puddle! A bamboo bridge is like using a single straw—it's light and wiggly. A cement bridge is like a giant elephant standing across the water—super strong and steady. Some kids even use 'Vallams' (small wooden boats) in Kerala to reach their desks!",
  "e2": "Who has ears like fans? The Elephant! Some animals have ears you can't even see, like birds who have tiny holes hidden by feathers. It's like they have secret built-in headphones!",
  "e3": "Imagine being in an Elephant Herd! The oldest female is the 'Grandma Boss' who leads everyone to water. Male elephants are like teenagers who leave the house at 15 to go on their own adventures!",
  "e11": "Welcome to the 'Valley of Flowers' in Uttarakhand! It's nature's 'Swiss Army Knife'. Some flowers are for smelling, some are for medicine, and some—like Kachnar or Sahjan—are actually yummy vegetables for dinner!",
  "e23": "Meet the weavers of Pochampalli! They turn silk threads into beautiful 'Ikkat' sarees with bright colors. It's like they are 'Code-Designers', but instead of computers, they use looms to weave patterns into cloth!",
  "e27": "Meet Chuskit! She's a 10-year-old girl in Ladakh who uses a wheelchair. Her school mission was like a 'Race Track' build—her friends and teachers built a bridge so her 'Speed Racer' wheelchair could cross the river to school!",

  // COMPUTER SCIENCE
  "c1": "The CPU is the 'Master Chef' of the computer! It's a tiny brain that tells the screen what to show. Just like a chef follows a recipe, the CPU follow codes to play your favorite games!",
  "c7": "AI is like teaching a robot puppy! You show it thousands of pictures of cats, and soon it learns to say 'Meow' whenever it sees a kitten. It's a machine that learns to 'think' by looking at patterns!",

  // HINDI / ENGLISH / KANNADA
  "h1": "बादल शरारती बच्चों की तरह हैं! वे कभी गुब्बारों जैसे गाल फुलाते हैं, तो कभी झब्बर-झब्बर बालों वाले लगते हैं। वे आसमान में इधर-उधर दौड़ते हुए बहुत ही भोले-भाले लगते हैं।",
  "en1": "Imagine the Sun is your alarm clock! The birds are singing 'Wake up!' and even the tiny bees are buzzing. It's like the whole world is throwing a party to start the day!",
  "k1": "ಕನ್ನಡ ತಾಯಿ ಎಂದರೆ ನಮಗೆಲ್ಲರಿಗೂ ಪ್ರೀತಿ. ಅವಳು ನಮಗೆ ಸುಂದರವಾದ ಭಾಷೆ ಮತ್ತು ಸಂಸ್ಕೃತಿಯನ್ನು ನೀಡಿದ್ದಾಳೆ. ಅವಳನ್ನು ಗೌರವಿಸುವುದು ನಮ್ಮೆಲ್ಲರ ಕರ್ತವ್ಯ.",

  "default": "This topic is a secret key to understanding the world! Just like a puzzle piece fits into a picture, this concept helps you see how nature and numbers work together. Ready to be a top performer?"
};

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate' | 'activity',
  topicTitle: string,
  subtopicOrId: string
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'explain') {
        // Look up by ID first, then by Subtopic/Title
        const explanation = KNOWLEDGE_BASE[subtopicOrId] || KNOWLEDGE_BASE[topicTitle] || KNOWLEDGE_BASE["default"];
        resolve(explanation);
      } else if (promptType === 'quiz') {
        resolve(`Time for a Discovery Challenge! Imagine you're on a game show. What's the most surprising thing you just learned?`);
      } else if (promptType === 'activity') {
        resolve(`Let's start the 'Learning by Doing' mission. Ready to use your inner powers?`);
      } else {
        resolve(`Spot on! You've mastered this scenario like a pro. Your class will be impressed!`);
      }
    }, 800);
  });
};
