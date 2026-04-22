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

  // Computer Science (8 Steps)
  "The Body Parts Analogy": "A computer is like a human body. The CPU is the 'Brain', the Monitor is the 'Face', the Keyboard is the 'Hands', and the Hard Drive is the 'Memory'. All parts must work together in a tech-team!",
  "CPU – The Silent Commander": "The CPU (Central Processing Unit) sits inside the box and gives orders to everything else. It works so fast it can do millions of additions in one second! It's the 'Super-Sonic Processor' of the digital world.",
  "The Parts Connection Task": "Look at the back of a PC. All those wires are like 'Nerves' connecting the brain to the hands. Your mission: Draw a map of a computer and show how the 'Brain' talks to the 'Window' (Monitor).",
  "The Robot Puppy Analogy": "AI (Artificial Intelligence) is like a robot puppy. It doesn't know anything until you 'train' it. You have to show it thousands of pictures of 'Apples' before it knows what an apple is. You are the AI's coach!",
  "The Pattern recognition Detective": "AI is a master of spotting patterns. It can find 'Secret Shapes' in data that humans miss. It's like finding a specific brand of socks in a giant mountain of laundry in just one second!",
  "Safe AI Exploration": "The Internet is a 'Giant Digital Jungle.' AI helps you find the right path, but you should always bring an 'Adult Ranger' (parent/teacher) with you. Safety first in the digital world!",

  // Kannada - Siri Kannada (8 Steps)
  "ನಮ್ಮ ನಾಡಿನ ಹೆಮ್ಮೆ": "ಕರ್ನಾಟಕವು ಸುಂದರವಾದ ಕಾಡುಗಳು, ನದಿಗಳು ಮತ್ತು ಕಲೆಯ ಬೀಡು. ಇದು ನಮ್ಮೆಲ್ಲರ ಮನೆ, ಇಲ್ಲಿನ ಪ್ರತಿಯೊಂದು ಕಲ್ಲು ಕೂಡ ಒಂದು ಕಥೆ ಹೇಳುತ್ತದೆ!",
  "ಕನ್ನಡ ಅಕ್ಷರಗಳ ಮಾಂತ್ರಿಕ ಲೋಕ": "ನಮ್ಮ ಕನ್ನಡ ಅಕ್ಷರಗಳು ಮುತ್ತಿನಂತಿದ್ದು, ಬರೆಯಲು ತುಂಬಾ ಸುಂದರವಾಗಿವೆ. ಇವುಗಳನ್ನು ಕಲಿಯುವುದು ಒಂದು ಮಾಂತ್ರಿಕ ಲೋಕಕ್ಕೆ ಹೋದಂತೆ!",
  "ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯ": "ದಾಸ ಸಾಹಿತ್ಯದಿಂದ ಹಿಡಿದು ವಚನ ಸಾಹಿತ್ಯದವರೆಗೆ ಕನ್ನಡವು ಅತ್ಯಂತ ಶ್ರೀಮಂತವಾಗಿದೆ. ಹಾಡು ಮತ್ತು ಕವಿತೆಗಳ ಮೂಲಕ ನಾವು ನಮ್ಮ ಸಂಸ್ಕೃತಿನನ್ನು ಅರಿಯಬಹುದು.",
  "ಐತಿಹಾಸಿಕ ತಾಣಗಳು": "ಹಂಪಿ ಮತ್ತು ಬೇಲೂರುಗಳು ನಮಗೆ ನಮ್ಮ ಹಿರಿಯರ ಕಲೆ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ತೋರಿಸುತ್ತವೆ. ಇವು ಕೇವಲ ಕಟ್ಟಡಗಳಲ್ಲ, ಇವು ನಮ್ಮ ಇತಿಹಾಸದ ಪುಸ್ತಗಳು!",
  "ನಾಡಹಬ್ಬಗಳ ಸಡಗರ": "ದಸರಾ ಅಂದರೆ ಆನೆಗಳ ಮೆರವಣಿಗೆ, ದೀಪಗಳ ಹಬ್ಬ. ಈ ಹಬ್ಬಗಳು ನಮಗೆ ಒಗ್ಗಟ್ಟಿನ ಪಾಠವನ್ನು ಕಲಿಸುತ್ತವೆ. ಸಡಗರವೇ ನಮ್ಮ ನಾಡಿನ ಜೀವ!",
  "ನಮ್ಮ ಪರಿಸರ": "ಜೋಗ ಜಲಪಾತ ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ನಮಗೆ ನೀರನ್ನು ಮತ್ತು ಗಾಳಿಯನ್ನು ನೀಡುತ್ತವೆ. ಪರಿಸರವನ್ನು ಉಳಿಸುವುದು ಅಂದರೆ ನಮ್ಮ ಜೀವವನ್ನು ಉಳಿಸಿಕೊಂಡಂತೆ.",
  "ಕನ್ನಡವೇ ನಮ್ಮ ಉಸಿರು": "ಕನ್ನಡ ಕೇವಲ ಭಾಷಲ್ಲ, ಅದು ನಮ್ಮ ಭಾವನೆ. ನಾವು ಎಲ್ಲೇ ಹೋದರೂ ನಮ್ಮ ತಾಯ್ನುಡಿಯನ್ನು ಗೌರವದಿಂದ ಕಾಣಬೇಕು.",
  "ಭವ್ಯ ಕರ್ನಾಟಕದ ಕನಸು": "ಮುಂದಿನ ದಿನದ ಕರ್ನಾಟಕವು ನಿಮ್ಮಂತಹ ಮಕ್ಕಳ ಕೈಯಲ್ಲಿದೆ. ನೀವು ಜ್ಞಾನವಂತರಾಗಿ ನಮ್ಮ ನಾಡನ್ನು ಇಡೀ ಜಗತ್ತಿಗೆ ಪರಿಚಯಿಸಬೇಕು!",

  "ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನ ಚತುರ್ಯ": "ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನು ಕೇವಲ ಕವಿಯಲ್ಲ, ಆತ ಒಬ್ಬ 'ಸಮಸ್ಯೆಗಳ ಸೂಪರ್ ಹೀರೋ'! ಆತನ ಬುದ್ಧಿವಂತಿಕೆ ನಮಗೆ ಚತುರತೆಯ ಪಾಠ ಕಲಿಸುತ್ತದೆ.",
  "ಬುದ್ಧಿ ಬಲದ ಕಥೆ": "ಬಲಕ್ಕಿಂತ ಬುದ್ಧಿ ಲೇಸು ಎಂಬುದು ತೆನಾಲಿಯ ತತ್ವ. ಎಷ್ಟೇ ದೊಡ್ಡ ಸವಾಲು ಬಂದರೂ ನಾವು ಶಾಂತವಾಗಿ ಯೋಚಿಸಿ ಗೆಲ್ಲಬಹುದು.",
  "ಹಾಸ್ಯದ ಉಪಯೋಗ": "ಹಾಸ್ಯವು ಮನುಷ್ಯನ ಅತಿದೊಡ್ಡ ಶಕ್ತಿ. ತೆನಾಲಿ ತನ್ನ ಹಾಸ್ಯದ ಮೂಲಕ ಅರಸರ ಸಿಟ್ಟನ್ನು ಕೂಡ ತಣಿಸುತ್ತಿದ್ದನು.",
  "ಸಮಸ್ಯೆ ಎದುರಿಸುವ ಹಾದಿ": "ಸಮಸ್ಯೆ ಎದುರಿಸುವಾಗ ನಾವು ಹೆದರಬಾರದು. ತೆನಾಲಿ ಹೇಗೆ ಕಳ್ಳರನ್ನು ಬಾವಿಗೆ ನೀರು ಸೇದಲು ಹಚ್ಚಿದನೋ, ಹಾಗೆಯೇ ನಾವು ಉಪಾಯದಿಂದ ಕೆಲಸ ಮಾಡಬೇಕು.",
  "ವಿಜಯನಗರದ ವೈಭವ": "ಹಂಪಿಯ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯವು ಕಲೆ ಮತ್ತು ಜ್ಞಾನದ ಆಗರವಾಗಿತ್ತು. ಕೃಷ್ಣದೇವರಾಯನ ಆಳ್ವಿಕೆಯಲ್ಲಿ ತೆನಾಲಿ ಒಬ್ಬ ಪ್ರಮುಖ ರತ್ನವಾಗಿದ್ದನು.",
  "ತೆನಾಲಿ ಮತ್ತು ಕೃಷ್ಣದೇವರಾಯ": "ಇವರಿಬ್ಬರ ಸಂಬಂಧವು ಹಾಸ್ಯ ಮತ್ತು ಗೌರವದ ಸಂಗಮ. ರಾಜನ ಪ್ರತಿಯೊಂದು ತಪ್ಪನ್ನು ತೆನಾಲಿ ಚತುರತೆಯಿಂದ ತಿದ್ದುತ್ತಿದ್ದನು.",
  "ಸತ್ಯ ಮತ್ತು ಧರ್ಮ": "ತೆನಾಲಿ ಯಾವತ್ತೂ ಸತ್ಯದ ಪರವಾಗಿದ್ದನು. ಆತನ ಚತುರತೆಯು ಯಾವಾಗಲೂ ಧರ್ಮ ಮತ್ತು ನ್ಯಾಯವನ್ನು ಎತ್ತಿ ಹಿಡಿಯುತ್ತಿತ್ತು.",
  "ಚತುರತೆಯ ಪಾಠಗಳು": "ನೀವೂ ಕೂಡ ಜೀವನದಲ್ಲಿ ತೆನಾಲಿಯಂತೆ ಚತುರರಾಗಬಹುದು. ಯಾವಾಗಲೂ ಪ್ರಶ್ನೆ ಕೇಳಿ ಮತ್ತು ಉತ್ತರವನ್ನು ಹುಡುಕುವ ಪ್ರಯತ್ನ ಮಾಡಿ!",

  "ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿಯ ಶಕ್ತಿ": "ಜೀಜಾಬಾಯಿಯವರು ಶಿವಾಜಿಗೆ ಬಾಲ್ಯದಲ್ಲಿಯೇ ಸಂಸ್ಕಾರವನ್ನು ನೀಡಿದ ವೀರ ಮಾತೆ. ಅವರ ಶಕ್ತಿಯೇ ಶಿವಾಜಿಯ ಯಶಸ್ಸಿನ ಗುಟ್ಟು.",
  "ಶಿವಾಜಿಯ ಸುಂದರ ಬಾಲ್ಯ": "ಶಿವಾಜಿಯು ಬಾಲ್ಯದಲ್ಲಿ ದೇವಸ್ಥಾನ ಮತ್ತು ಕಾಡುಗಳಲ್ಲಿ ಆಟವಾಡುತ್ತಾ ಬೆಳೆದನು. ತಾಯಿಯ ಕಥೆಗಳು ಆತನಲ್ಲಿ ಧೈರ್ಯದ ಬೀಜ ಬಿತ್ತಿದವು.",
  "ದೇಶಪ್ರೇಮದ ಸಂಸ್ಕಾರ": "ಸ್ವರಾಜ್ಯದ ಕನಸು ಅಂದರೆ ಕೇವಲ ಯುದ್ಧವಲ್ಲ, ಅದು ದೇಶಪ್ರೇಮದ ಸಂಸ್ಕಾರ. ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿಗೆ ತನ್ನ ನಾಡನ್ನು ಪ್ರೀತಿಸಲು ಕಲಿಸಿದರು.",
  "ಧೈರ್ಯದ ಸ್ಫೂರ್ತಿ": "ಧೈರ್ಯವೆಂದರೆ ಭಯವಿಲ್ಲದಿರುವುದು ಮಾತ್ರವಲ್ಲ, ಭಯವಿದ್ದರೂ ಸತ್ಯದ ಪರವಾಗಿ ನಿಲ್ಲುವುದು. ಜೀಜಾಬಾಯಿಯ ಜೀವನವೇ ನಮಗೆ ಅತಿದೊಡ್ಡ ಸ್ಫೂರ್ತಿ.",
  "ಜಲ ಸಂರಕ್ಷಣೆ": "ನೀರು ನಮ್ಮ ಜೀವನಾಡಿ. ಮಳೆ ನೀರನ್ನು ಉಳಿಸುವುದು ನಮ್ಮ ಪ್ರಮುಖ ಜವಾಬ್ದಾರಿ. ಹನಿ ಹನಿ ಕೂಡ ಮಹತ್ವದ್ದು!",

  // Hindi - Rimjhim (8 Steps Native)
  "रुई के गोले जैसे बादल": "बादल आसमान के रुई के गोले जैसे होते हैं। ये हवा में तैरते हुए कभी हाथी तो कभी ऊंट जैसे दिखते हैं। क्या ये जादुई नहीं हैं?",
  "बादलों का जन्म": "जब सूरज की गर्मी से पानी भाप बनकर ऊपर जाता है और ठंडक पाकर बादल बन जाता है। फिर यही बादल बारिश बनकर धरती को खुश करते हैं।",
  "बादल देखने का मिशन": "आज आप एक कॉटन (रुई) से अपना बादल बनाइए। उसे कागज़ पर चिपकाइए और सोचिए कि वह आपको कहाँ की सैर कराएगा?",
  "आसमान का कैनवास": "कभी नीला, कभी काला और कभी लाल—आसमान एक बहुत बड़ा कैनवास है जहाँ प्रकृति हर रोज़ नई पेंटिंग बनाती है।",
  "मौसम और मन के भाव": "ग्रे बादल गुस्से में दिखते हैं, सफेद बादल खुश। आपकी तरह, आसमान के भी मूड होते हैं! बादलों को पढ़ना सीखने से आपको पता चलता है कि यह छाते का दिन है या धूप के चश्मे का।",
  "जल चक्र का गीत": "समुद्र का पानी भाप बनकर ऊपर गया, बादल बना और फिर बारिश बनकर वापस आ गया। यह एक कभी न खत्म होने वाला मधुर गीत है।",
  "बारिश लाने की चुनौती": "क्या आप जानते हैं कि पेड़ बादलों को बुलाते हैं? जितने ज़्यादा पेड़, उतनी ज़्यादा बारिश। चलो, प्रकृति के रक्षक बनें!",
  "अपने आसमान की सुरक्षा": "धुआं और प्रदूषण हमारे नीले आसमान को गंदा कर देते हैं। हमें अपनी हवा को साफ रखना चाहिए ताकि बादल हमेशा खुश रहें।",

  "बुद्धि बनाम ताकत": "दिमाग बनाम ताकत: जैसे एक छोटी सी चाबी बड़े ताले को खोल देती है, वैसे ही बीरबल की बुद्धि बड़ी-बड़ी मुश्किलों को हल कर देती थी।",
  "राजा के असंभव सवाल": "अकबर के असंभव सवाल: अकबर अक्सर पूछते थे, 'आसमान में कितने तारे हैं?' बीरबल कहते, 'जितने इस भेड़ के शरीर पर बाल!'",
  "चतुराई का जासूस": "बीरबल चोरों को पकड़ने के लिए 'जादू की छड़ी' जैसे उपमाओं का इस्तेमाल करते थे। उनका असली जादू उनकी तर्क शक्ति और शांत दिमाग में था।",
  "अपनी पहेली सुलझाओ": "जिंदगी एक पहेली जैसी है। बीरबल ने सिखाया कि हर मुश्किल सवाल का एक सरल और मज़ेदार जवाब होता है, बस सोचने का तरीका अलग होना चाहिए।",
  "तर्क और स्पष्ट सोच": "जब सब लोग डर जाते थे, बीरबल शांत रहकर 'क्यों' और 'कैसे' का इस्तेमाल करते थे। यही सच्ची बुद्धिमानी है।",
  "बीरबल का दरबारी इतिहास": "बीरबल अकबर के 'नवरत्नों' में से सबसे खास थे। उनका असली नाम महेश दास था और उनकी कहानियाँ हमें न्याय और चतुराई का महत्व सिखाती हैं।",
  "निष्पक्ष न्याय का मिशन": "सच्चाई की जीत हमेशा होती है। बीरबल ने हमेशा न्याय का साथ दिया और कभी गलत का साथ नहीं दिया। यही एक हीरो की असली पहचान है।",
  "बुद्धिमानी का भविष्य": "आज के दौर में भी, शांत रहकर समस्या का समाधान ढूंढना ही हमें असली 'बीरबल' बनाता है। अपनी बुद्धि का इस्तेमाल दुनिया को बेहतर बनाने के लिए करें।",

  "खोया हुआ खज़ाना": "ईमानदारी एक खोया हुआ खज़ाना है जिसे दिनेश ने ढूंढ निकाला। जब हमें कोई चीज़ मिलती है, तो उसे उसके मालिक तक पहुँचाना ही सच्ची बहादुरी है।",
  "चमकदार किरमिच की गेंद": "वह गेंद सिर्फ एक खिलौना नहीं थी, वह सच्चाई की एक परीक्षा थी। क्या आप परीक्षा में पास होने के लिए तैयार हैं?",
  "सच्चाई का आईना": "झूठ बोलना जैसे आईने को धुंधला करना है। सच बोलने से आपका मन साफ और हल्का रहता है, बिलकुल एक चमकते हुए आईने की तरह।",
  "मिली हुई चीज़ लौटाना": "अगर आपको रास्ते में ₹10 मिले, तो आप क्या करेंगे? उसे ईमानदारी के बॉक्स में डालना या टीचर को देना ही सही कदम है।",
  "ईमानदारी ही असली सोना है": "पैसा आता-जाता रहता है, लेकिन आपका चरित्र हमेशा आपके साथ रहता है। ईमानदार बने रहना ही दुनिया की सबसे बड़ी संपत्ति है।",

  "समय की मशीन": "पापा के बचपन की कहानियाँ एक 'मैनुअल टाइम मशीन' की तरह हैं जो हमें उस दौर में ले जाती हैं जब मोबाइल और इंटरनेट नहीं थे।",
  "पापा के मज़ेदार सपने": "बचपन वह प्रयोगशाला है जहाँ हम अपने सपनों के साथ प्रयोग करते हैं। आज आप पायलट बनना चाहते हैं, कल चौकीदार—और यह बिल्कुल ठीक है!",
  "जब खिलौने डंडे और पत्थर थे": "पुराने समय में बच्चे गिल्ली-डंडा और कंचों से खेलते थे। ये खेल हमें टीम वर्क और एकाग्रता सिखाते थे।",
  "दादाजी का इंटरव्यू": "अपने दादाजी से पूछिए कि वे अपने समय में कैसे शरारत करते थे। उनकी यादें इतिहास के पन्नों से भी ज़्यादा कीमती हैं।",

  "चावल के दोगुने होने का जादू": "अगर आप 1 दाने से शुरू करें और रोज़ दोगुना करें, तो महीने के अंत तक आपके पास पूरी दुनिया को खिलाने के लिए चावल होगा! इसे 'कंपाउंडिंग' कहते हैं।",
  "लालची राजा का जाल": "राजा ने गणित को कम आँका और हार गया। यह कहानी हमें सिखाती है कि लालच आँखें बंद कर देता है, जबकि बुद्धि रास्ता दिखाती है।",
  "दोगुना होने की शक्ति": "छोटी-सी शुरुआत भी महान ऊँचाइयों तक पहुँचा सकती है। हर दिन थोड़ा सा सीखना आपको एक साल में महाज्ञानी बना सकता है।",

  "नमक और आज़ादी का नाता": "गांधीजी ने दिखाया कि नमक जैसी एक छोटी चीज़ भी एक पूरे देश को आज़ाद कराने की ताकत रखती है। यह एकता की शक्ति थी।",
  "दांडी यात्रा का मिशन": "350 किलोमीटर से ज़्यादा पैदल चलना आसान नहीं था, लेकिन गांधीजी के इरादे हिमालय जैसे अटल थे। क्या आप उनकी तरह धैर्यवान बन सकते हैं?",
  "अहिंसा की ताकत": "अहिंसा का मतलब डरपोक होना नहीं है। इसका मतलब है गुस्से पर काबू पाना और बिना लड़े ही जीत हासिल करना। यह सबसे बड़ी सुपरपावर है।",

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
