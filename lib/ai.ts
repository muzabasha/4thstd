export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KB: Record<string, string> = {
  // EVS entries
  "The Ant Crossing Water Analogy": "How does an ant cross a puddle? It might use a fallen leaf as a bridge! Humans do the same with bamboo, cement and iron. Bridges are just Giant Leaves that help us stay dry and safe. In Kerala, children use small wooden boats called Vallams to reach school — a floating school bus! 🍃",
  "Bamboo & Cement Bridges": "Bamboo bridges are light and quick to build in villages. Cement bridges are heavy and hold giant trucks. It's like comparing a bicycle to a bus — both get you there, but one carries more weight! Bamboo is actually stronger than steel by weight — nature's engineering marvel! 🎋",
  "The Vallam Boat Journey": "In Kerala, children use small wooden boats called Vallams to reach school. Imagine balancing in a boat with your school bag — it takes great skill! The backwaters of Kerala are like a network of watery roads connecting hundreds of villages. 🚣",
  "Trolley Travels in Ladakh": "In high mountains, kids sit in a metal trolley pulled by a rope across a deep river. It's like a Sky Lift for education! It shows that no matter how deep the valley, the mission to learn never stops. These trolleys are called Jhulas and are still used in remote Himalayan villages. 🏔️",
  "Safety in Travel Mission": "Design a Safe Route map from your house to school. Mark dangerous spots like busy roads or puddles. In India, over 1.5 lakh road accidents happen every year. Knowing safe routes and road safety rules can save your life! 🗺️",
  "Building Your Own Model": "Grab some popsicle sticks! Can you build a Truss Bridge using triangles? Triangles are the strongest shape in engineering — they distribute weight evenly. Test how many erasers your bridge can hold! The Golden Gate Bridge uses 83,000 tonnes of steel in triangular trusses. 🌉",
  "Why Geography Matters": "Bridges are different because the Earth is different. You need a boat in a river but a rope-way in the mountains. Geography decides how we travel and how we live. India has 6 lakh villages — each connected to the world by roads, bridges or boats! 🌏",
  "Connecting People Globally": "Bridges don't just connect roads — they connect people and cultures. The Bandra-Worli Sea Link in Mumbai is 5.6 km long and connects two parts of the city. In the future, we might have bridges between islands and even floating cities! 🌉",
  "The Fan-Ears Analogy": "Why are an elephant's ears so big? They are Natural AC Units! By flapping them, the elephant cools its blood. Blood vessels in the ears release heat like a radiator. It's like having two giant fans built into your head — nature's coolest cooling system! 🐘",
  "Hidden Ear Detective": "Birds and lizards have ears too, but they are just tiny holes hidden under feathers or scales. Your mission: look closely at a picture of a parrot — can you find the hidden ear-spot? Owls can rotate their heads 270° to hear sounds from all directions! 🦉",
  "Sound Vibrations Secrets": "Snakes don't have ears at all! They hear with their bellies by feeling the ground shake (vibrations). It's like feeling the beat of a drum in your chest. Elephants also communicate through vibrations in the ground — they can feel messages from 10 km away! 🐍",
  "Hearing Ranges in Nature": "Dogs can hear high-pitched whistles invisible to human ears. Bats use Echoes (echolocation) to see in the dark — they send out sound waves and listen for the echo. Dolphins can hear sounds 10 times higher than humans. Every animal is tuned into its own secret radio station! 🦇",
  "Herd life": "Elephants live in herds of 10–20 females and their calves. The oldest female (matriarch) leads the herd — she remembers water sources and safe paths from decades ago. Male elephants leave the herd at age 14–15 and live alone or in small bachelor groups. 🐘",
  "Baby elephants": "Baby elephants (calves) are born after 22 months — the longest pregnancy of any land animal! A newborn calf weighs about 100 kg and can walk within hours of birth. The whole herd helps raise the calf — aunts, sisters and cousins all take turns babysitting! 🐘",
  "Matriarch leadership": "The matriarch is the oldest and wisest female elephant. She leads the herd to water, food and safety using memories built over 60+ years. When a matriarch dies, the herd can become confused and lost. Her wisdom is irreplaceable — just like a grandmother's! 👑",
  "The Khejadi Tree Miracle": "The Khejadi tree (Prosopis cineraria) is the State Tree of Rajasthan. It survives in the desert with almost no water. Its roots go 30 metres deep to find groundwater. The Bishnoi community has protected Khejadi trees for 500 years — they consider cutting one a sin! 🌳",
  "Bishnoi Community Spirit": "The Bishnoi community of Rajasthan follows 29 rules (bis = 20, noi = 9) for living in harmony with nature. They never cut green trees, never kill animals, and protect wildlife. Amrita Devi Bishnoi gave her life in 1730 to protect Khejadi trees — 363 people died with her. 🙏",
  "Hugging the Trees": "The Chipko Movement (1973, Uttarakhand) was started by women who hugged trees to prevent logging. 'Chipko' means 'to hug' in Hindi. The movement spread across India and inspired environmental movements worldwide. It showed that ordinary people can protect nature! 🌲",
  "Traditional Indian games": "India has hundreds of traditional games: Kabaddi, Kho-Kho, Gilli-Danda, Pitthu, Lagori, Kancha (marbles), Hopscotch. These games develop strength, speed, teamwork and strategy — without any screen! Many are now played at national and international levels. 🎮",
  "Rules of Kabaddi": "In Kabaddi, one player (raider) holds their breath, chants 'kabaddi-kabaddi' and tries to tag opponents. The raider must return to their side in one breath. Tagged opponents are out. The team with the most points wins. India has won the Kabaddi World Cup every time it has been held! 🏆",
  "Teamwork": "Kabaddi, Kho-Kho and all team sports teach us that together we are stronger. In Kho-Kho, 9 players sit in a line and one chases — they must communicate and coordinate perfectly. The best teams in the world win not because of individual talent but because of teamwork! 🤝",
  "Valley of Flowers": "The Valley of Flowers in Uttarakhand is a UNESCO World Heritage Site at 3,658 metres altitude. It blooms with 500+ species of wildflowers from July to September. The valley was discovered by British mountaineer Frank Smythe in 1931. It's one of the most beautiful places on Earth! 🌸",
  "Medicinal plants": "India has 8,000 species of medicinal plants! Tulsi (Holy Basil) boosts immunity. Neem fights bacteria and viruses. Turmeric reduces inflammation. Aloe Vera heals burns. Ginger aids digestion. Ayurveda, India's 5,000-year-old medical system, uses these plants to heal. 🌿",
  "Edible flowers": "Many flowers are delicious! Kachnar (Bauhinia) flowers are cooked as vegetables. Banana flowers make curries. Rose petals make gulkand (jam). Marigold petals flavour rice. Pumpkin flowers are fried as fritters. Nature's garden is also nature's kitchen! 🌺",
  "Clean vs dirty water": "Clean water is colourless, odourless and tasteless. Dirty water may contain bacteria, viruses, chemicals and mud. Boiling water kills bacteria. Filtering removes mud. Chlorination kills viruses. In India, 21% of diseases are caused by unsafe water. Clean water = healthy life! 💧",
  "Water conservation": "India has only 4% of the world's fresh water but 18% of the world's population! Traditional water conservation methods: stepwells (baolis), check dams, rainwater harvesting. Simple habits save water: turn off taps, fix leaks, reuse water. Every drop counts! 🌊",
  "Types of roots": "Plants have two main root types: Taproot (one main root going deep — carrot, radish, mango) and Fibrous roots (many thin roots spreading wide — grass, wheat, rice). Taproots anchor plants firmly; fibrous roots hold soil and prevent erosion. 🌱",
  "Root functions": "Roots do four jobs: Anchor the plant in soil, Absorb water and minerals, Store food (carrot, radish, sweet potato), and sometimes Breathe (mangrove aerial roots). Without roots, plants would fall over and starve — roots are the unsung heroes of the plant world! 🌿",
  "Banyan tree aerial roots": "The Banyan tree (India's National Tree) grows aerial roots from its branches that hang down and become new trunks! The Great Banyan Tree in Kolkata is 250 years old, covers 1.5 hectares and has 3,600 aerial roots — it looks like an entire forest but is just ONE tree! 🌳",
  "Chuskit's story": "Chuskit is a 10-year-old girl in Ladakh who uses a wheelchair. She couldn't reach school because of a river. Her father and the whole community built a bridge so she could cross. Her story shows that when a community comes together, no barrier is too big. Education is for everyone! ♿",

  // English entries
  "The Sun Alarm Clock Analogy": "The Sun is the world's most reliable alarm clock — no batteries, no snooze button! When it peeps over the horizon, it's nature's way of saying 'The party of the day has started!' Birds start singing 45 minutes before sunrise — they're nature's alarm chorus! ☀️",
  "Morning Buzz Activity": "Go outside for 2 minutes. Close your eyes. How many Morning Sounds can you hear? The buzzing bee? The singing bird? The rustling leaves? Write them down — they are the morning's orchestra! Sound is vibration — every sound you hear is air molecules dancing! 🎵",
  "Rhyming Word Twins": "Words like 'Day' and 'Play' are sound-twins — they sing the same note at the end. Rhyming makes poems musical and easy to remember. Ancient stories were told in rhyme so people could memorise them! Can you find a twin for 'Bee'? (Hint: it grows on a tree!) 🌳",
  "Poetry Performance Skills": "Reading a poem is like acting! Use a high voice for the birds and a deep buzz for the bees. Your mission: recite the first stanza as if you are the happiest bird in the forest. The best poets perform their poems — poetry is music made of words! 🎭",
  "Early Bird vs Night Owl": "Some animals love the morning (Early Birds like sparrows and bees), while others love the moon (Night Owls like owls and bats). Your body has a natural clock called the Circadian Rhythm that tells you when to sleep and wake! 🦉",
  "Morning Habits for Success": "Brushing your teeth and washing your face is like Re-booting your human computer. Scientists say the first 30 minutes after waking set the mood for the entire day. Start strong! 🌅",
  "Rhyming Words": "Rhyming words end with the same sound: cat/bat/hat, day/play/say, tree/bee/free. Rhymes make language musical and help us remember words. Nursery rhymes have been teaching children language for thousands of years. Can you write a 4-line rhyming poem about your school? 🎵",
  "Anne Sullivan": "Anne Sullivan was Helen Keller's teacher and lifelong companion. She was nearly blind herself as a child! She taught Helen by spelling words into her hand using touch. Anne's patience and creativity unlocked Helen's mind. The best teachers believe in their students even when others don't. 👩‍🏫",
  "Gratitude": "Gratitude means being thankful for what you have. Helen Keller, who was blind and deaf, said: 'I cried because I had no shoes, until I met a man who had no feet.' Gratitude turns what we have into enough. Write 3 things you are grateful for every morning! 🙏",
  "The Dark Room Analogy": "Close your eyes and try to walk to your desk. It feels scary, right? That's how Helen Keller felt every day — but she lived in a Dark Room without sound too. She had a key though: Touch! She learned to read, write and speak through the power of touch alone. 🤲",
  "Finger Language Secrets": "Imagine writing letters on a friend's palm — A-B-C. That's how Anne Sullivan talked to Helen Keller! This is called Finger Spelling. Your mission: spell your name on your desk using only your finger. Braille is another touch-based language — 6 raised dots create every letter! ✋",
  "Inspiration Power-Up": "Helen Keller's story is a Cheat Code for life. It tells us that 'I can't' is just a word. If Helen could write books, give speeches and travel the world without seeing or hearing, you can solve any math problem, write any essay, learn any language today! 💪",

  // Hindi entries
  "रुई के गोले": "कल्पना कीजिए कि आसमान एक बहुत बड़ी रजाई है और बादल उसमें भरे हुए रुई के गोले हैं। ये गोले कभी हाथी बनते हैं तो कभी ऊंट। क्या आपने कभी बादलों में अपनी पसंद का खिलौना देखा है? बादल पानी की बूंदों और बर्फ के क्रिस्टल से बने होते हैं! ☁️",
  "बादलों का जादू": "जब सूरज की गर्मी से नदियों का पानी भाप बनकर ऊपर उड़ता है, तो वह ठंडा होकर बादल बन जाता है। यह बिलकुल वैसा ही है जैसे गरम चाय के कप से भाप निकलती है! यही जल चक्र है — प्रकृति का सबसे बड़ा जादू! 🌧️",
  "बुद्धि बनाम ताकत": "ताकत से हम पहाड़ तोड़ सकते हैं, लेकिन बुद्धि से हम पूरी दुनिया जीत सकते हैं। बीरबल ने सिखाया कि हर समस्या का समाधान तलवार से नहीं, तर्क से होता है। आज के दौर में, समस्या सुलझाने वाले (Problem Solvers) ही असली हीरो हैं! 🧠",
  "सच्चाई का आईना": "ईमानदारी एक आईने की तरह है — यह हमें वैसा ही दिखाती है जैसे हम हैं। जब हमें कोई चीज़ मिलती है जो हमारी नहीं है, तो हमारा मन दो बातें कहता है। सही आवाज़ सुनना ही ईमानदारी है। ईमानदारी से लोगों के बीच विश्वास का धागा मज़बूत होता है! 🪞",
  "दोगुना होने की शक्ति": "राजा ने 1 रुपये को छोटा समझा, लेकिन दोगुना होने की शक्ति ने उसका खज़ाना खाली कर दिया। 1 से शुरू करके 30 बार दोगुना करें: 1, 2, 4, 8... 30वें दिन = 53 करोड़ से ज़्यादा! यही कंपाउंडिंग का जादू है — बचत और निवेश का सबसे बड़ा रहस्य! 💰",
  "अहिंसा": "अहिंसा का अर्थ है — किसी को भी, किसी भी तरह से नुकसान न पहुँचाना। गांधीजी ने अहिंसा को अपना सबसे बड़ा हथियार बनाया। बिना लड़े, बिना गुस्सा किए अपनी बात मनवाना ही सच्ची ताकत है। शांति में युद्ध से भी ज़्यादा शक्ति होती है! 🕊️",
  "दांडी मार्च": "12 मार्च 1930 को गांधीजी ने साबरमती आश्रम से दांडी तक 241 मील की पैदल यात्रा शुरू की। 78 साथियों के साथ 24 दिन चलकर समुद्र तट पर पहुँचे और नमक बनाकर अंग्रेज़ों के कानून को तोड़ा। एक मुट्ठी नमक ने पूरे देश को जगा दिया! 🧂",
  "रुई के गोले का जादू (Analogy)": "कल्पना कीजिए कि आसमान एक बहुत बड़ी रजाई है और बादल उसमें भरे हुए रुई के गोले हैं। ये गोले कभी हाथी बनते हैं तो कभी ऊंट। क्या आपने कभी बादलों में अपनी पसंद का खिलौना देखा है? ☁️",
  "बादलों का जन्म (Concept)": "जब सूरज की गर्मी से नदियों का पानी भाप बनकर ऊपर उड़ता है, तो वह ठंडा होकर बादल बन जाता है। यह बिलकुल वैसा ही है जैसे गरम चाय के कप से भाप निकलती है! 🌧️",
  "बादल टोली का मिशन (Task)": "आपका मिशन: आज आसमान की ओर देखें और कम से कम 3 अलग-अलग आकृतियों वाले बादल खोजें। क्या कोई बादल 'शेर' जैसा दिख रहा है? अपनी कॉपी में उसका चित्र बनाएं! ✏️",
  "आसमान का कैनवास (Logic)": "बादल सफेद क्यों होते हैं? क्योंकि वे सूरज की सारी रोशनी को फैला देते हैं। लेकिन जब वे बहुत घने हो जाते हैं, तो वे काले दिखने लगते हैं क्योंकि रोशनी उनके आर-पार नहीं जा पाती। 🌩️",
  "मौसम का मूड (Strategy)": "बादलों को देखकर आप बता सकते हैं कि आज छाता चाहिए या नहीं! अगर बादल गहरे और नीचे हैं, तो समझो बारिश आने वाली है। बादलों की भाषा समझना एक सुपरपावर है! ☂️",
  "जल चक्र का गीत (Global Link)": "बादल सिर्फ हमें छाया नहीं देते, वे पूरी दुनिया में पानी पहुँचाते हैं। समुद्र का पानी हमारे खेतों तक बादलों के ज़रिए ही पहुँचता है। यह प्रकृति का सबसे बड़ा ट्रांसपोर्ट सिस्टम है! 🌍",
  "बारिश के रक्षक (Mission)": "पेड़ बादलों को अपनी ओर खींचते हैं। आपका मिशन: एक पौधा लगाएं और उसे 'बादल मित्र' नाम दें। जितने ज़्यादा पेड़ होंगे, उतने ही ज़्यादा खुशहाल बादल हमारे पास आएंगे! 🌱",
  "बादलों का भविष्य (Vision)": "भविष्य में, हम बादलों से बिजली बनाने की तकनीक भी सीख सकते हैं। बादल हमारे सबसे बड़े ऊर्जा स्रोत बन सकते हैं। आप भी एक 'बादल वैज्ञानिक' बन सकते हैं! ⚡",
  "दिमाग की चाबी (Analogy)": "मुश्किल समस्या एक बंद ताले की तरह है, और बीरबल की बुद्धि उसकी चाबी। बिना ताला तोड़े, सही चाबी लगाकर उसे खोलना ही सच्ची समझदारी है। 🔑",
  "चतुराई का जासूस (Task)": "आपका मिशन: एक ऐसी पहेली सोचें जिसका जवाब कोई न दे पाए। क्या आप बीरबल की तरह अपने दोस्तों को अपनी बातों से हैरान कर सकते हैं? 🕵️",
  "असंभव का समाधान (Logic)": "जब अकबर ने पूछा कि आसमान में कितने तारे हैं, तो बीरबल ने भेड़ के बालों का उदाहरण दिया। यह 'आउट ऑफ द बॉक्स' सोच है — असंभव सवाल का चतुर जवाब! 💡",
  "बीरबल की रणनीति (Strategy)": "बीरबल हमेशा शांत रहते थे। जब सब गुस्सा होते, तब वे मुस्कुराकर रास्ता निकालते। शांत दिमाग ही सबसे तेज़ चलता है। 😌",
  "न्याय का मिशन - बीरबल (Mission)": "बीरबल ने हमेशा सच का साथ दिया। न्याय करना सिर्फ राजा का काम नहीं, हमारा भी है। हमेशा दूसरों के साथ वैसा ही व्यवहार करें जैसा आप खुद के लिए चाहते हैं। ⚖️",
  "नवरत्नों की विरासत (Vision)": "बीरबल अकबर के 'नवरत्नों' में से एक थे। आप भी अपनी प्रतिभा से अपने स्कूल या समाज के 'रत्न' बन सकते हैं। आपकी समझदारी ही आपकी पहचान है। 💎",
  "बुद्धिमानी का भविष्य (Mastery)": "आज के दौर में, समस्या सुलझाने वाले (Problem Solvers) ही असली हीरो हैं। बीरबल की कहानियाँ हमें हर मुश्किल में रास्ता खोजना सिखाती हैं। 🦸",
  "चमकदार खज़ाना (Analogy)": "ईमानदारी एक चमकदार खज़ाना है। क्या आप जानते हैं कि सच बोलना किसी भी खिलौने से ज़्यादा कीमती है? ईमानदार इंसान पर सब भरोसा करते हैं! 💎",
  "ईमानदारी की परख (Concept)": "जब हमें कोई चीज़ मिलती है जो हमारी नहीं है, तो हमारा मन दो बातें कहता है। एक कहता है 'रख लो', दूसरा कहता है 'लौटा दो'। सही आवाज़ सुनना ही ईमानदारी है। 🎯",
  "सच्चाई का आईना (Task)": "आपका मिशन: अगर आपको रास्ते में ₹10 मिले, तो आप क्या करेंगे? ईमानदारी की प्रैक्टिस करें! 💰",
  "विश्वास का धागा (Logic)": "ईमानदारी से लोगों के बीच 'विश्वास' का धागा मज़बूत होता है। अगर दिनेश गेंद लौटा देता है, तो उसके दोस्त उस पर हमेशा भरोसा करेंगे। 🤝",
  "सही फैसला (Strategy)": "फैसला लेने से पहले सोचें: 'अगर यह चीज़ मेरी खोई होती, तो मुझे कैसा लगता?' यह दूसरों के प्रति सहानुभूति रखने का तरीका है। 💭",
  "ईमानदारी का मिशन (Mission)": "अपने आसपास एक 'सत्य दल' बनाएं। जो हमेशा सच बोले और दूसरों की मदद करे। ईमानदारी ही सच्ची बहादुरी है। 🦸",
  "चरित्र का निर्माण (Vision)": "पैसा और खिलौने पुराने हो जाते हैं, लेकिन आपका 'चरित्र' हमेशा आपके साथ रहता है। एक ईमानदार बच्चा बड़ा होकर एक सच्चा नागरिक बनता है। 🌟",
  "सच्चाई की जीत (Mastery)": "अंत में, सच की ही जीत होती है। दिनेश ने गेंद लौटाकर सबका दिल जीत लिया। क्या आप भी 'ईमानदारी के हीरो' बनने के लिए तैयार हैं? 🏆",
  "समय की मशीन (Analogy)": "कल्पना कीजिए कि आपकी यादें एक समय की मशीन हैं जो आपको पापा के बचपन में ले जाती हैं। वहाँ न इंटरनेट था, न मोबाइल, फिर भी बहुत मज़ा था! ⏰",
  "पापा के मज़ेदार सपने (Concept)": "बचपन वह समय है जब हम कुछ भी बन सकते हैं — पायलट, जोकर, या चौकीदार। सपनों की कोई सीमा नहीं होती, और यही बचपन की सबसे बड़ी खूबसूरती है। 🌈",
  "बचपन की खोज (Task)": "आपका मिशन: अपने पापा या दादाजी से पूछें कि वे बचपन में कौन सा खेल खेलते थे। क्या आप वह खेल आज खेल सकते हैं? 🎮",
  "पुरानी यादों का तर्क (Logic)": "पुराने खेल जैसे गिल्ली-डंडा या कंचे हमें टीम वर्क और एकाग्रता सिखाते थे। वे आज के मोबाइल गेम्स से भी ज़्यादा चुनौतीपूर्ण थे! 🏏",
  "पीढ़ियों का पुल (Strategy)": "बुज़ुर्गों के अनुभव हमारे लिए एक पुल की तरह हैं। उनकी कहानियों से हमें जीवन के सबक मिलते हैं जो किताबों में नहीं लिखे होते। 🌉",
  "बचपन का mission (Mission)": "आज की भागदौड़ में अपना 'बचपन' जीवित रखें। रोज़ाना कम से कम एक घंटा बाहर खेलें और प्रकृति से जुड़ें। 🌿",
  "सपनों का भविष्य (Vision)": "पापा ने जो सपने देखे, उनमें से कुछ पूरे हुए। आप भी आज जो सपने देख रहे हैं, वे आपके कल का निर्माण करेंगे। बड़े सपने देखें! 🌟",
  "अपनी कहानी (Mastery)": "आप भी अपनी एक 'डायरी' लिखें। आज आप क्या बनना चाहते हैं? 10 साल बाद जब आप इसे पढ़ेंगे, तो आपको बहुत मज़ा आएगा! 📔",
  "चावल का जादू (Analogy)": "अगर आप 1 दाने से शुरू करें और रोज़ दोगुना करें, तो 30 दिनों में वह इतना हो जाएगा कि पूरा देश खा सके। यह 'कंपाउंडिंग' का जादू है! 🌾",
  "दोगुना होने की शक्ति (Concept)": "राजा ने 1 रुपये को छोटा समझा, लेकिन दोगुना होने की शक्ति ने उसका खज़ाना खाली कर दिया। गणित हमें बड़ी चीज़ों का अंदाज़ा लगाना सिखाता है। 📊",
  "लालच का जाल (Task)": "आपका मिशन: 2, 4, 8, 16... इस क्रम को 10 बार आगे बढ़ाएं। क्या आप देख सकते हैं कि संख्या कितनी तेज़ी से बढ़ रही है? गणित का कमाल! 🔢",
  "दान का गणित (Logic)": "दान करना सिर्फ पैसे देना नहीं, बल्कि संसाधनों का सही बँटवारा है। राजा को अपनी प्रजा का ध्यान रखना चाहिए, क्योंकि प्रजा से ही राज्य है। ⚖️",
  "बुद्धिमान सौदा (Strategy)": "संन्यासी ने चालाकी से नहीं, बल्कि गणित से राजा को सबक सिखाया। अपनी बात को तर्कों के साथ रखना ही सबसे बड़ी चतुराई है। 🧮",
  "न्याय का मिशन - दान (Mission)": "समाज में सबको बराबर का हिस्सा मिलना चाहिए। अगर किसी के पास बहुत ज़्यादा है और किसी के पास कुछ नहीं, तो हमें मदद के लिए आगे आना चाहिए। 🤲",
  "समृद्ध राज्य (Vision)": "एक समृद्ध राज्य वह है जहाँ कोई भूखा न सोए। आप भविष्य के नेता हैं, आप संसाधनों का सही उपयोग करना सीखें। 🌟",
  "परोपकार की जीत (Mastery)": "अंत में, राजा को अपनी गलती का अहसास हुआ। परोपकार ही सबसे बड़ा धर्म है। क्या आप आज किसी की मदद करेंगे? 🙏",
  "नमक का जादू (Analogy)": "नमक खाने में मामूली लगता है, लेकिन इसने पूरे देश को आज़ाद कराने में मदद की। एक छोटी सी चीज़ भी बहुत बड़ा बदलाव ला सकती है! 🧂",
  "अहिंसा की शक्ति (Concept)": "बिना लड़े, बिना गुस्सा किए अपनी बात मनवाना ही अहिंसा है। गांधीजी ने दिखाया कि शांति में युद्ध से भी ज़्यादा ताकत होती है। 🕊️",
  "दांडी यात्रा का मिशन (Task)": "आपका मिशन: गांधीजी की तरह शांति का एक संदेश लिखें। आप अपने स्कूल को और भी बेहतर and शांत कैसे बना सकते हैं? ✍️",
  "स्वतंत्रता का तर्क (Logic)": "अंग्रेज़ों ने नमक पर टैक्स लगाया था जो गलत था। अपनी आवाज़ उठाना और अन्याय के खिलाफ खड़े होना ही सच्ची स्वतंत्रता है। 🗣️",
  "सत्याग्रह की रणनीति (Strategy)": "सत्याग्रह का मतलब है 'सत्य के लिए आग्रह'। अगर आप सही हैं, तो आपको डरने की ज़रूरत नहीं है। सत्य आपका सबसे बड़ा हथियार है। 💪",
  "देशभक्ति का मिशन (Mission)": "देशभक्ति सिर्फ बॉर्डर पर नहीं, बल्कि अपने आसपास सफाई रखकर और नियमों का पालन करके भी दिखाई जा सकती है। 🇮🇳",
  "आज़ाद भारत (Vision)": "आज हम जिस आज़ाद भारत में हैं, वह महान लोगों के बलिदान का फल है। हमें इस आज़ादी का सम्मान करना चाहिए और देश को आगे बढ़ाना चाहिए। 🌟",
  "गांधीजी की विरासत (Mastery)": "सादा जीवन, उच्च विचार — यही गांधीजी की विरासत है। क्या आप अपनी ज़रूरतों को कम करके दूसरों के काम आ सकते हैं? 🙏",

  "ಬೆಂಚಿನ ಮೇಲೆ ಕುಳಿತು", "ಕನ್ನಡದ ಕಣ್ಮಣಿ", "ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ", "ಕುವೆಂಪು ರವರ ನಾಡಗೀತೆ": "ಕುವೆಂಪು ರವರ 'ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ' ಕರ್ನಾಟಕದ ಅಧಿಕೃತ ನಾಡಗೀತೆ. ಇದು ನಮ್ಮ ನಾಡಿನ ಪ್ರಕೃತಿ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ಇತಿಹಾಸವನ್ನು ಕೊಂಡಾಡುತ್ತದೆ. ಕುವೆಂಪು ರವರು ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತ ಮಹಾನ್ ಕವಿ. 🚩",
  "ಕರ್ನಾಟಕದ ಇತಿಹಾಸ": "ಕರ್ನಾಟಕವು ಸಾವಿರಾರು ವರ್ಷಗಳ ಸುದೀರ್ಘ ಇತಿಹಾಸವನ್ನು ಹೊಂದಿದೆ. ಕದಂಬರು, ಚಾಲುಕ್ಯರು, ಹೊಯ್ಸಳರು ಮತ್ತು ವಿಜಯನಗರದ ಅರಸರು ಈ ನಾಡನ್ನು ಆಳಿದರು. ನಮ್ಮ ನಾಡು ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯಕ್ಕೆ ಜಗತ್ಪ್ರಸಿದ್ಧಿಯಾಗಿದೆ. 🏛️",
  "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ": "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯವು ದಕ್ಷಿಣ ಭಾರತದ ಅತ್ಯಂತ ಶಕ್ತಿಯುತ ಸಾಮ್ರಾಜ್ಯವಾಗಿತ್ತು. ಹಂಪಿ ಇದರ ರಾಜಧಾನಿಯಾಗಿತ್ತು. ಕೃಷ್ಣದೇವರಾಯನ ಕಾಲದಲ್ಲಿ ಸಾಹಿತ್ಯ ಮತ್ತು ಕಲೆ ಅತ್ಯಂತ ಉನ್ನತ ಮಟ್ಟಕ್ಕೇರಿತು. 🏰",
  "ತೆನಾಲಿಯ ಹಾಸ್ಯ ಪ್ರಜ್ಞೆ": "ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನು ಕೇವಲ ಹಾಸ್ಯಗಾರನಲ್ಲ, ಅವನು ಅತ್ಯಂತ ಚತುರ ಮತ್ತು ಬುದ್ಧಿವಂತ. ಅವನು ತನ್ನ ಮಾತಿನ ಚಾತುರ್ಯದಿಂದ ಎಂತಹ ದೊಡ್ಡ ಶತ್ರುಗಳನ್ನೂ ಸೋಲಿಸುತ್ತಿದ್ದನು. 🧠",
  "ಕಾಡಿನ ಸಂರಕ್ಷಣೆ": "ಕಾಡುಗಳು ಭೂಮಿಯ ಶ್ವಾಸಕೋಶದಂತೆ. ಅವು ನಮಗೆ ಮಳೆಯನ್ನು ತರುತ್ತವೆ ಮತ್ತು ಪ್ರಾಣಿಗಳಿಗೆ ಆಶ್ರಯ ನೀಡುತ್ತವೆ. ಗಿಡಮರಗಳನ್ನು ಕಡಿಯುವುದನ್ನು ನಿಲ್ಲಿಸಿ, ಹೆಚ್ಚು ಗಿಡಗಳನ್ನು ನೆಡುವುದು ನಮ್ಮ ಗುರಿಯಾಗಬೇಕು. 🌳",

  // Computer Science entries
  "Abacus - The First Calculator": "The Abacus is the world's first mechanical counting device, invented over 5,000 years ago! It uses beads on rods to represent numbers. Even today, learning Abacus helps you do math faster than a calculator! 🧮",
  "Charles Babbage - Father of Computers": "Charles Babbage was an English mathematician who designed the first 'Analytical Engine' in the 1830s. Although he never finished it, his designs provided the foundation for all modern computers. 👨‍🔬",
  "Generations of Computers": "Computers have 5 generations! 1st used Vacuum Tubes (huge like a room), 2nd used Transistors, 3rd used Integrated Circuits, 4th used Microprocessors (like your PC), and 5th uses AI! ⚡",
  "Input Devices (Keyboard, Mouse)": "Input devices are like the computer's 'Sense Organs'. The keyboard lets you 'talk' by typing, and the mouse lets you 'point' and 'click'. Without them, you couldn't tell the computer what to do! 🖱️",
  "Output Devices (Monitor, Printer)": "Output devices are like the computer's 'Mouth and Hands'. The monitor shows you pictures and text, and the printer puts your work on paper. They show you the results of your commands! 🖥️",
  "Primary Memory (RAM, ROM)": "RAM (Random Access Memory) is like your 'Working Table' — it's where the computer keeps things while it's working on them. ROM (Read Only Memory) is like a 'Instruction Manual' that is always there. 🧠",
  "Secondary Storage (Hard Disk, USB)": "Secondary storage is like a 'Library' where you keep your books forever. Hard disks stay inside the computer, while USB drives are like 'Backpacks' that let you carry your files anywhere! 🎒",
  "Formatting (Bold, Italic, Underline)": "Formatting is like 'Dressing Up' your text! Bold makes it strong, Italic makes it stylish, and Underline draws attention. Use them to make your stories and letters look professional! ✍️",
  "Jaali Pattern Ninja": "A Jaali is like a 'breathing wall'. It has beautiful holes that let in light and cool air while keeping the heat out. In olden days, before fans and AC, Jaalis were the natural cooling systems of palaces! 🏰",
  "Mirror Magic Symmetry": "Symmetry is when one half of a shape is a perfect reflection of the other. It's like your face — if you put a mirror in the middle, the reflection completes the image! Nature loves symmetry — look at a butterfly's wings or a flower! 🦋",
  "The Floor Pattern Challenge": "Builders use patterns to make floors strong and beautiful. By repeating the same shape (like a brick or tile) without any gaps, they create a 'Tessellation'. Can you find a tessellation in your house? (Hint: check the bathroom tiles!) 🏠",
  "Brick Chemistry & Strength": "Bricks are made from clay and 'baked' in a giant oven called a Kiln. This heat changes the chemistry of the clay, making it as hard as rock! A single brick can hold the weight of two elephants if stacked correctly! 🐘",
  "Architect's Vision": "Architects are like 'Building Artists'. They use math and patterns to design safe and beautiful homes. They have to think about how much weight a wall can hold and where the windows should be to let in the most sun! 🏛️",
  "The Future of Building": "In the future, we might use 3D printers to 'print' entire houses made of recycled plastic or even Moon Dust! These houses will be ultra-strong, eco-friendly, and can be built in just 24 hours. You could be the one to design them! 🚀",

  // Math - Measuring Length
  "The Giant Step Analogy": "Imagine you are a giant! One big step for a giant might be 1 kilometre, while one small step for an ant is only 1 millimetre. We use different units (cm, m, km) because the world has both tiny things and giant distances! 👣",
  "Centimetre vs Metre War": "Centimetres (cm) are for small things like your pencil or eraser. Metres (m) are for bigger things like your height or the length of a classroom. 100 cm is exactly 1 metre — it's like 100 small soldiers making one big captain! ⚔️",
  "Kilometre Marathon": "When you travel between cities, metres are too small to count. That's when we use Kilometres (km). 1 km is 1,000 metres! A brisk 15-minute walk is usually about 1 km long. 🏃‍♂️",
  "Human Ruler Task": "Did you know your body is a ruler? Your hand span is about 15-20 cm, and the distance from your nose to your fingertips is about 1 metre. Ancient people used their feet and arms to measure everything before rulers were invented! 📏",
  "Map Scale Secrets": "Maps are like 'Shrink Rays'. A giant city can fit on a small piece of paper because we use a Scale. For example, 1 cm on the map might represent 1 km in real life. It's how explorers find their way without carrying a giant map! 🗺️",

  // Math - Jugs and Mugs
  "Litre vs Millilitre Battle": "Litres (L) are for big volumes like a bucket of water. Millilitres (mL) are for tiny drops like medicine or a teaspoon of honey. There are 1,000 mL in 1 Litre! 💧",
  "Measuring Jug Missions": "A measuring jug is a scientist's best friend in the kitchen. It has lines that tell you exactly how much liquid is inside. Accuracy is key — too much water and your cake won't bake! 🧪",

  // General Subject Fallbacks
  "mathematics": "Math is the language of the universe! From the patterns on a tiger's skin to the orbits of the planets, everything follows mathematical rules. Let's solve some mysteries! 🔢",
  "science": "EVS helps us understand the amazing world around us — from the tiniest ant to the giant elephant. Nature is the best teacher! 🌿",
  "hindi": "हिन्दी हमारी शान है! कहानियों और कविताओं के ज़रिए हम अपनी संस्कृति और मूल्यों को सीखते हैं। चलिए, शब्दों के सफर पर चलते हैं! 📝",
  "english": "English is a window to the world! It helps us share our ideas with people everywhere. Let's read, write, and dream in English! 📖",
  "kannada": "ಕನ್ನಡ ಅಚ್ಚುಮೆಚ್ಚಿನ ಭಾಷೆ! ನಮ್ಮ ನಾಡು, ನುಡಿ ಮತ್ತು ಸಂಸ್ಕೃತಿಯ ಬಗ್ಗೆ ತಿಳಿಯೋಣ. 🚩",
  "computers": "Computers are magic boxes that follow our commands! Learning how they work is like learning a secret superpower for the future. 💻"
};

export async function generateAIResponse(type: string, title: string, context?: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const key = title;
  const ctx = context?.toLowerCase() || '';
  
  // Try exact match, then context match, then subject fallback
  let response = KB[key];
  
  if (!response && context) {
    // Try to find if any KB key contains the context or vice versa
    const foundKey = Object.keys(KB).find(k => k.includes(title) || title.includes(k));
    if (foundKey) response = KB[foundKey];
  }

  if (!response) {
    if (ctx.includes('math')) response = KB['mathematics'];
    else if (ctx.includes('evs') || ctx.includes('sci')) response = KB['science'];
    else if (ctx.includes('hindi')) response = KB['hindi'];
    else if (ctx.includes('english')) response = KB['english'];
    else if (ctx.includes('kannada')) response = KB['kannada'];
    else if (ctx.includes('computer')) response = KB['computers'];
  }

  return response || `That's a very interesting topic! Let's explore more about **${title}** together. It's an important part of our Grade 4 journey! 🚀`;
}
