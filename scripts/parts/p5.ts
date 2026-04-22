// ── ENGLISH (MARIGOLD) ────────────────────────────────────────────────────────
const englishSubject: Subject = {
    id: 'english', title: 'English (Marigold)', icon: '📖', color: '#0984E3',
    chapters: [
        {
            id: 'en1', title: 'Unit 1: Wake Up!', topics: [{
                id: 'en1t1', title: 'Poem: Wake Up!',
                subtopics: ['Reading the poem aloud', 'Animals in the poem', 'Describing morning sounds'],
                readingText: {
                    en: 'Wake up! Wake up! The sun is up. The birds are singing. The bees are buzzing. The flowers are blooming. It is a beautiful morning. Time to start a new day!',
                    hi: 'उठो! उठो! सूरज उग आया है। पक्षी गा रहे हैं। मधुमक्खियाँ गुनगुना रही हैं। फूल खिल रहे हैं। यह एक सुंदर सुबह है।',
                    kn: 'ಎದ್ದೇಳಿ! ಎದ್ದೇಳಿ! ಸೂರ್ಯ ಉದಯಿಸಿದ್ದಾನೆ. ಹಕ್ಕಿಗಳು ಹಾಡುತ್ತಿವೆ. ಜೇನ್ನೊಣಗಳು ಝೇಂಕರಿಸುತ್ತಿವೆ. ಹೂವುಗಳು ಅರಳುತ್ತಿವೆ.'
                },
                activities: [
                    act('Read Aloud', 'Read the poem aloud with expression and actions.', 'speaking', 'low',
                        ['Read poem once silently', 'Identify action words', 'Read aloud with actions', 'Record yourself reading'], [], 'Can you add one more verse to the poem?'),
                    act('Morning Sounds', 'Go outside for 5 minutes and list all sounds you hear.', 'listening', 'mid',
                        ['Sit quietly outside', 'Listen carefully', 'Write every sound you hear', 'Classify: animal, nature, human-made'], ['Notebook', 'Pencil'], 'Which sound do you like most in the morning?'),
                    act('Poem Illustration', 'Draw a picture for each stanza of the poem.', 'drawing', 'high',
                        ['Read each stanza', 'Draw what you imagine', 'Add colour', 'Write the stanza below each drawing'], ['Paper', 'Crayons'], 'Which stanza did you enjoy illustrating most?')],
                quiz: [
                    q('Who says "Buzz-buzz" in the poem?', ['Birds', 'Bees', 'Dogs', 'Cats'], 'Bees', 'Bees make a buzzing sound — "buzz-buzz."'),
                    q('What does the sun do in the poem?', ['Sets', 'Rises/comes up', 'Hides', 'Shines at night'], 'Rises/comes up', 'The poem describes the sun rising in the morning.'),
                    q('The poem is about ___', ['Night time', 'Morning time', 'Afternoon', 'Evening'], 'Morning time', 'The poem describes a beautiful morning with birds, bees and flowers.'),
                    q('What do flowers do in the poem?', ['Sleep', 'Bloom', 'Fall', 'Dance'], 'Bloom', 'Flowers bloom (open up) in the morning sunlight.')],
                learningOutcomes: ['Read a poem with expression', 'Identify rhyming words', 'Describe morning sounds'],
                crossCurricularLink: 'EVS: Animals and their sounds'
            }]
        },
        {
            id: 'en2', title: 'Unit 2: Neha\'s Alarm Clock', topics: [{
                id: 'en2t1', title: 'Story: Neha\'s Alarm Clock',
                subtopics: ['Reading comprehension', 'Sequence of events', 'Describing characters'],
                readingText: {
                    en: 'Neha always woke up late. One day, her mother gave her an alarm clock. The next morning, the alarm rang at 6 o\'clock. Neha woke up, got ready quickly and reached school on time. Her teacher was very happy.',
                    hi: 'नेहा हमेशा देर से उठती थी। एक दिन उसकी माँ ने उसे एक अलार्म घड़ी दी। अगली सुबह अलार्म 6 बजे बजा। नेहा उठी, जल्दी तैयार हुई और समय पर स्कूल पहुँची।',
                    kn: 'ನೇಹಾ ಯಾವಾಗಲೂ ತಡವಾಗಿ ಎದ್ದೇಳುತ್ತಿದ್ದಳು. ಒಂದು ದಿನ ಅವಳ ತಾಯಿ ಅಲಾರಂ ಗಡಿಯಾರ ಕೊಟ್ಟರು. ಮರುದಿನ ಬೆಳಿಗ್ಗೆ 6 ಗಂಟೆಗೆ ಅಲಾರಂ ಬಾರಿಸಿತು.'
                },
                activities: [
                    act('Story Sequence', 'Put the events of the story in the correct order.', 'writing', 'low',
                        ['Write 5 events from the story', 'Cut them into strips', 'Arrange in correct order', 'Paste in sequence'], ['Paper', 'Scissors', 'Glue'], 'What would have happened if Neha had no alarm clock?'),
                    act('Character Description', 'Write 5 sentences describing Neha.', 'writing', 'mid',
                        ['Think about Neha\'s habits', 'Write about her problem', 'Write about the solution', 'Write about the change in her'], ['Notebook', 'Pencil'], 'How is Neha similar to or different from you?'),
                    act('My Morning Routine', 'Write and illustrate your morning routine.', 'writing', 'high',
                        ['List 8 things you do each morning', 'Write the time for each', 'Draw each activity', 'Write sentences about each'], ['Paper', 'Crayons'], 'How can you make your morning routine better?')],
                quiz: [
                    q('Why did Neha\'s mother give her an alarm clock?', ['As a birthday gift', 'Because she woke up late', 'For decoration', 'To learn time'], 'Because she woke up late', 'Neha had a habit of waking up late, so her mother gave her an alarm clock.'),
                    q('What time did the alarm ring?', ['5 o\'clock', '6 o\'clock', '7 o\'clock', '8 o\'clock'], '6 o\'clock', 'The alarm rang at 6 o\'clock in the morning.'),
                    q('How did Neha feel after reaching school on time?', ['Sad', 'Angry', 'Happy/proud', 'Tired'], 'Happy/proud', 'Neha felt good about being on time for the first time.'),
                    q('The opposite of "late" is ___', ['Slow', 'Early', 'Fast', 'Quick'], 'Early', 'Late and early are antonyms (opposites).')],
                learningOutcomes: ['Read and understand a story', 'Sequence events', 'Write simple sentences'],
                crossCurricularLink: 'Maths: Reading time on a clock'
            }]
        },
        {
            id: 'en3', title: 'Unit 3: Noses', topics: [{
                id: 'en3t1', title: 'Poem: Noses',
                subtopics: ['Animal noses and their uses', 'Rhyming words', 'Describing words (adjectives)'],
                readingText: {
                    en: 'Noses, noses, all kinds of noses! The elephant\'s nose is long and curly. The pig\'s nose is flat and pink. The dog\'s nose is wet and cold. My nose is just right for me!',
                    hi: 'नाक, नाक, सभी प्रकार की नाकें! हाथी की नाक लंबी और घुमावदार है। सुअर की नाक चपटी और गुलाबी है। कुत्ते की नाक गीली और ठंडी है।',
                    kn: 'ಮೂಗು, ಮೂಗು, ಎಲ್ಲಾ ರೀತಿಯ ಮೂಗುಗಳು! ಆನೆಯ ಮೂಗು ಉದ್ದ ಮತ್ತು ಸುರುಳಿಯಾಗಿದೆ. ಹಂದಿಯ ಮೂಗು ಚಪ್ಪಟೆ ಮತ್ತು ಗುಲಾಬಿ ಬಣ್ಣದ್ದು.'
                },
                activities: [
                    act('Adjective Hunt', 'Find all describing words (adjectives) in the poem.', 'writing', 'low',
                        ['Read the poem', 'Underline all adjectives', 'List them', 'Write your own adjective for each animal nose'], ['Notebook', 'Pencil'], 'Can you describe your own nose using 3 adjectives?'),
                    act('Animal Nose Book', 'Draw 6 animals and describe their noses.', 'drawing', 'mid',
                        ['Draw elephant, dog, pig, cat, rabbit, bird', 'Draw their noses', 'Write 2 adjectives for each', 'Write what each nose is used for'], ['Paper', 'Crayons'], 'Which animal has the most useful nose?'),
                    act('Rhyme Time', 'Find rhyming pairs and write a new verse for the poem.', 'writing', 'high',
                        ['Find rhyming words in poem', 'List 5 rhyming pairs', 'Write a new 4-line verse', 'Read it aloud'], ['Notebook', 'Pencil'], 'Can you write a poem about ears or eyes?')],
                quiz: [
                    q('The elephant\'s nose is ___', ['Short and flat', 'Long and curly', 'Wet and cold', 'Pink and round'], 'Long and curly', 'An elephant\'s trunk (nose) is long and can curl.'),
                    q('An adjective is a word that ___', ['Names a person', 'Describes a noun', 'Shows action', 'Connects words'], 'Describes a noun', 'Adjectives describe nouns — they tell us what something is like.'),
                    q('Which word rhymes with "nose"?', ['Rose', 'Nose', 'Toes', 'Both A and C'], 'Both A and C', 'Rose and toes both rhyme with nose.'),
                    q('A dog\'s nose is ___', ['Dry and warm', 'Wet and cold', 'Long and curly', 'Flat and pink'], 'Wet and cold', 'A healthy dog\'s nose is typically wet and cool.')],
                learningOutcomes: ['Identify adjectives', 'Find rhyming words', 'Describe animals using adjectives'],
                crossCurricularLink: 'EVS: Animal adaptations'
            }]
        },
