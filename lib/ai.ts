export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // MATH - Building with Bricks (8 Steps)
  "The Lego Lunchbox Analogy": "Imagine your lunchbox is made of giant Lego bricks. If they aren't snapped together in a 'Stretcher Bond' (overlapping), your sandwich would fall out! Bricks are the building blocks of our world, just like Legos in your toy room.",
  "Counting Faces & Edges": "A brick is a 3D solid called a 'Cuboid.' Go find a brick or a shoe box! Touch the flat parts—those are 'Faces' (6 of them). The sharp lines are 'Edges' (12), and the pointy corners are 'Vertices' (8). It's a 6-12-8 geometry party!",
  "Jaali Pattern Ninja": "A 'Jaali' is a wall with holes. But it's not a mistake! It's a 'Natural AC.' The holes let cool air in and hot air out while keeping the sun's glare away. It's like a superhero cape for a building!",
  "Mirror Magic Symmetry": "Divide a brick pattern down the middle. Does one side look exactly like the other? That's Mirror Symmetry! It's like your face—two ears, two eyes, balanced perfectly. Balance makes buildings strong and beautiful.",
  "The Floor Pattern Challenge": "Look at the floor of an old monument. Bricks are laid in circles, crosses, and waves. Your mission: Grab some matchsticks and try to create a 'Jaali' or a 'Circular' floor pattern on your desk. You're the architect now!",
  "Brick Chemistry & Strength": "Bricks are made of clay and baked in a 'Kiln' (a giant oven). This 'cooking' makes them hard as stone. If they weren't baked, a rainy day would turn your house into a mud puddle! Science makes buildings stay up.",
  "Architect's Vision": "Architects use bricks to build domes (like big upside-down bowls) and arches (curved bridges). Arches are special because they push all the weight to the sides. It's like a group of friends holding hands to support a heavy load.",
  "The Future of Building": "Next-gen bricks are made of recycled plastic or even mushrooms! In the future, your house might be built of materials that help the Earth stay cool. What would your 'Future Brick' be made of?",

  // Math - Long and Short (8 Steps)
  "The Giant Step Analogy": "Imagine a giant taking a step—it might be 2 metres long! Your step is much shorter. We use 'Standard Units' like cm and m so that everyone's measurement is the same, whether you're a giant or a kid.",
  "Centimetre vs Metre War": "100 tiny centimetres (cm) are needed to make just 1 mighty metre (m). Use your ruler: a chocolate bar is measured in cm, but your height is measured in m and cm. Who is the winner? Both, for different jobs!",
  "Kilometre Marathon": "When you travel between cities, m is too small. We use Kilometres (km). 1 km = 1000 metres. Imagine walking around a football field 10 times—that's about 1 km. It's the unit for grand adventures!",
  "Human Ruler Task": "Did you know your hand-span is about 15-20 cm? Your mission: Use your hand-span to measure your desk. Now use a real ruler. How close was your 'Human Ruler'? Learning to estimate is a math superpower!",
  "Estimating the Impossible": "If you had to guess the length of a blue whale, would you say 30 cm or 30 m? Estimation is 'Guessing with Brains.' It helps you decide if a sofa will fit in your room before you buy it!",
  "Map Scale Secrets": "On a map, 1 cm might represent 10 km in the real world! It's like a 'Shrink Ray' for reality. Maps let us hold an entire city in our hands. Can you find the scale on a map today?",
  "Sports Track Design": "A standard running track is 400 metres. Why isn't it 1 km? Because 400m is the perfect 'Sprint' distance. Architects use math to decide how big playgrounds and stadiums should be.",
  "Navigation Mastery": "Using distances to find your way is called Navigation. If you know school is 2 km North, you won't get lost. Math is the secret compass inside your brain!",

  // EVS - Bridges & Transport (8 Steps)
  "The Ant Crossing Water Analogy": "How does an ant cross a puddle? It might use a fallen leaf as a bridge! Humans do the same with Bamboo, Cement, and Iron. Bridges are just 'Giant Leaves' that help us stay dry and safe.",
  "Bamboo & Cement Bridges": "Bamboo bridges are light and quick to build in villages. Cement bridges are heavy and hold giant trucks. It's like comparing a bicycle to a bus—both get you there, but one carries more weight!",
  "The Vallam Boat Journey": "In Kerala, children use small wooden boats called 'Vallams' to reach school. It's like a floating school bus! Imagine balancing in a boat with your school bag—it takes great skill and balance.",
  "Trolley Travels in Ladakh": "In high mountains, kids sit in a metal trolley pulled by a rope across a deep river. It's like a 'Sky Lift' for education. It shows that no matter how deep the valley, the mission to learn never stops!",
  "Safety in Travel Mission": "Your mission: Design a 'Safe Route' map from your house to school. Mark the dangerous spots like busy roads or puddles. Safety is everyone's responsibility!",
  "Building Your Own Model": "Grab some popsicle sticks or pencils! Can you build a 'Truss Bridge' (using triangles)? Triangles are the strongest shape in engineering. Test how many erasers your bridge can hold!",
  "Why Geography Matters": "Bridges are different because the Earth is different. You need a boat in a river but a rope-way in the mountains. Geography decides how we travel and how we live.",
  "Connecting People Globally": "Bridges don't just connect roads; they connect people and cultures. A bridge brings friends together from different sides of a river. In the future, maybe we'll have bridges between planets!",

  // EVS - Animal Ears (8 Steps)
  "The Fan-Ears Analogy": "Why are an elephant's ears so big? They are 'Natural AC Units'! By flapping them, the elephant cools its blood. It's like having two giant fans built into your head.",
  "Hidden Ear Detective": "Birds and lizards have ears too, but they are just tiny holes hidden under feathers or scales. Your mission: Look closely at a picture of a parrot. Can you find the hidden ear-spot?",
  "Sound Vibrations Secrets": "Snakes don't have ears at all! They 'hear' with their bellies by feeling the ground shake (vibrations). It's like feeling the beat of a drum in your chest.",
  "Hearing Ranges in Nature": "Dogs can hear high-pitched whistles that are 'Invisible' to human ears. Bats use 'Echoes' to see in the dark. Every animal is tuned into its own secret radio station of sounds.",
  "Animal Skins & Patterns": "Patterns like tiger stripes or leopard spots are 'Nature's Camouflage.' They help animals hide in the grass. It's like wearing a 'Ghillie Suit' for a game of hide-and-seek!",
  "Feathers vs Fur Logic": "Birds have feathers to fly and stay dry. Mammals have fur to stay warm. Your mission: Touch a piece of cotton (fur) and a leaf (feather). Which one feels warmer? Which one is smoother?",
  "Sensitivity & Safety": "Animals use their ears and skin to detect danger. A rabbit's ears twitch to find the tiniest sound of a fox. Being sensitive to your surroundings keeps you safe!",
  "Silent World Empathy": "Imagine a world without sound. How would you talk to your friends? You'd use signs and touch. Understanding how animals and humans sense the world differently makes us kinder friends.",

  // English - Marigold (8 Steps)
  "The Sun Alarm Clock Analogy": "The Sun is the world's most reliable alarm clock. No batteries or snooze buttons! When it peeps over the horizon, it's nature's way of saying 'The party of the day has started!'",
  "Morning Buzz Activity": "Go outside for 2 minutes. Close your eyes. How many different 'Morning Sounds' can you hear? The buzzing bee? The singing bird? Write them down—they are the morning's orchestra!",
  "Rhyming Word Twins": "Words like 'Day' and 'Play' are like sound-twins. They might look different, but they sing the same note at the end. Can you find a twin for the word 'Bee'? (Hint: It's in the trees!)",
  "Poetry Performance Skills": "Reading a poem is like acting! Use a high voice for the birds and a deep buzz for the bees. Your mission: Recite the first stanza as if you are the happiest bird in the forest.",
  "Early Bird vs Night Owl": "Some animals love the morning (Early Birds), while others love the moon (Night Owls). Which one are you? Drawing a picture of yourself as an owl or a bird helps you find your inner rhythm.",
  "Morning Habits for Success": "Brushing your teeth and washing your face is like 'Re-booting' your human computer. It clears the sleep-fog and gets you ready for the learning mission. High five to a fresh start!",
  "The Dark Room Analogy": "Close your eyes and try to walk to your desk. It feels scary, right? That's how Helen Keller felt every day. She lived in a 'Dark Room' without sound, but she had a key—Touch!",
  "Finger Language Secrets": "Imagine writing letters on a friend's palm. A-B-C. That's how Helen's teacher, Anne, talked to her. Your mission: Spell your name on your desk using only your finger and see if you can 'feel' the letters.",
  "Anne Sullivan – The Guide": "Anne Sullivan was like a 'Human GPS' for Helen. She guided her through the darkness using the power of patience and touch. Great teachers are life's best navigators.",
  "Inspiration Power-Up": "Helen Keller's story is a 'Cheat Code' for life. It tells us that 'I can't' is just a word. If Helen could write books without seeing them, you can solve any math problem today!",

  // Hindi - Rimjhim (8 Steps)
  "The Cotton Candy Cloud Analogy": "Clouds look like giant, fluffy cotton candy floating in the sky. But don't try to eat them! They are actually made of billions of tiny water drops or ice crystals hanging in the air.",
  "How Clouds are Born": "When the Sun warms the water in rivers, it turns into 'Invisible Steam' (Vapour) and goes up. High in the cold sky, it bunches together to form a cloud. It's like your hot breath on a cold mirror!",
  "The Sky Canvas Art": "Kavi (the poet) looks at clouds and sees elephants, camels, and fairies. Your mission: Look at the sky for 5 minutes. What 'Secret Shape' can you find? Draw it in your notebook!",
  "Weather & Moods": "Grey clouds look angry, white clouds look happy. Just like you, the sky has moods! Learning to read the clouds helps you know if it's a day for umbrellas or sunglasses.",
  "The Brain vs Brawn Analogy": "Imagine a giant trying to open a small jar and failing, while a small child uses a trick to open it easily. That's 'Brain vs Brawn.' Intelligence is a lever that moves mountains!",
  "The Wit Detective": "Birbal was the ultimate detective. He didn't look for footprints; he looked for 'Logic Gaps.' He showed that a calm mind can solve any riddle, no matter how impossible the King makes it.",
  "The Time Machine Analogy": "Ask your Grandpa what he played with as a kid. If he says 'a stick and a tire', he isn't joking! Your Grandpa's childhood is a 'Manual Time Machine' to a world before the internet.",
  "The Doubling Rice Analogy": "If you have 1 grain of rice and double it every day—1, 2, 4, 8, 16... by the 30th day, you have enough rice to cover the whole world! Small actions, when repeated, create giant results.",

  // Computer Science (8 Steps)
  "The Body Parts Analogy": "A computer is like a human body. The CPU is the 'Brain', the Monitor is the 'Face', the Keyboard is the 'Hands', and the Hard Drive is the 'Memory'. All parts must work together in a tech-team!",
  "CPU – The Silent Commander": "The CPU (Central Processing Unit) sits inside the box and gives orders to everything else. It works so fast it can do millions of additions in one second! It's the 'Super-Sonic Processor' of the digital world.",
  "The Parts Connection Task": "Look at the back of a PC. All those wires are like 'Nerves' connecting the brain to the hands. Your mission: Draw a map of a computer and show how the 'Brain' talks to the 'Window' (Monitor).",
  "The Robot Puppy Analogy": "AI (Artificial Intelligence) is like a robot puppy. It doesn't know anything until you 'train' it. You have to show it thousands of pictures of 'Apples' before it knows what an apple is. You are the AI's coach!",
  "The Pattern recognition Detective": "AI is a master of spotting patterns. It can find 'Secret Shapes' in data that humans miss. It's like finding a specific brand of socks in a giant mountain of laundry in just one second!",
  "Safe AI Exploration": "The Internet is a 'Giant Digital Jungle.' AI helps you find the right path, but you should always bring an 'Adult Ranger' (parent/teacher) with you. Safety first in the digital world!",

  // Kannada - Native (8 Steps)
  "ನಮ್ಮ ನಾಡಿನ ಹೆಮ್ಮೆ": "ಕರ್ನಾಟಕವು ಸುಂದರವಾದ ಕಾಡುಗಳು, ನದಿಗಳು ಮತ್ತು ಕಲೆಯ ಬೀಡು. ಇದು ನಮ್ಮೆಲ್ಲರ ಮನೆ, ಇಲ್ಲಿನ ಪ್ರತಿಯೊಂದು ಕಲ್ಲು ಕೂಡ ಒಂದು ಕಥೆ ಹೇಳುತ್ತದೆ!",
  "ಕನ್ನಡ ಅಕ್ಷರಗಳ ಮಾಂತ್ರಿಕ ಲೋಕ": "ನಮ್ಮ ಕನ್ನಡ ಅಕ್ಷರಗಳು ಮುತ್ತಿನಂತಿದ್ದು, ಬರೆಯಲು ತುಂಬಾ ಸುಂದರವಾಗಿವೆ. ಇವುಗಳನ್ನು ಕಲಿಯುವುದು ಒಂದು ಮಾಂತ್ರಿಕ ಲೋಕಕ್ಕೆ ಹೋದಂತೆ!",
  "ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯ": "ದಾಸ ಸಾಹಿತ್ಯದಿಂದ ಹಿಡಿದು ವಚನ ಸಾಹಿತ್ಯದವರೆಗೆ ಕನ್ನಡವು ಅತ್ಯಂತ ಶ್ರೀಮಂತವಾಗಿದೆ. ಹಾಡು ಮತ್ತು ಕವಿತೆಗಳ ಮೂಲಕ ನಾವು ನಮ್ಮ ಸಂಸ್ಕೃತಿಯನ್ನು ಅರಿಯಬಹುದು.",
  "ಐತಿಹಾಸಿಕ ತಾಣಗಳು": "ಹಂಪಿ ಮತ್ತು ಬೇಲೂರುಗಳು ನಮಗೆ ನಮ್ಮ ಹಿರಿಯರ ಕಲೆ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ತೋರಿಸುತ್ತವೆ. ಇವು ಕೇವಲ ಕಟ್ಟಡಗಳಲ್ಲ, ಇವು ನಮ್ಮ ಇತಿಹಾಸದ ಪುಸ್ತಗಳು!",
  "ನಾಡಹಬ್ಬಗಳ ಸಡಗರ": "ದಸರಾ ಅಂದರೆ ಆನೆಗಳ ಮೆರವಣಿಗೆ, ದೀಪಗಳ ಹಬ್ಬ. ಈ ಹಬ್ಬಗಳು ನಮಗೆ ಒಗ್ಗಟ್ಟಿನ ಪಾಠವನ್ನು ಕಲಿಸುತ್ತವೆ. ಸಡಗರವೇ ನಮ್ಮ ನಾಡಿನ ಜೀವ!",
  "ನಮ್ಮ ಪರಿಸರ": "ಜೋಗ ಜಲಪಾತ ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ನಮಗೆ ನೀರನ್ನು ಮತ್ತು ಗಾಳಿಯನ್ನು ನೀಡುತ್ತವೆ. ಪರಿಸರವನ್ನು ಉಳಿಸುವುದು ಅಂದರೆ ನಮ್ಮ ಜೀವವನ್ನು ಉಳಿಸಿಕೊಂಡಂತೆ.",
  "ಕನ್ನಡವೇ ನಮ್ಮ ಉಸಿರು": "ಕನ್ನಡ ಕೇವಲ ಭಾಷಲ್ಲ, ಅದು ನಮ್ಮ ಭಾವನೆ. ನಾವು ಎಲ್ಲೇ ಹೋದರೂ ನಮ್ಮ ತಾಯ್ನುಡಿಯನ್ನು ಗೌರವದಿಂದ ಕಾಣಬೇಕು.",
  "ಭವ್ಯ ಕರ್ನಾಟಕದ ಕನಸು": "ಮುಂದಿನ ದಿನದ ಕರ್ನಾಟಕವು ನಿಮ್ಮಂತಹ ಮಕ್ಕಳ ಕೈಯಲ್ಲಿದೆ. ನೀವು ಜ್ಞಾನವಂತರಾಗಿ ನಮ್ಮ ನಾಡನ್ನು ಇಡೀ ಜಗತ್ತಿಗೆ ಪರಿಚಯಿಸಬೇಕು!",

  // Hindi - Native (8 Steps)
  "बादलों की अनोखी दुनिया": "बादल आसमान के रुई के गोले जैसे होते हैं। ये हवा में तैरते हुए कभी हाथी तो कभी ऊंट जैसे दिखते हैं। क्या ये जादुई नहीं हैं?",
  "बारिश कैसे होती है?": "सूरज की गर्मी से पानी भाप बनकर ऊपर जाता है और ठंडक पाकर बादल बन जाता है। फिर यही बादल बारिश बनकर धरती को खुश करते हैं।",
  "आसमान का रंग": "कभी नीला, कभी काला और कभी लाल—आसमान एक बहुत बड़ा कैनवास है जहाँ प्रकृति हर रोज़ नई पेंटिंग बनाती है।",
  "अपना बादल बनाओ": "आज आप एक कॉटन (रुई) से अपना बादल बनाइए। उसे कागज़ पर चिपकाइए और सोचिए कि वह आपको कहाँ की सैರ कराएगा?",
  "प्रकृति से प्रेम": "पेड़, पौधे और बारिश हमारे दोस्त हैं। इनका ख्याल रखना ही सच्ची समझदारी है। चलो, आज एक पौधा लगाने का संकल्प लें!",

  "अकबर-बीरबल की सूझ-बूझ": "बीरबल अपनी हाज़िर-जवाबी के लिए जाने जाते थे। उन्होंने सिखाया कि हर मुश्किल का हल एक मुस्कुराहट और थोड़ी सी बुद्धिमानी में छिपा है।",
  "समस्या की पಹೆली": "जब कोई समस्या आए, तो उसे एक गेम की तरह सुलझाएं। अकबर के दरबार में हर सवाल एक नया मौका था कुछ नया सीखने का।",
  "ನ್ಯಾಯದ ಹಾದಿ (Justice Path)": "सच्चाई की जीत हमेशा होती है। बीरबल ने हमेशा न्याय का साथ दिया और कभी गलत का साथ नहीं दिया। यही एक महान व्यक्ति की पहचान है।",

  "ईमानदारी की जीत": "दिनेश को गेंद मिली और उसने उसे वापस करने का सोचा। यह ईमानदारी ही उसे एक अच्छा इंसान बनाती है। सोने से भी कीमती है सच्चाई.",
  "विश्वास का जादू": "जब आप सच बोलते हैं, तो सब आप पर भरोसा करते हैं। विश्वास एक ऐसा धागा है जो दोस्तों को हमेशा जोड़कर रखता है।",

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
