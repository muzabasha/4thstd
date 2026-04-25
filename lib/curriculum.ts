/* CBSE Grade 4 — Full Syllabus */
export interface Activity {
  title: string; description: string;
  skill: 'listening' | 'speaking' | 'writing' | 'performing' | 'drawing' | 'calculating';
  level: 'low' | 'mid' | 'high';
  steps: string[]; materials?: string[]; doItYourself?: string;
}
export interface VirtualLab { title: string; simulation: string; task: string; }
export interface QuizQuestion {
  question: string; options: string[]; correctAnswer: string;
  explanation?: string; hint?: string;
}
export interface Topic {
  id: string; title: string; subtopics: string[];
  activities: Activity[]; virtualLab?: VirtualLab; quiz: QuizQuestion[];
  learningOutcomes: string[]; crossCurricularLink?: string;
  readingText?: { en: string; hi?: string; kn?: string };
}
export interface Chapter { id: string; title: string; topics: Topic[]; }
export interface Subject { id: string; title: string; icon: string; color: string; chapters: Chapter[]; }

// helpers
function q(question: string, options: string[], correctAnswer: string, explanation?: string): QuizQuestion {
  return { question, options, correctAnswer, explanation };
}
function act(title: string, description: string, skill: Activity['skill'], level: Activity['level'],
  steps: string[], materials?: string[], doItYourself?: string): Activity {
  return { title, description, skill, level, steps, materials, doItYourself };
}

// ─── MATHEMATICS ──────────────────────────────────────────────────────────────
const mathSubject: Subject = {
  id: 'mathematics', title: 'Mathematics (Math-Magic)', icon: '📐', color: '#6C5CE7',
  chapters: [
    {
      id: 'm1', title: '1. Building with Bricks', topics: [{
        id: 'm1-t1', title: 'Patterns & Symmetry',
        subtopics: ['The Lego Lunchbox Analogy', 'Counting Faces & Edges', 'Jaali Pattern Ninja', 'Mirror Magic Symmetry', 'The Floor Pattern Challenge', 'Brick Chemistry & Strength', 'Architect\'s Vision', 'The Future of Building'],
        readingText: {
          en: 'Bricks are cuboids with 6 faces, 8 corners and 12 edges. A Jaali is a decorative pattern with holes that lets air and light through.',
          hi: 'ईंटें घनाभ होती हैं जिनके 6 फलक, 8 कोने और 12 किनारे होते हैं। जाली एक सजावटी पैटर्न है।',
          kn: 'ಇಟ್ಟಿಗೆಗಳು ಆಯತಾಕಾರದ ಘನಗಳಾಗಿದ್ದು 6 ಮುಖ, 8 ಮೂಲೆ ಮತ್ತು 12 ಅಂಚುಗಳಿವೆ.'
        },
        activities: [
          act('Wall Designer', 'Draw a 3×3 brick wall on grid paper and find its symmetry line.', 'drawing', 'low',
            ['Draw a 3×3 grid', 'Sketch bricks', 'Colour alternate bricks', 'Find the symmetry line'],
            ['Grid paper', 'Crayons'], 'Use a mirror to check symmetry!'),
          act('Jaali Maker', 'Cut a Jaali pattern from paper.', 'performing', 'mid',
            ['Fold paper in half', 'Cut small shapes', 'Unfold and hold to light', 'Count the holes'],
            ['Paper', 'Scissors'], 'How many holes did you make?'),
          act('3D Brick Model', 'Build a brick from clay and count its faces.', 'performing', 'high',
            ['Roll clay into a rectangle', 'Press flat on all 6 sides', 'Count faces, edges, corners', 'Compare with a real brick'],
            ['Clay', 'Ruler'], 'Can you make a Jaali wall with 4 clay bricks?')
        ],
        virtualLab: { title: 'Brick Builder Lab', simulation: 'Place bricks on a grid', task: 'Build a wall with a Jaali pattern using 9 bricks' },
        quiz: [
          q('How many faces does a brick have?', ['4', '6', '8', '12'], '6', 'A brick is a cuboid with 6 rectangular faces.'),
          q('What is a Jaali?', ['A solid wall', 'A pattern with holes', 'A window frame', 'A door'], 'A pattern with holes', 'Jaali patterns have holes to let air and light through.'),
          q('How many corners does a brick have?', ['4', '6', '8', '10'], '8', 'A cuboid has 8 corners (vertices).'),
          q('A brick is which 3D shape?', ['Cube', 'Cuboid', 'Cylinder', 'Sphere'], 'Cuboid', 'A brick is longer than wide — that makes it a cuboid.')
        ],
        learningOutcomes: ['Identify 3D shapes in real life', 'Understand symmetry', 'Count faces, edges, vertices'],
        crossCurricularLink: 'EVS: Types of houses and building materials'
      }]
    },
    {
      id: 'm2', title: '2. Long and Short', topics: [{
        id: 'm2-t1', title: 'Measuring Length',
        subtopics: ['The Giant Step Analogy', 'Centimetre vs Metre War', 'Kilometre Marathon', 'Human Ruler Task', 'Estimating the Impossible', 'Map Scale Secrets', 'Sports Track Design', 'Navigation Mastery'],
        readingText: {
          en: '1 metre = 100 centimetres. 1 kilometre = 1000 metres. We measure short things in cm, longer things in m, and very long distances in km.',
          hi: '1 मीटर = 100 सेंटीमीटर। 1 किलोमीटर = 1000 मीटर। हम छोटी चीजें सेमी में और बड़ी दूरी किमी में मापते हैं।',
          kn: '1 ಮೀಟರ್ = 100 ಸೆಂಟಿಮೀಟರ್. 1 ಕಿಲೋಮೀಟರ್ = 1000 ಮೀಟರ್.'
        },
        activities: [
          act('Body Ruler', 'Measure body parts using a ruler and tape.', 'calculating', 'low',
            ['Measure your hand span in cm', 'Measure your height in cm', 'Convert height to metres', 'Compare with a friend'],
            ['Ruler', 'Measuring tape'], 'How many hand spans make 1 metre?'),
          act('Distance Detective', 'Estimate distances around school.', 'calculating', 'mid',
            ['Walk from class to playground', 'Count your steps', 'Measure one step in cm', 'Calculate total distance in m'],
            ['Notebook', 'Pen'], 'How far is the school gate in metres?'),
          act('Map Maker', 'Draw a scale map of your room.', 'drawing', 'high',
            ['Measure room length and width', 'Choose a scale (1 cm = 1 m)', 'Draw the room on paper', 'Add furniture to scale'],
            ['Graph paper', 'Ruler', 'Pencil'], 'Can you find the perimeter from your map?')
        ],
        virtualLab: { title: 'Length Converter Lab', simulation: 'Convert between cm, m, and km interactively', task: 'Arrange objects from shortest to longest' },
        quiz: [
          q('How many centimetres in 1 metre?', ['10', '50', '100', '1000'], '100', '1 metre = 100 centimetres.'),
          q('How many metres in 1 kilometre?', ['10', '100', '1000', '10000'], '1000', '1 kilometre = 1000 metres.'),
          q('Which unit is best for measuring a pencil?', ['Kilometre', 'Metre', 'Centimetre', 'Litre'], 'Centimetre', 'Small objects are measured in centimetres.'),
          q('A road is 3 km long. How many metres is that?', ['300', '3000', '30000', '30'], '3000', '3 km × 1000 = 3000 metres.')
        ],
        learningOutcomes: ['Convert between cm, m, and km', 'Estimate lengths', 'Use rulers and measuring tapes'],
        crossCurricularLink: 'EVS: Distances between cities and train journeys'
      }]
    },
    {
      id: 'm3', title: '3. A Trip to Bhopal', topics: [{
        id: 'm3-t1', title: 'Large Numbers & Estimation',
        subtopics: ['The Number Skyscraper', 'Bus Seat Logic', 'Mental Math Buffet', 'Addition Mission', 'The River Crossing Challenge', 'Bhopal History & Geography', 'Estimated Arrival Time', 'Trip Planning Mastery'],
        readingText: {
          en: 'When we plan trips, we use large numbers. 210 students need buses—if each bus holds 40, we need 6 buses.',
          hi: 'यात्रा की योजना बनाते समय हम बड़ी संख्याओं का उपयोग करते हैं। 210 छात्रों को बसों की ज़रूरत—अगर हर बस में 40 बैठें, तो 6 बसें चाहिए।',
          kn: 'ಪ್ರವಾಸ ಯೋಜಿಸುವಾಗ ನಾವು ದೊಡ್ಡ ಸಂಖ್ಯೆಗಳನ್ನು ಬಳಸುತ್ತೇವೆ.'
        },
        activities: [
          act('Trip Planner', 'Plan a class trip: count students, arrange buses.', 'calculating', 'low',
            ['Count students', 'Divide by 40'], ['Notebook'], 'What if 5 teachers also come?')
        ],
        quiz: [
          q('210 ÷ 40 = ? (rounded up)', ['4', '5', '6', '7'], '6', '6 buses needed.')
        ],
        learningOutcomes: ['Read and write large numbers', 'Perform division in context']
      }]
    },
    {
      id: 'm4', title: '4. Tick-Tick-Tick', topics: [{
        id: 'm4-t1', title: 'Time & Calendar',
        subtopics: ['12-Hour vs 24-Hour Clock', 'Railway Time', 'Journey Durations'],
        readingText: {
          en: 'A day has 24 hours. AM is before noon, PM is after noon.',
          hi: 'एक दिन में 24 घंटे होते हैं। दोपहर 2:30 = 14:30।',
          kn: 'ಒಂದು ದಿನದಲ್ಲಿ 24 ಗಂಟೆಗಳಿವೆ.'
        },
        activities: [
          act('Clock Reader', 'Read time from a clock model.', 'calculating', 'low', ['Look at hands', 'Write time'], ['Clock'], 'Convert to 24-hour time.')
        ],
        quiz: [
          q('3:00 PM in 24-hour format is?', ['03:00', '15:00'], '15:00', '3 PM + 12 = 15:00.')
        ],
        learningOutcomes: ['Read time in both formats']
      }]
    },
    {
      id: 'm5', title: '5. The Way The World Looks', topics: [{
        id: 'm5-t1', title: 'Perspective',
        subtopics: ['Top, Side & Front Views', 'Map Reading'],
        readingText: {
          en: 'Objects look different from different sides. A map is a top view.',
          hi: 'चीज़ें अलग-अलग तरफ से अलग दिखती हैं।',
          kn: 'ವಸ್ತುಗಳು ವಿವಿಧ ದಿಕ್ಕುಗಳಿಂದ ವಿಭಿನ್ನವಾಗಿ ಕಾಣುತ್ತವೆ.'
        },
        activities: [
          act('View Spotter', 'Draw a bottle from 3 sides.', 'drawing', 'low', ['Front view', 'Top view', 'Side view'], ['Paper'], 'Which is clearest?')
        ],
        quiz: [
          q('A map is usually drawn from which view?', ['Front', 'Top'], 'Top', 'Bird\'s eye view.')
        ],
        learningOutcomes: ['Understand 3D perspectives']
      }]
    },
    {
      id: 'm6', title: '6. The Junk Seller', topics: [{
        id: 'm6-t1', title: 'Money & Profit',
        subtopics: ['Cost Price vs Selling Price', 'Calculating Profit'],
        readingText: {
          en: 'Profit = Selling Price − Cost Price.',
          hi: 'लाभ = बिक्री मूल्य − लागत मूल्य।',
          kn: 'ಲಾಭ = ಮಾರಾಟ ಬೆಲೆ − ವೆಚ್ಚ ಬೆಲೆ.'
        },
        activities: [
          act('Shopkeeper Game', 'Practice buying and selling.', 'performing', 'low', ['Price items', 'Sell and give change'], ['Play money'], 'Make ₹10 profit.')
        ],
        quiz: [
          q('Buy at ₹30, sell at ₹45. Profit?', ['₹10', '₹15'], '₹15', '45 - 30 = 15.')
        ],
        learningOutcomes: ['Calculate profit and loss']
      }]
    },
    {
      id: 'm7', title: '7. Jugs and Mugs', topics: [{
        id: 'm7-t1', title: 'Capacity',
        subtopics: ['Litre vs Millilitre', 'Measuring Volume'],
        readingText: {
          en: '1 Litre = 1000 millilitres.',
          hi: '1 लीटर = 1000 मिलीलीटर।',
          kn: '1 ಲೀಟರ್ = 1000 ಮಿಲಿಲೀಟರ್.'
        },
        activities: [
          act('Pour & Measure', 'Measure water using cups.', 'performing', 'low', ['Fill 1L bottle', 'Pour into cups'], ['1L bottle', 'Cups'], 'How many cups?')
        ],
        quiz: [
          q('How many mL in 1 Litre?', ['100', '1000'], '1000', 'Standard conversion.')
        ],
        learningOutcomes: ['Understand units of capacity']
      }]
    },
    {
      id: 'm8', title: '8. Carts and Wheels', topics: [{
        id: 'm8-t1', title: 'Circles',
        subtopics: ['Radius and Diameter', 'Centre of Circle'],
        readingText: {
          en: 'Diameter = 2 × Radius. Radius is from centre to edge.',
          hi: 'व्यास = 2 × त्रिज्या।',
          kn: 'ವ್ಯಾಸ = 2 × ತ್ರಿಜ್ಯ.'
        },
        activities: [
          act('Compass Artist', 'Draw circles with a compass.', 'drawing', 'mid', ['Set 3cm radius', 'Draw circle'], ['Compass'], 'What is the diameter?')
        ],
        quiz: [
          q('If radius is 4 cm, diameter is?', ['4 cm', '8 cm'], '8 cm', '4 x 2 = 8.')
        ],
        learningOutcomes: ['Draw and measure circles']
      }]
    },
    {
      id: 'm9', title: '9. Halves and Quarters', topics: [{
        id: 'm9-t1', title: 'Fractions',
        subtopics: ['1/2, 1/4 and 3/4', 'Equal Sharing'],
        readingText: {
          en: 'Half (1/2) is one of two equal parts. Quarter (1/4) is one of four.',
          hi: 'आधा (1/2) और चौथाई (1/4)।',
          kn: 'ಅರ್ಧ (1/2) ಮತ್ತು ಕಾಲು (1/4) ಭಾಗಗಳು.'
        },
        activities: [
          act('Paper Folder', 'Fold paper into quarters.', 'drawing', 'low', ['Fold twice', 'Shade 1/4'], ['Paper'], 'How many 1/4 make a whole?')
        ],
        quiz: [
          q('How many quarters make a whole?', ['2', '4'], '4', '1/4 + 1/4 + 1/4 + 1/4 = 1.')
        ],
        learningOutcomes: ['Identify basic fractions']
      }]
    },
    {
      id: 'm10', title: '10. Play with Patterns', topics: [{
        id: 'm10-t1', title: 'Sequences',
        subtopics: ['Number Patterns', 'Visual Patterns'],
        readingText: {
          en: 'Patterns repeat designs or sequences.',
          hi: 'पैटर्न दोहराए गए डिज़ाइन हैं।',
          kn: 'ವಿನ್ಯಾಸಗಳು ಪುನರಾವರ್ತಿತ ಕ್ರಮಗಳು.'
        },
        activities: [
          act('Number Detective', 'Find the next numbers.', 'calculating', 'mid', ['5, 10, 15...', 'Find rule'], ['Notebook'], 'What is next?')
        ],
        quiz: [
          q('Next in 2, 4, 6, 8, ?', ['9', '10'], '10', 'Add 2.')
        ],
        learningOutcomes: ['Identify rules in sequences']
      }]
    },
    {
      id: 'm11', title: '11. Tables and Shares', topics: [{
        id: 'm11-t1', title: 'Multiplication & Division',
        subtopics: ['Repeated Addition', 'Equal Grouping'],
        readingText: {
          en: 'Multiplication is repeated addition. Division is equal sharing.',
          hi: 'गुणा बार-बार जोड़ना है। भाग बाँटना है।',
          kn: 'ಗುಣಾಕಾರ ಪದೇ ಪದೇ ಕೂಡಿಸುವುದು.'
        },
        activities: [
          act('Array Creator', 'Arrange pebbles in rows.', 'calculating', 'low', ['3 rows of 4', 'Total?'], ['Pebbles'], '3 x 4 = ?')
        ],
        quiz: [
          q('7 × 8 = ?', ['54', '56'], '56', '7 times 8.')
        ],
        learningOutcomes: ['Perform basic operations']
      }]
    },
    {
      id: 'm12', title: '12. How Heavy? How Light?', topics: [{
        id: 'm12-t1', title: 'Weight',
        subtopics: ['Gram & Kilogram', 'Converting Units'],
        readingText: {
          en: '1 kg = 1000 grams.',
          hi: '1 किलोग्राम = 1000 ग्राम।',
          kn: '1 ಕೆಜಿ = 1000 ಗ್ರಾಮ್.'
        },
        activities: [
          act('Weight Guesser', 'Guess and then weigh objects.', 'performing', 'low', ['Guess weight', 'Use scale'], ['Scale'], 'Was it close?')
        ],
        quiz: [
          q('How many grams in 1 kg?', ['100', '1000'], '1000', 'Metric standard.')
        ],
        learningOutcomes: ['Measure and convert weight']
      }]
    },
    {
      id: 'm13', title: '13. Fields and Fences', topics: [{
        id: 'm13-t1', title: 'Perimeter & Area',
        subtopics: ['Boundary Length', 'Counting Squares'],
        readingText: {
          en: 'Perimeter is the boundary length. Area is the space inside.',
          hi: 'परिमाप सीमा की लंबाई है।',
          kn: 'ಸುತ್ತಳತೆ ಮತ್ತು ವಿಸ್ತೀರ್ಣ.'
        },
        activities: [
          act('Boundary Walker', 'Measure desk perimeter with string.', 'calculating', 'low', ['Use string', 'Measure with ruler'], ['String'], 'Total cm?')
        ],
        quiz: [
          q('Perimeter of square with side 5 cm?', ['20 cm', '25 cm'], '20 cm', '5 x 4 = 20.')
        ],
        learningOutcomes: ['Calculate perimeter and area']
      }]
    },
    {
      id: 'm14', title: '14. Smart Charts', topics: [{
        id: 'm14-t1', title: 'Data Handling',
        subtopics: ['Tally Marks', 'Pictographs'],
        readingText: {
          en: 'Tally marks are groups of 5. Pictographs use symbols.',
          hi: 'मिलान चिह्न और चित्रलेख।',
          kn: 'ಟ್ಯಾಲಿ ಮಾರ್ಕ್ಸ್ ಮತ್ತು ಪಿಕ್ಟೋಗ್ರಾಫ್.'
        },
        activities: [
          act('Survey', 'Ask friends for favourite fruit.', 'writing', 'low', ['Use tally marks', 'Show results'], ['Notebook'], 'Which is top?')
        ],
        quiz: [
          q('Tally for 5 is?', ['||||', '|||| with cross'], '|||| with cross', 'Standard tally.')
        ],
        learningOutcomes: ['Organise data visually']
      }]
    }
  ]
};

// ─── EVS (Looking Around) ─────────────────────────────────────────────────────
const evsSubject: Subject = {
  id: 'science', title: 'EVS (Looking Around)', icon: '🧪', color: '#00B894',
  chapters: [
    { id: 'e1', title: '1. Going to School', topics: [{ id: 'e1-t1', title: 'Transport', subtopics: ['Bridges', 'Boats'], readingText: { en: 'Children use many ways to reach school like bridges and boats.' }, activities: [act('Bridge Build', 'Build a paper bridge.', 'performing', 'low', ['Fold paper'], ['Paper'], 'Test strength')], quiz: [q('What is a Vallam?', ['Car', 'Boat'], 'Boat')], learningOutcomes: ['Identify transport modes'] }] },
    { id: 'e2', title: '2. Ear to Ear', topics: [{ id: 'e2-t1', title: 'Animal Ears', subtopics: ['Hidden ears'], readingText: { en: 'Animals have different types of ears.' }, activities: [act('Ear Spotter', 'Draw animal ears.', 'drawing', 'low', ['Look at pictures'], ['Paper'], 'Which are biggest?')], quiz: [q('Does elephant have big ears?', ['Yes', 'No'], 'Yes')], learningOutcomes: ['Observe animal differences'] }] },
    { id: 'e3', title: '3. A Day with Nandu', topics: [{ id: 'e3-t1', title: 'Elephants', subtopics: ['Herds', 'Diet'], readingText: { en: 'Elephants live in herds led by the oldest female.' }, activities: [act('Elephant Diary', 'Write as Nandu.', 'writing', 'low', ['Imagine day'], ['Notebook'], 'What did you eat?')], quiz: [q('Who leads the herd?', ['Oldest female', 'Youngest male'], 'Oldest female')], learningOutcomes: ['Understand elephant social structure'] }] },
    { id: 'e4', title: '4. The Story of Amrita', topics: [{ id: 'e4-t1', title: 'Trees', subtopics: ['Chipko Movement'], readingText: { en: 'Amrita protected trees in Rajasthan.' }, activities: [act('Tree Friend', 'Adopt a tree.', 'performing', 'low', ['Observe tree'], ['Water'], 'Any birds?')], quiz: [q('Where did Amrita live?', ['Kerala', 'Rajasthan'], 'Rajasthan')], learningOutcomes: ['Appreciate conservation'] }] },
    { id: 'e5', title: '5. Anita and the Honeybees', topics: [{ id: 'e5-t1', title: 'Beekeeping', subtopics: ['Bee life cycle'], readingText: { en: 'Anita started beekeeping in Bihar.' }, activities: [act('Bee Cycle', 'Draw bee life cycle.', 'drawing', 'mid', ['Egg to adult'], ['Paper'], 'How many stages?')], quiz: [q('Who lays eggs?', ['Queen', 'Worker'], 'Queen')], learningOutcomes: ['Learn about bees'] }] },
    { id: 'e6', title: '6. Omana\'s Journey', topics: [{ id: 'e6-t1', title: 'Train Trip', subtopics: ['Tickets'], readingText: { en: 'Omana travels by train from Gujarat.' }, activities: [act('Ticket Check', 'Read a ticket.', 'calculating', 'mid', ['Find PNR'], ['Ticket'], 'PNR number?')], quiz: [q('Where did she start?', ['Gujarat', 'Delhi'], 'Gujarat')], learningOutcomes: ['Understand train travel'] }] },
    { id: 'e7', title: '7. From the Window', topics: [{ id: 'e7-t1', title: 'Bridges & Tunnels', subtopics: ['Mountain travel'], readingText: { en: 'Omana sees many bridges and tunnels.' }, activities: [act('Tunnel Model', 'Make a box tunnel.', 'performing', 'low', ['Cut holes'], ['Box'], 'Is it dark?')], quiz: [q('How many tunnels?', ['50', '92'], '92')], learningOutcomes: ['Identify landscape features'] }] },
    { id: 'e8', title: '8. Reaching Grandmother\'s House', topics: [{ id: 'e8-t1', title: 'Water Transport', subtopics: ['Ferries'], readingText: { en: 'Omana takes a Ferry in Kerala.' }, activities: [act('Boat Maker', 'Make a paper boat.', 'performing', 'low', ['Fold boat'], ['Paper'], 'Does it float?')], quiz: [q('What is a Ferry?', ['Bus', 'Boat'], 'Boat')], learningOutcomes: ['Identify water transport'] }] },
    { id: 'e9', title: '9. Changing Families', topics: [{ id: 'e9-t1', title: 'Family', subtopics: ['New members'], readingText: { en: 'Families change with births and marriages.' }, activities: [act('Family Tree', 'Draw family tree.', 'drawing', 'mid', ['Add members'], ['Paper'], 'Who is oldest?')], quiz: [q('What changes family?', ['New baby', 'Buying a pen'], 'New baby')], learningOutcomes: ['Recognise family changes'] }] },
    { id: 'e10', title: '10. Hu Tu Tu, Hu Tu Tu', topics: [{ id: 'e10-t1', title: 'Kabaddi', subtopics: ['Rules', 'Teamwork'], readingText: { en: 'Kabaddi is a traditional game.' }, activities: [act('Rules Poster', 'Draw Kabaddi court.', 'drawing', 'low', ['Write rules'], ['Paper'], 'Have you played?')], quiz: [q('Raider chants?', ['Go', 'Kabaddi'], 'Kabaddi')], learningOutcomes: ['Learn traditional games'] }] },
    { id: 'e11', title: '11. The Valley of Flowers', topics: [{ id: 'e11-t1', title: 'Plants', subtopics: ['Uttarakhand flora'], readingText: { en: 'Uttarakhand has the Valley of Flowers.' }, activities: [act('Flower Press', 'Press flowers.', 'performing', 'low', ['Put in book'], ['Book'], 'Smell?')], quiz: [q('Where is Valley of Flowers?', ['Bihar', 'Uttarakhand'], 'Uttarakhand')], learningOutcomes: ['Identify local plants'] }] },
    { id: 'e12', title: '12. Changing Times', topics: [{ id: 'e12-t1', title: 'Houses', subtopics: ['Materials'], readingText: { en: 'Houses changed from mud to cement.' }, activities: [act('Material List', 'List building materials.', 'writing', 'low', ['Compare old/new'], ['Notebook'], 'Which is stronger?')], quiz: [q('Old houses used?', ['Steel', 'Mud'], 'Mud')], learningOutcomes: ['Identify housing changes'] }] },
    { id: 'e13', title: '13. A River\'s Tale', topics: [{ id: 'e13-t1', title: 'Rivers', subtopics: ['Pollution'], readingText: { en: 'Factories pollute rivers.' }, activities: [act('Water Audit', 'Measure home water use.', 'calculating', 'mid', ['Count buckets'], ['Notebook'], 'Save water?')], quiz: [q('Where do rivers start?', ['Sea', 'Mountains'], 'Mountains')], learningOutcomes: ['Understand conservation'] }] },
    { id: 'e14', title: '14. Basva\'s Farm', topics: [{ id: 'e14-t1', title: 'Farming', subtopics: ['Onions', 'Tools'], readingText: { en: 'Basva is from Karnataka. They grow onions.' }, activities: [act('Tool Draw', 'Draw Khunti.', 'drawing', 'low', ['Label use'], ['Paper'], 'Is it for digging?')], quiz: [q('Basva is from?', ['Goa', 'Karnataka'], 'Karnataka')], learningOutcomes: ['Learn farming steps'] }] },
    { id: 'e15', title: '15. From Market to Home', topics: [{ id: 'e15-t1', title: 'Vegetables', subtopics: ['Supply chain'], readingText: { en: 'Vegetables go from mandi to home.' }, activities: [act('Sorting', 'Sort vegetables.', 'performing', 'low', ['Leafy vs non-leafy'], ['Vegetables'], 'Fresh?')], quiz: [q('How to keep fresh?', ['Fire', 'Water spray'], 'Water spray')], learningOutcomes: ['Understand food journey'] }] },
    { id: 'e16', title: '16. A Busy Month', topics: [{ id: 'e16-t1', title: 'Birds', subtopics: ['Nests', 'Beaks'], readingText: { en: 'Birds build different nests.' }, activities: [act('Nest Watch', 'Find a nest.', 'drawing', 'low', ['Observe only'], ['Notebook'], 'Material?')], quiz: [q('Who sews leaves?', ['Crow', 'Tailor bird'], 'Tailor bird')], learningOutcomes: ['Identify bird adaptations'] }] },
    { id: 'e17', title: '17. Nandita in Mumbai', topics: [{ id: 'e17-t1', title: 'City Life', subtopics: ['Crowding'], readingText: { en: 'Cities are crowded with small houses.' }, activities: [act('Compare', 'City vs Village table.', 'writing', 'mid', ['List differences'], ['Notebook'], 'Quiet?')], quiz: [q('Mumbai is?', ['Crowded', 'Empty'], 'Crowded')], learningOutcomes: ['Understand urban life'] }] },
    { id: 'e18', title: '18. Too Much Water, Too Little Water', topics: [{ id: 'e18-t1', title: 'Water Quality', subtopics: ['Diseases'], readingText: { en: 'Dirty water causes diarrhea.' }, activities: [act('Filter', 'Make sand filter.', 'performing', 'high', ['Layering'], ['Bottle'], 'Clear?')], quiz: [q('Dirty water cause?', ['Cold', 'Diarrhea'], 'Diarrhea')], learningOutcomes: ['Learn health safety'] }] },
    { id: 'e19', title: '19. Abdul in the Garden', topics: [{ id: 'e19-t1', title: 'Roots', subtopics: ['Types'], readingText: { en: 'Roots anchor plants.' }, activities: [act('Observation', 'Check grass roots.', 'performing', 'low', ['Pull grass'], ['Grass'], 'Fibrous?')], quiz: [q('Carrot is?', ['Root', 'Fruit'], 'Root')], learningOutcomes: ['Identify root types'] }] },
    { id: 'e20', title: '20. Eat Together', topics: [{ id: 'e20-t1', title: 'Festivals', subtopics: ['Bihu'], readingText: { en: 'Bihu is celebrated in Assam.' }, activities: [act('Festival Food', 'List special dishes.', 'writing', 'low', ['Name foods'], ['Notebook'], 'Yummy?')], quiz: [q('Bihu state?', ['Kerala', 'Assam'], 'Assam')], learningOutcomes: ['Appreciate community'] }] },
    { id: 'e21', title: '21. Food and Fun', topics: [{ id: 'e21-t1', title: 'Langar', subtopics: ['Gurudwara'], readingText: { en: 'Langar serves everyone free food.' }, activities: [act('Draw Langar', 'Draw community kitchen.', 'drawing', 'mid', ['Large pots'], ['Paper'], 'Helping?')], quiz: [q('What is Langar?', ['Shop', 'Kitchen'], 'Kitchen')], learningOutcomes: ['Learn service'] }] },
    { id: 'e22', title: '22. The World in my Home', topics: [{ id: 'e22-t1', title: 'Values', subtopics: ['Honesty'], readingText: { en: 'Be honest in small things.' }, activities: [act('Story', 'Write about honesty.', 'writing', 'low', ['Your story'], ['Notebook'], 'Proud?')], quiz: [q('Return extra money?', ['Yes', 'No'], 'Yes')], learningOutcomes: ['Moral development'] }] },
    { id: 'e23', title: '23. Pochampalli', topics: [{ id: 'e23-t1', title: 'Weaving', subtopics: ['Sarees'], readingText: { en: 'Pochampalli is famous for Ikat weaving.' }, activities: [act('Design', 'Make pattern.', 'drawing', 'mid', ['Geometric'], ['Paper'], 'Colours?')], quiz: [q('Pochampalli state?', ['Telangana', 'Delhi'], 'Telangana')], learningOutcomes: ['Understand crafts'] }] },
    { id: 'e24', title: '24. Home and Abroad', topics: [{ id: 'e24-t1', title: 'Climate', subtopics: ['Abu Dhabi'], readingText: { en: 'Abu Dhabi is a desert country.' }, activities: [act('Compare', 'Desert vs Green.', 'writing', 'mid', ['Table'], ['Notebook'], 'Dates?')], quiz: [q('Abu Dhabi tree?', ['Mango', 'Date Palm'], 'Date Palm')], learningOutcomes: ['Compare climates'] }] },
    { id: 'e25', title: '25. Spicy Riddles', topics: [{ id: 'e25-t1', title: 'Spices', subtopics: ['Uses'], readingText: { en: 'Turmeric heals wounds.' }, activities: [act('Spice Box', 'Identify by smell.', 'performing', 'low', ['Smell test'], ['Spices'], 'Strong?')], quiz: [q('Healing spice?', ['Salt', 'Turmeric'], 'Turmeric')], learningOutcomes: ['Learn spice benefits'] }] },
    { id: 'e26', title: '26. Defense Officer: Wahida', topics: [{ id: 'e26-t1', title: 'Bravery', subtopics: ['Navy'], readingText: { en: 'Wahida Prism is a naval doctor.' }, activities: [act('Dream', 'Write career goal.', 'writing', 'low', ['Ambition'], ['Notebook'], 'Why?')], quiz: [q('Wahida is in?', ['Army', 'Navy'], 'Navy')], learningOutcomes: ['Inspiration'] }] },
    { id: 'e27', title: '27. Chuskit Goes to School', topics: [{ id: 'e27-t1', title: 'Inclusion', subtopics: ['Accessibility'], readingText: { en: 'Chuskit uses a wheelchair in Ladakh.' }, activities: [act('Audit', 'Check for ramps.', 'performing', 'mid', ['Look around'], ['School'], 'Ramps?')], quiz: [q('Chuskit uses?', ['Cycle', 'Wheelchair'], 'Wheelchair')], learningOutcomes: ['Understand empathy'] }] }
  ]
};

// ─── HINDI (Rimjhim) ──────────────────────────────────────────────────────────
const hindiSubject: Subject = {
  id: 'hindi', title: 'Hindi (Rimjhim)', icon: '📝', color: '#E17055',
  chapters: [
    { id: 'h1', title: '1. मन के भोले-भाले बादल', topics: [{ id: 'h1-t1', title: 'कविता', subtopics: ['बादल'], readingText: { en: 'Poem about clouds.', hi: 'बादल भोले-भाले बच्चों की तरह हैं।' }, activities: [act('बादल चित्र', 'चित्र बनाओ।', 'drawing', 'low', ['रंग भरो'], ['कागज'], 'कैसा है?')], quiz: [q('बादल कैसे हैं?', ['भोले-भाले', 'कठोर'], 'भोले-भाले')], learningOutcomes: ['कविता का आनंद'] }] },
    { id: 'h2', title: '2. जैसा सवाल वैसा जवाब', topics: [{ id: 'h2-t1', title: 'बीरबल', subtopics: ['चतुराई'], readingText: { en: 'Birbal\'s wit.', hi: 'बीरबल अकबर के चतुर मंत्री थे।' }, activities: [act('पहेली', 'पहेली पूछो।', 'speaking', 'low', ['सोचो'], [], 'जवाब?')], quiz: [q('चतुर कौन था?', ['बीरबल', 'राजा'], 'बीरबल')], learningOutcomes: ['बुद्धि का महत्व'] }] },
    { id: 'h3', title: '3. किरमिच की गेंद', topics: [{ id: 'h3-t1', title: 'ईमानदारी', subtopics: ['सच्चाई'], readingText: { en: 'Honesty story.', hi: 'दिनेश को एक गेंद मिली।' }, activities: [act('पोस्टर', 'ईमानदारी पर पोस्टर।', 'drawing', 'low', ['चित्र'], ['कागज'], 'सत्य?')], quiz: [q('क्या मिली?', ['गेंद', 'बल्ला'], 'गेंद')], learningOutcomes: ['नैतिकता'] }] },
    { id: 'h4', title: '4. पापा जब बच्चे थे', topics: [{ id: 'h4-t1', title: 'बचपन', subtopics: ['इच्छाएँ'], readingText: { en: 'Dad\'s childhood.', hi: 'पापा कई चीज़ें बनना चाहते थे।' }, activities: [act('साक्षात्कार', 'पापा से पूछो।', 'speaking', 'low', ['प्रश्न'], [], 'क्या बने?')], quiz: [q('पापा क्या बनना चाहते थे?', ['चौकीदार', 'दोनों'], 'दोनों')], learningOutcomes: ['कल्पना'] }] },
    { id: 'h5', title: '5. दोस्त की पोशाक', topics: [{ id: 'h5-t1', title: 'दोस्ती', subtopics: ['नसीरुद्दीन'], readingText: { en: 'Story of friendship.', hi: 'नसीरुद्दीन और उनके दोस्त।' }, activities: [act('नाटक', 'छोटा नाटक।', 'performing', 'mid', ['अभिनय'], [], 'मज़ा आया?')], quiz: [q('दोस्त का नाम?', ['जमाल', 'अಕಬर'], 'जमाल')], learningOutcomes: ['सामाजिक कौशल'] }] },
    { id: 'h6', title: '6. नाव बनाओ नाव बनाओ', topics: [{ id: 'h6-t1', title: 'कविता', subtopics: ['बारिश'], readingText: { en: 'Poem about making boats.', hi: 'बारिश में कागज़ की नाव बनाना।' }, activities: [act('नाव', 'कागज़ की नाव बनाओ।', 'performing', 'low', ['मोड़ो'], ['कागज'], 'तैरी?')], quiz: [q('नाव किससे बनती है?', ['लकड़ी', 'कागज'], 'कागज')], learningOutcomes: ['रचनात्मकता'] }] },
    { id: 'h7', title: '7. दान का हिसाब', topics: [{ id: 'h7-t1', title: 'गणित और दया', subtopics: ['राजा और संन्यासी'], readingText: { en: 'Story of a king and a monk.', hi: 'कंजूस राजा और चतुर संन्यासी।' }, activities: [act('हिसाब', 'दोगुना करते जाओ।', 'calculating', 'mid', ['1, 2, 4...'], ['Notebook'], 'कितना हुआ?')], quiz: [q('राजा कैसा था?', ['दानी', 'कंजूस'], 'कंजूस')], learningOutcomes: ['बुद्धिमानी'] }] },
    { id: 'h8', title: '8. कौन?', topics: [{ id: 'h8-t1', title: 'पहेली', subtopics: ['चूहा'], readingText: { en: 'Who is the culprit?', hi: 'घर में चीज़ें कौन काट रहा है?' }, activities: [act('चित्र', 'चूहे का चित्र।', 'drawing', 'low', ['बनाओ'], ['कागज'], 'मूंछें?')], quiz: [q('चीज़ें किसने काटीं?', ['बिल्ली', 'चूहा'], 'चूहा')], learningOutcomes: ['अवलोकन'] }] },
    { id: 'h9', title: '9. स्वतंत्रता की ओर', topics: [{ id: 'h9-t1', title: 'गांधीजी', subtopics: ['दांडी यात्रा'], readingText: { en: 'Towards independence.', hi: 'धनी और उसकी बकरी बिन्नी।' }, activities: [act('चरखा', 'चरखे का चित्र।', 'drawing', 'low', ['बनाओ'], ['कागज'], 'सूत?')], quiz: [q('गांधीजी कहाँ जा रहे थे?', ['दांडी', 'दिल्ली'], 'दांडी')], learningOutcomes: ['देशभक्ति'] }] },
    { id: 'h10', title: '10. थप्प रोटी थप्प दाल', topics: [{ id: 'h10-t1', title: 'खेल', subtopics: ['रसोई'], readingText: { en: 'Children playing house.', hi: 'बच्चे रोटी और दाल बनाने का खेल खेल रहे हैं।' }, activities: [act('अभिनय', 'खाना बनाने का अभिनय।', 'performing', 'low', ['एक्टिंग'], [], 'स्वाद?')], quiz: [q('बच्चे क्या खेल रहे थे?', ['क्रिकेट', 'घर-घर'], 'घर-घर')], learningOutcomes: ['सहयोग'] }] },
    { id: 'h11', title: '11. पढ़क्कू की सूझ', topics: [{ id: 'h11-t1', title: 'तर्क', subtopics: ['कोल्हू का बैल'], readingText: { en: 'The scholar\'s logic.', hi: 'पढ़क्कू ने कोल्हू के बैल पर तर्क किया।' }, activities: [act('तर्क', 'एक तर्क सोचो।', 'speaking', 'mid', ['सोचो'], [], 'क्यों?')], quiz: [q('बैल कहाँ घूम रहा था?', ['खेत', 'कोल्हू'], 'कोल्हू')], learningOutcomes: ['तार्किक सोच'] }] },
    { id: 'h12', title: '12. सुनीता की पहिया कुर्सी', topics: [{ id: 'h12-t1', title: 'साहस', subtopics: ['समानता'], readingText: { en: 'Sunita on a wheelchair.', hi: 'सुनीता को सब अजीब क्यों देख रहे थे?' }, activities: [act('मदद', 'मदद के तरीके लिखो।', 'writing', 'low', ['लिखो'], ['Notebook'], 'समान?')], quiz: [q('सुनीता क्या चलाती थी?', ['साइकिल', 'पहिया कुर्सी'], 'पहिया कुर्सी')], learningOutcomes: ['संवेदनशीलता'] }] },
    { id: 'h13', title: '13. हुदहुद', topics: [{ id: 'h13-t1', title: 'पक्षी', subtopics: ['जानकारी'], readingText: { en: 'About the Hoopoe bird.', hi: 'हुदहुद एक बहुत सुंदर पक्षी है।' }, activities: [act('हुदहुद चित्र', 'रंगीन चित्र बनाओ।', 'drawing', 'mid', ['रंग'], ['कागज'], 'कलगी?')], quiz: [q('हुदहुद की कलगी कैसी है?', ['सुंदर', 'काली'], 'सुंदर')], learningOutcomes: ['प्राकृतिक ज्ञान'] }] },
    { id: 'h14', title: '14. मुफ़्त ही मुफ़्त', topics: [{ id: 'h14-t1', title: 'लालच', subtopics: ['नारियल'], readingText: { en: 'Greed story.', hi: 'भीखूभाई को नारियल मुफ़्त चाहिए था।' }, activities: [act('कहानी सुनाओ', 'हाव-भाव के साथ।', 'speaking', 'mid', ['सुनाओ'], [], 'हंसी आई?')], quiz: [q('भीखूभाई को क्या चाहिए था?', ['आम', 'नारियल'], 'नारियल')], learningOutcomes: ['लालच का फल'] }] }
  ]
};

// ─── ENGLISH (Marigold) ───────────────────────────────────────────────────────
const englishSubject: Subject = {
  id: 'english', title: 'English (Marigold)', icon: '📖', color: '#0984E3',
  chapters: [
    { id: 'en1', title: 'Unit 1: Wake Up!', topics: [{ id: 'en1-t1', title: 'Poem', subtopics: ['Morning'], readingText: { en: 'Wake up! It\'s a lovely day.' }, activities: [act('Recite', 'Recite poem.', 'speaking', 'low', ['Read loud'], [], 'Morning!')], quiz: [q('Who is singing?', ['Birds', 'Dogs'], 'Birds')], learningOutcomes: ['Recitation'] }] },
    { id: 'en2', title: 'Unit 2: Noses', topics: [{ id: 'en2-t1', title: 'Funny Noses', subtopics: ['Faces'], readingText: { en: 'I looked in the mirror and looked at my nose.' }, activities: [act('Mirror Fun', 'Make funny faces.', 'performing', 'low', ['Look'], ['Mirror'], 'Funny?')], quiz: [q('Where did she look?', ['Mirror', 'Book'], 'Mirror')], learningOutcomes: ['Observation'] }] },
    { id: 'en3', title: 'Unit 3: Run!', topics: [{ id: 'en3-t1', title: 'Exercise', subtopics: ['Running'], readingText: { en: 'Away from the city, out to the country.' }, activities: [act('Race', 'Run 10 meters.', 'performing', 'low', ['Start', 'Run'], [], 'Fast?')], quiz: [q('Run to the ___?', ['Country', 'City'], 'Country')], learningOutcomes: ['Health'] }] },
    { id: 'en4', title: 'Unit 4: Why?', topics: [{ id: 'en4-t1', title: 'Curiosity', subtopics: ['Questions'], readingText: { en: 'I know a curious little boy who is always asking why.' }, activities: [act('Ask Why', 'Write 5 why questions.', 'writing', 'low', ['List why'], ['Notebook'], 'Smart?')], quiz: [q('The boy is ___?', ['Curious', 'Lazy'], 'Curious')], learningOutcomes: ['Inquiry'] }] },
    { id: 'en5', title: 'Unit 5: Helen Keller', topics: [{ id: 'en5-t1', title: 'Courage', subtopics: ['Braille'], readingText: { en: 'Helen could not see or hear.' }, activities: [act('Touch Test', 'Identify objects blindfolded.', 'performing', 'mid', ['Touch'], ['Items'], 'What?')], quiz: [q('Who was the teacher?', ['Anne', 'Jane'], 'Anne')], learningOutcomes: ['Empathy'] }] },
    { id: 'en6', title: 'Unit 6: Hiawatha', topics: [{ id: 'en6-t1', title: 'Nature', subtopics: ['Birds and Beasts'], readingText: { en: 'Hiawatha was a young Native American boy.' }, activities: [act('Bird Talk', 'Imitate bird sounds.', 'speaking', 'low', ['Listen', 'Imitate'], [], 'Tweet?')], quiz: [q('Hiawatha learned to talk to?', ['Birds', 'Rocks'], 'Birds')], learningOutcomes: ['Love for nature'] }] },
    { id: 'en7', title: 'Unit 7: The Giving Tree', topics: [{ id: 'en7-t1', title: 'Generosity', subtopics: ['Nature and Man'], readingText: { en: 'The tree gave everything it had to the boy.' }, activities: [act('Thank You Note', 'Write a note to a tree.', 'writing', 'low', ['Think of benefits', 'Write'], ['Paper'], 'Grateful?')], quiz: [q('What did the tree give first?', ['Apples', 'Money'], 'Apples')], learningOutcomes: ['Appreciate nature'] }] },
    { id: 'en8', title: 'Unit 8: Books', topics: [{ id: 'en8-t1', title: 'Reading', subtopics: ['Library'], readingText: { en: 'Come in, come in! Said the library door.' }, activities: [act('Library Map', 'Draw a small library.', 'drawing', 'low', ['Shelves', 'Books'], ['Paper'], 'Favourite book?')], quiz: [q('Where do books live?', ['Library', 'Kitchen'], 'Library')], learningOutcomes: ['Reading habits'] }] },
    { id: 'en9', title: 'Unit 9: Pinocchio', topics: [{ id: 'en9-t1', title: 'Honesty', subtopics: ['Puppets'], readingText: { en: 'Pinocchio\'s nose grew whenever he told a lie.' }, activities: [act('Puppet Maker', 'Make a finger puppet.', 'performing', 'mid', ['Paper', 'Tape'], ['Paper'], 'Talk!')], quiz: [q('What grew when he lied?', ['Ear', 'Nose'], 'Nose')], learningOutcomes: ['Honesty'] }] },
    { id: 'en10', title: 'Unit 10: Strange Talk', topics: [
      { id: 'en10-t1', title: 'Strange Talk (Poem)', subtopics: ['Animal Sounds', 'Communication'], readingText: { en: 'A little green frog lived under a log, and every time he spoke, instead of saying, "Good morning," he only said, "Croak-croak."' }, activities: [act('Animal Mime', 'Mime animal sounds and let others guess.', 'performing', 'low', ['Pick an animal', 'Make its sound', 'Guess others'], [], 'Who said "Quack"?')], quiz: [q('What did the frog say?', ['Good morning', 'Croak-croak'], 'Croak-croak')], learningOutcomes: ['Vocabulary'] },
      { id: 'en10-t2', title: 'The Grasshopper and the Ant', subtopics: ['Hard work', 'Preparation'], readingText: { en: 'The ant worked hard all summer, but the grasshopper only sang.' }, activities: [act('Ant Mission', 'List things you do to prepare for exams.', 'writing', 'mid', ['List tasks', 'Set dates'], ['Notebook'], 'Ready?')], quiz: [q('Who worked hard?', ['Ant', 'Grasshopper'], 'Ant')], learningOutcomes: ['Moral values'] }
    ]}
  ]
};

// ─── KANNADA (Siri Kannada) ───────────────────────────────────────────────────
const kannadaSubject: Subject = {
  id: 'kannada', title: 'Kannada (Siri Kannada)', icon: '🚩', color: '#D63031',
  chapters: [
    { id: 'k1', title: '1. ಕನ್ನಡ ನಾಡು ನುಡಿ', topics: [{ id: 'k1-t1', title: 'ಕರ್ನಾಟಕ', subtopics: ['ನಾಡಗೀತೆ'], readingText: { en: 'Karnataka culture.', kn: 'ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ಮತ್ತು ನಾಡಗೀತೆ.' }, activities: [act('ಗಾಯನ', 'ನಾಡಗೀತೆ ಹಾಡಿ.', 'speaking', 'low', ['ಹಾಡಿ'], [], 'ಕುವೆಂಪು?')], quiz: [q('ರಾಜಧಾನಿ ಯಾವುದು?', ['ಮೈಸೂರು', 'ಬೆಂಗಳೂರು'], 'ಬೆಂಗಳೂರು')], learningOutcomes: ['ಸಾಂಸ್ಕೃತಿಕ ಅರಿವು'] }] },
    { id: 'k2', title: '2. ಬಣ್ಣದ ಹಕ್ಕಿ', topics: [{ id: 'k2-t1', title: 'ಪಕ್ಷಿ', subtopics: ['ಬಣ್ಣಗಳು'], readingText: { en: 'The colourful bird.', kn: 'ಬಣ್ಣ ಬಣ್ಣದ ಹಕ್ಕಿ ಹಾರುತ್ತಿದೆ.' }, activities: [act('ಚಿತ್ರ', 'ಹಕ್ಕಿ ಚಿತ್ರ ಬಿಡಿಸಿ.', 'drawing', 'low', ['ಬಣ್ಣ ಹಾಕಿ'], ['Paper'], 'ಸುಂದರ?')], quiz: [q('ಹಕ್ಕಿ ಏನು ಮಾಡುತ್ತಿದೆ?', ['ಹಾರುತ್ತಿದೆ', 'ನಿದ್ದೆ'], 'ಹಾರುತ್ತಿದೆ')], learningOutcomes: ['ಭಾಷಾ ಜ್ಞಾನ'] }] },
    { id: 'k3', title: '3. ಬುದ್ಧಿವಂತ ರಾಮ', topics: [{ id: 'k3-t1', title: 'ಬುದ್ಧಿವಂತಿಕೆ', subtopics: ['ಕಥೆ'], readingText: { en: 'Clever Rama.', kn: 'ರಾಮನು ಬಹಳ ಬುದ್ಧಿವಂತ.' }, activities: [act('ಕಥೆ ಹೇಳಿ', 'ಕಥೆ ವಿವರಿಸಿ.', 'speaking', 'mid', ['ಹೇಳಿ'], [], 'ಬುದ್ಧಿ?')], quiz: [q('ರಾಮ ಎಂತಹವನು?', ['ಬುದ್ಧಿವಂತ', 'ಸೋಮಾರಿ'], 'ಬುದ್ಧಿವಂತ')], learningOutcomes: ['ಮೌಲ್ಯಗಳು'] }] },
    { id: 'k4', title: '4. ಸುಳ್ಳು ಹೇಳಬಾರದು', topics: [{ id: 'k4-t1', title: 'ಸತ್ಯ', subtopics: ['ಪ್ರಾಮಾಣಿಕತೆ'], readingText: { en: 'Don\'t lie.', kn: 'ನಾವು ಎಂದಿಗೂ ಸುಳ್ಳು ಹೇಳಬಾರದು.' }, activities: [act('ಸತ್ಯದ ಪ್ರತಿಜ್ಞೆ', 'ಪ್ರಮಾಣ ಮಾಡಿ.', 'speaking', 'low', ['ಹೇಳಿ'], [], 'ಒಳ್ಳೆಯದು?')], quiz: [q('ಏನು ಮಾಡಬಾರದು?', ['ಸತ್ಯ', 'ಸುಳ್ಳು'], 'ಸುಳ್ಳು')], learningOutcomes: ['ನೈತಿಕತೆ'] }] },
    { id: 'k5', title: '5. ಮರಗಿಡಗಳ ಮಹತ್ವ', topics: [{ id: 'k5-t1', title: 'ಪರಿಸರ', subtopics: ['ಮರಗಳು'], readingText: { en: 'Importance of trees.', kn: 'ಮರಗಿಡಗಳು ನಮಗೆ ಆಮ್ಲಜನಕ ನೀಡುತ್ತವೆ.' }, activities: [act('ಗಿಡ ಹಾಕಿ', 'ಒಂದು ಗಿಡ ನೆಡಿ.', 'performing', 'mid', ['ನೀರನ್ನು ಹಾಕಿ'], ['ಗಿಡ'], 'ಬೆಳೆಯುತ್ತಿದೆ?')], quiz: [q('ಮರಗಳು ಏನು ನೀಡುತ್ತವೆ?', ['ಆಮ್ಲಜನಕ', 'ಕಲ್ಲು'], 'ಆಮ್ಲಜನಕ')], learningOutcomes: ['ಪರಿಸರ ಅರಿವು'] }] },
    { id: 'k6', title: '6. ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ', topics: [{ id: 'k6-t1', title: 'ಧೈರ್ಯ', subtopics: ['ಸ್ವಾತಂತ್ರ್ಯ'], readingText: { en: 'Kitturu Chennamma was a brave queen.', kn: 'ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ ಶ್ರೇಷ್ಠ ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ್ತಿ.' }, activities: [act('ಭಾಷಣ', 'ಚೆನ್ನಮ್ಮನ ಬಗ್ಗೆ ಮಾತನಾಡಿ.', 'speaking', 'mid', ['ಮಾಹಿತಿ ಸಂಗ್ರಹ'], [], 'ಸ್ಪೂರ್ತಿ?')], quiz: [q('ಚೆನ್ನಮ್ಮ ಎಲ್ಲಿಯ ರಾಣಿ?', ['ಮೈಸೂರು', 'ಕಿತ್ತೂರು'], 'ಕಿತ್ತೂರು')], learningOutcomes: ['ದೇಶಪ್ರೇಮ'] }] },
    { id: 'k7', title: '7. ಒನಕೆ ಓಬವ್ವ', topics: [{ id: 'k7-t1', title: 'ವೀರವನಿತೆ', subtopics: ['ಚಿತ್ರದುರ್ಗ'], readingText: { en: 'Onake Obavva fought with a pestle.', kn: 'ಒಬವ್ವ ಒನಕೆಯಿಂದ ಶತ್ರುಗಳನ್ನು ಸೋಲಿಸಿದಳು.' }, activities: [act('ಚಿತ್ರ', 'ಕೋಟೆಯ ಚಿತ್ರ ಬಿಡಿಸಿ.', 'drawing', 'low', ['ಬಣ್ಣ'], ['Paper'], 'ಕೋಟೆ?')], quiz: [q('ಓಬವ್ವ ಏನನ್ನು ಬಳಸಿದಳು?', ['ಖಡ್ಗ', 'ಒನಕೆ'], 'ಒನಕೆ')], learningOutcomes: ['ಧೈರ್ಯ'] }] },
    { id: 'k8', title: '8. ಹಬ್ಬಗಳು', topics: [{ id: 'k8-t1', title: 'ಸಂಸ್ಕೃತಿ', subtopics: ['ದಸರಾ'], readingText: { en: 'Festivals of Karnataka.', kn: 'ನಾಡಹಬ್ಬ ದಸರಾ ಮೈಸೂರಿನಲ್ಲಿ ನಡೆಯುತ್ತದೆ.' }, activities: [act('ಪಟ್ಟಿ ಮಾಡಿ', 'ಹಬ್ಬಗಳ ಪಟ್ಟಿ ಮಾಡಿ.', 'writing', 'low', ['ಹೆಸರುಗಳು'], ['Notebook'], 'ನಿಮ್ಮ ಹಬ್ಬ?')], quiz: [q('ನಾಡಹಬ್ಬ ಯಾವುದು?', ['ದೀಪಾವಳಿ', 'ದಸರಾ'], 'ದಸರಾ')], learningOutcomes: ['ಸಂಸ್ಕೃತಿ ಅರಿವು'] }] },
    { id: 'k9', title: '9. ಸವಿ ದಾರಿ', topics: [{ id: 'k9-t1', title: 'ವ್ಯಾಕರಣ', subtopics: ['ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು'], readingText: { en: 'Kannada Grammar.', kn: 'ಕನ್ನಡ ವ್ಯಾಕರಣದ ಮೂಲಗಳು.' }, activities: [act('ಗುರುತಿಸಿ', 'ಪದಗಳಲ್ಲಿ ಪ್ರತ್ಯಯ ಗುರುತಿಸಿ.', 'writing', 'mid', ['ಓದಿ', 'ಗುರುತಿಸಿ'], ['Notebook'], 'ಸರಿಯಾಗಿದೆಯೇ?')], quiz: [q('ಪ್ರಥಮ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ?', ['ಉ', 'ಅನ್ನು'], 'ಉ')], learningOutcomes: ['ವ್ಯಾಕರಣ ಜ್ಞಾನ'] }] },
    { id: 'k10', title: '10. ಪರಿಸರ ಗೀತೆ', topics: [{ id: 'k10-t1', title: 'ಪರಿಸರ', subtopics: ['ಪ್ರಕೃತಿ ಪ್ರೇಮ'], readingText: { en: 'Nature Poem.', kn: 'ಹಸಿರೇ ಉಸಿರು, ಪ್ರಕೃತಿಯನ್ನು ರಕ್ಷಿಸಿ.' }, activities: [act('ಹಾಡಿ', 'ಪರಿಸರ ಗೀತೆ ಹಾಡಿ.', 'speaking', 'low', ['ಹಾಡಿ'], [], 'ಸಂಗೀತ?')], quiz: [q('ಯಾವುದು ಉಸಿರು?', ['ಹಸಿರು', 'ಕಲ್ಲು'], 'ಹಸಿರು')], learningOutcomes: ['ಪರಿಸರ ಕಾಳಜಿ'] }] },
    { id: 'k11', title: '11. ಸ್ವಾತಂತ್ರ್ಯದ ಬೆಳಕು', topics: [{ id: 'k11-t1', title: 'ಇತಿಹಾಸ', subtopics: ['ಹೋರಾಟಗಾರರು'], readingText: { en: 'Freedom Fighters.', kn: 'ಸಂಗೊಳ್ಳಿ ರಾಯಣ್ಣನ ಸಾಹಸ ಕಥೆ.' }, activities: [act('ಕಥೆ ಹೇಳಿ', 'ರಾಯಣ್ಣನ ಸಾಹಸ ವಿವರಿಸಿ.', 'speaking', 'mid', ['ಮಾಹಿತಿ'], [], 'ಧೈರ್ಯ?')], quiz: [q('ರಾಯಣ್ಣ ಎಲ್ಲಿಯವನು?', ['ಸಂಗೊಳ್ಳಿ', 'ಮೈಸೂರು'], 'ಸಂಗೊಳ್ಳಿ')], learningOutcomes: ['ಐತಿಹಾಸಿಕ ಅರಿವು'] }] },
    { id: 'k12', title: '12. ಮಕ್ಕಳ ರಾಜ್ಯ', topics: [{ id: 'k12-t1', title: 'ಹಕ್ಕುಗಳು', subtopics: ['ಬಾಲ ಕಾರ್ಮಿಕ ಪದ್ಧತಿ ನಿರ್ಮೂಲನೆ'], readingText: { en: 'Children\'s Rights.', kn: 'ಪ್ರತಿಯೊಬ್ಬ ಮಗುವಿಗೂ ಶಿಕ್ಷಣದ ಹಕ್ಕಿದೆ.' }, activities: [act('ಚರ್ಚೆ', 'ಶಾಲೆಯ ಪ್ರಾಮುಖ್ಯತೆ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ.', 'speaking', 'low', ['ಮಾತನಾಡಿ'], [], 'ಶಾಲೆಯ ಖುಷಿ?')], quiz: [q('ಮಕ್ಕಳಿಗೆ ಏನು ಬೇಕು?', ['ಕೆಲಸ', 'ಶಿಕ್ಷಣ'], 'ಶಿಕ್ಷಣ')], learningOutcomes: ['ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿ'] }] }
  ]
};

// ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────────
const computerSubject: Subject = {
  id: 'computers', title: 'Computer Science', icon: '💻', color: '#2D3436',
  chapters: [
    { id: 'c1', title: '1. Know Your Computer', topics: [{ id: 'c1-t1', title: 'Hardware', subtopics: ['CPU', 'Monitor'], readingText: { en: 'Computer has hardware like CPU and Software like Windows.' }, activities: [act('Label', 'Label parts of PC.', 'drawing', 'low', ['Draw PC', 'Label'], ['Paper'], 'Brain?')], quiz: [q('Brain of PC?', ['CPU', 'Mouse'], 'CPU')], learningOutcomes: ['Identify hardware'] }] },
    { id: 'c2', title: '2. Input and Output', topics: [{ id: 'c2-t1', title: 'Devices', subtopics: ['Mouse', 'Printer'], readingText: { en: 'Input devices give data, Output devices show results.' }, activities: [act('Sort', 'Sort devices.', 'performing', 'low', ['List items'], ['Notebook'], 'Keyboard?')], quiz: [q('Keyboard is?', ['Input', 'Output'], 'Input')], learningOutcomes: ['Differentiate I/O'] }] },
    { id: 'c3', title: '3. Windows Basics', topics: [{ id: 'c3-t1', title: 'Desktop', subtopics: ['Icons', 'Taskbar'], readingText: { en: 'The first screen is called Desktop.' }, activities: [act('Screen Draw', 'Draw desktop icons.', 'drawing', 'low', ['Sketch screen'], ['Paper'], 'Start button?')], quiz: [q('Main screen?', ['Wall', 'Desktop'], 'Desktop')], learningOutcomes: ['Navigate Windows'] }] },
    { id: 'c4', title: '4. MS Word Intro', topics: [{ id: 'c4-t1', title: 'Typing', subtopics: ['Font', 'Save'], readingText: { en: 'MS Word is for typing letters.' }, activities: [act('Type name', 'Type your name in Word.', 'performing', 'mid', ['Open Word', 'Type'], ['PC'], 'Bold?')], quiz: [q('Used for typing?', ['Paint', 'Word'], 'Word')], learningOutcomes: ['Basic typing'] }] },
    { id: 'c5', title: '5. Internet Safety', topics: [{ id: 'c5-t1', title: 'Online Rules', subtopics: ['Privacy'], readingText: { en: 'Don\'t share passwords online.' }, activities: [act('Rules List', 'Write 5 safety rules.', 'writing', 'low', ['Be safe'], ['Notebook'], 'Shared?')], quiz: [q('Share password?', ['Yes', 'No'], 'No')], learningOutcomes: ['Digital citizenship'] }] },
    { id: 'c6', title: '6. Coding Basics', topics: [{ id: 'c6-t1', title: 'Algorithms', subtopics: ['Steps'], readingText: { en: 'Coding is giving step-by-step instructions.' }, activities: [act('Robot Game', 'Give instructions to a friend.', 'performing', 'low', ['Forward', 'Turn'], [], 'Target?')], quiz: [q('Step-by-step instructions?', ['Algorithm', 'Game'], 'Algorithm')], learningOutcomes: ['Computational thinking'] }] },
    { id: 'c7', title: '7. MS Paint Mastery', topics: [{ id: 'c7-t1', title: 'Drawing', subtopics: ['Shapes', 'Fill Color'], readingText: { en: 'Use MS Paint to create digital art.' }, activities: [act('Art Time', 'Draw a house in Paint.', 'performing', 'mid', ['Use shapes', 'Fill colors'], ['PC'], 'Pretty?')], quiz: [q('Tool to fill color?', ['Brush', 'Bucket'], 'Bucket')], learningOutcomes: ['Digital creativity'] }] },
    { id: 'c8', title: '8. PowerPoint Basics', topics: [{ id: 'c8-t1', title: 'Presentations', subtopics: ['Slides', 'Design'], readingText: { en: 'PowerPoint helps you show your ideas on slides.' }, activities: [act('First Slide', 'Create a slide about yourself.', 'performing', 'mid', ['Add text', 'Add picture'], ['PC'], 'Cool?')], quiz: [q('Used to make slides?', ['Word', 'PowerPoint'], 'PowerPoint')], learningOutcomes: ['Presentation skills'] }] },
    { id: 'c9', title: '9. Scratch Jr. Intro', topics: [{ id: 'c9-t1', title: 'Visual Coding', subtopics: ['Blocks', 'Characters'], readingText: { en: 'Scratch Jr. lets you make your own games.' }, activities: [act('Move Cat', 'Make the cat walk 5 steps.', 'performing', 'high', ['Drag blocks', 'Run'], ['PC'], 'Meow?')], quiz: [q('Scratch use?', ['Blocks', 'Typing'], 'Blocks')], learningOutcomes: ['Game design basics'] }] },
    { id: 'c10', title: '10. Email & Communication', topics: [{ id: 'c10-t1', title: 'Internet', subtopics: ['Emails', 'Safety'], readingText: { en: 'Emails are digital letters.' }, activities: [act('Write Email', 'Write a mock email to teacher.', 'writing', 'low', ['To:', 'Subject:', 'Body'], ['Notebook'], 'Polite?')], quiz: [q('What is @ used for?', ['Phone', 'Email'], 'Email')], learningOutcomes: ['Digital communication'] }] }
  ]
};

export const syllabus: Subject[] = [
  mathSubject,
  evsSubject,
  hindiSubject,
  englishSubject,
  kannadaSubject,
  computerSubject
];
