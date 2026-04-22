export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // MATH - Math-Magic
  "m1": "Imagine your house is wearing a beautiful lace dress! Bricks can be arranged in 'Jaali' patterns (with holes) to let the breeze in, or 'Jharokhas' (balconies) to see the world. It's like building with giant Lego blocks that have super-symmetry!",
  "Jaali patterns": "A Jaali is like a 'see-through wall.' It's made by leaving gaps between bricks. In old buildings, these holes were carved into beautiful stars or flowers. They act like a natural air-conditioner!",
  "Mirror symmetry": "Imagine a magical line called a 'Mirror Line.' If you put a mirror on it, one side looks exactly like the other. Bricks are often laid in symmetrical lines to make buildings look strong and pretty.",
  "Faces of a brick": "A brick is a 3D shape called a 'Cuboid.' It has 6 flat rectangular faces. Even if you turn it around, it still looks like a brick! Try counting them on a real one.",

  "m2": "Think of yourself as a giant! To you, 1 centimeter is like a tiny ant's step, but 1 kilometer is a long journey. Remember, it takes exactly 1,000 meters to make 1 kilometer. If you ran a 1km race, you'd be passing 1000 meter-sticks!",
  "Centimetre and metre": "Centimetres (cm) are for small things like your pencil. Metres (m) are for big things like your height or a room. Fun Fact: A giant sunflower can grow up to 3 metres tall!",
  "Kilometre": "Kilometre (km) is used for long distances between cities. If you walked for about 15 minutes, you'd probably cover 1 kilometer. It takes 1000 big steps (metres) to make 1 km!",
  "Estimating lengths": "Estimating is like taking an 'Educated Guess.' Before you use a ruler, look at an object and think: Is it as long as my finger (cm) or as long as my desk (m)?",

  "m3": "Imagine you are the leader of a school trip with 210 students! You need to calculate how many buses you need. It's like being a detective with numbers—adding up seats and dividing the kids so everyone gets a window view!",
  "Place value up to thousands": "Numbers live in houses! The 'Ones' is a small hut, 'Tens' is a house, 'Hundreds' is a building, and 'Thousands' is a skyscraper! 3,521 means 3 skyscrapers, 5 buildings, 2 houses, and 1 hut.",
  "Addition of large numbers": "When you add large numbers, always start from the 'Ones' hut. If it gets too crowded (over 9), carry the extra group to the 'Tens' house next door!",

  "m4": "Meet the 24-Hour Clock! It's a marathon runner that doesn't stop at 12. Instead of 1 PM, it says 13:00. It's used by trains and planes so they never get their morning and evening mixed up.",
  "Reading a clock": "The short hand is the Hour Boss—it's slow but important. The long hand is the Minute Runner—it circles the clock every hour. When the Runner is at 6, it's 'Half-Past'!",
  "24-hour format": "In Railway Time, we don't start over at 12. 1 PM is 13:00, 2 PM is 14:00. Just add 12 to any PM time to find its 24-hour secret code!",

  "m6": "You are now a 'Recycle Superhero'! Just like Kiran from Patna, you buy junk and sell it for a profit. Profit is your 'Magic Grow Potion'—if you buy for ₹20 and sell for ₹25, your money just grew by ₹5!",
  "Buying and selling": "Buying is when you give money for something (Cost Price). Selling is when you give the item and get money back (Selling Price). A smart trader always knows both prices!",
  "Profit and loss basics": "If Selling Price > Cost Price, you win a PROFIT! If you sell for less than you bought, that's a LOSS. Balance your books like a pro!",

  "m7": "Meet the 'Liter Boss' and the '1,000 mL Soldiers'. To fill one big 1-Liter bottle, you need exactly 1,000 tiny milliliters. It's like building a giant tower out of 1000 tiny blocks.",
  "Litre and millilitre": "Millilitres (mL) are for tiny drops like medicine. Litres (L) are for big jugs of milk or water. Remember: A small juice box is usually 250 mL, which is 1/4th of a Litre!",
  "Measuring liquids": "We use measuring cylinders and beakers. If the liquid reaches the '500' mark, you have half a Litre!",

  "m8": "You are the 'Pizza Party Architect'! To make the perfect round pizza, you need a string (Radius) tied to the center. Two radii joined together make a 'Diameter'—the main road through the pizza!",
  "Parts of a circle": "The 'Centre' is the heart. The 'Boundary' is the 'Circumference.' Any line from heart to edge is a 'Radius.' They are all the same length!",
  "Radius and diameter": "The Radius is like half a bridge. The Diameter is the full bridge that goes through the centre. Diameter is always exactly twice the Radius!",

  "m12": "To a Flying Carpet, weight is everything! One kilogram of iron and one kilogram of feathers might look different, but to the carpet, they feel like the same 'Earth Hug.' Remember: 1000 grams = 1 kilogram.",
  "Gram and kilogram": "Grams (g) are for light things like a leaf or a coin. Kilograms (kg) are for heavy things like your school bag or a watermelon. 1000 gold coins weigh as much as one 1kg stone!",

  "m14": "You are an 'Ice Cream Detective'! Instead of writing long names, you use 'Tally Marks.' It's like a secret caveman code—four sticks and one diagonal line makes a group of five.",
  "Tally marks": "Tally marks are fast! One stick for one vote. When you get to four sticks ||||, draw a line through them \ for the 5th vote. Now you can count by fives!",
  "Pictographs": "A Pictograph uses symbols to show numbers. If 1 🍎 = 5 students, then two 🍎🍎 means 10 students love apples!",

  // EVS - Looking Around
  "e1": "Imagine you're an ant crossing a puddle! A bamboo bridge is light and wiggly. A cement bridge is like a giant elephant standing across the water—super strong and steady.",
  "Types of bridges": "Cement bridges are for cars and trucks. Bamboo or rope bridges are for people in hills. Some bridges have arches, and some stay up with giant cables!",
  "Boats and bamboo bridges": "In Kerala, kids use wooden boats called 'Vallams.' In Assam, bamboo grows fast, so they use it to build bridges over rainy-season puddles!",

  "e2": "Who has ears like fans? The Elephant! Some animals have ears you can't even see, like birds who have tiny holes hidden by feathers. It's like they have secret built-in headphones!",
  "Ears of different animals": "Rabbits have long ears to hear enemies from far away. Dogs can tilt their ears towards sounds. Fish don't have outer ears but they feel vibrations in water!",

  "e3": "Imagine being in an Elephant Herd! The oldest female is the 'Grandma Boss' who leads everyone to water. Male elephants leave the house at 15 to go on their own adventures!",
  "Herd life": "A herd is like a big family trip. There are usually 10-12 female elephants and their babies. They walk in a line and help each other find food.",

  "e6": "You are the 'Great Indian Rail Vlogger'! A train is like a giant metal caterpillar eating up stations. Your 'PNR Number' is your secret agent ID for this cross-country mission!",
  "Indian Railways": "One of the largest rail systems in the world! Trains like the Rajdhani or Shatabdi connect big cities at high speed, carrying thousands of people every day.",

  "e10": "Welcome to 'Extreme Tag'—also called Kabaddi! It's like a submarine mission because you have to hold your breath and chant 'Kabaddi-Kabaddi' while trying to touch the other team.",
  "Rules of Kabaddi": "Two teams, one central line. Cross the line, touch someone, and get back—all in one breath! If you lose your breath, you are out!",

  "e11": "Welcome to the 'Valley of Flowers' in Uttarakhand! It's nature's 'Swiss Army Knife'. Some flowers are for smelling, some are for medicine, and some are actually yummy vegetables for dinner!",
  "Uses of flowers": "Rose and Jasmine are for perfumes. Saffron is from a flower for food. Marigold is to decorate our homes during festivals like Diwali!",

  "e13": "You are the 'River Doctor'! A river starts as fresh soda at the mountains but turns into murky noodle soup because of pollution. Let's keep it clean!",
  "Sources of pollution": "Factories dumping chemicals, people throwing plastic, and washing clothes in the river. All these make the water sick for fish and for us.",

  "e19": "Roots are 'Underground Secret Agents'! The Banyan tree has hanging roots like 'Beard Roots' to hold its heavy branches. The Desert Oak has roots that go 30 times deeper than its height!",
  "Types of roots": "Tap roots (like carrots) go deep and straight. Fibrous roots (like grass) spread out like a net. Both are experts at drinking underground water!",

  "e27": "Meet Chuskit! She's a 10-year-old girl in Ladakh who uses a wheelchair. Her school mission was a 'Race Track' build—her friends built a bridge so her wheelchair could cross the river!",
  "Disability & Inclusion": "Inclusion means everyone gets to participate! Making a school 'Accessible' means adding ramps and wide doors so friends like Chuskit can come to class easily.",

  // HINDI - Rimjhim
  "h1": "बादल शरारती बच्चों की तरह हैं! वे कभी गुब्बारों जैसे गाल फुलाते हैं, तो कभी झब्बर-झब्बर बालों वाले लगते हैं।",
  "बादलों के आकार": "बादल कभी ऊंट के कुब्बड़ जैसे दिखते हैं, तो कभी पंखों वाली परियों जैसे। उनकी कल्पना करना ही कविता का सबसे मज़ेदार हिस्सा है!",

  "h2": "बीरबल की सूझ-बूझ 'रिवर्स यूनो कार्ड' की तरह है! राजा अकबर ने असंभव सवाल पूछे, तो बीरबल ने चतुर जवाब दिए।",
  "बुद्धि की ताकत": "बीरबल ने सिखाया कि ताक़त से ज़्यादा बुद्धि काम आती है। किसी भी मुश्किल सवाल का जवाब शांति और चतुराई से दिया जा सकता है।",

  "h3": "किरमिच की गेंद एक चमकदार रहस्य है! यह ईमानदारी की परीक्षा है।",
  "ईमानदारी का मूल्य": "अगर आपको कोई चीज़ मिलती है, तो उसे लौटाना ही सच्ची बहादुरी है। दूसरे की चीज़ पर अपना हक़ नहीं जताना चाहिए।",

  "h4": "पापा जब बच्चे थे, तो उनके सपने हर दिन बदलते थे! बच्चों की कल्पना का कोई अंत नहीं होता।",
  "बचपन की यादें": "बचपन वह समय है जब आप कुछ भी बन सकते हैं—पायलट, जादूगर या एक छोटा सा पौधा! यह कहानियाँ हमें वही आज़ादी देती हैं।",

  "h7": "एक लालची राजा को संन्यासी का गणित का सबक! ₹1 से शुरू करके रोज़ दोगुना करना खज़ाना खाली कर सकता है।",
  "दोगुना होने की शक्ति": "इसे 'Power of Compounding' कहते हैं। छोटी सी शुरुआत अगर रोज़ दुगनी हो, तो वह बहुत बड़ी बन जाती है। राजा ने गणित को कम आँका था!",

  "h9": "बिन्नी और उसकी बकरी साबरमती आश्रम में गांधीजी के 'नमक कानून' मिशन में मदद करते हैं।",
  "नमक सत्याग्रह": "अंग्रेजों ने नमक पर टैक्स लगाया था। गांधीजी ने पैदल चलकर दांडी की ओर यात्रा की ताकि हम अपना नमक खुद बना सकें।",

  // ENGLISH - Marigold
  "en1": "Imagine the Sun is your alarm clock! The birds are singing 'Wake up!' and the bees are buzzing.",
  "Nature waking up": "In the morning, flowers slowly open their petals and the grass is wet with dew. It's like the Earth is taking its first deep breath of the day!",

  "en5": "Imagine being a 'Haptic Secret Agent'! Helen Keller learned to read the world through vibrations and touch.",
  "Overcoming disability": "Helen showed that even if you can't see or hear, you can still learn and achieve anything with the help of a great teacher like Anne Sullivan.",

  "en7": "A tree is like a 'Nature Power Bank'! It gives shade, fruit, and wood to its friend until it's just a stump.",
  "Selfless giving": "The tree gives everything it has just to make the boy happy. True friendship is about sharing and caring, but we should also learn to say thank you!",

  "en9": "Lying is like a 'Visual Glitch' in your avatar! Every time Pinocchio tells a lie, his nose grows like a selfie stick.",
  "Importance of truth": "Trust is like a mirror—once broken, it's hard to fix. Telling the truth might be hard sometimes, but it makes your heart feel light and real.",

  // KANNADA - Siri Kannada
  "k1": "ಕನ್ನಡ ನಾಡು ಚಂದದ ಹಾಡುಗಳ ಬೀಡು. ತಾಯ್ನಾಡಿನ ಗೌರವ ಕಾಪಾಡುವುದು ನಮ್ಮ ಮಿನಿ ಮಿಸ್ಟರ್ ಅಂಡ್ ಮಿಸ್ಸೆಸ್ ಕರ್ನಾಟಕ ಮಿಷನ್!",
  "ಕನ್ನಡ ಭಾಷೆಯ ಮಹತ್ವ": "ಕನ್ನಡವು ಅತ್ಯಂತ ಹಳೆಯ ಮತ್ತು ಸುಂದರ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದು. ಪ್ರತಿಯೊಂದು ಪದಕ್ಕೂ ತನ್ನದೇ ಆದ ಘನತೆ ಮತ್ತು ಮಧುರತೆ ಇದೆ.",

  "k2": "ಬುದ್ಧಿವಂತ ರಾಮಕೃಷ್ಣನ ಚಾತುರ್ಯದ ಲೋಕಕ್ಕೆ ಸ್ವಾಗತ! ತನ್ನ ಹಾಸ್ಯದ ಮೂಲಕ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸುವುದೇ ಅವನ ಶೈಲಿ.",
  "ಚಾತುರ್ಯ": "ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನು ತೋರಿಸಿದ್ದು ಏನೆಂದರೆ, ಕಠಿಣ ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿಯೂ ಹಾಸ್ಯ ಪ್ರಜ್ಞೆ ಮತ್ತು ಬುದ್ಧಿವಂತಿಕೆಯನ್ನು ಮರೆಯಬಾರದು ಎಂದು.",

  "k3": "ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿಯ ಶೌರ್ಯದ ಕಥೆ! ಶಿವಾಜಿ ಮಹಾರಾಜರಿಗೆ ಶಕ್ತಿಯಾಗಿ ನಿಂತ ತಾಯಿ.",
  "ತಾಯಿಯ ಪ್ರೀತಿ ಮತ್ತು ಶಕ್ತಿ": "ಒಬ್ಬ ತಾಯಿ ತನ್ನ ಮಗುವಿಗೆ ನೀಡುವ ಸಂಸ್ಕಾರವು ಒಂದು ರಾಷ್ಟ್ರವನ್ನೇ ಬೆಳಗಬಲ್ಲದು ಎಂಬುದಕ್ಕೆ ಜೀಜಾಬಾಯಿ ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆ.",

  "k4": "ಮಳೆಯ ಸುಂದರ ಲೋಕ! ವರುಣ ದೇವನು ಹೇಗೆ ಭೂಮಿಯನ್ನು ತಂಪು ಮಾಡುತ್ತಾನೆ.",
  "ಮಳೆಯ ವರ್ಣನೆ": "ಮಳೆಯ ಹನಿಗಳು ಮಣ್ಣಿನ ಮೇಲೆ ಬಿದ್ದಾಗ ಬರುವ ಪರಿಮಳವೇ ಅದ್ಭುತ. ಪ್ರಕೃತಿ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಪಡೆಯುವ ಕ್ಷಣ ಅದು.",

  // COMPUTERS
  "c1": "The CPU is the 'Master Chef' of the computer! It's a tiny brain that tells the screen what to show.",
  "CPU – The brain": "Everything you do—clicking, typing, or gaming—is processed by the CPU. It calculates thousands of things in a single blink of an eye!",
  "Input vs Output devices": "Input devices (Keyboard, Mouse) tell the computer what to do. Output devices (Monitor, Speakers) show or tell you the result!",

  "c7": "AI is like teaching a robot puppy! It learns to 'think' by looking at patterns.",
  "Pattern recognition": "AI looks at millions of pictures. Eventually, it learns that a pointy ear and a tail mean 'Cat.' It's like finding a needle of logic in a haystack of data!",

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
