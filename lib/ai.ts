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

  // Kannada - Siri Kannada (9 Phase Experiential)
  // Chapter 1: ನಮ್ಮ ಕರ್ನಾಟಕ
  "ನಾಡಿನ ಹೆಮ್ಮೆ (Analogy)": "ಕರ್ನಾಟಕವು ಒಂದು ಸುಂದರವಾದ ಹೂದೋಟವಿದ್ದಂತೆ. ಇಲ್ಲಿನ ವೈವಿಧ್ಯಮಯ ಕಲೆ, ಸಾಹಿತ್ಯ ಮತ್ತು ಪ್ರಕೃತಿ ನಮ್ಮೆಲ್ಲರ ಹೆಮ್ಮೆ. ಪ್ರತಿಯೊಂದು ಹೂವು ತನ್ನದೇ ಆದ ಸುಗಂಧ ಹೊಂದಿರುವಂತೆ, ನಮ್ಮ ರಾಜ್ಯದ ಪ್ರತಿ ಜಿಲ್ಲೆಗೂ ಒಂದು ವಿಶೇಷತೆ ಇದೆ!",
  "ಕನ್ನಡ ಅಕ್ಷರಗಳ ಲೋಕ (Concept)": "ಕನ್ನಡ ಅಕ್ಷರಗಳು ಮುತ್ತಿನ ಹಾರದಂತೆ ಸುಂದರವಾಗಿವೆ. 'ಅ' ಇಂದ 'ಜ್ಞ' ವರೆಗಿನ ಅಕ್ಷರಗಳು ಕೇವಲ ಸಾಲುಗಳಲ್ಲ, ಅವು ನಮ್ಮ ಸಂಸ್ಕೃತಿಯ ಬುನಾದಿ. ಈ ಮಾಂತ್ರಿಕ ಲೋಕವನ್ನು ಕಲಿಯುವುದು ಒಂದು ಅದ್ಭುತ ಅನುಭವ!",
  "ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯ (Task)": "ನಿಮ್ಮ ಮಿಷನ್: ನಿಮಗೆ ತಿಳಿದಿರುವ ಯಾವುದಾದರೂ ಒಂದು ಕನ್ನಡ ಜಾನಪದ ಗೀತೆಯನ್ನು ಹಾಡಿ ಅಥವಾ ಪಂಪ, ರನ್ನ ಅಥವಾ ಕುವೆಂಪು ಅವರ ಒಂದು ಕವಿತೆಯ ಸಾಲನ್ನು ಬರೆಯಿರಿ. ನಮ್ಮ ಸಾಹಿತ್ಯದ ಸವಿಯನ್ನು ಸವಿಯಿರಿ!",
  "ಐತಿಹಾಸಿಕ ತಾಣಗಳು (Logic)": "ಹಂಪಿ ಮತ್ತು ಬೇಲೂರು ಕೇವಲ ಕಲ್ಲಿನ ಕಟ್ಟಡಗಳಲ್ಲ, ಅವು ನಮ್ಮ ಪೂರ್ವಜರ ವಾಸ್ತುಶಿಲ್ಪದ ಚಾತುರ್ಯವನ್ನು ತೋರಿಸುವ 'ಜೀವಂತ ಇತಿಹಾಸ'. ಈ ಸ್ಮಾರಕಗಳು ನಮ್ಮ ನಾಡಿನ ಶಕ್ತಿಯನ್ನು ಸಾರುತ್ತವೆ.",
  "ನಾಡಹಬ್ಬಗಳ ಸಡಗರ (Strategy)": "ದಸರಾ ಅಥವಾ ಯುಗಾದಿ ಹಬ್ಬಗಳು ನಮಗೆ ಒಗ್ಗಟ್ಟನ್ನು ಕಲಿಸುತ್ತವೆ. ಹಬ್ಬದ ಆಚರಣೆಯು ಕೇವಲ ಸಂಭ್ರಮವಲ್ಲ, ಅದು ನಮ್ಮ ಪರಂಪರೆಯನ್ನು ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ದಾಟಿಸುವ ಒಂದು ತಂತ್ರ.",
  "ನಮ್ಮ ಪರಿಸರ (Mission)": "ಜೋಗ ಜಲಪಾತ ಮತ್ತು ಪಶ್ಚಿಮ ಘಟ್ಟಗಳು ನಮ್ಮ ನಾಡಿನ ಶ್ವಾಸಕೋಶದಂತೆ. ಪರಿಸರವನ್ನು ರಕ್ಷಿಸುವುದು ಅಂದರೆ ನಮ್ಮ ಜೀವವನ್ನು ಉಳಿಸಿಕೊಂಡಂತೆ. ಇಂದು ಒಂದು ಗಿಡವನ್ನು ನೆಡುವ ಪ್ರತಿಜ್ಞೆ ಮಾಡಿ!",
  "ಕನ್ನಡದ ಉಸಿರು (Vision)": "ಕನ್ನಡ ಕೇವಲ ಒಂದು ಭಾಷೆಯಲ್ಲ, ಅದು ನಮ್ಮ ಭಾವನೆ. ನಾವು ಜಗತ್ತಿನ ಯಾವುದೇ ಮೂಲೆಗೆ ಹೋದರೂ ನಮ್ಮ ತಾಯ್ನುಡಿಯನ್ನು ಗೌರವಿಸಬೇಕು. ಕನ್ನಡವೇ ನಮ್ಮ ಉಸಿರು, ನಮ್ಮ ಜೀವ!",
  "ಭವ್ಯ ಕರ್ನಾಟಕ (Mastery)": "ಮುಂದಿನ ದಿನದ ಕರ್ನಾಟಕವು ನಿಮ್ಮಂತಹ ಮಕ್ಕಳ ಕೈಯಲ್ಲಿದೆ. ನೀವು ಜ್ಞಾನವಂತರಾಗಿ, ಸಂಸ್ಕಾರವಂತರಾಗಿ ನಮ್ಮ ನಾಡನ್ನು ಇಡೀ ಜಗತ್ತಿಗೆ ಪರಿಚಯಿಸಬೇಕು. ನೀವು ನಮ್ಮ ನಾಡಿನ ರಾಯಭಾರಿಗಳು!",

  // Chapter 2: ತೆನಾಲಿ ರಾಮಕೃಷ್ಣ
  "ಚತುರತೆಯ ಕೀಲಿ (Analogy)": "ಕಠಿಣ ಸಮಸ್ಯೆ ಒಂದು ಬೀಗವಿದ್ದಂತೆ, ತೆನಾಲಿಯ ಬುದ್ಧಿವಂತಿಕೆ ಅದರ ಕೀಲಿ. ಬುದ್ಧಿ ಇದ್ದರೆ ಯಾವುದೇ ಬಾಗಿಲನ್ನು ಸುಲಭವಾಗಿ ತೆರೆಯಬಹುದು!",
  "ಬುದ್ಧಿ ಬಲದ ಶಕ್ತಿ (Concept)": "ದೈಹಿಕ ಬಲಕ್ಕಿಂತ ಬುದ್ಧಿ ಬಲ ದೊಡ್ಡದು. ತೆನಾಲಿ ತನ್ನ ಚತುರತೆಯಿಂದ ಎಂತಹ ಅಸಾಧ್ಯ ಕೆಲಸವನ್ನೂ ಸುಲಭವಾಗಿ ಮಾಡುತ್ತಿದ್ದನು. ಅರಿವೇ ಗುರು, ಅರಿವೇ ಶಕ್ತಿ!",
  "ಸಮಸ್ಯೆಯ ಸುಳಿವು (Task)": "ನಿಮ್ಮ ಮಿಷನ್: ನಿಮ್ಮ ಗೆಳೆಯರಿಗೆ ಒಂದು ಒಗಟನ್ನು ಕೇಳಿ. ಅವರು ಉತ್ತರ ಹೇಳಲು ತಡಕಾಡಿದಾಗ, ನೀವು ತೆನಾಲಿಯಂತೆ ಚತುರತೆಯಿಂದ ವಿವರಿಸಿ!",
  "ಹಾಸ್ಯದ ಜಾದೂ (Logic)": "ಹಾಸ್ಯವು ಮನುಷ್ಯನ ಅತ್ಯಂತ ದೊಡ್ಡ ಆಯುಧ. ತೆನಾಲಿ ತನ್ನ ಹಾಸ್ಯದ ಮೂಲಕ ಕೃಷ್ಣದೇವರಾಯನ ಸಿಟ್ಟನ್ನು ಶಾಂತಗೊಳಿಸುತ್ತಿದ್ದನು. ನಗುವು ಆರೋಗ್ಯಕ್ಕೆ ಮಾತ್ರವಲ್ಲ, ಸಮಾಜಕ್ಕೂ ಅವಶ್ಯಕ.",
  "ತೆನಾಲಿಯ ತಂತ್ರ (Strategy)": "ತೆನಾಲಿ ಯಾವತ್ತೂ ತಕ್ಷಣ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಿರಲಿಲ್ಲ. ಮೊದಲು ಶಾಂತವಾಗಿ ಯೋಚಿಸಿ, ನಂತರ ತನ್ನ ತಂತ್ರವನ್ನು ಹೂಡುತ್ತಿದ್ದನು. ಶಾಂತ ಮನಸ್ಸೇ ಯಶಸ್ಸಿನ ಗುಟ್ಟು.",
  "ವಿಜಯನಗರದ ಸಡಗರ (Mission)": "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯವು ಕಲೆ ಮತ್ತು ಜ್ಞಾನದ ಆಗರವಾಗಿತ್ತು. ನೀವು ಕೂಡ ನಿಮ್ಮ ಶಾಲೆಯನ್ನು ಒಂದು ಜ್ಞಾನದ ಸಾಮ್ರಾಜ್ಯವನ್ನಾಗಿ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ.",
  "ಬುದ್ಧಿವಂತಿಕೆಯ ಭವಿಷ್ಯ (Vision)": "ಇಂದಿನ ಜಗತ್ತಿನಲ್ಲಿ 'Problem Solvers' ಗಳಿಗೆ ತುಂಬಾ ಬೇಡಿಕೆ ಇದೆ. ತೆನಾಲಿಯ ಕಥೆಗಳು ನಮಗೆ ಹೊಸ ರೀತಿಯಲ್ಲಿ ಯೋಚಿಸಲು ಕಲಿಸುತ್ತವೆ.",
  "ಚತುರ ರಾಮಕೃಷ್ಣ (Mastery)": "ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನಂತೆ ಚತುರರಾಗಲು ಸದಾ ಪ್ರಶ್ನೆ ಕೇಳುವ ಹವ್ಯಾಸ ಬೆಳೆಸಿಕೊಳ್ಳಿ. ಜ್ಞಾನವೇ ಜೀವನದ ಅತಿದೊಡ್ಡ ಸಂಪತ್ತು.",

  // Chapter 3: ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿ
  "ವೀರಮಾತೆಯ ಶಕ್ತಿ (Analogy)": "ಒಬ್ಬ ತಾಯಿ ತನ್ನ ಮಗನಿಗೆ ನೀಡುವ ಸಂಸ್ಕಾರವು ಒಂದು ಭದ್ರವಾದ ಕೋಟೆಯಿದ್ದಂತೆ. ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿಗೆ ನೀಡಿದ ಶಿಕ್ಷಣವೇ ಮರಾಠಾ ಸಾಮ್ರಾಜ್ಯದ ಅಡಿಪಾಯ.",
  "ಶಿವಾಜಿಯ ಬಾಲ್ಯ (Concept)": "ಶಿವಾಜಿಯ ಬಾಲ್ಯವು ಕಥೆಗಳು ಮತ್ತು ಸಾಹಸಗಳಿಂದ ಕೂಡಿತ್ತು. ತಾಯಿ ಜೀಜಾಬಾಯಿ ಬಾಲ್ಯದಲ್ಲೇ ಮಗನಿಗೆ ರಾಮಾಯಣ, ಮಹಾಭಾರತದ ವೀರರ ಕಥೆಗಳನ್ನು ಹೇಳಿ ಧೈರ್ಯ ತುಂಬಿದ್ದರು.",
  "ಧೈರ್ಯದ ಪಾಠ (Task)": "ನಿಮ್ಮ ಮಿಷನ್: ನಿಮಗೆ ಸ್ಫೂರ್ತಿ ನೀಡುವ ಒಬ್ಬ ವೀರ ಮಹಿಳೆಯ ಬಗ್ಗೆ ಐದು ವಾಕ್ಯಗಳನ್ನು ಬರೆಯಿರಿ. ಧೈರ್ಯವೆಂದರೆ ಭಯವಿಲ್ಲದಿರುವುದಲ್ಲ, ಭಯವಿದ್ದರೂ ಸತ್ಯದ ಪರ ನಿಲ್ಲುವುದು.",
  "ದೇಶಪ್ರೇಮದ ಸಂಸ್ಕಾರ (Logic)": "ಸ್ವರಾಜ್ಯದ ಕನಸು ಎಂದರೆ ಕೇವಲ ಯುದ್ಧವಲ್ಲ, ಅದು ತನ್ನ ನಾಡಿನ ಜನರ ಮೇಲಿನ ಪ್ರೀತಿ. ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿಗೆ ಸ್ವಂತ ರಾಜ್ಯದ ಮಹತ್ವವನ್ನು ಬಾಲ್ಯದಲ್ಲೇ ಮನವರಿಕೆ ಮಾಡಿಕೊಟ್ಟಿದ್ದರು.",
  "ನ್ಯಾಯದ ಹಾದಿ (Strategy)": "ನ್ಯಾಯ ಎಂದರೆ ಎಲ್ಲರಿಗೂ ಸಮಾನ ಅವಕಾಶ ನೀಡುವುದು. ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿಗೆ ಪ್ರತಿಯೊಬ್ಬ ನಾಗರಿಕನನ್ನೂ ಗೌರವದಿಂದ ಕಾಣಲು ಕಲಿಸಿದ್ದರು. ಇದೇ ಒಬ್ಬ ಉತ್ತಮ ನಾಯಕನ ಲಕ್ಷಣ.",
  "ಸ್ವರಾಜ್ಯದ ಕನಸು (Mission)": "ನಮ್ಮ ನಾಡನ್ನು ನಾವೇ ಆಳುವುದು ಸ್ವರಾಜ್ಯ. ನೀವು ನಿಮ್ಮ ಜೀವನದ ನಾಯಕರಾಗಿ, ನಿಮ್ಮ ಕನಸುಗಳನ್ನು ನನಸು ಮಾಡಲು ಜೀಜಾಬಾಯಿಯಂತೆ ದೃಢ ಸಂಕಲ್ಪ ಮಾಡಿ.",
  "ಜೀಜಾಬಾಯಿ ಸ್ಫೂರ್ತಿ (Vision)": "ಒಬ್ಬ ತಾಯಿ ಇಡೀ ಸಮಾಜವನ್ನು ಬದಲಿಸಬಲ್ಲಳು ಎಂಬುದಕ್ಕೆ ಜೀಜಾಬಾಯಿ ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆ. ಸ್ತ್ರೀ ಶಕ್ತಿಯೇ ಜಗತ್ತಿನ ಶಕ್ತಿ.",
  "ವೀರ ಪರಂಪರೆ (Mastery)": "ನಮ್ಮ ಇತಿಹಾಸದ ವೀರರ ಹಾದಿಯಲ್ಲಿ ನಡೆಯುವುದು ನಮ್ಮ ಕರ್ತವ್ಯ. ಸತ್ಯ ಮತ್ತು ಧರ್ಮದ ಹಾದಿಯಲ್ಲಿ ನಡೆಯುವವನೇ ನಿಜವಾದ ವೀರ.",

  // Chapter 4: ಮಳೆ
  "ಮಳೆಯ ಹನಿ (Analogy)": "ಮಳೆಯ ಪ್ರತಿಯೊಂದು ಹನಿಯೂ ಆಕಾಶದಿಂದ ಬಂದ ಒಂದು ಅಮೂಲ್ಯವಾದ ಮುತ್ತಿನಂತೆ. ಈ ಮುತ್ತುಗಳು ಒಣಗಿದ ಭೂಮಿಯನ್ನು ಹಚ್ಚ ಹಸಿರನ್ನಾಗಿ ಮಾಡುತ್ತವೆ!",
  "ನೀರಿನ ಚಕ್ರದ ಜಾದೂ (Concept)": "ಸಮುದ್ರದ ನೀರು ಹಬೆಯಾಗಿ ಮೇಲೆ ಹೋಗಿ, ಮೋಡವಾಗಿ ಮತ್ತೆ ಮಳೆಯಾಗಿ ಬರುವುದು ಪ್ರಕೃತಿಯ ಅತಿದೊಡ್ಡ ವಿಜ್ಞಾನ ಮತ್ತು ಜಾದೂ!",
  "ವರುಣನ ಕೃಪೆ (Task)": "ನಿಮ್ಮ ಮಿಷನ್: ಮಳೆ ಬಂದಾಗ ಮಣ್ಣಿನಿಂದ ಬರುವ ವಾಸನೆಯನ್ನು ಅನುಭವಿಸಿ. ಒಂದು ಪಾತ್ರೆಯಲ್ಲಿ ಮಳೆ ನೀರನ್ನು ಸಂಗ್ರಹಿಸಿ ನೋಡಿ, ಅದು ಎಷ್ಟು ಶುದ್ಧವಾಗಿದೆ!",
  "ಪರಿಸರದ ಸೌಂದರ್ಯ (Logic)": "ಮಳೆಯಿಂದ ಗಿಡಮರಗಳು ಚಿಗುರುತ್ತವೆ, ನದಿಗಳು ತುಂಬುತ್ತವೆ. ಹಸಿರೇ ಉಸಿರು ಎಂಬ ಮಾತಿನಂತೆ, ಮಳೆ ಭೂಮಿಯ ಜೀವನಾಡಿ.",
  "ಜಲ ಸಂರಕ್ಷಣೆ (Strategy)": "ನೀರನ್ನು ವ್ಯರ್ಥ ಮಾಡುವುದು ಪಾಪ. ಮಳೆ ನೀರು ಕೊಯ್ಲು ಮಾಡುವ ಮೂಲಕ ನಾವು ನಮ್ಮ ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ನೀರನ್ನು ಉಳಿಸಬಹುದು. ಹನಿ ಹನಿ ಕೂಡ ಮಹತ್ವದ್ದು!",
  "ರೈತರ ಸಂಭ್ರಮ (Mission)": "ರೈತರು ನಮ್ಮ ಅನ್ನದಾತರು. ಮಳೆ ಬಂದಾಗ ಅವರ ಮುಖದಲ್ಲಿ ನಗು ಕಾಣುವುದು ನಮಗೆಲ್ಲರಿಗೂ ಸಂತೋಷದ ವಿಷಯ. ರೈತರನ್ನು ಗೌರವಿಸೋಣ.",
  "ಹಸಿರು ಭೂಮಿ (Vision)": "ಭವಿಷ್ಯದ ಭೂಮಿ ಹಸಿರಾಗಿರಬೇಕಾದರೆ ನಾವು ಮಳೆ ನೀರನ್ನು ಉಳಿಸಬೇಕು. ಗಿಡಗಳನ್ನು ನೆಡುವುದರಿಂದ ಹೆಚ್ಚು ಮಳೆ ಬರುತ್ತದೆ. ಸುಂದರ ಭೂಮಿಯ ಕನಸು ಕಾಣೋಣ!",
  "ಮಳೆಯ ಮೋಜು (Mastery)": "ಮಳೆಯಲ್ಲಿ ಕಾಗದದ ದೋಣಿ ಬಿಡುವುದು ಕೇವಲ ಆಟವಲ್ಲ, ಅದು ಪ್ರಕೃತಿಯೊಂದಿಗೆ ಬೆರೆಯುವ ಒಂದು ರೀತಿ. ಪರಿಸರವನ್ನು ಪ್ರೀತಿಸಿ, ಮಳೆಯನ್ನು ಆನಂದಿಸಿ!",

  // Hindi - Rimjhim (9 Phase Experiential)
  // Chapter 1: मन के भोले-भाले बादल
  "रुई के गोले का जादू (Analogy)": "कल्पना कीजिए कि आसमान एक बहुत बड़ी रजाई है और बादल उसमें भरे हुए रुई के गोले हैं। ये गोले कभी हाथी बनते हैं तो कभी ऊंट। क्या आपने कभी बादलों में अपनी पसंद का खिलौना देखा है?",
  "बादलों का जन्म (Concept)": "जब सूरज की गर्मी से नदियों का पानी भाप बनकर ऊपर उड़ता है, तो वह ठंडा होकर बादल बन जाता है। यह बिलकुल वैसा ही है जैसे गरम चाय के कप से भाप निकलती है!",
  "बादल टोली का मिशन (Task)": "आपका मिशन: आज आसमान की ओर देखें और कम से कम 3 अलग-अलग आकृतियों वाले बादल खोजें। क्या कोई बादल बादल 'शेर' जैसा दिख रहा है? अपनी कॉपी में उसका चित्र बनाएं!",
  "आसमान का कैनवास (Logic)": "बादल सफेद क्यों होते हैं? क्योंकि वे सूरज की सारी रोशनी को फैला देते हैं। लेकिन जब वे बहुत घने हो जाते हैं, तो वे काले दिखने लगते हैं क्योंकि रोशनी उनके आर-पार नहीं जा पाती।",
  "मौसम का मूड (Strategy)": "बादलों को देखकर आप बता सकते हैं कि आज छाता चाहिए या नहीं! अगर बादल गहरे और नीचे हैं, तो समझो बारिश आने वाली है। बादलों की भाषा समझना एक सुपरपावर है!",
  "जल चक्र का गीत (Global Link)": "बादल सिर्फ हमें छाया नहीं देते, वे पूरी दुनिया में पानी पहुँचाते हैं। समुद्र का पानी हमारे खेतों तक बादलों के ज़रिए ही पहुँचता है। यह प्रकृति का सबसे बड़ा ट्रांसपोर्ट सिस्टम है!",
  "बारिश के रक्षक (Mission)": "पेड़ बादलों को अपनी ओर खींचते हैं। आपका मिशन: एक पौधा लगाएं और उसे 'बादल मित्र' नाम दें। जितने ज़्यादा पेड़ होंगे, उतने ही ज़्यादा खुशहाल बादल हमारे पास आएंगे!",
  "बादलों का भविष्य (Vision)": "भविष्य में, हम बादलों से बिजली बनाने की तकनीक भी सीख सकते हैं। बादल हमारे सबसे बड़े ऊर्जा स्रोत बन सकते हैं। आप भी एक 'बादल वैज्ञानिक' बन सकते हैं!",

  // Chapter 2: बीरबल की सूझ-बूझ
  "दिमाग की चाबी (Analogy)": "मुश्किल समस्या एक बंद ताले की तरह है, और बीरबल की बुद्धि उसकी चाबी। बिना ताला तोड़े, सही चाबी लगाकर उसे खोलना ही सच्ची समझदारी है।",
  "बुद्धि बनाम ताकत (Concept)": "ताकत से हम पहाड़ तोड़ सकते हैं, लेकिन बुद्धि से हम पूरी दुनिया जीत सकते हैं। बीरबल ने सिखाया कि हर समस्या का समाधान तलवार से नहीं, तर्क से होता है।",
  "चतुराई का जासूस (Task)": "आपका मिशन: एक ऐसी पहेली सोचें जिसका जवाब कोई न दे पाए। क्या आप बीरबल की तरह अपने दोस्तों को अपनी बातों से हैरान कर सकते हैं?",
  "असंभव का समाधान (Logic)": "जब अकबर ने पूछा कि आसमान में कितने तारे हैं, तो बीरबल ने भेड़ के बालों का उदाहरण दिया। यह 'आउट ऑफ द बॉक्स' सोच है—असंभव सवाल का चतुर जवाब!",
  "बीरबल की रणनीति (Strategy)": "बीरबल हमेशा शांत रहते थे। जब सब गुस्सा होते, तब वे मुस्कुराकर रास्ता निकालते। शांत दिमाग ही सबसे तेज़ चलता है।",
  "न्याय का मिशन - बीरबल (Mission)": "बीरबल ने हमेशा सच का साथ दिया। न्याय करना सिर्फ राजा का काम नहीं, हमारा भी है। हमेशा दूसरों के साथ वैसा ही व्यवहार करें जैसा आप खुद के लिए चाहते हैं।",
  "नवरत्नों की विरासत (Vision)": "बीरबल अकबर के 'नवरत्नों' में से एक थे। आप भी अपनी प्रतिभा से अपने स्कूल या समाज के 'रत्न' बन सकते हैं। आपकी समझदारी ही आपकी पहचान है।",
  "बुद्धिमानी का भविष्य (Mastery)": "आज के दौर में, समस्या सुलझाने वाले (Problem Solvers) ही असली हीरो हैं। बीरबल की कहानियाँ हमें हर मुश्किल में रास्ता खोजना सिखाती हैं।",

  // Chapter 3: किरमिच की गेंद
  "चमकदार खज़ाना (Analogy)": "ईमानदारी एक चमकदार खज़ाना है जिसे दिनेश ने एक पुरानी गेंद के रूप में पाया। क्या आप जानते हैं कि सच बोलना किसी भी खिलौने से ज़्यादा कीमती है?",
  "ईमानदारी की परख (Concept)": "जब हमें कोई चीज़ मिलती है जो हमारी नहीं है, तो हमारा मन दो बातें कहता है। एक कहता है 'रख लो', दूसरा कहता है 'लौटा दो'। सही आवाज़ सुनना ही ईमानदारी है।",
  "सच्चाई का आईना (Task)": "आपका मिशन: अगर आपको रास्ते में ₹10 मिले, तो आप क्या करेंगे? उसे ईमानदारी के बॉक्स में डालना ही सही कदम है। ईमानदारी की प्रैक्टिस करें!",
  "विश्वास का धागा (Logic)": "ईमानदारी से लोगों के बीच 'विश्वास' का धागा मज़बूत होता है। अगर दिनेश गेंद लौटा देता है, तो उसके दोस्त उस पर हमेशा भरोसा करेंगे।",
  "सही फैसला (Strategy)": "फैसला लेने से पहले सोचें: 'अगर यह चीज़ मेरी खोई होती, तो मुझे कैसा लगता?' यह दूसरों के प्रति सहानुभूति रखने का तरीका है।",
  "ईमानदारी का मिशन (Mission)": "अपने आसपास एक 'सत्य दल' बनाएं। जो हमेशा सच बोले और दूसरों की मदद करे। ईमानदारी ही सच्ची बहादुरी है।",
  "चरित्र का निर्माण (Vision)": "पैसा और खिलौने पुराने हो जाते हैं, लेकिन आपका 'चरित्र' हमेशा आपके साथ रहता है। एक ईमानदार बच्चा बड़ा होकर एक सच्चा नागरिक बनता है।",
  "सच्चाई की जीत (Mastery)": "अंत में, सच की ही जीत होती है। दिनेश ने गेंद लौटाकर सबका दिल जीत लिया। क्या आप भी 'ईमानदारी के हीरो' बनने के लिए तैयार हैं?",

  // Chapter 4: पापा जब बच्चे थे
  "समय की मशीन (Analogy)": "कल्पना कीजिए कि आपकी यादें एक समय की मशीन हैं जो आपको पापा के बचपन में ले जाती हैं। वहाँ न इंटरनेट था, न मोबाइल, फिर भी बहुत मज़ा था!",
  "पापा के मज़ेदार सपने (Concept)": "बचपन वह समय है जब हम कुछ भी बन सकते हैं—पायलट, जोकर, या चौकीदार। सपनों की कोई सीमा नहीं होती, और यही बचपन की सबसे बड़ी खूबसूरती है।",
  "बचपन की खोज (Task)": "आपका मिशन: अपने पापा या दादाजी से पूछें कि वे बचपन में कौन सा खेल खेलते थे। क्या आप वह खेल आज खेल सकते हैं? कोशिश करें!",
  "पुरानी यादों का तर्क (Logic)": "पुराने खेल जैसे गिल्ली-डंडा या कंचे हमें टीम वर्क और एकाग्रता सिखाते थे। वे आज के मोबाइल गेम्स से भी ज़्यादा चुनौतीपूर्ण थे!",
  "पीढ़ियों का पुल (Strategy)": "बुज़ुर्गों के अनुभव हमारे लिए एक पुल की तरह हैं। उनकी कहानियों से हमें जीवन के सबक मिलते हैं जो किताबों में नहीं लिखे होते।",
  "बचपन का मिशन (Mission)": "आज की भागदौड़ में अपना 'बचपन' जीवित रखें। रोज़ाना कम से कम एक घंटा बाहर खेलें और प्रकृति से जुड़ें।",
  "सपनों का भविष्य (Vision)": "पापा ने जो सपने देखे, उनमें से कुछ पूरे हुए। आप भी आज जो सपने देख रहे हैं, वे आपके कल का निर्माण करेंगे। बड़े सपने देखें!",
  "अपनी कहानी (Mastery)": "आप भी अपनी एक 'डायरी' लिखें। आज आप क्या बनना चाहते हैं? 10 साल बाद जब आप इसे पढ़ेंगे, तो आपको बहुत मज़ा आएगा!",

  // Chapter 5: दान का हिसाब
  "चावल का जादू (Analogy)": "अगर आप 1 दाने से शुरू करें और रोज़ दोगुना करें, तो 30 दिनों में वह इतना हो जाएगा कि पूरा देश खा सके। यह 'कंपाउंडिंग' का जादू है!",
  "दोगुना होने की शक्ति (Concept)": "राजा ने 1 रुपये को छोटा समझा, लेकिन दोगुना होने की शक्ति ने उसका खज़ाना खाली कर दिया। गणित हमें बड़ी चीज़ों का अंदाज़ा लगाना सिखाता है।",
  "लालच का जाल (Task)": "आपका मिशन: 2, 4, 8, 16... इस क्रम को 10 बार आगे बढ़ाएं। क्या आप देख सकते हैं कि संख्या कितनी तेज़ी से बढ़ रही है? गणित का कमाल!",
  "दान का गणित (Logic)": "दान करना सिर्फ पैसे देना नहीं, बल्कि संसाधनों का सही बँटवारा है। राजा को अपनी प्रजा का ध्यान रखना चाहिए, क्योंकि प्रजा से ही राज्य है।",
  "बुद्धिमान सौदा (Strategy)": "संन्यासी ने चालाकी से नहीं, बल्कि गणित से राजा को सबक सिखाया। अपनी बात को तर्कों के साथ रखना ही सबसे बड़ी चतुराई है।",
  "न्याय का मिशन - दान (Mission)": "समाज में सबको बराबर का हिस्सा मिलना चाहिए। अगर किसी के पास बहुत ज़्यादा है और किसी के पास कुछ नहीं, तो हमें मदद के लिए आगे आना चाहिए।",
  "समृद्ध राज्य (Vision)": "एक समृद्ध राज्य वह है जहाँ कोई भूखा न सोए। आप भविष्य के नेता हैं, आप संसाधनों का सही उपयोग करना सीखें।",
  "परोपकार की जीत (Mastery)": "अंत में, राजा को अपनी गलती का अहसास हुआ। परोपकार ही सबसे बड़ा धर्म है। क्या आप आज किसी की मदद करेंगे?",

  // Chapter 6: बिन्नी और गांधीजी
  "नमक का जादू (Analogy)": "नमक खाने में मामूली लगता है, लेकिन इसने पूरे देश को आजषदाद कराने में मदद की। एक छोटी सी चीज़ भी बहुत बड़ा बदलाव ला सकती है!",
  "अहिंसा की शक्ति (Concept)": "बिना लड़े, बिना गुस्सा किए अपनी बात मनवाना ही अहिंसा है। गांधीजी ने दिखाया कि शांति में युद्ध से भी ज़्यादा ताकत होती है।",
  "दांडी यात्रा का मिशन (Task)": "आपका मिशन: गांधीजी की तरह शांति का एक संदेश लिखें। आप अपने स्कूल को और भी बेहतर और शांत कैसे बना सकते हैं?",
  "स्वतंत्रता का तर्क (Logic)": "अंग्रेज़ों ने नमक पर टैक्स लगाया था जो गलत था। अपनी आवाज़ उठाना और अन्याय के खिलाफ खड़े होना ही सच्ची स्वतंत्रता है।",
  "सत्याग्रह की रणनीति (Strategy)": "सत्याग्रह का मतलब है 'सत्य के लिए आग्रह'। अगर आप सही हैं, तो आपको डरने की ज़रूरत नहीं है। सत्य आपका सबसे बड़ा हथियार है।",
  "देशभक्ति का मिशन (Mission)": "देशभक्ति सिर्फ बॉर्डर पर नहीं, बल्कि अपने आसपास सफाई रखकर और नियमों का पालन करके भी दिखाई जा सकती है। आप एक छोटे देशभक्त बनें!",
  "आज़ाद भारत (Vision)": "आज हम जिस आज़ाद भारत में हैं, वह महान लोगों के बलिदान का फल है। हमें इस आज़ादी का सम्मान करना चाहिए और देश को आगे बढ़ाना चाहिए।",
  "गांधीजी की विरासत (Mastery)": "सादा जीवन, उच्च विचार—यही गांधीजी की विरासत है। क्या आप अपनी ज़रूरतों को कम करके दूसरों के काम आ सकते हैं?",

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
