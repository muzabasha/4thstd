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
          act('The Wall Architect', 'Build a mini-wall using real or sponge bricks to understand strength and patterns.', 'performing', 'mid',
            ['Collect 20 blocks or bricks', 'Stack them in an interlocking pattern', 'Try building a hole (Jaali)', 'Test if it stands firm'],
            ['Lego blocks', 'Sponge bricks', 'Pebbles'], 'Interlocking bricks are much stronger than straight stacks!'),
          act('Symmetry Mirror Quest', 'Find hidden symmetry in your house using a small mirror.', 'drawing', 'low',
            ['Find an object like a leaf or a cup', 'Place a mirror in the middle', 'Check if the reflection looks the same', 'Draw the symmetry line'],
            ['Mirror', 'Notebook', 'Natural objects'], 'Did you know most butterfly wings are perfectly symmetric?'),
          act('Jaali Paper Ninja', 'Create a decorative window pattern to see how light passes through.', 'performing', 'mid',
            ['Fold a paper 3 times', 'Cut triangles and circles on the edges', 'Unfold and paste on a window', 'Observe the light patterns'],
            ['Paper', 'Child-safe scissors'], 'How many different shapes can you see in the light?')
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
          act('The Human Tape Measure', 'Measure your classroom or room using your own body as a ruler.', 'calculating', 'mid',
            ['Measure your hand span in cm', 'Walk across the room counting steps', 'Multiply steps by your foot length', 'Check with a real tape'],
            ['Ruler', 'Your own feet!'], 'Whose steps were the most accurate?'),
          act('Estimation Marathon', 'Guess the length of 5 objects before measuring them.', 'calculating', 'low',
            ['Look at a pencil, table, and door', 'Write down your guess in cm/m', 'Measure them precisely', 'Find the difference'],
            ['Ruler', 'Measuring tape', 'Notebook'], 'Can you get within 2cm of the real length?'),
          act('Perimeter Patrol', 'Find the total boundary length of your study table.', 'drawing', 'high',
            ['Measure all 4 sides', 'Add them together', 'Draw the table on paper', 'Label the lengths'],
            ['Notebook', 'Measuring tape'], 'Perimeter is like the fence around a garden!')
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
          act('Picnic Budget Master', 'Plan a class picnic for 50 people with a fixed budget.', 'calculating', 'high',
            ['Count students and teachers', 'Calculate total food cost', 'Determine how many buses are needed', 'Stay within ₹5000'],
            ['Notebook', 'Price list of snacks'], 'Can you save ₹500 from the budget?'),
          act('The Bus Seat Puzzle', 'Arrange 210 students into buses of 40 and 50 seats.', 'calculating', 'mid',
            ['Calculate total seats', 'Compare different bus combinations', 'Find the cheapest way', 'Draw the seating plan'],
            ['Notebook'], 'How many empty seats are left over?')
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
          act('The 1-Minute Challenge', 'Understand how long one minute actually feels.', 'performing', 'mid',
            ['Close your eyes', 'Raise your hand when you think 1 minute has passed', 'Stop the timer and check', 'Try again while jumping'],
            ['Stopwatch or Clock'], 'Did jumping make the minute feel longer or shorter?'),
          act('My Hero Day Log', 'Create a 24-hour timeline of your best day.', 'writing', 'low',
            ['Write down your wake-up time', 'Log every 2 hours of activity', 'Convert all to 24-hour format', 'Draw a clock for noon'],
            ['Crayons', 'Paper'], 'What is 3:30 PM in Railway Time?')
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
          act('The Lemonade Stand', 'Simulate a business to understand profit and loss.', 'performing', 'high',
            ['Buy lemons and sugar (imaginary or real)', 'Calculate the Total Cost Price', 'Sell 10 cups at ₹5 each', 'Calculate Profit/Loss'],
            ['Play money', 'Paper cups'], 'What happens if you lower the price to ₹3?'),
          act('Bill Detective', 'Read real grocery bills and find errors.', 'calculating', 'mid',
            ['Collect 3 old shop bills', 'Re-calculate the totals', 'Check for discount deductions', 'Find the change returned'],
            ['Real bills', 'Calculator (optional)'], 'Did the shopkeeper give the right change?')
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
          act('The Magic Potion Maker', 'Mix different liquids to reach an exact volume.', 'performing', 'mid',
            ['Collect 100ml, 200ml and 500ml cups', 'Try to get exactly 1 Litre', 'Use a medicine dropper for mL', 'Mark levels on a jar'],
            ['Water', 'Measuring cups', 'Food colour'], 'How many drops of water make 1 mL?'),
          act('Capacity Survey', 'Check the labels of everything in your kitchen.', 'writing', 'low',
            ['List 5 items (Milk, Oil, Juice)', 'Write their capacity in L or mL', 'Sort them from smallest to largest', 'Estimate remaining water'],
            ['Kitchen items', 'Notebook'], 'Which is bigger: 500mL or 0.5L?')
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
          act('The Perfect Centre Mission', 'Find the exact middle of a physical circular object.', 'performing', 'high',
            ['Trace a plate on paper', 'Cut out the circle', 'Fold it twice to find the centre', 'Measure the Radius'],
            ['Paper', 'Plates of different sizes', 'Ruler'], 'Is the diameter always twice the radius?'),
          act('Bangle Art', 'Create a Rangoli using circles of different sizes.', 'drawing', 'low',
            ['Collect bangles, caps, and coins', 'Trace them in a pattern', 'Label the biggest and smallest', 'Colour the circles'],
            ['Bangles', 'Colours'], 'Can you draw a circle inside another circle?')
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
          act('The Pizza Party Fraction', 'Divide a paper pizza into equal shares for friends.', 'drawing', 'mid',
            ['Draw a giant circle', 'Cut it into 4 equal slices (Quarters)', 'Give 3/4 to one group', 'How much is left?'],
            ['Paper', 'Scissors', 'Crayons'], 'If you have 8 slices, what is 1/2 of the pizza?'),
          act('Fraction Hunt', 'Find things in your house that are "Half" or "Quarter".', 'performing', 'low',
            ['Find a half-filled bottle', 'Cut an apple in half', 'Fold a towel into quarters', 'Take a photo of a half-moon'],
            ['Camera/Notebook', 'Household items'], 'Can you find something that is 1/3 full?')
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
          act('Nature Pattern Quest', 'Find and draw repeating patterns found in plants and flowers.', 'drawing', 'low',
            ['Go to a garden or look at plants', 'Find a pattern in the leaves or petals', 'Draw it in your notebook', 'Predict the next step'],
            ['Notebook', 'Crayons', 'A garden!'], 'Nature is the best pattern designer!'),
          act('The Code Breaker', 'Create a secret pattern code for a friend to solve.', 'calculating', 'mid',
            ['Choose a rule (e.g., +3, -1)', 'Write the first 4 numbers', 'Let your friend guess the next 3', 'Reverse roles'],
            ['Notebook', 'Pen'], 'Can you create a pattern with both shapes and numbers?')
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
          act('The Candy Factory', 'Simulate a factory to understand grouping and division.', 'performing', 'mid',
            ['Collect 24 seeds or beads (candies)', 'Pack them into boxes of 4', 'Count how many boxes you filled', 'Try packing in 6s'],
            ['Pebbles or Seeds', 'Small bowls or boxes'], 'Division is just making equal groups!'),
          act('Multiplication Array Master', 'Build a grid of objects to visualize multiplication.', 'drawing', 'low',
            ['Choose a table (e.g., 3 x 5)', 'Draw 3 rows of 5 dots', 'Count the total number', 'Write the table'],
            ['Graph paper', 'Markers'], 'Rotating the array (5 x 3) gives the same total!')
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
          act('The Human Balance Scale', 'Use your hands to compare the weight of different household items.', 'performing', 'low',
            ['Hold an apple in one hand', 'Hold a book in the other', 'Guess which is heavier', 'Check using a real kitchen scale'],
            ['Household objects', 'Kitchen scale (optional)'], 'Was your hand-scale accurate?'),
          act('Weight Label Detective', 'Find the "Net Weight" printed on food packets.', 'writing', 'mid',
            ['Collect 5 empty packets (Biscuits, Flour)', 'Find the weight in g or kg', 'Add them together to find total weight', 'Sort by weight'],
            ['Empty food packets', 'Notebook'], '1000g is exactly 1kg — check if your total adds up to a kg!')
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
          act('The Thread Perimeter Challenge', 'Measure the boundary of irregular shapes using a string.', 'calculating', 'high',
            ['Draw an irregular shape like a cloud', 'Lay a string exactly along its boundary', 'Mark the string and measure it with a ruler', 'Compare with a rectangle'],
            ['String', 'Ruler', 'Paper'], 'Perimeter is the length of the "fence" around any shape!'),
          act('Area Square Counter', 'Calculate the area of your hand on grid paper.', 'drawing', 'mid',
            ['Trace your hand on a grid sheet', 'Count all full squares inside', 'Count two half-squares as one full', 'Find the total area in sq cm'],
            ['Grid paper', 'Pencil'], 'The more squares you count, the bigger the area!')
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
          act('The Emoji Feeling Survey', 'Collect and chart data about how your friends are feeling today.', 'writing', 'mid',
            ['Ask 10 friends to pick an emoji (Happy, Sad, Excited)', 'Use Tally Marks to record choices', 'Draw a Pictograph', 'Find the most popular feeling'],
            ['Notebook', 'Crayons'], 'Which emoji has the most tally marks?'),
          act('Bird Watcher Chart', 'Observe birds or vehicles for 10 minutes and chart them.', 'drawing', 'low',
            ['Look out of a window', 'Record each bird/car you see with a tally', 'Create a bar chart of your data', 'Present your findings'],
            ['Window view', 'Notebook'], 'What was the rarest thing you saw?')
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
    { id: 'e1', title: '1. Going to School', topics: [{ id: 'e1-t1', title: 'Transport', subtopics: ['Bridges', 'Boats'], readingText: { en: 'In many parts of India, children face challenges reaching school. In Assam, they use bamboo bridges; in Ladakh, they use trolleys; and in Kerala, they use small wooden boats called Vallams. These diverse modes of transport show the determination of students to learn regardless of the terrain.' }, activities: [act('Bridge Engineer', 'Build a bridge using popsicle sticks or pens and test its strength.', 'performing', 'mid', ['Bridge 2 chairs', 'Place sticks across', 'Add weights (books)', 'Identify weak points'], ['Popsicle sticks', 'Books'], 'Can your bridge hold 3 books?')], quiz: [q('What is a Vallam?', ['Car', 'Boat'], 'Boat')], learningOutcomes: ['Identify transport modes'] }] },
    { id: 'e2', title: '2. Ear to Ear', topics: [{ id: 'e2-t1', title: 'Animal Ears', subtopics: ['Hidden ears'], readingText: { en: 'Animals have ears of various shapes and sizes. Some, like elephants, have large fan-like ears to stay cool. Others, like birds and lizards, have tiny holes for ears that are often hidden under feathers or scales. Some animals also have skin patterns that help them camouflage in their environment.' }, activities: [act('The Silent Listening Quest', 'Identify sounds around you while blindfolded.', 'performing', 'low', ['Sit quietly for 2 mins', 'Close your eyes', 'Point to sound sources', 'Mimic the sounds'], [], 'Did you hear the birds or the fan?')], quiz: [q('Does elephant have big ears?', ['Yes', 'No'], 'Yes')], learningOutcomes: ['Observe animal differences'] }] },
    { id: 'e3', title: '3. A Day with Nandu', topics: [{ id: 'e3-t1', title: 'Elephants', subtopics: ['Herds', 'Diet'], readingText: { en: 'Elephants are social animals that live in herds. A herd usually consists of females and their young calves, led by the oldest female called the matriarch. Adult elephants eat more than 100 kilograms of leaves and twigs in a single day and love playing in mud to keep their skin cool.' }, activities: [act('The Herd Roleplay', 'Simulate elephant communication using sounds and gestures.', 'performing', 'mid', ['Group up in a "herd"', 'Follow the "Nani" (oldest)', 'Use ears to communicate', 'Mime eating 100kg leaves'], [], 'How does it feel to be part of a team?')], quiz: [q('Who leads the herd?', ['Oldest female', 'Youngest male'], 'Oldest female')], learningOutcomes: ['Understand elephant social structure'] }] },
    { id: 'e4', title: '4. The Story of Amrita', topics: [{ id: 'e4-t1', title: 'Trees', subtopics: ['Chipko Movement'], readingText: { en: 'The Khejadi tree is found mainly in desert areas and can grow without much water. In the village of Khejadli in Rajasthan, Amrita Devi and 363 other people sacrificed their lives to protect these trees from being cut down. This inspired many conservation movements in India.' }, activities: [act('The Chipko Hug', 'Adopt and "protect" a tree in your school or home.', 'performing', 'low', ['Find a tree', 'Give it a name', 'Tie a thread (Rakhi) to it', 'Water it daily'], ['Water', 'Thread'], 'You are now a Tree Protector!')], quiz: [q('Where did Amrita live?', ['Kerala', 'Rajasthan'], 'Rajasthan')], learningOutcomes: ['Appreciate conservation'] }] },
    { id: 'e5', title: '5. Anita and the Honeybees', topics: [{ id: 'e5-t1', title: 'Beekeeping', subtopics: ['Bee life cycle'], readingText: { en: 'Beekeeping is the practice of managing honeybee colonies. Every beehive has one Queen bee that lays eggs, a few male drones, and thousands of female worker bees. Workers find nectar from flowers and turn it into honey. Anita Khushwaha from Bihar became a famous beekeeper to support her education.' }, activities: [act('Honey Tasting Lab', 'Compare real honey with sugar water to understand its value.', 'performing', 'mid', ['Taste 1 drop of honey', 'Taste sugar water', 'Note the differences', 'Draw a beehive'], ['Honey', 'Sugar water'], 'Why is honey called "Liquid Gold"?')], quiz: [q('Who lays eggs?', ['Queen', 'Worker'], 'Queen')], learningOutcomes: ['Learn about bees'] }] },
    { id: 'e6', title: '6. Omana\'s Journey', topics: [{ id: 'e6-t1', title: 'Train Trip', subtopics: ['Tickets'], readingText: { en: 'Traveling by train involves many steps, from booking tickets to finding your coach and berth. A railway ticket contains important information like the PNR number, train number, date of journey, and fare. Observation during a journey helps us learn about different regions and cultures.' }, activities: [act('The PNR Detective', 'Analyze a train ticket to find hidden information.', 'calculating', 'mid', ['Locate PNR number', 'Find train number and date', 'Identify the berth type', 'Calculate travel time'], ['Sample ticket'], 'What does "CNF" stand for on a ticket?')], quiz: [q('Where did she start?', ['Gujarat', 'Delhi'], 'Gujarat')], learningOutcomes: ['Understand train travel'] }] },
    { id: 'e7', title: '7. From the Window', topics: [{ id: 'e7-t1', title: 'Bridges & Tunnels', subtopics: ['Mountain travel'], readingText: { en: 'As a train passes through different terrains, we see bridges over rivers and tunnels through mountains. In the journey from Goa to Kerala, there are 2,000 bridges and 92 tunnels! These engineering marvels help us travel through difficult geographical landscapes.' }, activities: [act('The Landscape Journal', 'Observe and record changes in the environment during a short walk.', 'writing', 'low', ['Walk for 10 mins', 'Note down 3 things you see (e.g., bridge, tree, shop)', 'Draw the most interesting view', 'Describe the sounds'], ['Notebook', 'Pencil'], 'Did the landscape change from start to finish?')], quiz: [q('How many tunnels?', ['50', '92'], '92')], learningOutcomes: ['Identify landscape features'] }] },
    { id: 'e8', title: '8. Reaching Grandmother\'s House', topics: [{ id: 'e8-t1', title: 'Water Transport', subtopics: ['Ferries'], readingText: { en: 'In Kerala, water transport is very common. People use boats called Vallams and large ferries to cross backwaters and rivers. A ferry is a large boat used to carry people and goods across a body of water. Other modes like buses and auto-rickshaws are also used after reaching the shore.' }, activities: [act('Boat Maker', 'Make a paper boat.', 'performing', 'low', ['Fold boat'], ['Paper'], 'Does it float?')], quiz: [q('What is a Ferry?', ['Bus', 'Boat'], 'Boat')], learningOutcomes: ['Identify water transport'] }] },
    { id: 'e9', title: '9. Changing Families', topics: [{ id: 'e9-t1', title: 'Family', subtopics: ['New members'], readingText: { en: 'Families can change for many reasons, such as the birth of a new baby, a marriage, or a family member moving to a new city for work. These changes affect the roles and responsibilities of everyone in the house. Learning about our family tree helps us understand our roots.' }, activities: [act('Family Tree', 'Draw family tree.', 'drawing', 'mid', ['Add members'], ['Paper'], 'Who is oldest?')], quiz: [q('What changes family?', ['New baby', 'Buying a pen'], 'New baby')], learningOutcomes: ['Recognise family changes'] }] },
    { id: 'e10', title: '10. Hu Tu Tu, Hu Tu Tu', topics: [{ id: 'e10-t1', title: 'Kabaddi', subtopics: ['Rules', 'Teamwork'], readingText: { en: 'Kabaddi is a traditional Indian sport that requires strength, speed, and breath control. Players must chant "Kabaddi" in one breath while trying to tag members of the opposing team. It teaches us about teamwork, following rules, and maintaining physical fitness.' }, activities: [act('Rules Poster', 'Draw Kabaddi court.', 'drawing', 'low', ['Write rules'], ['Paper'], 'Have you played?')], quiz: [q('Raider chants?', ['Go', 'Kabaddi'], 'Kabaddi')], learningOutcomes: ['Learn traditional games'] }] },
    { id: 'e11', title: '11. The Valley of Flowers', topics: [{ id: 'e11-t1', title: 'Plants', subtopics: ['Uttarakhand flora'], readingText: { en: 'The Valley of Flowers in the mountains of Uttarakhand is a place where hundreds of types of wildflowers bloom during the monsoon. Flowers are used for many things: as medicine (turmeric, cloves), as food (kachnar, banana flowers), and even to make colors for painting.' }, activities: [act('The Natural Dye Maker', 'Extract colors from flower petals to make organic art.', 'performing', 'mid', ['Collect fallen petals (Red, Yellow, Blue)', 'Crush them with a little water', 'Use the juice as paint', 'Draw a flower with its own colors'], ['Petals', 'Bowl', 'Paper'], 'Which flower gave the strongest color?')], quiz: [q('Where is Valley of Flowers?', ['Bihar', 'Uttarakhand'], 'Uttarakhand')], learningOutcomes: ['Identify local plants'] }] },
    { id: 'e12', title: '12. Changing Times', topics: [{ id: 'e12-t1', title: 'Houses', subtopics: ['Materials'], readingText: { en: 'Over the decades, the way houses are built has changed significantly. In the past, houses were often made of mud, straw, and wood. Today, most houses are "Pucca" houses made of bricks, cement, and iron. These changes reflect progress in technology and building materials.' }, activities: [act('Mini Mud-House Builder', 'Build a small model of a traditional house using clay or mud.', 'performing', 'high', ['Mix clay with water', 'Build 4 small walls', 'Add a "thatch" roof with dry grass', 'Let it dry and test its strength'], ['Clay/Mud', 'Dry grass', 'Sticks'], 'How is this different from a cement house?')], quiz: [q('Old houses used?', ['Steel', 'Mud'], 'Mud')], learningOutcomes: ['Identify housing changes'] }] },
    { id: 'e13', title: '13. A River\'s Tale', topics: [{ id: 'e13-t1', title: 'Rivers', subtopics: ['Pollution'], readingText: { en: 'A river is a source of life that changes as it flows from mountains to the sea. While it is clean at the source, it becomes polluted as it passes through cities and factories. Water pollution is caused by throwing waste, chemicals, and sewage into the river, which harms fish and humans.' }, activities: [act('The River Pollution Simulator', 'Observe how pollutants spread in a bowl of clean water.', 'performing', 'mid', ['Fill a clear bowl with water', 'Add 1 drop of ink (pollution)', 'Observe how it spreads', 'Try to "clean" it with a spoon'], ['Clear bowl', 'Ink or Oil', 'Water'], 'Can you easily remove the ink once it spreads?')], quiz: [q('Where do rivers start?', ['Sea', 'Mountains'], 'Mountains')], learningOutcomes: ['Understand conservation'] }] },
    { id: 'e14', title: '14. Basva\'s Farm', topics: [{ id: 'e14-t1', title: 'Farming', subtopics: ['Onions', 'Tools'], readingText: { en: 'Farming involves many stages like preparing the soil, sowing seeds, removing weeds, and harvesting. In Karnataka, farmers like Basva use tools like the "Khunti" to loosen soil and the "Kurige" to sow seeds. Onions are ready to harvest when their leaves turn yellow and dry.' }, activities: [act('The Kitchen Onion Farmer', 'Plant an onion in a pot and track its growth.', 'performing', 'mid', ['Take a small pot with soil', 'Press a small onion halfway in', 'Water it every morning', 'Measure the green shoots daily'], ['Onion', 'Pot', 'Soil'], 'How many days did it take to sprout?')], quiz: [q('Basva is from?', ['Goa', 'Karnataka'], 'Karnataka')], learningOutcomes: ['Learn farming steps'] }] },
    { id: 'e15', title: '15. From Market to Home', topics: [{ id: 'e15-t1', title: 'Vegetables', subtopics: ['Supply chain'], readingText: { en: 'Vegetables go on a long journey from the farm to the mandi (market) and then to our homes. Some vegetables like spinach spoil quickly, while others like potatoes can stay fresh for days. Keeping vegetables moist with water help them stay fresh longer in the summer.' }, activities: [act('Sorting', 'Sort vegetables.', 'performing', 'low', ['Leafy vs non-leafy'], ['Vegetables'], 'Fresh?')], quiz: [q('How to keep fresh?', ['Fire', 'Water spray'], 'Water spray')], learningOutcomes: ['Understand food journey'] }] },
    { id: 'e16', title: '16. A Busy Month', topics: [{ id: 'e16-t1', title: 'Birds', subtopics: ['Nests', 'Beaks'], readingText: { en: 'Birds are very busy in the spring as they build nests to lay eggs. Different birds use different materials: the Weaver bird weaves grass, while the Tailor bird sews leaves together. Their beaks and claws are adapted to the type of food they eat and where they live.' }, activities: [act('The Nest Architect', 'Try to build a small nest using only things you find outside.', 'performing', 'high', ['Collect twigs, grass, mud', 'Interweave them like a bird', 'Try to place a "stone egg" inside', 'Test if it holds'], ['Twigs', 'Grass', 'Mud'], 'Is it easy to build without hands?')], quiz: [q('Who sews leaves?', ['Crow', 'Tailor bird'], 'Tailor bird')], learningOutcomes: ['Identify bird adaptations'] }] },
    { id: 'e17', title: '17. Nandita in Mumbai', topics: [{ id: 'e17-t1', title: 'City Life', subtopics: ['Crowding'], readingText: { en: 'Moving from a village to a big city like Mumbai reveals many differences. While villages have open spaces and shared water sources, cities have tall buildings, crowded streets, and small houses. People often have to face challenges like water shortages and traveling long distances for work.' }, activities: [act('Compare', 'City vs Village table.', 'writing', 'mid', ['List differences'], ['Notebook'], 'Quiet?')], quiz: [q('Mumbai is?', ['Crowded', 'Empty'], 'Crowded')], learningOutcomes: ['Understand urban life'] }] },
    { id: 'e18', title: '18. Too Much Water, Too Little Water', topics: [{ id: 'e18-t1', title: 'Water Quality', subtopics: ['Diseases'], readingText: { en: 'Access to clean drinking water is essential for health. Dirty water can contain germs that cause diseases like diarrhea and vomiting. When someone is ill, they should drink a solution of salt and sugar (ORS) to stay hydrated. Protecting our water sources from pollution is everyone\'s duty.' }, activities: [act('Filter', 'Make sand filter.', 'performing', 'high', ['Layering'], ['Bottle'], 'Clear?')], quiz: [q('Dirty water cause?', ['Cold', 'Diarrhea'], 'Diarrhea')], learningOutcomes: ['Learn health safety'] }] },
    { id: 'e19', title: '19. Abdul in the Garden', topics: [{ id: 'e19-t1', title: 'Roots', subtopics: ['Types'], readingText: { en: 'Roots have important jobs: they anchor the plant and absorb water. Some roots, like carrots and radishes, store food and are eaten as vegetables. The Banyan tree has special "aerial roots" that grow from its branches down into the soil to support the heavy tree.' }, activities: [act('Observation', 'Check grass roots.', 'performing', 'low', ['Pull grass'], ['Grass'], 'Fibrous?')], quiz: [q('Carrot is?', ['Root', 'Fruit'], 'Root')], learningOutcomes: ['Identify root types'] }] },
    { id: 'e20', title: '20. Eat Together', topics: [{ id: 'e20-t1', title: 'Festivals', subtopics: ['Bihu'], readingText: { en: 'Eating together during festivals like Bihu in Assam brings communities closer. People build "Bhelaghars" from bamboo and straw and cook special dishes like Cheva rice in large pots. These celebrations are a time for music, dance, and sharing joy with everyone.' }, activities: [act('Festival Food', 'List special dishes.', 'writing', 'low', ['Name foods'], ['Notebook'], 'Yummy?')], quiz: [q('Bihu state?', ['Kerala', 'Assam'], 'Assam')], learningOutcomes: ['Appreciate community'] }] },
    { id: 'e21', title: '21. Food and Fun', topics: [{ id: 'e21-t1', title: 'Langar', subtopics: ['Gurudwara'], readingText: { en: 'In a Gurudwara, people of all backgrounds sit together in rows to eat a free meal called Langar. It is cooked in a community kitchen where everyone contributes by helping to cook, serve, or clean. Langar teaches us about service, equality, and sharing food with love.' }, activities: [act('Draw Langar', 'Draw community kitchen.', 'drawing', 'mid', ['Large pots'], ['Paper'], 'Helping?')], quiz: [q('What is Langar?', ['Shop', 'Kitchen'], 'Kitchen')], learningOutcomes: ['Learn service'] }] },
    { id: 'e22', title: '22. The World in my Home', topics: [{ id: 'e22-t1', title: 'Values', subtopics: ['Honesty'], readingText: { en: 'Our homes are where we learn important life values like honesty and fairness. Being honest means doing the right thing, like returning extra change given by a shopkeeper. These values help us build trust and become good citizens in our community.' }, activities: [act('Story', 'Write about honesty.', 'writing', 'low', ['Your story'], ['Notebook'], 'Proud?')], quiz: [q('Return extra money?', ['Yes', 'No'], 'Yes')], learningOutcomes: ['Moral development'] }] },
    { id: 'e23', title: '23. Pochampalli', topics: [{ id: 'e23-t1', title: 'Weaving', subtopics: ['Sarees'], readingText: { en: 'Pochampalli is a place in Telangana famous for its beautiful hand-woven sarees. Weaving is a traditional craft that takes many days of hard work by the whole family. The unique "Ikat" patterns are made by dyeing the threads before weaving them into cloth.' }, activities: [act('The Paper Weaver', 'Create a woven pattern using strips of colored paper.', 'drawing', 'mid', ['Cut 10 strips of blue paper', 'Cut 10 strips of red paper', 'Weave them over and under', 'Identify the repeating pattern'], ['Colored paper', 'Scissors'], 'How many squares did you make?')], quiz: [q('Pochampalli state?', ['Telangana', 'Delhi'], 'Telangana')], learningOutcomes: ['Understand crafts'] }] },
    { id: 'e24', title: '24. Home and Abroad', topics: [{ id: 'e24-t1', title: 'Climate', subtopics: ['Abu Dhabi'], readingText: { en: 'The climate in Abu Dhabi is very hot and dry as it is located in a desert area. Unlike India, it gets very little rain, and water is more expensive than petrol. Plants like Date Palms are common because they can grow in the desert with very little water.' }, activities: [act('The Solar Evaporation Test', 'Observe how quickly water evaporates in the sun vs shade.', 'performing', 'high', ['Put 2 small cups of water outside', 'Place one in direct sun and one in shade', 'Check after 2 hours', 'Measure which has less water'], ['2 Cups', 'Water', 'Sun!'], 'Which one evaporated faster?')], quiz: [q('Abu Dhabi tree?', ['Mango', 'Date Palm'], 'Date Palm')], learningOutcomes: ['Compare climates'] }] },
    { id: 'e25', title: '25. Spicy Riddles', topics: [{ id: 'e25-t1', title: 'Spices', subtopics: ['Uses'], readingText: { en: 'Spices make our food tasty and are also used as medicines. In India, spices like turmeric are used to heal wounds, cloves are used for toothaches, and ginger is used for digestion. Each spice has a unique smell, taste, and benefit for our body.' }, activities: [act('Spice Box', 'Identify by smell.', 'performing', 'low', ['Smell test'], ['Spices'], 'Strong?')], quiz: [q('Healing spice?', ['Salt', 'Turmeric'], 'Turmeric')], learningOutcomes: ['Learn spice benefits'] }] },
    { id: 'e26', title: '26. Defense Officer: Wahida', topics: [{ id: 'e26-t1', title: 'Bravery', subtopics: ['Navy'], readingText: { en: 'Wahida Prism is a doctor in the Indian Navy and was the first woman to lead a passing-out parade. Her journey from a small village in Jammu and Kashmir to the Navy shows that with hard work and determination, any dream can be achieved. She serves her country with pride and courage.' }, activities: [act('Dream', 'Write career goal.', 'writing', 'low', ['Ambition'], ['Notebook'], 'Why?')], quiz: [q('Wahida is in?', ['Army', 'Navy'], 'Navy')], learningOutcomes: ['Inspiration'] }] },
    { id: 'e27', title: '27. Chuskit Goes to School', topics: [{ id: 'e27-t1', title: 'Inclusion', subtopics: ['Accessibility'], readingText: { en: 'Chuskit is a girl in Ladakh who uses a wheelchair and could not reach school because of the uneven path and a river. Her community came together to level the road and build a bridge, showing how empathy and teamwork can help everyone participate in school and society.' }, activities: [act('Audit', 'Check for ramps.', 'performing', 'mid', ['Look around'], ['School'], 'Ramps?')], quiz: [q('Chuskit uses?', ['Cycle', 'Wheelchair'], 'Wheelchair')], learningOutcomes: ['Understand empathy'] }] }
  ]
};

// ─── HINDI (Rimjhim) ──────────────────────────────────────────────────────────
const hindiSubject: Subject = {
  id: 'hindi', title: 'Hindi (Rimjhim)', icon: '📝', color: '#E17055',
  chapters: [
    { id: 'h1', title: '1. मन के भोले-भाले बादल', topics: [{ id: 'h1-t1', title: 'कविता', subtopics: ['बादल'], readingText: { en: 'In this poem, the poet imagines clouds as innocent and playful children. Sometimes they look like elephants with trunks, sometimes like camels with humps, and sometimes like brave warriors. They bring rain and joy to everyone.', hi: 'इस कविता में कवि ने बादलों को भोले-भाले बच्चों की तरह बताया है। बादल कभी हाथी की सूँड जैसे लगते हैं, कभी ऊँट के कूबड़ जैसे और कभी परियों के पंख जैसे। वे अपनी मनमानी करते हैं और आसमान में यहाँ-वहाँ दौड़ते हैं।' }, activities: [act('बादल कोलाज', 'रुई और कागज़ की मदद से बादलों के अलग-अलग आकार बनाओ।', 'drawing', 'low', ['रुई लें', 'नीले कागज़ पर चिपकाएँ', 'हाथी या ऊँट का आकार दें', 'बादलों के नाम लिखें'], ['Cotton', 'Blue paper', 'Glue'], 'आपका बादल कौन सा जानवर लग रहा है?')], quiz: [q('बादल कैसे हैं?', ['भोले-भाले', 'कठोर'], 'भोले-भाले')], learningOutcomes: ['कविता का आनंद'] }] },
    { id: 'h2', title: '2. जैसा सवाल वैसा जवाब', topics: [{ id: 'h2-t1', title: 'बीरबल', subtopics: ['चतुराई'], readingText: { en: 'This story highlights the intelligence and wit of Birbal, Emperor Akbar\'s famous minister. No matter how difficult the question asked by his rivals, Birbal always had a clever and logical answer ready.', hi: 'यह कहानी बादशाह अकबर के मंत्री बीरबल की चतुराई और बुद्धिमानी को दर्शाती है। अकबर के दरबार के अन्य लोग बीरबल से जलते थे, लेकिन बीरबल हर मुश्किल सवाल का अपनी बुद्धि से सही और मज़ेदार जवाब देते थे।' }, activities: [act('पहेली', 'पहेली पूछो।', 'speaking', 'low', ['सोचो'], [], 'जवाब?')], quiz: [q('चतुर कौन था?', ['बीरबल', 'राजा'], 'बीरबल')], learningOutcomes: ['बुद्धि का महत्व'] }] },
    { id: 'h3', title: '3. किरमिच की गेंद', topics: [{ id: 'h3-t1', title: 'ईमानदारी', subtopics: ['सच्चाई'], readingText: { en: 'Dinesh finds a new ball and tries to find its real owner. The story teaches us about honesty and the importance of returning lost items to their rightful owners instead of keeping them for ourselves.', hi: 'दिनेश को बगीचे में एक नई गेंद मिलती है। वह उसे अपने पास रखने के बजाय उसके असली मालिक को ढूँढने की कोशिश करता है। यह कहानी हमें ईमानदारी और सच्चाई का महत्व सिखाती है।' }, activities: [act('खोया-पाया रिपोर्ट', 'एक गेंद मिलने की सूचना बनाओ ताकि असली मालिक मिल सके।', 'writing', 'mid', ['गेंद का रंग लिखें', 'कहाँ मिली लिखें', 'अपना नाम लिखें', 'सूचना बोर्ड पर लगाएँ'], ['Notebook', 'Pen'], 'क्या आपने गेंद के मालिक को ढूँढा?')], quiz: [q('क्या मिली?', ['गेंद', 'बल्ला'], 'गेंद')], learningOutcomes: ['नैतिकता'] }] },
    { id: 'h4', title: '4. पापा जब बच्चे थे', topics: [{ id: 'h4-t1', title: 'बचपन', subtopics: ['इच्छाएँ'], readingText: { en: 'Papa wanted to be many things when he was a child — a watchman, an ice-cream seller, or even a dog! This story celebrates the imagination of childhood and the freedom to dream big.', hi: 'पापा जब छोटे थे, तो वे रोज़ कुछ नया बनना चाहते थे - कभी चौकीदार, कभी आइसक्रीम बेचने वाला और कभी कुत्ता। यह कहानी बचपन की मासूमियत और कल्पना की उड़ान के बारे में है।' }, activities: [act('बचपन का साक्षात्कार', 'पापा या बड़े घर के सदस्य से उनके बचपन के बारे में पूछें।', 'speaking', 'mid', ['तैयार करें 3 प्रश्न', 'बचपन का सपना पूछें', 'अपनी डायरी में लिखें', 'कक्षा में सुनाएं'], [], 'वे क्या बनना चाहते थे?')], quiz: [q('पापा क्या बनना चाहते थे?', ['चौकीदार', 'दोनों'], 'दोनों')], learningOutcomes: ['कल्पना'] }] },
    { id: 'h5', title: '5. दोस्त की पोशाಕ', topics: [{ id: 'h5-t1', title: 'दोस्ती', subtopics: ['नसीरुद्दीन'], readingText: { en: 'Nasiruddin takes his friend Jamal Saheb to meet his neighbors. However, he keeps mentioning the expensive clothes his friend is wearing, leading to many funny situations.', hi: 'नसीरुद्दीन अपने पुराने दोस्त जमाल साहब से मिलते हैं और उन्हें मोहल्ले में घुमाने ले जाते हैं। लेकिन वे बार-बार जमाल साहब की पोशाक (कपड़ों) के बारे में कुछ न कुछ ऐसा कह देते हैं जिससे जमाल साहब परेशान हो जाते हैं।' }, activities: [act('नाटक', 'छोटा नाटक।', 'performing', 'mid', ['अभिनय'], [], 'मज़ा आया?')], quiz: [q('दोस्त का नाम?', ['जमाल', 'अकबर'], 'जमाल')], learningOutcomes: ['सामाजिक कौशल'] }] },
    { id: 'h6', title: '6. नाव बनाओ नाव बनाओ', topics: [{ id: 'h6-t1', title: 'कविता', subtopics: ['बारिश'], readingText: { en: 'This poem describes the joy of making paper boats during the rainy season. It invites siblings and friends to join in the fun of floating boats in the puddles.', hi: 'यह कविता बारिश के मौसम में कागज़ की नाव बनाने और उसे पानी में चलाने की खुशी का वर्णन करती है। बच्चा अपने भाई से कहता है कि जल्दी से कागज़ लाओ और नाव बनाओ।' }, activities: [act('नाव', 'काಗಜ की नाव बनाओ।', 'performing', 'low', ['मोड़ो'], ['कागज'], 'तैरी?')], quiz: [q('नाव किससे बनती है?', ['लकड़ी', 'कागज'], 'कागज')], learningOutcomes: ['रचनात्मकता'] }] },
    { id: 'h7', title: '7. दान का हिसाब', topics: [{ id: 'h7-t1', title: 'गणित और दया', subtopics: ['राजा और संन्यासी'], readingText: { en: 'A stingy king refuses to help his people during a drought. A clever monk uses simple math to show the king his mistake and forces him to be generous.', hi: 'एक कंजूस राजा अपनी प्रजा की मदद करने से मना कर देता है। तब एक चतुर संन्यासी राजा को सबक सिखाने के लिए गणित का सहारा लेता है और राजा को दान देने पर मजबूर कर देता है।' }, activities: [act('हिसाब', 'दोगुना करते जाओ।', 'calculating', 'mid', ['1, 2, 4...'], ['Notebook'], 'कितना हुआ?')], quiz: [q('राजा कैसा था?', ['दानी', 'कंजूस'], 'कंजूस')], learningOutcomes: ['बुद्धिमानी'] }] },
    { id: 'h8', title: '8. कौन?', topics: [{ id: 'h8-t1', title: 'पहेली', subtopics: ['चूहा'], readingText: { en: 'The house is filled with mischief! Things are being nibbled and stolen. The poem asks the reader to identify the tiny culprit behind all this chaos.', hi: 'घर में कोई चीज़ों को कुतर रहा है और शरारत कर रहा है। कवि पूछता है कि वह कौन है जो हमारी किताब के पन्ने काट देता है और अनाज बिखेर देता है? वह चूहा है!' }, activities: [act('चित्र', 'चूहे का चित्र।', 'drawing', 'low', ['बनाओ'], ['कागज'], 'मूंछें?')], quiz: [q('चीज़ें किसने काटीं?', ['बिल्ली', 'चूहा'], 'चूहा')], learningOutcomes: ['अवलोकन'] }] },
    { id: 'h9', title: '9. स्वतंत्रता की ओर', topics: [{ id: 'h9-t1', title: 'गांधीजी', subtopics: ['दांडी यात्रा'], readingText: { en: 'Young Dhani lives in Sabarmati Ashram and wants to join Mahatma Gandhi on the famous Dandi March. He learns about non-violence and the struggle for India\'s freedom.', hi: 'धनी साबरमती आश्रम में रहता है और गांधीजी के साथ दांडी यात्रा पर जाना चाहता है। इस कहानी के माध्यम से हम आज़ादी की लड़ाई और गांधीजी के विचारों के बारे में सीखते हैं।' }, activities: [act('नमक का प्रयोग', 'खारे पानी से नमक बनाने का छोटा प्रयोग करें।', 'performing', 'high', ['एक कटोरी में पानी और नमक घोलें', 'धूप में रखें', 'पानी सूखने का इंतज़ार करें', 'बचे हुए नमक को देखें'], ['Salt', 'Water', 'Bowl'], 'क्या आपको कटोरी में नमक दिखा?')], quiz: [q('गांधीजी कहाँ जा रहे थे?', ['दांडी', 'दिल्ली'], 'दांडी')], learningOutcomes: ['देशभक्ति'] }] },
    { id: 'h10', title: '10. थप्प रोटी थप्प दाल', topics: [{ id: 'h10-t1', title: 'खेल', subtopics: ['रसोई'], readingText: { en: 'A group of children play a game of "House-House" where they pretend to cook and eat together. It shows the joy of community playing and following rules.', hi: 'बच्चे मिलकर खाना बनाने का खेल खेल रहे हैं। वे रोटी और दाल बनाते हैं और एक-दूसरे के साथ मिलकर खाते हैं। यह नाटक मिल-जुलकर काम करने की भावना जगाता है।' }, activities: [act('अभिनय', 'खाना बनाने का अभिनय।', 'performing', 'low', ['एक्टिंग'], [], 'स्वाद?')], quiz: [q('बच्चे क्या खेल रहे थे?', ['क्रिकेट', 'घर-घर'], 'घर-घर')], learningOutcomes: ['सहयोग'] }] },
    { id: 'h11', title: '11. पढ़क्कू की सूझ', topics: [{ id: 'h11-t1', title: 'तर्क', subtopics: ['कोल्हू का बैल'], readingText: { en: 'A scholar tries to apply his complicated logic to a simple oil-press worker\'s bull. He learns that practical experience is often more important than theoretical knowledge.', hi: 'एक पढ़क्कू बहुत तर्क करता है और कोल्हू के बैल को देखकर सोचता है कि वह कैसे चलता होगा। यह कविता हमें तर्क और व्यवहारिक ज्ञान के बारे में बताती है।' }, activities: [act('तर्क', 'एक तर्क सोचो।', 'speaking', 'mid', ['सोचो'], [], 'क्यों?')], quiz: [q('बैल कहाँ घूम रहा था?', ['खेत', 'कोल्हू'], 'कोल्हू')], learningOutcomes: ['तार्किक सोच'] }] },
    { id: 'h12', title: '12. सुनीता की पहिया कुर्सी', topics: [{ id: 'h12-t1', title: 'साहस', subtopics: ['समानता'], readingText: { en: 'Sunita uses a wheelchair but wants to do everything like other children. She shows great courage and determination as she navigates the market and helps everyone around her.', hi: 'सुनीता पहिया कुर्सी पर बैठकर बाज़ार जाती है। वह चाहती है कि उसे कोई अजीब न समझे और वह सब काम खुद करना चाहती है। यह कहानी साहस और समानता का संदेश देती है।' }, activities: [act('मदद', 'मदद के तरीके लिखो।', 'writing', 'low', ['लिखो'], ['Notebook'], 'समान?')], quiz: [q('सुनीता क्या चलाती थी?', ['साइकिल', 'पहिया कुर्सी'], 'पहिया कुर्सी')], learningOutcomes: ['संवेदनशीलता'] }] },
    { id: 'h13', title: '13. हुदहुद', topics: [{ id: 'h13-t1', title: 'पक्षी', subtopics: ['जानकारी'], readingText: { en: 'The Hoopoe (Hudhud) is a beautiful bird with a striking crest of feathers. This lesson provides interesting facts about its appearance, diet, and lifestyle.', hi: 'हुदहुद एक बहुत सुंदर पक्षी है जिसकी कलगी बहुत आकर्षक होती है। यह लेख हमें हुदहुद की आदतों, उसके रंग-रूप और उसकी खूबियों के बारे में जानकारी देता है।' }, activities: [act('हुदहुद चित्र', 'रंगीन चित्र बनाओ।', 'drawing', 'mid', ['रंग'], ['कागज'], 'कलगी?')], quiz: [q('हुदहुद की कलगी कैसी है?', ['सुंदर', 'काली'], 'सुंदर')], learningOutcomes: ['प्राकृतिक ज्ञान'] }] },
    { id: 'h14', title: '14. मुफ़्त ही मुफ़्त', topics: [{ id: 'h14-t1', title: 'लालच', subtopics: ['नारियल'], readingText: { en: 'Bhikhubhai is extremely stingy and wants a coconut for free. His greed leads him into many funny and troublesome situations as he climbs a coconut tree.', hi: 'भीखूभाई को एक नारियल मुफ़्त में चाहिए था। अपने लालच के कारण वे बाज़ार से लेकर समुद्र तट और फिर पेड़ पर पहुँच जाते हैं। यह एक बहुत ही हास्यप्रद कहानी है।' }, activities: [act('कहानी सुनाओ', 'हाव-भाव के साथ।', 'speaking', 'mid', ['सुनाओ'], [], 'हंसी आई?')], quiz: [q('भीखूभाई को क्या चाहिए था?', ['आम', 'नारियल'], 'नारियल')], learningOutcomes: ['लालच का फल'] }] }
  ]
};

// ─── ENGLISH (Marigold) ───────────────────────────────────────────────────────
const englishSubject: Subject = {
  id: 'english', title: 'English (Marigold)', icon: '📖', color: '#0984E3',
  chapters: [
    { id: 'en1', title: 'Unit 1: Wake Up!', topics: [{ id: 'en1-t1', title: 'Poem', subtopics: ['Morning'], readingText: { en: 'This cheerful poem encourages children to wake up early and appreciate the beauty of a new day. It describes the singing birds, the buzzing bees, and the lovely light of the morning sun. Starting the day with joy and observation helps us feel connected to nature.' }, activities: [act('The Morning Nature Sketch', 'Wake up early and draw exactly what you see out of your window.', 'drawing', 'low', ['Sit by a window at 6 AM', 'Observe the birds and light', 'Sketch the scene in 5 mins', 'Color the sky as you see it'], ['Notebook', 'Crayons'], 'Is the sky different at 6 AM vs 10 AM?')], quiz: [q('Who is singing?', ['Birds', 'Dogs'], 'Birds')], learningOutcomes: ['Recitation'] }] },
    { id: 'en2', title: 'Unit 2: Noses', topics: [{ id: 'en2-t1', title: 'Funny Noses', subtopics: ['Faces'], readingText: { en: 'Have you ever looked closely at your nose in the mirror? This poem talks about how different and funny noses can be. Every person has a unique face, and our features, like our noses, are what make us special and interesting to look at.' }, activities: [act('The Funny Face Challenge', 'Use a mirror to describe your face using new adjectives.', 'performing', 'low', ['Look in a mirror', 'Make 3 funny faces', 'Identify your nose, eyes, chin', 'Describe them using words like "funny", "flat", or "sharp"'], ['Mirror'], 'How many funny faces can you make?')], quiz: [q('Where did she look?', ['Mirror', 'Book'], 'Mirror')], learningOutcomes: ['Observation'] }] },
    { id: 'en3', title: 'Unit 3: Run!', topics: [{ id: 'en3-t1', title: 'Exercise', subtopics: ['Running'], readingText: { en: 'Running is a great way to stay healthy and active. This poem takes us away from the crowded city and into the wide-open country. It celebrates the feeling of freedom and the rush of air as we run through the meadows and under the trees.' }, activities: [act('The 10-Second Sprint', 'Experience how your breathing changes after a quick run.', 'performing', 'low', ['Stand still and feel your breath', 'Run in place for 10 seconds', 'Feel your heart and breath again', 'Explain why exercise is good'], [], 'Did your heart beat faster?')], quiz: [q('Run to the ___?', ['Country', 'City'], 'Country')], learningOutcomes: ['Health'] }] },
    { id: 'en4', title: 'Unit 4: Why?', topics: [{ id: 'en4-t1', title: 'Curiosity', subtopics: ['Questions'], readingText: { en: 'Curiosity is the engine of learning. This poem describes a young boy who is always asking "Why?". Asking questions about why the wood swims, why the lead sinks, and why the wind blows is how we begin to understand the science of the world.' }, activities: [act('The Curiosity Journal', 'Note down 5 things you wondered about today.', 'writing', 'low', ['Observe nature', 'Ask "Why" questions', 'Search for answers', 'Share one fact'], ['Notebook'], 'Why is the sky blue?')], quiz: [q('The boy is ___?', ['Curious', 'Lazy'], 'Curious')], learningOutcomes: ['Inquiry'] }] },
    { id: 'en5', title: 'Unit 5: Helen Keller', topics: [{ id: 'en5-t1', title: 'Courage', subtopics: ['Braille'], readingText: { en: 'Helen Keller was a remarkable woman who became blind and deaf at a very young age. Despite these challenges, she learned to communicate with the help of her dedicated teacher, Anne Sullivan. Her story is a testament to human courage and the power of education.' }, activities: [act('The Braille Touch Challenge', 'Create letters using pulses or beads to feel them.', 'performing', 'high', ['Glue pulses on paper', 'Form your initials', 'Close eyes and feel', 'Guess others\' letters'], ['Pulses/Beads', 'Glue', 'Paper'], 'Can you feel the shape of "A"?')], quiz: [q('Who was the teacher?', ['Anne', 'Jane'], 'Anne')], learningOutcomes: ['Empathy'] }] },
    { id: 'en6', title: 'Unit 6: Hiawatha', topics: [{ id: 'en6-t1', title: 'Nature', subtopics: ['Birds and Beasts'], readingText: { en: 'Hiawatha was a young Native American boy who lived in harmony with nature. He learned the languages of all the birds and animals, calling them "Hiawatha\'s Chickens" and "Hiawatha\'s Brothers". He respected every living thing in the forest.' }, activities: [act('Animal Sound Mapping', 'Identify and map sounds around your home like Hiawatha.', 'speaking', 'low', ['Listen for 5 mins outside', 'Imitate the sounds you hear', 'Draw a map showing where sounds come from', 'Name your "animal friends"'], ['Notebook'], 'Did you hear any secret animal talk?')], quiz: [q('Hiawatha learned to talk to?', ['Birds', 'Rocks'], 'Birds')], learningOutcomes: ['Love for nature'] }] },
    { id: 'en7', title: 'Unit 7: The Giving Tree', topics: [{ id: 'en7-t1', title: 'Generosity', subtopics: ['Nature and Man'], readingText: { en: 'This touching story by Shel Silverstein is about a tree that loves a boy and gives him everything it has—apples, branches, and finally its trunk—as he grows older. It teaches us about the selfless nature of trees and the importance of being grateful for nature\'s gifts.' }, activities: [act('The Tree Gratitude Note', 'Write a "Thank You" card to a tree for its gifts.', 'writing', 'low', ['Identify 3 things trees give us', 'Write a short note on paper', 'Tie it gently to a nearby tree', 'Vow to protect it'], ['Paper', 'Thread', 'Pen'], 'What gift from the tree is your favorite?')], quiz: [q('What did the tree give first?', ['Apples', 'Money'], 'Apples')], learningOutcomes: ['Appreciate nature'] }] },
    { id: 'en8', title: 'Unit 8: Books', topics: [{ id: 'en8-t1', title: 'Reading', subtopics: ['Library'], readingText: { en: 'Books are a gateway to new worlds and ideas. This poem celebrates the library as a place where we can find stories of all kinds—long and thin, fat and wide. Reading helps us expand our imagination and learn about things we have never seen before.' }, activities: [act('The Book Reviewer', 'Create a "Recommendation Card" for your favourite book.', 'writing', 'mid', ['Title & Author', 'One line summary', 'Star rating', 'Draw a scene'], ['Paper', 'Crayons'], 'Would your friend like this book?')], quiz: [q('Where do books live?', ['Library', 'Kitchen'], 'Library')], learningOutcomes: ['Reading habits'] }] },
    { id: 'en9', title: 'Unit 9: Pinocchio', topics: [{ id: 'en9-t1', title: 'Honesty', subtopics: ['Puppets'], readingText: { en: 'Pinocchio is a puppet who wants to be a real boy, but he has a problem—his nose grows longer every time he tells a lie. This classic story teaches us the value of honesty and the consequences of being untruthful to ourselves and others.' }, activities: [act('The Puppet Theatre', 'Make a sock puppet and perform an honesty story.', 'performing', 'high', ['Find a clean sock', 'Add button eyes', 'Perform a 1-min play', 'Discuss "Why Honesty?"'], ['Socks', 'Buttons', 'Thread'], 'Does your puppet have a name?')], quiz: [q('What grew when he lied?', ['Ear', 'Nose'], 'Nose')], learningOutcomes: ['Honesty'] }] },
    { id: 'en10', title: 'Unit 10: Strange Talk', topics: [
      { id: 'en10-t1', title: 'Strange Talk (Poem)', subtopics: ['Animal Sounds', 'Communication'], readingText: { en: 'This poem explores the different ways animals communicate. While humans use words, a frog croaks, a pig grunts, and a duck quacks. It highlights that everyone has their own unique voice and way of sharing their feelings with the world.' }, activities: [act('Animal Mime', 'Mime animal sounds and let others guess.', 'performing', 'low', ['Pick an animal', 'Make its sound', 'Guess others'], [], 'Who said "Quack"?')], quiz: [q('What did the frog say?', ['Good morning', 'Croak-croak'], 'Croak-croak')], learningOutcomes: ['Vocabulary'] },
      { id: 'en10-t2', title: 'The Grasshopper and the Ant', subtopics: ['Hard work', 'Preparation'], readingText: { en: 'The hardworking ant spends the summer collecting food for the winter, while the lazy grasshopper only sings and plays. When winter arrives, the ant is safe and warm, but the grasshopper is hungry. This story teaches us that we must work hard today to prepare for the future.' }, activities: [act('Ant Mission', 'List things you do to prepare for exams.', 'writing', 'mid', ['List tasks', 'Set dates'], ['Notebook'], 'Ready?')], quiz: [q('Who worked hard?', ['Ant', 'Grasshopper'], 'Ant')], learningOutcomes: ['Moral values'] }
    ]}
  ]
};

// ─── KANNADA (Siri Kannada) ───────────────────────────────────────────────────
const kannadaSubject: Subject = {
  id: 'kannada', title: 'Kannada (Siri Kannada)', icon: '🚩', color: '#D63031',
  chapters: [
    { id: 'k1', title: '1. ಕನ್ನಡ ನಾಡು ನುಡಿ', topics: [{ id: 'k1-t1', title: 'ಕರ್ನಾಟಕ', subtopics: ['ನಾಡಗೀತೆ'], readingText: { en: 'In this lesson, we learn about the rich culture, history, and geography of Karnataka. We explore the beauty of our state anthem "Jaya Bharat Jananiya Tanujate" and understand the significance of being a Kannadiga.', kn: 'ಈ ಪಾಠದಲ್ಲಿ ನಾವು ಕರ್ನಾಟಕದ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ, ಇತಿಹಾಸ ಮತ್ತು ಭೂಗೋಳದ ಬಗ್ಗೆ ಕಲಿಯುತ್ತೇವೆ. ನಮ್ಮ ನಾಡಗೀತೆ "ಜಯ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ"ಯ ಸೌಂದರ್ಯವನ್ನು ಮತ್ತು ಕನ್ನಡಿಗರಾಗಿರುವುದರ ಹೆಮ್ಮೆಯನ್ನು ನಾವು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುತ್ತೇವೆ.' }, activities: [act('ನಮ್ಮ ಭೂಪಟ', 'ಕರ್ನಾಟಕದ ಭೂಪಟವನ್ನು ಬಿಡಿಸಿ ಮತ್ತು ಜಿಲ್ಲೆಗಳನ್ನು ಗುರುತಿಸಿ.', 'drawing', 'mid', ['ಭೂಪಟ ಬಿಡಿಸಿ', 'ಬೆಂಗಳೂರು ಗುರುತಿಸಿ', 'ಜಿಲ್ಲೆಗಳಿಗೆ ಬಣ್ಣ ಹಾಕಿ', 'ಮುಖ್ಯ ನದಿಗಳನ್ನು ಹೆಸರಿಸಿ'], ['Map paper', 'Crayons'], 'ನಿಮ್ಮ ಜಿಲ್ಲೆ ಯಾವುದು?')], quiz: [q('ರಾಜಧಾನಿ ಯಾವುದು?', ['ಮೈಸೂರು', 'ಬೆಂಗಳೂರು'], 'ಬೆಂಗಳೂರು')], learningOutcomes: ['ಸಾಂಸ್ಕೃತಿಕ ಅರಿವು'] }] },
    { id: 'k2', title: '2. ಬಣ್ಣದ ಹಕ್ಕಿ', topics: [{ id: 'k2-t1', title: 'ಪಕ್ಷಿ', subtopics: ['ಬಣ್ಣಗಳು'], readingText: { en: 'This beautiful poem describes a colorful bird flying in the sky. It encourages children to observe nature and appreciate the various colors and sounds of birds around them.', kn: 'ಈ ಸುಂದರವಾದ ಕವಿತೆಯು ಆಕಾಶದಲ್ಲಿ ಹಾರುವ ಬಣ್ಣ ಬಣ್ಣದ ಹಕ್ಕಿಯನ್ನು ವರ್ಣಿಸುತ್ತದೆ. ಇದು ಮಕ್ಕಳಿಗೆ ಪ್ರಕೃತಿಯನ್ನು ವೀಕ್ಷಿಸಲು ಮತ್ತು ಅವರ ಸುತ್ತಲಿರುವ ಹಕ್ಕಿಗಳ ವಿವಿಧ ಬಣ್ಣಗಳು ಮತ್ತು ಶಬ್ದಗಳನ್ನು ಪ್ರೀತಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.' }, activities: [act('ಚಿತ್ರ', 'ಹಕ್ಕಿ ಚಿತ್ರ ಬಿಡಿಸಿ.', 'drawing', 'low', ['ಬಣ್ಣ ಹಾಕಿ'], ['Paper'], 'ಸುಂದರ?')], quiz: [q('ಹಕ್ಕಿ ಏನು ಮಾಡುತ್ತಿದೆ?', ['ಹಾರುತ್ತಿದೆ', 'ನಿದ್ದೆ'], 'ಹಾರುತ್ತಿದೆ')], learningOutcomes: ['ಭಾಷಾ ಜ್ಞಾನ'] }] },
    { id: 'k3', title: '3. ಬುದ್ಧಿವಂತ ರಾಮ', topics: [{ id: 'k3-t1', title: 'ಬುದ್ಧಿವಂತಿಕೆ', subtopics: ['ಕಥೆ'], readingText: { en: 'The story of Clever Rama shows how intelligence can solve difficult problems. It teaches children to think logically and use their wisdom in everyday situations.', kn: 'ಬುದ್ಧಿವಂತ ರಾಮನ ಕಥೆಯು ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಕಷ್ಟದ ಸಮಸ್ಯೆಗಳನ್ನು ಹೇಗೆ ಪರಿಹರಿಸಬಹುದು ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ. ಇದು ಮಕ್ಕಳಿಗೆ ತಾರ್ಕಿಕವಾಗಿ ಯೋಚಿಸಲು ಮತ್ತು ದೈನಂದಿನ ಜೀವನದಲ್ಲಿ ವಿವೇಕವನ್ನು ಬಳಸಲು ಕಲಿಸುತ್ತದೆ.' }, activities: [act('ಕಥೆ ಹೇಳಿ', 'ಕಥೆ ವಿವರಿಸಿ.', 'speaking', 'mid', ['ಹೇಳಿ'], [], 'ಬುದ್ಧಿ?')], quiz: [q('ರಾಮ ಎಂತಹವನು?', ['ಬುದ್ಧಿವಂತ', 'ಸೋಮಾರಿ'], 'ಬುದ್ಧಿವಂತ')], learningOutcomes: ['ಮೌಲ್ಯಗಳು'] }] },
    { id: 'k4', title: '4. ಸುಳ್ಳು ಹೇಳಬಾರದು', topics: [{ id: 'k4-t1', title: 'ಸತ್ಯ', subtopics: ['ಪ್ರಾಮಾಣಿಕತೆ'], readingText: { en: 'Honesty is the best path in life. This lesson teaches that lying leads to trouble and being truthful makes us strong and respected individuals.', kn: 'ಪ್ರಾಮಾಣಿಕತೆಯೇ ಜೀವನದ ಅತ್ಯುತ್ತಮ ಹಾದಿ. ಸುಳ್ಳು ಹೇಳುವುದು ತೊಂದರೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ ಮತ್ತು ಸತ್ಯ ಹೇಳುವುದು ನಮ್ಮನ್ನು ಬಲಿಷ್ಠ ಮತ್ತು ಗೌರವಾನ್ವಿತ ವ್ಯಕ್ತಿಗಳನ್ನಾಗಿ ಮಾಡುತ್ತದೆ ಎಂದು ಈ ಪಾಠ ಕಲಿಸುತ್ತದೆ.' }, activities: [act('ಸತ್ಯದ ಪ್ರತಿಜ್ಞೆ', 'ಪ್ರಮಾಣ ಮಾಡಿ.', 'speaking', 'low', ['ಹೇಳಿ'], [], 'ಒಳ್ಳೆಯದು?')], quiz: [q('ಏನು ಮಾಡಬಾರದು?', ['ಸತ್ಯ', 'ಸುಳ್ಳು'], 'ಸುಳ್ಳು')], learningOutcomes: ['ನೈತಿಕತೆ'] }] },
    { id: 'k5', title: '5. ಮರಗಿಡಗಳ ಮಹತ್ವ', topics: [{ id: 'k5-t1', title: 'ಪರಿಸರ', subtopics: ['ಮರಗಳು'], readingText: { en: 'Trees are vital for life on Earth as they provide us with oxygen, food, and shade. This lesson emphasizes the importance of planting trees and protecting our green environment.', kn: 'ಮರಗಿಡಗಳು ನಮಗೆ ಆಮ್ಲಜನಕ, ಆಹಾರ ಮತ್ತು ನೆರಳನ್ನು ನೀಡುವ ಮೂಲಕ ಭೂಮಿಯ ಮೇಲಿನ ಜೀವನಕ್ಕೆ ಅತ್ಯಗತ್ಯವಾಗಿವೆ. ಗಿಡಗಳನ್ನು ನೆಡುವುದು ಮತ್ತು ನಮ್ಮ ಹಸಿರು ಪರಿಸರವನ್ನು ರಕ್ಷಿಸುವುದರ ಮಹತ್ವವನ್ನು ಈ ಪಾಠ ಒತ್ತಿಹೇಳುತ್ತದೆ.' }, activities: [act('ಬೀಜ ಮೊಳಕೆ', 'ಒಂದು ಸಣ್ಣ ಕಪ್‌ನಲ್ಲಿ ಬೀಜವನ್ನು ಹಾಕಿ ಅದರ ಬೆಳವಣಿಗೆಯನ್ನು ಗಮನಿಸಿ.', 'performing', 'high', ['ಕಪ್‌ನಲ್ಲಿ ಮಣ್ಣು ಹಾಕಿ', 'ಬೀಜ ಊರಿ', 'ದಿನಾ ನೀರು ಹಾಕಿ', 'ಮೊಳಕೆ ಬಂದಾಗ ಅಳತೆ ಮಾಡಿ'], ['Cup', 'Soil', 'Seeds'], 'ಎಷ್ಟು ದಿನಕ್ಕೆ ಮೊಳಕೆ ಬಂತು?')], quiz: [q('ಮರಗಳು ಏನು ನೀಡುತ್ತವೆ?', ['ಆಮ್ಲಜನಕ', 'ಕಲ್ಲು'], 'ಆಮ್ಲಜನಕ')], learningOutcomes: ['ಪರಿಸರ ಅರಿವು'] }] },
    { id: 'k6', title: '6. ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ', topics: [{ id: 'k6-t1', title: 'ಧೈರ್ಯ', subtopics: ['ಸ್ವಾತಂತ್ರ್ಯ'], readingText: { en: 'Kitturu Chennamma was a brave queen who fought against British rule to protect her kingdom. Her story is an inspiration for courage and patriotism in every Indian heart.', kn: 'ಕಿತ್ತೂರು ಚೆನ್ನಮ್ಮ ಬ್ರಿಟಿಷರ ಆಳ್ವಿಕೆಯ ವಿರುದ್ಧ ಹೋರಾಡಿ ತನ್ನ ರಾಜ್ಯವನ್ನು ರಕ್ಷಿಸಿದ ವೀರ ರಾಣಿ. ಆಕೆಯ ಕಥೆಯು ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯನ ಹೃದಯದಲ್ಲಿ ಧೈರ್ಯ ಮತ್ತು ದೇಶಪ್ರೇಮಕ್ಕೆ ಸ್ಫೂರ್ತಿಯಾಗಿದೆ.' }, activities: [act('ಭಾಷಣ', 'ಚೆನ್ನಮ್ಮನ ಬಗ್ಗೆ ಮಾತನಾಡಿ.', 'speaking', 'mid', ['ಮಾಹಿತಿ ಸಂಗ್ರಹ'], [], 'ಸ್ಪೂರ್ತಿ?')], quiz: [q('ಚೆನ್ನಮ್ಮ ಎಲ್ಲಿಯ ರಾಣಿ?', ['ಮೈಸೂರು', 'ಕಿತ್ತೂರು'], 'ಕಿತ್ತೂರು')], learningOutcomes: ['ದೇಶಪ್ರೇಮ'] }] },
    { id: 'k7', title: '7. ಒನಕೆ ಓಬವ್ವ', topics: [{ id: 'k7-t1', title: 'ವೀರವನಿತೆ', subtopics: ['ಚಿತ್ರದುರ್ಗ'], readingText: { en: 'Onake Obavva was a courageous woman of Chitradurga who fought enemy soldiers using a simple pestle (Onake). She represents the strength and bravery of women in history.', kn: 'ಒನಕೆ ಓಬವ್ವ ಚಿತ್ರದುರ್ಗದ ವೀರವನಿತೆಯಾಗಿದ್ದು, ಕೇವಲ ಒಂದು ಒನಕೆಯನ್ನು ಬಳಸಿ ಶತ್ರು ಸೈನಿಕರ ವಿರುದ್ಧ ಹೋರಾಡಿದಳು. ಇತಿಹಾಸದಲ್ಲಿ ಮಹಿಳೆಯರ ಶಕ್ತಿ ಮತ್ತು ಧೈರ್ಯಕ್ಕೆ ಆಕೆ ಮಾದರಿಯಾಗಿದ್ದಾಳೆ.' }, activities: [act('ಚಿತ್ರ', 'ಕೋಟೆಯ ಚಿತ್ರ ಬಿಡಿಸಿ.', 'drawing', 'low', ['ಬಣ್ಣ'], ['Paper'], 'ಕೋಟೆ?')], quiz: [q('ಓಬವ್ವ ಏನನ್ನು ಬಳಸಿದಳು?', ['ಖಡ್ಗ', 'ಒನಕೆ'], 'ಒನಕೆ')], learningOutcomes: ['ಧೈರ್ಯ'] }] },
    { id: 'k8', title: '8. ಹಬ್ಬಗಳು', topics: [{ id: 'k8-t1', title: 'ಸಂಸ್ಕೃತಿ', subtopics: ['ದಸರಾ'], readingText: { en: 'Festivals bring joy and unity to our lives. This lesson describes the grandeur of the Dasara festival celebrated in Mysore and the cultural importance of festivals in Karnataka.', kn: 'ಹಬ್ಬಗಳು ನಮ್ಮ ಜೀವನದಲ್ಲಿ ಸಂತೋಷ ಮತ್ತು ಏಕತೆಯನ್ನು ತರುತ್ತವೆ. ಮೈಸೂರಿನಲ್ಲಿ ಆಚರಿಸಲಾಗುವ ದಸರಾ ಹಬ್ಬದ ವೈಭವ ಮತ್ತು ಕರ್ನಾಟಕದ ಹಬ್ಬಗಳ ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವವನ್ನು ಈ ಪಾಠವು ವಿವರಿಸುತ್ತದೆ.' }, activities: [act('ಪಟ್ಟಿ ಮಾಡಿ', 'ಹಬ್ಬಗಳ ಪಟ್ಟಿ ಮಾಡಿ.', 'writing', 'low', ['ಹೆಸರುಗಳು'], ['Notebook'], 'ನಿಮ್ಮ ಹಬ್ಬ?')], quiz: [q('ನಾಡಹಬ್ಬ ಯಾವುದು?', ['ದೀಪಾವಳಿ', 'ದಸರಾ'], 'ದಸರಾ')], learningOutcomes: ['ಸಾಂಸ್ಕೃತಿಕ ಅರಿವು'] }] },
    { id: 'k9', title: '9. ಸವಿ ದಾರಿ', topics: [{ id: 'k9-t1', title: 'ವ್ಯಾಕರಣ', subtopics: ['ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು'], readingText: { en: 'Grammar is the foundation of any language. This lesson introduces the basics of Kannada grammar, helping children speak and write the language correctly.', kn: 'ವ್ಯಾಕರಣವು ಯಾವುದೇ ಭಾಷೆಯ ಅಡಿಪಾಯವಾಗಿದೆ. ಈ ಪಾಠವು ಕನ್ನಡ ವ್ಯಾಕರಣದ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಪರಿಚಯಿಸುತ್ತದೆ, ಮಕ್ಕಳಿಗೆ ಭಾಷೆಯನ್ನು ಸರಿಯಾಗಿ ಮಾತನಾಡಲು ಮತ್ತು ಬರೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.' }, activities: [act('ಗುರುತಿಸಿ', 'ಪದಗಳಲ್ಲಿ ಪ್ರತ್ಯಯ ಗುರುತಿಸಿ.', 'writing', 'mid', ['ಓದಿ', 'ಗುರುತಿಸಿ'], ['Notebook'], 'ಸರಿಯಾಗಿದೆಯೇ?')], quiz: [q('ಪ್ರಥಮ ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯ?', ['ಉ', 'ಅನ್ನು'], 'ಉ')], learningOutcomes: ['ವ್ಯಾಕರಣ ಜ್ಞಾನ'] }] },
    { id: 'k10', title: '10. ಪರಿಸರ ಗೀತೆ', topics: [{ id: 'k10-t1', title: 'ಪರಿಸರ', subtopics: ['ಪ್ರಕೃತಿ ಪ್ರೇಮ'], readingText: { en: 'This song celebrates the beauty of nature and our responsibility to protect it. It encourages children to love the greenery around them and keep the Earth clean.', kn: 'ಈ ಗೀತೆಯು ಪ್ರಕೃತಿಯ ಸೌಂದರ್ಯವನ್ನು ಮತ್ತು ಅದನ್ನು ರಕ್ಷಿಸುವ ನಮ್ಮ ಜವಾಬ್ದಾರಿಯನ್ನು ಕೊಂಡಾಡುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಹಸಿರನ್ನು ಪ್ರೀತಿಸಲು ಮತ್ತು ಭೂಮಿಯನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಇದು ಪ್ರೇರೇಪಿಸುತ್ತದೆ.' }, activities: [act('ಹಾಡಿ', 'ಪರಿಸರ ಗೀತೆ ಹಾಡಿ.', 'speaking', 'low', ['ಹಾಡಿ'], [], 'ಸಂಗೀತ?')], quiz: [q('ಯಾವುದು ಉಸಿರು?', ['ಹಸಿರು', 'ಕಲ್ಲು'], 'ಹಸಿರು')], learningOutcomes: ['ಪರಿಸರ ಕಾಳಜಿ'] }] },
    { id: 'k11', title: '11. ಸ್ವಾತಂತ್ರ್ಯದ ಬೆಳಕು', topics: [{ id: 'k11-t1', title: 'ಇತಿಹಾಸ', subtopics: ['ಹೋರಾಟಗಾರರು'], readingText: { en: 'This lesson highlights the lives of freedom fighters who sacrificed everything for India\'s independence. It teaches values of patriotism and social responsibility.', kn: 'ಭಾರತದ ಸ್ವಾತಂತ್ರ್ಯಕ್ಕಾಗಿ ಎಲ್ಲವನ್ನೂ ತ್ಯಾಗ ಮಾಡಿದ ಹೋರಾಟಗಾರರ ಜೀವನವನ್ನು ಈ ಪಾಠವು ತಿಳಿಸುತ್ತದೆ. ಇದು ದೇಶಪ್ರೇಮ ಮತ್ತು ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಯ ಮೌಲ್ಯಗಳನ್ನು ಕಲಿಸುತ್ತದೆ.' }, activities: [act('ಕಥೆ ಹೇಳಿ', 'ರಾಯಣ್ಣನ ಸಾಹಸ ವಿವರಿಸಿ.', 'speaking', 'mid', ['ಮಾಹಿತಿ'], [], 'ಧೈರ್ಯ?')], quiz: [q('ರಾಯಣ್ಣ ಎಲ್ಲಿಯವನು?', ['ಸಂಗೊಳ್ಳಿ', 'ಮೈಸೂರು'], 'ಸಂಗೊಳ್ಳಿ')], learningOutcomes: ['ಐತಿಹಾಸಿಕ ಅರಿವು'] }] },
    { id: 'k12', title: '12. ಮಕ್ಕಳ ರಾಜ್ಯ', topics: [{ id: 'k12-t1', title: 'ಹಕ್ಕುಗಳು', subtopics: ['ಬಾಲ ಕಾರ್ಮಿಕ ಪದ್ಧತಿ ನಿರ್ಮೂಲನೆ'], readingText: { en: 'Every child has the right to education and a happy childhood. This lesson discusses children\'s rights and the importance of ending child labor in our society.', kn: 'ಪ್ರತಿಯೊಂದು ಮಗುವಿಗೂ ಶಿಕ್ಷಣ ಮತ್ತು ಸಂತೋಷದ ಬಾಲ್ಯದ ಹಕ್ಕಿದೆ. ಈ ಪಾಠವು ಮಕ್ಕಳ ಹಕ್ಕುಗಳು ಮತ್ತು ನಮ್ಮ ಸಮಾಜದಲ್ಲಿ ಬಾಲ ಕಾರ್ಮಿಕ ಪದ್ಧತಿಯನ್ನು ಕೊನೆಗಾಣಿಸುವ ಮಹತ್ವವನ್ನು ಚರ್ಚಿಸುತ್ತದೆ.' }, activities: [act('ಮಕ್ಕಳ ಸಂಸತ್ತು', 'ಶಾಲೆಯಲ್ಲಿ ಒಂದು ದಿನದ "ಮಕ್ಕಳ ಸಂಸತ್ತು" ನಡೆಸಿ.', 'performing', 'high', ['ಪಾತ್ರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ', 'ಶಾಲೆಯ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಚರ್ಚಿಸಿ', 'ಪರಿಹಾರಗಳನ್ನು ಬರೆಯಿರಿ', 'ಶಿಕ್ಷಕರಿಗೆ ಮನವಿ ನೀಡಿ'], [], 'ನಾಯಕತ್ವದ ಗುಣ ಬೆಳೆಯಿತೇ?')], quiz: [q('ಮಕ್ಕಳಿಗೆ ಏನು ಬೇಕು?', ['ಕೆಲಸ', 'ಶಿಕ್ಷಣ'], 'ಶಿಕ್ಷಣ')], learningOutcomes: ['ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿ'] }] }
  ]
};

// ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────────
const computerSubject: Subject = {
  id: 'computers', title: 'Computer Science', icon: '💻', color: '#2D3436',
  chapters: [
    { id: 'c1', title: '1. Know Your Computer', topics: [{ id: 'c1-t1', title: 'Basics', subtopics: ['Hardware', 'Software'], readingText: { en: 'A computer is a smart machine that can store and process data. It consists of two main parts: Hardware (the physical parts like the CPU and monitor) and Software (the programs like games or Paint that tell the hardware what to do).' }, activities: [act('Input/Output Sorting', 'Sort household items into Input (giving info) or Output (showing info).', 'performing', 'mid', ['Collect 5 items (Keyboard, Speaker, Mouse, Screen, Mic)', 'Place them in 2 boxes: Input & Output', 'Explain why for each', 'Draw them in your book'], ['5 Household items'], 'Is a printer Input or Output?')], quiz: [q('Is brain like a CPU?', ['Yes', 'No'], 'Yes')], learningOutcomes: ['Define computer parts'] }] },
    { id: 'c2', title: '2. Input and Output', topics: [{ id: 'c2-t1', title: 'Devices', subtopics: ['Mouse', 'Printer'], readingText: { en: 'Input devices like the keyboard and mouse are used to send information into the computer. Output devices like the monitor and printer are used to display or print the results of the computer\'s work.' }, activities: [act('Cardboard PC Builder', 'Create a 3D model of a computer using cardboard boxes.', 'drawing', 'high', ['Find 4 boxes', 'Label them: CPU, Monitor, Keyboard, Mouse', 'Connect them with string "wires"', 'Explain the role of each "part"'], ['Cardboard', 'String', 'Markers'], 'Which part is the brain?')], quiz: [q('Which part is the brain?', ['Monitor', 'CPU'], 'CPU')], learningOutcomes: ['Identify parts'] }] },
    { id: 'c3', title: '3. Windows Basics', topics: [{ id: 'c3-t1', title: 'Desktop', subtopics: ['Icons', 'Taskbar'], readingText: { en: 'Windows is the operating system that manages everything on your computer. The first screen you see is the Desktop, which contains small pictures called Icons. The Taskbar at the bottom helps you switch between different apps.' }, activities: [act('Screen Draw', 'Draw desktop icons.', 'drawing', 'low', ['Sketch screen'], ['Paper'], 'Start button?')], quiz: [q('Main screen?', ['Wall', 'Desktop'], 'Desktop')], learningOutcomes: ['Navigate Windows'] }] },
    { id: 'c4', title: '4. MS Word Intro', topics: [{ id: 'c4-t1', title: 'Typing', subtopics: ['Font', 'Save'], readingText: { en: 'MS Word is a word processor used for typing letters, stories, and reports. You can change the Font style, size, and color to make your text look beautiful. Always remember to Save your work to the computer\'s memory.' }, activities: [act('The Digital Journalist', 'Type a 3-line news story about your day and format it.', 'performing', 'high', ['Type a headline in BOLD', 'Write 2 lines of text', 'Change the font color to Blue', 'Save the file as "MyNews"'], ['PC'], 'What was your headline?')], quiz: [q('Used for typing?', ['Paint', 'Word'], 'Word')], learningOutcomes: ['Basic typing'] }] },
    { id: 'c5', title: '5. Internet Safety', topics: [{ id: 'c5-t1', title: 'Online Rules', subtopics: ['Privacy'], readingText: { en: 'The Internet is a global network of computers. To stay safe, you must protect your privacy by never sharing your password, name, or address with strangers online. Always use the internet under an adult\'s supervision.' }, activities: [act('The Password Shield', 'Design a secret "Symbol Key" to remember your password.', 'writing', 'mid', ['Pick 3 symbols (*, &, #)', 'Combine them with a favorite color', 'Draw your "Shield"', 'Never share it!'], ['Notebook'], 'Is your password strong?')], quiz: [q('Share password?', ['Yes', 'No'], 'No')], learningOutcomes: ['Digital citizenship'] }] },
    { id: 'c6', title: '6. Coding Basics', topics: [{ id: 'c6-t1', title: 'Algorithms', subtopics: ['Steps'], readingText: { en: 'An algorithm is a set of step-by-step instructions given to a computer to solve a problem or perform a task. Coding is the process of writing these instructions in a language that the computer understands.' }, activities: [act('The Human Robot Mission', 'Give precise physical commands to a friend to move from A to B.', 'performing', 'high', ['Move 2 steps', 'Turn 90 degrees', 'Avoid obstacles', 'Goal reached!'], [], 'What happens if a step is missing?')], quiz: [q('Step-by-step instructions?', ['Algorithm', 'Game'], 'Algorithm')], learningOutcomes: ['Computational thinking'] }] },
    { id: 'c7', title: '7. MS Paint Mastery', topics: [{ id: 'c7-t1', title: 'Drawing', subtopics: ['Shapes', 'Fill Color'], readingText: { en: 'MS Paint is a simple drawing program. You can use tools like the Pencil, Brush, and Shapes to create digital art. The Fill Color tool (the paint bucket) allows you to splash color onto any closed shape.' }, activities: [act('Digital Emoji Maker', 'Draw 3 different feelings using only circles and lines in Paint.', 'performing', 'mid', ['Use Circle tool', 'Add eyes/mouth', 'Fill colors', 'Save as JPG'], ['PC'], 'Which feeling is easiest to draw?')], quiz: [q('Tool to fill color?', ['Brush', 'Bucket'], 'Bucket')], learningOutcomes: ['Digital creativity'] }] },
    { id: 'c8', title: '8. PowerPoint Basics', topics: [{ id: 'c8-t1', title: 'Presentations', subtopics: ['Slides', 'Design'], readingText: { en: 'PowerPoint is used to create presentations. A presentation is made up of several Slides. You can add text, pictures, animations, and transitions to make your slides engaging for the audience.' }, activities: [act('First Slide', 'Create a slide about yourself.', 'performing', 'mid', ['Add text', 'Add picture'], ['PC'], 'Cool?')], quiz: [q('Used to make slides?', ['Word', 'PowerPoint'], 'PowerPoint')], learningOutcomes: ['Presentation skills'] }] },
    { id: 'c9', title: '9. Scratch Jr. Intro', topics: [{ id: 'c9-t1', title: 'Visual Coding', subtopics: ['Blocks', 'Characters'], readingText: { en: 'Scratch Jr. is a visual programming language where you snap blocks together to control characters. It helps children learn the logic of coding by creating interactive stories and games.' }, activities: [act('Move Cat', 'Make the cat walk 5 steps.', 'performing', 'high', ['Drag blocks', 'Run'], ['PC'], 'Meow?')], quiz: [q('Scratch use?', ['Blocks', 'Typing'], 'Blocks')], learningOutcomes: ['Game design basics'] }] },
    { id: 'c10', title: '10. Email & Communication', topics: [{ id: 'c10-t1', title: 'Internet', subtopics: ['Emails', 'Safety'], readingText: { en: 'Email (Electronic Mail) is a way of sending and receiving messages over the internet. You need an email address and an internet connection to send digital letters to anyone in the world instantly.' }, activities: [act('Write Email', 'Write a mock email to teacher.', 'writing', 'low', ['To:', 'Subject:', 'Body'], ['Notebook'], 'Polite?')], quiz: [q('What is @ used for?', ['Phone', 'Email'], 'Email')], learningOutcomes: ['Digital communication'] }] }
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
