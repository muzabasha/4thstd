export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // MATH - Math-Magic
  "m1": "Imagine your house is wearing a beautiful lace dress! Bricks can be arranged in 'Jaali' patterns (with holes) to let the breeze in, or 'Jharokhas' (balconies) to see the world. It's like building with giant Lego blocks that have super-symmetry!",
  "m2": "Think of yourself as a giant! To you, 1 centimeter is like a tiny ant's step, but 1 kilometer is a long journey. Remember, it takes exactly 1,000 meters to make 1 kilometer. If you ran a 1km race, you'd be passing 1000 meter-sticks!",
  "m3": "Imagine you are the leader of a school trip with 210 students! You need to calculate how many buses you need. It's like being a detective with numbers—adding up seats and dividing the kids so everyone gets a window view!",
  "m4": "Meet the 24-Hour Clock! It's a marathon runner that doesn't stop at 12. Instead of 1 PM, it says 13:00. It's used by trains and planes so they never get their morning and evening mixed up. 2:30 PM is just 14:30 in 'Railway Time'!",
  "m6": "You are now a 'Recycle Superhero'! Just like Kiran from Patna, you buy junk and sell it for a profit. Profit is your 'Magic Grow Potion'—if you buy for ₹20 and sell for ₹25, your money just grew by ₹5!",
  "m7": "Meet the 'Liter Boss' and the '1,000 mL Soldiers'. To fill one big 1-Liter bottle, you need exactly 1,000 tiny milliliters. If one soldier is missing, the Boss isn't full! It's like building a giant tower out of 1000 tiny blocks.",
  "m8": "You are the 'Pizza Party Architect'! To make the perfect round pizza, you need a string (Radius) tied to the center. If the string is the same length everywhere, your pizza will be a perfect circle. Two radii joined together make a 'Diameter'—the main road through the pizza!",
  "m12": "To a Flying Carpet, weight is everything! One kilogram of iron and one kilogram of feathers might look different, but to the carpet, they feel like the same 'Earth Hug.' Remember: 1000 grams = 1 kilogram. Don't carry more than the carpet can handle!",
  "m14": "You are an 'Ice Cream Detective'! Instead of writing long names, you use 'Tally Marks.' It's like a secret caveman code—four sticks and one diagonal line makes a group of five. Use these to find out the class's favorite flavor in a second!",

  // EVS - Looking Around
  "e1": "Imagine you're an ant crossing a puddle! A bamboo bridge is like using a single straw—it's light and wiggly. A cement bridge is like a giant elephant standing across the water—super strong and steady. Some kids even use 'Vallams' (small wooden boats) in Kerala to reach their desks!",
  "e2": "Who has ears like fans? The Elephant! Some animals have ears you can't even see, like birds who have tiny holes hidden by feathers. It's like they have secret built-in headphones!",
  "e3": "Imagine being in an Elephant Herd! The oldest female is the 'Grandma Boss' who leads everyone to water. Male elephants are like teenagers who leave the house at 15 to go on their own adventures!",
  "e6": "You are the 'Great Indian Rail Vlogger'! A train is like a giant metal caterpillar eating up stations. Your 'PNR Number' is your secret agent ID for this cross-country mission from Ahmedabad to Kerala!",
  "e10": "Welcome to 'Extreme Tag'—also called Kabaddi! It's like a submarine mission because you have to hold your breath and chant 'Kabaddi-Kabaddi' while trying to touch the other team. One breath, one touch, one point!",
  "e11": "Welcome to the 'Valley of Flowers' in Uttarakhand! It's nature's 'Swiss Army Knife'. Some flowers are for smelling, some are for medicine, and some—like Kachnar or Sahjan—are actually yummy vegetables for dinner!",
  "e13": "You are the 'River Doctor'! A river starts as fresh soda at the mountains but turns into murky noodle soup because of pollution. Let's find out how to keep the giant water slide clean for all the fish!",
  "e19": "Roots are 'Underground Secret Agents'! The Banyan tree has hanging roots like 'Beard Roots' to hold its heavy branches. The Desert Oak has roots that go 30 times deeper than its height just to find a drink of water!",
  "e27": "Meet Chuskit! She's a 10-year-old girl in Ladakh who uses a wheelchair. Her school mission was like a 'Race Track' build—her friends and teachers built a bridge so her 'Speed Racer' wheelchair could cross the river to school!",

  // HINDI - Rimjhim
  "h1": "बादल शरारती बच्चों की तरह हैं! वे कभी गुब्बारों जैसे गाल फुलाते हैं, तो कभी झब्बर-झब्बर बालों वाले लगते हैं। वे आसमान में इधर-उधर दौड़ते हुए बहुत ही भोले-भाले लगते हैं।",
  "h2": "बीरबल की सूझ-बूझ 'रिवर्स यूनो कार्ड' की तरह है! राजा अकबर ने असंभव सवाल पूछे, तो बीरबल ने ऐसे जवाब दिए कि पूछने वाले के ही होश उड़ गए। बुद्धि ही सबसे बड़ा हथियार है!",
  "h3": "किरमिच की गेंद एक रहस्यमयी चमकती गेंद है! क्या यह आपकी है? या आपके किसी दोस्त की? चलिए ईमानदारी की इस परीक्षा में हिस्सा लेते हैं।",
  "h4": "पापा जब बच्चे थे, तो वे कभी कुत्ता बनना चाहते थे तो कभी चोकीदार! क्या आप भी कभी-कभी कुछ अजीब बनना चाहते हैं? चलिए पापा के बचपन की सैर करते हैं।",
  "h7": "एक लालची राजा को 'वीडियो गेम मल्टीप्लायर' की सीख! सन्यासी ने बस 1 रुपये से शुरू किया और हर दिन दूना करते-करते राजा का पूरा खज़ाना खाली कर दिया। छोटी शुरुआत बड़ी हो सकती है!",
  "h9": "गांधीजी का 'प्रॉजेक्ट साल्ट'! बिन्नी नाम का बच्चा अपनी बकरी की देखभाल करता है ताकि गांधीजी नमक कानून तोड़ सकें। यह एक बड़े मिशन का हिस्सा बनने की कहानी है।",

  // ENGLISH - Marigold
  "en1": "Imagine the Sun is your alarm clock! The birds are singing 'Wake up!' and even the tiny bees are buzzing. It's like the whole world is throwing a party to start the day!",
  "en5": "Imagine being a 'Haptic Secret Agent'! Helen Keller learned to read the world through vibrations and touch. Even without seeing or hearing, she unlocked the secret language of the world.",
  "en7": "A tree is like a 'Nature Power Bank'! It gives shade, fruit, and wood to its friend until it's just a stump. It's a story about a friendship that never runs out of energy.",
  "en9": "Lying is like a 'Visual Glitch' in your avatar! Every time Pinocchio tells a lie, his nose grows like a selfie stick. Honesty is the only way to become a 'Real Boy'!",

  // KANNADA - Siri Kannada
  "k1": "ಕನ್ನಡ ತಾಯಿ ಎಂದರೆ ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ರಾಣಿ. ಕನ್ನಡ ನಾಡು ಚಂದದ ಹಾಡುಗಳ ಬೀಡು. ತಾಯ್ನಾಡಿನ ಗೌರವ ಕಾಪಾಡುವುದು ನಮ್ಮ ಮಿನಿ ಮಿಸ್ಟರ್ ಅಂಡ್ ಮಿಸ್ಸೆಸ್ ಕರ್ನಾಟಕ ಮಿಷನ್!",
  "k2": "ಬುದ್ಧಿವಂತ ರಾಮಕೃಷ್ಣನ ಚಾತುರ್ಯದ ಕಥೆಗಳ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ! ತೆನಾಲಿ ರಾಮಕೃಷ್ಣ ಹೇಗೆ ತನ್ನ ಬುದ್ಧಿಯಿಂದ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸುತ್ತಾನೆ ಎಂದು ನೋಡೋಣ.",
  "k3": "ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿಯ ಶೌರ್ಯದ ಕಥೆ! ಶಿವಾಜಿ ಮಹಾರಾಜರಿಗೆ ಶಕ್ತಿಯಾಗಿ ನಿಂತ ಜೀಜಾಬಾಯಿಯವರ ಬದುಕು ನಮಗೆಲ್ಲರಿಗೂ ಸ್ಫೂರ್ತಿ.",
  "k4": "ಮಳೆಯ ಸುಂದರ ಲೋಕ! ವರುಣ ದೇವನು ಹೇಗೆ ಭೂಮಿಯನ್ನು ತಂಪು ಮಾಡುತ್ತಾನೆ ಮತ್ತು ಹಸಿರನ್ನು ಹರಡುತ್ತಾನೆ ಎಂದು ತಿಳಿಯೋಣ.",

  // COMPUTERS
  "c1": "The CPU is the 'Master Chef' of the computer! It's a tiny brain that tells the screen what to show. Just like a chef follows a recipe, the CPU follows codes to play your favorite games!",
  "c7": "AI is like teaching a robot puppy! You show it thousands of pictures of cats, and soon it learns to say 'Meow' whenever it sees a kitten. It's a machine that learns to 'think' by looking at patterns!",

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
        const explanation = KNOWLEDGE_BASE[subtopicOrId] || KNOWLEDGE_BASE[topicTitle] || KNOWLEDGE_BASE["default"];
        resolve(explanation);
      } else if (promptType === 'quiz') {
        resolve(`Time for a Discovery Challenge! Imagine you're on a game show. What's the most surprising thing you just learned about ${topicTitle}?`);
      } else if (promptType === 'activity') {
        resolve(`Let's start the 'Learning by Doing' mission. Ready to use your inner powers?`);
      } else {
        resolve(`Spot on! You've mastered this scenario like a pro. Your class will be impressed!`);
      }
    }, 800);
  });
};
