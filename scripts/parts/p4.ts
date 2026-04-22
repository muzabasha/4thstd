// ── EVS (LOOKING AROUND) ─────────────────────────────────────────────────────
const evsSubject: Subject = {
    id: 'science', title: 'EVS (Looking Around)', icon: '🌿', color: '#00B894',
    chapters: [
        {
            id: 'e1', title: '1. Going to School', topics: [{
                id: 'e1t1', title: 'Transport to School',
                subtopics: ['Different ways children travel to school', 'Bridges: bamboo, rope, cement', 'Boats and vallams in Kerala'],
                readingText: {
                    en: 'Children in India travel to school in many ways — by bus, boat, horse, bicycle or on foot. In hilly areas, children cross rope bridges. In Kerala, some children use small boats called vallams.',
                    hi: 'भारत में बच्चे बस, नाव, घोड़े, साइकिल या पैदल स्कूल जाते हैं। पहाड़ी इलाकों में बच्चे रस्सी के पुल पार करते हैं। केरल में कुछ बच्चे वल्लम नाव से जाते हैं।',
                    kn: 'ಭಾರತದಲ್ಲಿ ಮಕ್ಕಳು ಬಸ್, ದೋಣಿ, ಕುದುರೆ, ಸೈಕಲ್ ಅಥವಾ ನಡೆದು ಶಾಲೆಗೆ ಹೋಗುತ್ತಾರೆ. ಕೇರಳದಲ್ಲಿ ಕೆಲವು ಮಕ್ಕಳು ವಲ್ಲಂ ದೋಣಿಯಲ್ಲಿ ಹೋಗುತ್ತಾರೆ.'
                },
                activities: [
                    act('My Journey Map', 'Draw a map of your route from home to school.', 'drawing', 'low',
                        ['Draw your home', 'Draw the school', 'Draw the path between them', 'Mark landmarks like shops, parks'], ['Paper', 'Crayons'], 'How many minutes does your journey take?'),
                    act('Transport Survey', 'Survey classmates: how do they come to school?', 'writing', 'mid',
                        ['Ask 15 classmates', 'Record: walk/bus/car/cycle/other', 'Make a tally chart', 'Draw a bar graph'], ['Notebook', 'Pencil'], 'Which is the most common way to travel?'),
                    act('Bridge Builder', 'Build a model bridge using sticks and string.', 'performing', 'high',
                        ['Collect 10 ice-cream sticks', 'Tie with string to make a rope bridge', 'Test with a small toy', 'Compare strength with a flat stick bridge'], ['Ice-cream sticks', 'String', 'Small toy'], 'Which bridge design is stronger?')],
                quiz: [
                    q('Children in Kerala use ___ to cross water.', ['Rope bridge', 'Vallam (boat)', 'Bicycle', 'Bus'], 'Vallam (boat)', 'Vallams are small wooden boats used in Kerala.'),
                    q('A bamboo bridge is used in ___ areas.', ['Desert', 'Hilly/forest', 'City', 'Coastal'], 'Hilly/forest', 'Bamboo bridges are common in hilly and forested regions.'),
                    q('Which transport does NOT need a road?', ['Car', 'Bus', 'Boat', 'Truck'], 'Boat', 'Boats travel on water, not roads.'),
                    q('Why do some children walk long distances to school?', ['They like walking', 'No other transport available', 'School is nearby', 'Roads are good'], 'No other transport available', 'In remote areas, there may be no buses or roads.')],
                learningOutcomes: ['Appreciate diversity of transport in India', 'Understand challenges faced by children', 'Draw simple maps'],
                crossCurricularLink: 'Maths: Measuring distances'
            }]
        },
        {
            id: 'e2', title: '2. Ear to Ear', topics: [{
                id: 'e2t1', title: 'Animal Ears and Hearing',
                subtopics: ['Different ear shapes in animals', 'How animals use hearing', 'Animals with hidden ears'],
                readingText: {
                    en: 'Different animals have different ear shapes. Elephants have large fan-shaped ears to cool their body. Rabbits have long ears to hear predators. Birds have tiny holes hidden by feathers — they have no outer ears.',
                    hi: 'अलग-अलग जानवरों के कान अलग-अलग आकार के होते हैं। हाथी के बड़े पंखे जैसे कान शरीर को ठंडा रखते हैं। खरगोश के लंबे कान शिकारियों को सुनने में मदद करते हैं।',
                    kn: 'ವಿವಿಧ ಪ್ರಾಣಿಗಳಿಗೆ ವಿವಿಧ ಆಕಾರದ ಕಿವಿಗಳಿವೆ. ಆನೆಯ ದೊಡ್ಡ ಬೀಸಣಿಗೆ ಆಕಾರದ ಕಿವಿಗಳು ದೇಹವನ್ನು ತಂಪಾಗಿಸುತ್ತವೆ.'
                },
                activities: [
                    act('Ear Shape Book', 'Draw 6 animals and their ear shapes.', 'drawing', 'low',
                        ['Draw elephant, rabbit, cat, dog, bird, snake', 'Draw their ears accurately', 'Label each ear type', 'Write one fact about each'], ['Paper', 'Crayons'], 'Which animal has the biggest ears compared to its body?'),
                    act('Sound Experiment', 'Test how ear shape affects hearing using paper cones.', 'performing', 'mid',
                        ['Roll paper into a cone', 'Hold wide end to ear', 'Listen to a soft sound', 'Compare with and without cone'], ['Paper', 'Tape'], 'Why do elephants flap their ears?'),
                    act('Animal Hearing Research', 'Find out which animals can hear sounds humans cannot.', 'writing', 'high',
                        ['Research: dogs, bats, dolphins', 'Write their hearing range', 'Compare with human hearing', 'Make a comparison chart'], ['Books', 'Notebook'], 'How do bats use sound to navigate?')],
                quiz: [
                    q('Which animal has fan-shaped ears to cool its body?', ['Rabbit', 'Elephant', 'Dog', 'Cat'], 'Elephant', 'Elephant ears have many blood vessels and act like fans to cool the blood.'),
                    q('Birds have ___ instead of outer ears.', ['Big ears', 'Tiny holes covered by feathers', 'No ears at all', 'Ears like humans'], 'Tiny holes covered by feathers', 'Birds have ear openings hidden under their feathers.'),
                    q('Long ears help rabbits to ___', ['Run faster', 'Hear predators from far', 'Keep warm', 'Swim better'], 'Hear predators from far', 'Long ears can rotate to catch sounds from different directions.'),
                    q('Which animal cannot hear?', ['Snake', 'Dog', 'Elephant', 'Bat'], 'Snake', 'Snakes have no ears; they sense vibrations through their jaw.')],
                learningOutcomes: ['Compare ear shapes across animals', 'Understand the function of ears', 'Appreciate animal adaptations'],
                crossCurricularLink: 'Science: Sound and vibration'
            }]
        },
        {
            id: 'e3', title: '3. A Day with Nandu', topics: [{
                id: 'e3t1', title: 'Elephants — Life and Behaviour',
                subtopics: ['Elephant herd structure', 'What elephants eat', 'Elephant communication', 'Threats to elephants'],
                readingText: {
                    en: 'Elephants live in herds led by the oldest female called the matriarch. They eat grass, leaves, bark and fruit. Baby elephants are called calves. Elephants communicate using low rumbles that humans cannot hear.',
                    hi: 'हाथी झुंड में रहते हैं जिसका नेतृत्व सबसे बुजुर्ग मादा करती है जिसे मातृसत्ता कहते हैं। वे घास, पत्तियाँ, छाल और फल खाते हैं।',
                    kn: 'ಆನೆಗಳು ಹಿಂಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಅತ್ಯಂತ ಹಿರಿಯ ಹೆಣ್ಣಾನೆ ನಾಯಕಿ. ಅವು ಹುಲ್ಲು, ಎಲೆ, ತೊಗಟೆ ಮತ್ತು ಹಣ್ಣು ತಿನ್ನುತ್ತವೆ.'
                },
                activities: [
                    act('Elephant Diary', 'Write a diary entry as Nandu the elephant for one day.', 'writing', 'low',
                        ['Imagine you are Nandu', 'Write what you ate', 'Describe your herd', 'Write about a challenge you faced'], ['Notebook', 'Pencil'], 'What would be the hardest part of being an elephant?'),
                    act('Elephant Food Chart', 'Make a chart of what elephants eat in a day.', 'drawing', 'mid',
                        ['Research elephant diet', 'Draw each food item', 'Write quantity (elephants eat 150 kg/day!)', 'Compare with what you eat'], ['Paper', 'Crayons'], 'How many times your weight does an elephant eat per day?'),
                    act('Save the Elephant', 'Make a poster about elephant conservation.', 'performing', 'high',
                        ['List threats: habitat loss, poaching', 'Write 3 ways to protect elephants', 'Draw an elephant in its habitat', 'Present to class'], ['Paper', 'Crayons'], 'What can YOU do to help elephants?')],
                quiz: [
                    q('Who leads an elephant herd?', ['Oldest male', 'Youngest female', 'Oldest female', 'Strongest elephant'], 'Oldest female', 'The matriarch (oldest female) leads the herd with her experience.'),
                    q('Baby elephants are called ___', ['Cubs', 'Calves', 'Foals', 'Pups'], 'Calves', 'Baby elephants, like baby cows, are called calves.'),
                    q('Elephants eat about ___ kg of food per day.', ['15', '50', '150', '500'], '150', 'Adult elephants eat up to 150 kg of vegetation daily.'),
                    q('Male elephants leave the herd at about age ___', ['5', '10', '15', '20'], '15', 'Young male elephants leave the herd around age 14-15.')],
                learningOutcomes: ['Understand elephant social structure', 'Learn about elephant diet and habitat', 'Appreciate wildlife conservation'],
                crossCurricularLink: 'Hindi: Story of Nandu'
            }]
        },
