/* CBSE Grade 4 — Full Syllabus for Yasmeen */
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
          en: 'When we plan trips, we use large numbers. 210 students need buses—if each bus holds 40, we need 6 buses. Estimation helps us plan quickly.',
          hi: 'यात्रा की योजना बनाते समय हम बड़ी संख्याओं का उपयोग करते हैं। 210 छात्रों को बसों की ज़रूरत—अगर हर बस में 40 बैठें, तो 6 बसें चाहिए।',
          kn: 'ಪ್ರವಾಸ ಯೋಜಿಸುವಾಗ ನಾವು ದೊಡ್ಡ ಸಂಖ್ಯೆಗಳನ್ನು ಬಳಸುತ್ತೇವೆ.'
        },
        activities: [
          act('Trip Planner', 'Plan a class trip: count students, arrange buses.', 'calculating', 'low',
            ['Count students in your class', 'Each bus seats 40', 'Divide to find buses needed', 'Add a spare bus'],
            ['Notebook', 'Pencil'], 'What if 5 teachers also come?'),
          act('Budget Boss', 'Calculate the total cost of a school trip.', 'calculating', 'mid',
            ['Cost per student is ₹150', 'Multiply by total students', 'Add bus rental ₹2000', 'Find grand total'],
            ['Calculator', 'Notebook'], 'Can you find cost per head including bus?'),
          act('Estimation Challenge', 'Estimate how many grains fill a jar.', 'performing', 'high',
            ['Fill one spoon and count grains', 'Count how many spoons fill the jar', 'Multiply to estimate', 'Verify by counting a small sample'],
            ['Rice grains', 'Jar', 'Spoon'], 'Was your estimate close?')
        ],
        virtualLab: { title: 'Number Explorer Lab', simulation: 'Build large numbers with place value blocks', task: 'Arrange 5-digit numbers from smallest to largest' },
        quiz: [
          q('210 ÷ 40 = ? (rounded up)', ['4', '5', '6', '7'], '6', 'We need 6 buses: 5 buses hold 200, and 10 students need a 6th bus.'),
          q('What is the place value of 5 in 3521?', ['5', '50', '500', '5000'], '500', '5 is in the hundreds place = 500.'),
          q('Round 478 to the nearest hundred.', ['400', '470', '480', '500'], '500', '478 is closer to 500 than 400.'),
          q('325 + 175 = ?', ['400', '450', '500', '550'], '500', '325 + 175 = 500.')
        ],
        learningOutcomes: ['Read and write large numbers', 'Perform addition and division with real-life context', 'Estimate quantities'],
        crossCurricularLink: 'EVS: Train travel and Indian geography'
      }]
    },

    {
      id: 'm4', title: '4. Tick-Tick-Tick', topics: [{
        id: 'm4-t1', title: 'Time & Calendar',
        subtopics: ['The Sun Clock Analogy', 'Hour Boss & Minute Runner', 'The 24-Hour Marathon', 'Railway Time Decoding', 'Calendar Time Machine', 'Birthdays & Leap Years', 'Aging in Seconds', 'Planning Your Future Day'],
        readingText: {
          en: 'A day has 24 hours. The 12-hour clock uses AM (morning) and PM (afternoon/night). Train timetables use 24-hour time: 2:30 PM = 14:30.',
          hi: 'एक दिन में 24 घंटे होते हैं। 12-घंटे की घड़ी AM (सुबह) और PM (दोपहर/रात) का उपयोग करती है। ट्रेन 24-घंटे का समय इस्तेमाल करती है: दोपहर 2:30 = 14:30।',
          kn: 'ಒಂದು ದಿನದಲ್ಲಿ 24 ಗಂಟೆಗಳಿವೆ. ರೈಲಿನ ವೇಳಾಪಟ್ಟಿ 24-ಗಂಟೆ ಸಮಯ ಬಳಸುತ್ತದೆ.'
        },
        activities: [
          act('Clock Reader', 'Read time from clocks shown by the teacher.', 'calculating', 'low',
            ['Look at the hour hand', 'Look at the minute hand', 'Write the time', 'Convert to 24-hour if past noon'],
            ['Clock model'], 'What time do you wake up in 24-hour format?'),
          act('Train Timetable', 'Read a real train timetable and answer questions.', 'calculating', 'mid',
            ['Find departure time', 'Find arrival time', 'Calculate journey duration', 'Convert 24-hour to 12-hour'],
            ['Sample timetable printout'], 'How long is the longest train journey on the timetable?'),
          act('Daily Schedule Maker', 'Create your daily routine in 24-hour format.', 'writing', 'high',
            ['List all activities from wake-up to sleep', 'Write start and end time in 24-hr', 'Calculate duration for each', 'Total hours of study vs play'],
            ['Notebook', 'Pencil'], 'How many hours do you spend studying?')
        ],
        virtualLab: { title: 'Clock Simulator', simulation: 'Move clock hands to set requested times', task: 'Set the clock to 14:30 (2:30 PM)' },
        quiz: [
          q('3:00 PM in 24-hour format is?', ['03:00', '12:00', '15:00', '13:00'], '15:00', '3 PM + 12 = 15:00.'),
          q('How many hours in a day?', ['12', '20', '24', '48'], '24', 'A full day has 24 hours.'),
          q('What does AM mean?', ['After Midnight', 'Ante Meridiem (before noon)', 'After Morning', 'At Midnight'], 'Ante Meridiem (before noon)', 'AM = Ante Meridiem = before noon.'),
          q('A train departs at 09:15 and arrives at 13:45. Journey time?', ['3h 30m', '4h 15m', '4h 30m', '5h'], '4h 30m', '13:45 − 09:15 = 4 hours 30 minutes.')
        ],
        learningOutcomes: ['Read and write time in 12-hour and 24-hour formats', 'Calculate duration of events', 'Relate time to daily activities'],
        crossCurricularLink: 'EVS: Indian Railways and train journeys'
      }]
    },

    {
      id: 'm6', title: '5. The Junk Seller', topics: [{
        id: 'm6-t1', title: 'Profit, Loss & Money',
        subtopics: ['The Tea Stall Story', 'Cost vs Selling Price', 'Profit Power-Up', 'Loss Prevention Mission', 'Smart Shopping Math', 'Creating Your First Bill', 'The Junk Recycling Hero', 'Business Ethics & Values'],
        readingText: {
          en: 'Profit = Selling Price − Cost Price. If you buy something for ₹20 and sell for ₹25, profit is ₹5. Loss happens when you sell for less than you paid.',
          hi: 'लाभ = बिक्री मूल्य − लागत मूल्य। अगर आप ₹20 में खरीदें और ₹25 में बेचें तो ₹5 का लाभ है। हानि तब होती है जब कम में बेचते हैं।',
          kn: 'ಲಾಭ = ಮಾರಾಟ ಬೆಲೆ − ವೆಚ್ಚ ಬೆಲೆ. ₹20 ಕ್ಕೆ ಖರೀದಿಸಿ ₹25 ಕ್ಕೆ ಮಾರಿದರೆ ₹5 ಲಾಭ.'
        },
        activities: [
          act('Shop Keeper', 'Set up a pretend shop and practice buying/selling.', 'performing', 'low',
            ['Price 5 items', 'A friend buys 3 items', 'Calculate total cost', 'Give correct change'],
            ['Play money', 'Items to sell'], 'Can you make a profit of ₹10?'),
          act('Junk Artist', 'Buy junk items and make art to sell at a profit.', 'performing', 'mid',
            ['Collect junk materials', 'Note cost of each', 'Create art from junk', 'Set a selling price with profit'],
            ['Old newspapers', 'Glue', 'Scissors'], 'What is your total profit?'),
          act('Bill Calculator', 'Calculate bills with multiple items and tax.', 'calculating', 'high',
            ['List items and prices', 'Calculate subtotal', 'Add 5% tax', 'Find grand total'],
            ['Calculator', 'Notebook'], 'What if there is a 10% discount?')
        ],
        virtualLab: { title: 'Shop Simulator', simulation: 'Run a virtual shop with buying and selling', task: 'Make a profit of ₹50 by selling 10 items' },
        quiz: [
          q('Buy at ₹30, sell at ₹45. What is the profit?', ['₹10', '₹15', '₹20', '₹75'], '₹15', '45 − 30 = ₹15 profit.'),
          q('Buy at ₹100, sell at ₹80. What happened?', ['Profit of ₹20', 'Loss of ₹20', 'No change', 'Profit of ₹80'], 'Loss of ₹20', '80 − 100 = −20, so it is a loss of ₹20.'),
          q('Which is the selling price?', ['The price you paid', 'The price the customer pays', 'The cost of making it', 'The tax amount'], 'The price the customer pays', 'Selling price is what the buyer pays.'),
          q('A toy costs ₹60. It is sold for ₹60. What is the result?', ['Profit', 'Loss', 'Neither profit nor loss', 'Double profit'], 'Neither profit nor loss', 'When cost = selling price, there is no profit or loss.')
        ],
        learningOutcomes: ['Calculate profit and loss', 'Handle money in daily transactions', 'Create simple bills'],
        crossCurricularLink: 'EVS: Recycling and waste management'
      }]
    },

    {
      id: 'm7', title: '6. Jugs and Mugs', topics: [{
        id: 'm7-t1', title: 'Capacity & Volume',
        subtopics: ['The Elephant\'s Mug Analogy', 'Litre vs Millilitre Battle', 'Measuring Jug Missions', 'Health Drink Recipe', 'Estimating Bucket Volume', 'The Thirsty Traveller Fix', 'Water Saving Strategy', 'Global Water Vision'],
        readingText: {
          en: '1 Litre = 1000 millilitres. A teaspoon holds about 5 mL, a cup about 200 mL, and a water bottle about 1 L.',
          hi: '1 लीटर = 1000 मिलीलीटर। एक चम्मच में करीब 5 mL, एक कप में करीब 200 mL, और एक पानी की बोतल में करीब 1 L होता है।',
          kn: '1 ಲೀಟರ್ = 1000 ಮಿಲಿಲೀಟರ್. ಒಂದು ಚಮಚ ಸುಮಾರು 5 ಮಿಲಿ.'
        },
        activities: [
          act('Pour & Measure', 'Measure water using cups and jugs.', 'performing', 'low',
            ['Fill a 1L bottle with water', 'Pour into cups', 'Count how many cups', 'Record the number'],
            ['1L bottle', 'Cups'], 'How many cups does 1 litre fill?'),
          act('Recipe Mixer', 'Follow a recipe by measuring ingredients in mL.', 'calculating', 'mid',
            ['Measure 200 mL milk', 'Add 50 mL honey', 'Stir well', 'Calculate total in mL'],
            ['Measuring cup', 'Ingredients'], 'Convert total mL to litres.'),
          act('Capacity Comparer', 'Compare the capacity of different containers.', 'performing', 'high',
            ['Collect 5 containers', 'Fill each with water', 'Measure each in mL', 'Rank from smallest to largest capacity'],
            ['Various containers', 'Measuring jug'], 'Which container holds the most?')
        ],
        virtualLab: { title: 'Liquid Measure Lab', simulation: 'Pour virtual liquids and measure in mL and L', task: 'Fill a 2L container using only a 250 mL cup' },
        quiz: [
          q('How many mL in 1 Litre?', ['10', '100', '500', '1000'], '1000', '1 litre = 1000 millilitres.'),
          q('A bottle holds 500 mL. How many bottles for 2 L?', ['2', '4', '5', '10'], '4', '2000 mL ÷ 500 mL = 4 bottles.'),
          q('Which holds more: a bucket or a spoon?', ['Spoon', 'Bucket', 'Both the same', 'Neither'], 'Bucket', 'A bucket has a much larger capacity than a spoon.'),
          q('750 mL + 250 mL = ?', ['900 mL', '1000 mL', '1 L', 'Both 1000 mL and 1 L'], 'Both 1000 mL and 1 L', '750 + 250 = 1000 mL = 1 L.')
        ],
        learningOutcomes: ['Understand litre and millilitre', 'Measure and compare capacities', 'Convert between mL and L'],
        crossCurricularLink: 'EVS: Water conservation and daily water usage'
      }]
    },

    {
      id: 'm8', title: '7. Carts and Wheels', topics: [{
        id: 'm8-t1', title: 'Circles & Patterns',
        subtopics: ['The Pizza Compass Analogy', 'Radius – The Half Bridge', 'Diameter – The Main Road', 'Centre – The Heart', 'Drawing Perfection', 'Wheel Technology', 'Braid & Pattern Design', 'Circular Wonders of Nature'],
        readingText: {
          en: 'A circle has a centre. The radius is the distance from the centre to the edge. The diameter goes all the way across through the centre. Diameter = 2 × Radius.',
          hi: 'एक वृत्त का एक केंद्र होता है। त्रिज्या केंद्र से किनारे तक की दूरी है। व्यास पूरे वृत्त को केंद्र से पार करता है। व्यास = 2 × त्रिज्या।',
          kn: 'ವೃತ್ತಕ್ಕೆ ಒಂದು ಕೇಂದ್ರವಿದೆ. ತ್ರಿಜ್ಯ = ಕೇಂದ್ರದಿಂದ ಅಂಚಿನವರೆಗೆ. ವ್ಯಾಸ = 2 × ತ್ರಿಜ್ಯ.'
        },
        activities: [
          act('Circle Finder', 'Find circular objects around you.', 'drawing', 'low',
            ['Walk around the classroom', 'List 10 circular things', 'Draw them', 'Measure their radius'],
            ['Notebook', 'Ruler'], 'Which is the biggest circle you found?'),
          act('Compass Artist', 'Draw circles with a compass.', 'drawing', 'mid',
            ['Set compass to 3 cm', 'Draw a circle', 'Mark the centre', 'Draw the diameter', 'Measure the diameter'],
            ['Compass', 'Pencil'], 'Draw 3 circles with different radii.'),
          act('Wheel Racer', 'Build a toy cart with circular wheels.', 'performing', 'high',
            ['Cut 4 circles from cardboard', 'Poke a hole in the centre of each', 'Attach to a box with sticks', 'Roll your cart'],
            ['Cardboard', 'Sticks', 'Scissors'], 'Does a bigger wheel make the cart faster?')
        ],
        virtualLab: { title: 'Circle Explorer', simulation: 'Draw circles and explore radius and diameter', task: 'Draw a circle with radius 5 cm and find its diameter' },
        quiz: [
          q('What is the radius?', ['Distance across the circle', 'Distance from centre to edge', 'The edge of the circle', 'The area'], 'Distance from centre to edge', 'Radius is half the diameter.'),
          q('If the radius is 4 cm, what is the diameter?', ['2 cm', '4 cm', '8 cm', '16 cm'], '8 cm', 'Diameter = 2 × 4 = 8 cm.'),
          q('A wheel is a ____ shape.', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'Circle', 'Wheels are circular.'),
          q('The longest line through a circle is called?', ['Radius', 'Diameter', 'Circumference', 'Arc'], 'Diameter', 'The diameter passes through the centre and is the longest chord.')
        ],
        learningOutcomes: ['Identify parts of a circle', 'Measure radius and diameter', 'Draw circles using a compass'],
        crossCurricularLink: 'EVS: Wheels in transportation'
      }]
    },

    {
      id: 'm12', title: '8. The Way The World Looks', topics: [{
        id: 'm12-t1', title: 'Weight & Mass',
        subtopics: ['Iron vs Feathers Analogy', 'Gram & Kilogram Units', 'Human Scale Challenge', 'Market Grocery Mission', 'Weight Balance Logic', 'Cooking with Math', 'Animal Weights Comparison', 'The Heavy Lifter Safety'],
        readingText: {
          en: '1 kilogram = 1000 grams. Heavy things like rice bags are measured in kg. Light things like a feather are measured in grams.',
          hi: '1 किलोग्राम = 1000 ग्राम। भारी चीजें जैसे चावल के बैग किग्रा में मापी जाती हैं। हल्की चीजें ग्राम में।',
          kn: '1 ಕಿಲೋಗ್ರಾಮ್ = 1000 ಗ್ರಾಮ್. ಭಾರದ ವಸ್ತುಗಳನ್ನು ಕೆಜಿಯಲ್ಲಿ ಅಳೆಯುತ್ತಾರೆ.'
        },
        activities: [
          act('Weight Guesser', 'Hold objects and guess their weight before weighing.', 'performing', 'low',
            ['Pick 5 objects', 'Guess weight of each', 'Weigh on a scale', 'Compare guess vs actual'],
            ['Kitchen scale', 'Various objects'], 'Were your guesses close?'),
          act('Market Shopper', 'Role-play buying vegetables by weight.', 'calculating', 'mid',
            ['Price is ₹40 per kg', 'You buy 500g tomatoes', 'Calculate cost', 'Buy 250g onions at ₹30/kg'],
            ['Play money', 'Scale'], 'What is total cost for both?'),
          act('Balance Maker', 'Build a simple balance using a ruler and pencil.', 'performing', 'high',
            ['Balance a ruler on a pencil', 'Place an eraser on one side', 'Add coins to the other side until balanced', 'Count the coins'],
            ['Ruler', 'Pencil', 'Coins', 'Eraser'], 'How many coins equal one eraser?')
        ],
        virtualLab: { title: 'Weight Lab', simulation: 'Place objects on a virtual scale', task: 'Sort 6 items from lightest to heaviest' },
        quiz: [
          q('How many grams in 1 kg?', ['10', '100', '500', '1000'], '1000', '1 kg = 1000 g.'),
          q('Which is heavier: 1 kg iron or 1 kg cotton?', ['Iron', 'Cotton', 'Both are equal', 'Cannot compare'], 'Both are equal', '1 kg is 1 kg regardless of material!'),
          q('500g + 500g = ?', ['100g', '500g', '1 kg', '2 kg'], '1 kg', '500 + 500 = 1000g = 1 kg.'),
          q('A watermelon weighs 3 kg. In grams?', ['300', '3000', '30000', '30'], '3000', '3 × 1000 = 3000g.')
        ],
        learningOutcomes: ['Understand grams and kilograms', 'Weigh objects and compare', 'Convert between g and kg'],
        crossCurricularLink: 'EVS: Food and nutrition — weighing ingredients'
      }]
    },

    {
      id: 'm14', title: '9. Tables and Shares', topics: [{
        id: 'm14-t1', title: 'Data Handling & Tally Marks',
        subtopics: ['The Secret Caveman Code', 'Tally Mark Race', 'Pictograph Artistry', 'Survey Detective Work', 'Data Table Organisation', 'Interpreting the Graph', 'Predicting the Future', 'Information Literacy'],
        readingText: {
          en: 'Tally marks help us count quickly. We draw 4 lines and cross the 5th through them to make groups of 5. Pictographs use pictures to show data.',
          hi: 'मिलान चिह्न हमें जल्दी गिनने में मदद करते हैं। हम 4 रेखाएँ बनाते हैं और 5वीं को उन पर आड़ा काटते हैं।',
          kn: 'ಟ್ಯಾಲಿ ಮಾರ್ಕ್‌ಗಳು ತ್ವರಿತವಾಗಿ ಲೆಕ್ಕ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.'
        },
        activities: [
          act('Flavour Survey', 'Survey classmates about their favourite ice cream flavour.', 'writing', 'low',
            ['Ask 10 friends their favourite flavour', 'Use tally marks to count', 'Write the total for each', 'Find the most popular'],
            ['Notebook', 'Pencil'], 'Draw a pictograph of results!'),
          act('Pictograph Maker', 'Create a pictograph from survey data.', 'drawing', 'mid',
            ['Collect survey data', 'Choose a symbol for each item', 'Each symbol = 2 votes', 'Draw the pictograph'],
            ['Chart paper', 'Colours'], 'What does half a symbol represent?'),
          act('Data Detective', 'Analyse data from a newspaper or chart.', 'calculating', 'high',
            ['Find a chart in a newspaper', 'Read the data carefully', 'Answer 5 questions about it', 'Create your own questions'],
            ['Newspaper', 'Notebook'], 'Can you create a bar chart from the data?')
        ],
        virtualLab: { title: 'Tally & Graph Lab', simulation: 'Make tally charts and pictographs from live data', task: 'Survey 20 students and create a pictograph' },
        quiz: [
          q('In tally marks, what does ||||  with a line through represent?', ['4', '5', '6', '10'], '5', 'Four lines with one diagonal = 5.'),
          q('In a pictograph, one 🍎 = 3 apples. Four 🍎🍎🍎🍎 means?', ['3', '4', '12', '7'], '12', '4 × 3 = 12 apples.'),
          q('What is the best way to show favourite colours of a class?', ['A story', 'A pictograph', 'A poem', 'A map'], 'A pictograph', 'Pictographs show data visually.'),
          q('Tally marks are used for?', ['Drawing pictures', 'Counting quickly', 'Measuring weight', 'Telling time'], 'Counting quickly', 'Tally marks help organise counting.')
        ],
        learningOutcomes: ['Use tally marks to collect data', 'Read and create pictographs', 'Organise data in tables'],
        crossCurricularLink: 'EVS: Population and surveys in social studies'
      }]
    }
  ]
};

// ─── EVS (Looking Around) ─────────────────────────────────────────────────────
const evsSubject: Subject = {
  id: 'science', title: 'EVS (Looking Around)', icon: '🧪', color: '#00B894',
  chapters: [
    {
      id: 'e1', title: '1. Going to School', topics: [{
        id: 'e1-t1', title: 'Bridges & Transport',
        subtopics: ['The Ant Crossing Water Analogy', 'Bamboo & Cement Bridges', 'The Vallam Boat Journey', 'Trolley Travels in Ladakh', 'Safety in Travel Mission', 'Building Your Own Model', 'Why Geography Matters', 'Connecting People Globally'],
        readingText: {
          en: 'Children use many ways to reach school—walking, cycling, boats (Vallams in Kerala), bamboo bridges, and rope bridges. Each region has its unique way based on geography.',
          hi: 'बच्चे स्कूल पहुँचने के लिए कई तरीके अपनाते हैं—पैदल चलना, साइकिल, नाव (केरल में वल्लम), बाँस के पुल।',
          kn: 'ಮಕ್ಕಳು ಶಾಲೆಗೆ ನಡೆದು, ಸೈಕಲ್‌ನಲ್ಲಿ, ದೋಣಿಯಲ್ಲಿ, ಬಿದಿರು ಸೇತುವೆ ಮೂಲಕ ಹೋಗುತ್ತಾರೆ.'
        },
        activities: [
          act('Bridge Builder', 'Build a bridge from paper and test its strength.', 'performing', 'low',
            ['Fold paper into a plank', 'Place between two books', 'Add coins on top', 'Count how many coins before it falls'],
            ['Paper', 'Books', 'Coins'], 'Can you make a stronger bridge?'),
          act('School Journey Map', 'Draw a map of your route to school.', 'drawing', 'mid',
            ['Start from your home', 'Mark landmarks on the way', 'Show the route with a line', 'Add labels for each place'],
            ['Paper', 'Colours'], 'How is your route different from a friend\'s?'),
          act('Boat Racer', 'Make a paper boat and test it in water.', 'performing', 'high',
            ['Fold a paper boat', 'Place it in a tub of water', 'Add small weights', 'See how much it can carry before sinking'],
            ['Paper', 'Tub of water', 'Small weights'], 'Can your boat carry 10 coins?')
        ],
        virtualLab: { title: 'Bridge Engineering Lab', simulation: 'Design and test bridges made from different materials', task: 'Build a bridge that can hold 50g using paper' },
        quiz: [
          q('What is a Vallam?', ['A type of car', 'A small boat used in Kerala', 'A bridge', 'A bicycle'], 'A small boat used in Kerala', 'Vallams are traditional boats used in Kerala\'s backwaters.'),
          q('Bamboo bridges are found in?', ['Cities', 'Hilly or river areas', 'Deserts', 'Oceans'], 'Hilly or river areas', 'Bamboo bridges are common in hilly regions near rivers.'),
          q('Which material makes the strongest bridge?', ['Paper', 'Bamboo', 'Steel', 'Cloth'], 'Steel', 'Steel bridges like iron bridges are the strongest for heavy loads.'),
          q('Why do children in some places use boats to go to school?', ['For fun', 'Rivers block the road', 'Boats are faster', 'Schools are on water'], 'Rivers block the road', 'In areas with rivers and no bridges, boats are necessary.')
        ],
        learningOutcomes: ['Understand different modes of transport', 'Know how geography affects travel', 'Appreciate diverse ways of life'],
        crossCurricularLink: 'Math: Distance and measurement'
      }]
    },

    {
      id: 'e2', title: '2. Ear to Ear', topics: [{
        id: 'e2-t1', title: 'Animal Ears & Hearing',
        subtopics: ['The Fan-Ears Analogy', 'Hidden Ear Detective', 'Sound Vibrations Secrets', 'Hearing Ranges in Nature', 'Animal Skins & Patterns', 'Feathers vs Fur Logic', 'Sensitivity & Safety', 'Silent World Empathy'],
        readingText: {
          en: 'Animals have ears of different shapes and sizes. Elephants have huge fan-shaped ears. Birds and lizards have tiny holes instead of outer ears. Some animals can hear sounds humans cannot.',
          hi: 'जानवरों के कान अलग-अलग आकार के होते हैं। हाथी के बड़े पंखे जैसे कान। पक्षियों के सिर पर छोटे छेद होते हैं।',
          kn: 'ಪ್ರಾಣಿಗಳ ಕಿವಿಗಳು ವಿವಿಧ ಆಕಾರ ಮತ್ತು ಗಾತ್ರಗಳಲ್ಲಿ ಇರುತ್ತವೆ.'
        },
        activities: [
          act('Ear Spotter', 'Identify ears of 10 different animals from pictures.', 'drawing', 'low',
            ['Look at animal pictures', 'Point out where the ears are', 'Draw the ears', 'Label each animal'],
            ['Animal pictures', 'Notebook'], 'Which animal has the biggest ears?'),
          act('Sound Safari', 'Close your eyes and identify 10 different sounds.', 'listening', 'mid',
            ['Sit quietly with eyes closed', 'Listen for 2 minutes', 'Write down every sound you hear', 'Identify each sound source'],
            ['Notebook', 'Pencil'], 'How many sounds could you identify?'),
          act('Ear Model', 'Make a model showing how ears work.', 'performing', 'high',
            ['Use a funnel as the outer ear', 'Attach a tube as ear canal', 'Stretch balloon over end as eardrum', 'Tap and observe vibrations'],
            ['Funnel', 'Tube', 'Balloon'], 'What happens when you whisper into the funnel?')
        ],
        virtualLab: { title: 'Animal Hearing Lab', simulation: 'Compare hearing ranges of different animals', task: 'Match 8 animals with their ear types' },
        quiz: [
          q('Which animal has fan-shaped ears?', ['Cat', 'Elephant', 'Fish', 'Snake'], 'Elephant', 'Elephants use their large ears to cool down too!'),
          q('Do birds have outer ears?', ['Yes, very large', 'Yes, very small', 'No, they have holes', 'No, they cannot hear'], 'No, they have holes', 'Birds have small holes covered by feathers.'),
          q('Why do rabbits have long ears?', ['For decoration', 'To hear danger from far away', 'To fly', 'To dig burrows'], 'To hear danger from far away', 'Long ears help rabbits detect predators early.'),
          q('Which animal cannot hear at all?', ['Dog', 'Cat', 'Snake', 'Parrot'], 'Snake', 'Snakes feel vibrations instead of hearing sound through ears.')
        ],
        learningOutcomes: ['Observe differences in animal ears', 'Understand how ears help animals survive', 'Appreciate biodiversity'],
        crossCurricularLink: 'Science: Sound and vibrations'
      }]
    },

    {
      id: 'e3', title: '3. A Day with Nandu', topics: [{
        id: 'e3-t1', title: 'Elephant Families',
        subtopics: ['Herd life', 'Baby elephants', 'Elephant communication', 'Conservation'],
        readingText: {
          en: 'Elephants live in herds led by the oldest female. Baby elephants drink mother\'s milk for 2+ years. Males leave the herd around age 14-15. Elephants communicate through sounds and vibrations.',
          hi: 'हाथी झुंड में रहते हैं जिसका नेतृत्व सबसे बुज़ुर्ग मादा करती है। बच्चा हाथी माँ का दूध 2+ साल तक पीता है।',
          kn: 'ಆನೆಗಳು ಹಿಂಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಹಿರಿಯ ಹೆಣ್ಣು ಆನೆ ನಾಯಕಿ.'
        },
        activities: [
          act('Herd Role Play', 'Act out a day in an elephant herd.', 'speaking', 'low',
            ['Assign roles: matriarch, baby, young male', 'Walk together in a line', 'Find imaginary water', 'Protect the baby from danger'],
            [], 'What did the matriarch decide?'),
          act('Elephant Diary', 'Write a diary entry as a baby elephant.', 'writing', 'mid',
            ['Imagine you are Nandu the baby elephant', 'Describe your morning', 'What did you eat?', 'Who did you play with?'],
            ['Notebook', 'Pencil'], 'What was the best part of Nandu\'s day?'),
          act('Conservation Poster', 'Create a poster about elephant conservation.', 'drawing', 'high',
            ['Research threats to elephants', 'Draw an elephant in its habitat', 'Write 3 ways to protect elephants', 'Add a catchy slogan'],
            ['Chart paper', 'Colours', 'Markers'], 'Present your poster to the class.')
        ],
        virtualLab: { title: 'Elephant Habitat Lab', simulation: 'Explore an elephant\'s daily life in the wild', task: 'Guide a herd to water while avoiding dangers' },
        quiz: [
          q('Who leads an elephant herd?', ['The youngest male', 'The oldest female', 'The biggest male', 'Any elephant'], 'The oldest female', 'The matriarch (oldest female) leads the herd.'),
          q('At what age do male elephants leave the herd?', ['1-2 years', '5-6 years', '14-15 years', 'They never leave'], '14-15 years', 'Young males leave around 14-15 years to live alone or in small groups.'),
          q('How do elephants communicate?', ['Through sounds and vibrations', 'By flying', 'Through colours', 'They cannot communicate'], 'Through sounds and vibrations', 'Elephants use trumpeting, rumbling, and ground vibrations.'),
          q('How long does a baby elephant drink milk?', ['1 month', '6 months', 'Over 2 years', '1 week'], 'Over 2 years', 'Baby elephants feed on mother\'s milk for over 2 years.')
        ],
        learningOutcomes: ['Understand elephant social structure', 'Know about animal families', 'Care for wildlife conservation'],
        crossCurricularLink: 'Math: Comparing weights and heights of animals'
      }]
    },

    {
      id: 'e6', title: '4. The Story of Amrita', topics: [{
        id: 'e6-t1', title: 'Train Journeys & Maps',
        subtopics: ['Indian Railways', 'Reading maps', 'PNR numbers', 'States of India'],
        readingText: {
          en: 'Indian Railways is one of the largest rail networks in the world. A PNR number is your unique ID for a train ticket. Trains connect cities across different states.',
          hi: 'भारतीय रेल दुनिया के सबसे बड़े रेल नेटवर्क में से एक है। PNR नंबर आपके टिकट का यूनिक आईडी है।',
          kn: 'ಭಾರತೀಯ ರೈಲ್ವೆ ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ರೈಲು ಜಾಲಗಳಲ್ಲಿ ಒಂದು.'
        },
        activities: [
          act('Ticket Reader', 'Read a sample train ticket and find important details.', 'calculating', 'low',
            ['Find the PNR number', 'Find departure and arrival stations', 'Note the train number', 'Calculate journey hours'],
            ['Sample train ticket'], 'What coach is your seat in?'),
          act('Route Mapper', 'Trace a train route on a map of India.', 'drawing', 'mid',
            ['Find Ahmedabad on the map', 'Find Kerala on the map', 'Trace the route through states', 'List all states the train passes through'],
            ['India map', 'Colours'], 'How many states does the train cross?'),
          act('Travel Planner', 'Plan a train trip for your family.', 'writing', 'high',
            ['Choose source and destination', 'Find the distance', 'Estimate travel time', 'Calculate ticket cost for family'],
            ['Notebook', 'India map'], 'Write a travel diary for 1 day of the journey.')
        ],
        virtualLab: { title: 'India Rail Explorer', simulation: 'Trace train routes across India on an interactive map', task: 'Plan a route from Delhi to Chennai through at least 4 states' },
        quiz: [
          q('What is PNR?', ['A train name', 'Passenger Name Record', 'A station code', 'A ticket price'], 'Passenger Name Record', 'PNR uniquely identifies your booking.'),
          q('Indian Railways connects how many states?', ['10', '20', '28+', '5'], '28+', 'Indian Railways covers all states and union territories.'),
          q('Which is the longest train route in India?', ['Mumbai to Delhi', 'Dibrugarh to Kanyakumari', 'Chennai to Kolkata', 'Delhi to Goa'], 'Dibrugarh to Kanyakumari', 'The Vivek Express covers over 4,000 km.'),
          q('On a map, which direction is UP?', ['East', ' West', 'North', 'South'], 'North', 'North is always at the top of standard maps.')
        ],
        learningOutcomes: ['Read train tickets and timetables', 'Trace routes on Indian map', 'Identify states of India'],
        crossCurricularLink: 'Math: Time and distance calculations'
      }]
    },

    {
      id: 'e10', title: '5. Hu Tu Tu, Hu Tu Tu', topics: [{
        id: 'e10-t1', title: 'Games We Play',
        subtopics: ['Traditional Indian games', 'Rules of Kabaddi', 'Games and health', 'Fair play'],
        readingText: {
          en: 'India has many traditional games like Kabaddi, Kho-Kho, Gilli-Danda, and Lagori. In Kabaddi, a raider holds breath and tries to touch opponents. Games keep us fit and teach teamwork.',
          hi: 'भारत में कबड्डी, खो-खो, गिल्ली-डंडा जैसे पारंपरिक खेल हैं। कबड्डी में रेडर साँस रोककर विरोधियों को छूता है।',
          kn: 'ಭಾರತದಲ್ಲಿ ಕಬಡ್ಡಿ, ಖೋ-ಖೋ, ಗಿಲ್ಲಿ-ಡಂಡ ಮುಂತಾದ ಸಾಂಪ್ರದಾಯಿಕ ಆಟಗಳಿವೆ.'
        },
        activities: [
          act('Game Collector', 'List 10 games played in your area.', 'writing', 'low',
            ['Ask elders about old games', 'List the games', 'Write rules for 3 games', 'Draw pictures of people playing'],
            ['Notebook'], 'Which game is the oldest?'),
          act('Kabaddi Coach', 'Organise a game of Kabaddi.', 'performing', 'mid',
            ['Divide into 2 teams', 'Mark the playing area', 'Explain rules', 'Play a 5-minute game'],
            ['Open ground', 'Chalk for lines'], 'Who was the best raider?'),
          act('Game Designer', 'Invent your own game with rules.', 'writing', 'high',
            ['Think of a fun concept', 'Write clear rules', 'Decide scoring system', 'Test with friends'],
            ['Notebook', 'Art supplies'], 'Can your game be played indoors?')
        ],
        virtualLab: { title: 'Sports Science Lab', simulation: 'Explore how games improve fitness and teamwork', task: 'Design a training routine for a Kabaddi player' },
        quiz: [
          q('In Kabaddi, what must the raider say?', ['Run-run', 'Kabaddi-Kabaddi', 'Tag-tag', 'Nothing'], 'Kabaddi-Kabaddi', 'The raider chants "Kabaddi" to prove they\'re holding one breath.'),
          q('Kho-Kho is played by how many players per team?', ['5', '9', '11', '15'], '9', 'Each Kho-Kho team has 9 players.'),
          q('Which is an indoor game?', ['Kabaddi', 'Cricket', 'Carrom', 'Football'], 'Carrom', 'Carrom is played on a board indoors.'),
          q('Why are games important?', ['They waste time', 'They keep us fit and teach teamwork', 'They make us tired', 'They are only for fun'], 'They keep us fit and teach teamwork', 'Games improve physical health and social skills.')
        ],
        learningOutcomes: ['Know traditional Indian games', 'Understand the value of sports', 'Practise fair play and teamwork'],
        crossCurricularLink: 'Hindi: Writing game instructions in Hindi'
      }]
    },

    {
      id: 'e11', title: '6. The Valley of Flowers', topics: [{
        id: 'e11-t1', title: 'Flowers & Plants',
        subtopics: ['Valley of Flowers', 'Uses of flowers', 'Medicinal plants', 'Edible flowers'],
        readingText: {
          en: 'The Valley of Flowers in Uttarakhand is home to hundreds of rare wildflowers. Some flowers are used in medicines, some in cooking (like Kachnar and Sahjan), and some are used in worship.',
          hi: 'उत्तराखंड में फूलों की घाटी सैकड़ों दुर्लभ जंगली फूलों का घर है। कुछ फूल दवाई में, कुछ खाने में उपयोग होते हैं।',
          kn: 'ಉತ್ತರಾಖಂಡದ ಹೂಗಳ ಕಣಿವೆ ನೂರಾರು ಅಪರೂಪದ ಕಾಡುಹೂವುಗಳಿಗೆ ನೆಲೆ.'
        },
        activities: [
          act('Flower Press', 'Collect and press flowers to preserve them.', 'performing', 'low',
            ['Collect 5 different flowers', 'Place between newspaper pages', 'Put heavy books on top', 'Wait 5 days and check'],
            ['Flowers', 'Newspaper', 'Heavy books'], 'Can you identify each dried flower?'),
          act('Flower Recipe', 'Cook a simple dish using an edible flower.', 'performing', 'mid',
            ['Research edible flowers with an adult', 'Choose a safe flower (banana flower)', 'Prepare a simple stir fry', 'Taste and describe the flavour'],
            ['Edible flowers', 'Kitchen supplies'], 'Draw the flower before and after cooking.'),
          act('Flower Catalogue', 'Create a mini encyclopedia of 10 flowers.', 'writing', 'high',
            ['Research 10 flowers', 'Draw each flower', 'Write uses (medicine, food, decoration)', 'Arrange alphabetically'],
            ['Chart paper', 'Colours'], 'Present your catalogue to the class.')
        ],
        virtualLab: { title: 'Flower Explorer Lab', simulation: 'Explore the Valley of Flowers virtually', task: 'Identify 8 flowers and classify by their use' },
        quiz: [
          q('Where is the Valley of Flowers?', ['Kerala', 'Rajasthan', 'Uttarakhand', 'Tamil Nadu'], 'Uttarakhand', 'The Valley of Flowers is a UNESCO World Heritage Site in Uttarakhand.'),
          q('Which flower is edible?', ['Rose only for smell', 'Kachnar', 'Sunflower leaf', 'Tulip'], 'Kachnar', 'Kachnar buds are used in cooking in many Indian cuisines.'),
          q('Tulsi is used as?', ['Decoration', 'Medicine', 'Building material', 'Fuel'], 'Medicine', 'Tulsi (holy basil) has many medicinal properties.'),
          q('Why should we protect wildflowers?', ['They look pretty', 'They maintain biodiversity', 'They are expensive', 'They grow in gardens'], 'They maintain biodiversity', 'Wildflowers support ecosystems and are vital for our environment.')
        ],
        learningOutcomes: ['Identify common flowers', 'Know uses of flowers in medicine and food', 'Understand biodiversity'],
        crossCurricularLink: 'Science: Parts of a plant'
      }]
    },

    {
      id: 'e13', title: '7. A River\'s Tale', topics: [{
        id: 'e13-t1', title: 'Water Pollution & Conservation',
        subtopics: ['Sources of pollution', 'Clean vs dirty water', 'Water conservation', 'River ecosystems'],
        readingText: {
          en: 'Rivers start clean from mountains but get polluted as they flow through cities. Factories, sewage, and garbage make rivers dirty. We must conserve water and keep rivers clean.',
          hi: 'नदियाँ पहाड़ों से साफ शुरू होती हैं लेकिन शहरों से बहते हुए प्रदूषित हो जाती हैं। कारखाने, सीवेज और कूड़ा नदियों को गंदा करते हैं।',
          kn: 'ನದಿಗಳು ಬೆಟ್ಟಗಳಿಂದ ಶುದ್ಧವಾಗಿ ಹರಿಯುತ್ತವೆ ಆದರೆ ನಗರಗಳಲ್ಲಿ ಮಲಿನವಾಗುತ್ತವೆ.'
        },
        activities: [
          act('Water Tester', 'Compare clean and dirty water samples.', 'performing', 'low',
            ['Take a glass of clean water', 'Take a glass of muddy water', 'Look, smell, compare', 'Try filtering the dirty water through cloth'],
            ['Two glasses', 'Clean water', 'Mud', 'Cloth'], 'Is the filtered water safe to drink?'),
          act('River Doctor', 'Create a poster about saving rivers.', 'drawing', 'mid',
            ['Draw a river from mountain to sea', 'Show pollution sources along the way', 'Add solutions at each point', 'Write a pledge to save water'],
            ['Chart paper', 'Colours'], 'What can YOU do to help?'),
          act('Water Saver Audit', 'Track your family\'s water usage for a day.', 'calculating', 'high',
            ['List all water uses in a day', 'Estimate litres for each', 'Find total daily usage', 'Suggest 3 ways to reduce'],
            ['Notebook'], 'How much water can you save in a week?')
        ],
        virtualLab: { title: 'River Journey Lab', simulation: 'Follow a river from source to sea and spot pollution', task: 'Identify 5 sources of pollution and suggest solutions' },
        quiz: [
          q('Where do rivers start?', ['Oceans', 'Lakes', 'Mountains', 'Cities'], 'Mountains', 'Most rivers originate from glaciers or springs in mountains.'),
          q('Which pollutes rivers?', ['Trees', 'Fish', 'Factory waste', 'Sunlight'], 'Factory waste', 'Industrial waste is a major source of river pollution.'),
          q('What can we do to save water?', ['Leave taps running', 'Take long showers', 'Fix leaking taps', 'Waste water'], 'Fix leaking taps', 'Fixing leaks saves thousands of litres annually.'),
          q('Clean water is important for?', ['Only fish', 'Only humans', 'All living things', 'Nothing'], 'All living things', 'Every living thing needs clean water to survive.')
        ],
        learningOutcomes: ['Understand water pollution causes', 'Know water conservation methods', 'Appreciate river ecosystems'],
        crossCurricularLink: 'Math: Measuring water usage in litres'
      }]
    },

    {
      id: 'e19', title: '8. Abdul in the Garden', topics: [{
        id: 'e19-t1', title: 'Roots & Plants',
        subtopics: ['Types of roots', 'Root functions', 'Deep roots vs shallow roots', 'Banyan tree aerial roots'],
        readingText: {
          en: 'Roots anchor plants and absorb water. Tap roots go deep down (carrot, radish). Fibrous roots spread wide (grass). The Banyan tree has aerial hanging roots that become new trunks!',
          hi: 'जड़ें पौधों को जमीन में टिकाती हैं और पानी सोखती हैं। गाजर, मूली में मूसला जड़ गहरी जाती है। बरगद के पेड़ की हवाई जड़ें होती हैं।',
          kn: 'ಬೇರುಗಳು ಸಸ್ಯಗಳನ್ನು ಭೂಮಿಯಲ್ಲಿ ಹಿಡಿಯುತ್ತವೆ ಮತ್ತು ನೀರನ್ನು ಹೀರುತ್ತವೆ.'
        },
        activities: [
          act('Root Spotter', 'Dig up small plants and observe their roots.', 'performing', 'low',
            ['Gently dig around a weed', 'Pull out with roots intact', 'Wash the roots', 'Draw what you see'],
            ['Small trowel', 'Water', 'Notebook'], 'Is it a tap root or fibrous root?'),
          act('Seed Germinator', 'Grow a bean seed and watch the root grow.', 'performing', 'mid',
            ['Wet cotton in a glass', 'Place a bean seed on top', 'Keep in sunlight', 'Observe daily for 7 days and draw'],
            ['Glass', 'Cotton', 'Bean seeds', 'Water'], 'Which grows first—root or shoot?'),
          act('Root Study Report', 'Research and present about 5 different root systems.', 'writing', 'high',
            ['Choose 5 plants with different roots', 'Draw each root system', 'Write a paragraph about each', 'Present to class'],
            ['Reference books', 'Chart paper'], 'Which root system stores food?')
        ],
        virtualLab: { title: 'Root Explorer Lab', simulation: 'Explore underground root systems of different plants', task: 'Match 6 plants with their root types' },
        quiz: [
          q('What do roots absorb?', ['Sunlight', 'Air', 'Water and minerals', 'Leaves'], 'Water and minerals', 'Roots absorb water and minerals from soil.'),
          q('Which plant has aerial roots?', ['Mango', 'Banyan', 'Rose', 'Tulsi'], 'Banyan', 'Banyan tree roots hang from branches and become new trunks.'),
          q('A carrot is actually a?', ['Stem', 'Leaf', 'Root', 'Flower'], 'Root', 'Carrot is a modified tap root that stores food.'),
          q('Desert plants have ____ roots.', ['Very short', 'Very deep', 'No', 'Floating'], 'Very deep', 'Desert plants grow deep roots to find water underground.')
        ],
        learningOutcomes: ['Identify tap and fibrous roots', 'Understand functions of roots', 'Know about special roots like aerial and storage roots'],
        crossCurricularLink: 'Math: Measuring root length'
      }]
    },

    {
      id: 'e27', title: '9. Chuskit Goes to School', topics: [{
        id: 'e27-t1', title: 'Disability & Inclusion',
        subtopics: ['Chuskit\'s story', 'Types of disabilities', 'Building accessible spaces', 'Empathy and kindness'],
        readingText: {
          en: 'Chuskit is a girl from Ladakh who uses a wheelchair. Her friends and community built a bridge so she could cross the river to reach school. Everyone deserves equal access to education.',
          hi: 'चुसकित लद्दाख की एक लड़की है जो व्हीलचेयर इस्तेमाल करती है। उसके दोस्तों ने पुल बनाया ताकि वह स्कूल जा सके।',
          kn: 'ಚುಸ್ಕಿತ್ ಲಡಾಖ್‌ನ ಹುಡುಗಿ, ವೀಲ್‌ಚೇರ್ ಬಳಸುತ್ತಾಳೆ. ಅವಳ ಸ್ನೇಹಿತರು ಶಾಲೆಗೆ ಹೋಗಲು ಸೇತುವೆ ಕಟ್ಟಿದರು.'
        },
        activities: [
          act('Empathy Walk', 'Experience moving around school in a wheelchair or blindfolded.', 'performing', 'low',
            ['Borrow a wheelchair or use a blindfold', 'Try navigating the classroom', 'Note difficulties you face', 'Discuss how to make it easier'],
            ['Wheelchair or blindfold'], 'What changes would help?'),
          act('Accessibility Auditor', 'Check if your school is accessible for everyone.', 'writing', 'mid',
            ['Check for ramps', 'Check bathroom accessibility', 'Check classroom seating', 'Write a report with suggestions'],
            ['Notebook', 'Camera'], 'Write a letter to the principal with your findings.'),
          act('Bridge of Kindness', 'Write a story about helping someone like Chuskit.', 'writing', 'high',
            ['Create a character who needs help', 'Describe their challenge', 'Show how friends help', 'Write the happy ending'],
            ['Notebook', 'Pencil'], 'Read your story to the class.')
        ],
        virtualLab: { title: 'Inclusive Design Lab', simulation: 'Design an accessible school building', task: 'Add ramps, wide doors, and Braille signs to a school blueprint' },
        quiz: [
          q('Where is Chuskit from?', ['Kerala', 'Ladakh', 'Assam', 'Gujarat'], 'Ladakh', 'Chuskit lives in Ladakh, a region in northern India.'),
          q('What did Chuskit\'s friends build?', ['A school', 'A house', 'A bridge', 'A playground'], 'A bridge', 'They built a bridge so Chuskit could cross the river.'),
          q('A ramp helps people who?', ['Love climbing', 'Use wheelchairs', 'Like running', 'Want exercise'], 'Use wheelchairs', 'Ramps provide wheelchair-friendly access to buildings.'),
          q('Everyone has the right to?', ['Only play', 'Education', 'Stay at home', 'Only eat'], 'Education', 'Education is a fundamental right for every child.')
        ],
        learningOutcomes: ['Understand disabilities with empathy', 'Recognise the need for accessible spaces', 'Value inclusion and kindness'],
        crossCurricularLink: 'English: Writing stories about empathy'
      }]
    }
  ]
};

// ─── HINDI (Rimjhim) ──────────────────────────────────────────────────────────
const hindiSubject: Subject = {
  id: 'hindi', title: 'Hindi (Rimjhim)', icon: '📝', color: '#E17055',
  chapters: [
    {
      id: 'h1', title: '1. मन के भोले-भाले बादल', topics: [{
        id: 'h1-t1', title: 'बादलों की कविता',
        subtopics: ['The Cotton Candy Cloud Analogy', 'How Clouds are Born', 'Cloud Observation Task', 'The Sky Canvas Art', 'Weather & Moods', 'The Water Cycle Song', 'Rainmakers Challenge', 'Protecting Our Sky'],
        readingText: {
          en: 'This poem describes clouds as innocent, playful children. They puff their cheeks like balloons, have fluffy hair, and run around the sky looking very cute.',
          hi: 'यह कविता बादलों को भोले-भाले बच्चों की तरह बताती है। वे गाल फुलाते हैं, झब्बर-झब्बर बालों वाले हैं, और आसमान में इधर-उधर दौड़ते हैं।',
          kn: 'ಈ ಕವಿತೆ ಮೋಡಗಳನ್ನು ಮುಗ್ಧ ಮಕ್ಕಳಂತೆ ವರ್ಣಿಸುತ್ತದೆ.'
        },
        activities: [
          act('बादल चित्रकार', 'आसमान के बादलों को देखकर चित्र बनाओ।', 'drawing', 'low',
            ['आसमान की ओर देखो', 'बादलों के आकार नोट करो', 'कागज पर बादल बनाओ', 'रंग भरो'],
            ['कागज', 'रंग'], 'बादल किस जानवर जैसा दिखता है?'),
          act('कविता सुनाओ', 'कविता को लय में सुनाओ।', 'speaking', 'mid',
            ['कविता पढ़ो', 'लय समझो', 'हाव-भाव के साथ सुनाओ', 'दोस्तों को सुनाओ'],
            ['कविता की किताब'], 'क्या तुम अपनी कविता लिख सकते हो?'),
          act('बादल डायरी', 'एक हफ्ते तक हर दिन बादलों का हाल लिखो।', 'writing', 'high',
            ['हर दिन आसमान देखो', 'बादलों का रंग और आकार लिखो', 'मौसम नोट करो', 'एक हफ्ते बाद तुलना करो'],
            ['डायरी', 'पेन'], 'बारिश वाले दिन बादल कैसे थे?')
        ],
        quiz: [
          q('कविता में बादल कैसे हैं?', ['डरावने', 'भोले-भाले', 'गुस्से वाले', 'उदास'], 'भोले-भाले', 'कविता बादलों को भोले-भाले बच्चों जैसा बताती है।'),
          q('बादलों के बाल कैसे हैं?', ['सीधे', 'झब्बर-झब्बर', 'लंबे', 'छोटे'], 'झब्बर-झब्बर', 'बादलों के बाल रूई जैसे झब्बर-झब्बर हैं।'),
          q('बादल कहाँ दौड़ते हैं?', ['ज़मीन पर', 'आसमान में', 'पानी में', 'पहाड़ पर'], 'आसमान में', 'बादल आसमान में इधर-उधर दौड़ते हैं।'),
          q('बादल गाल कैसे फुलाते हैं?', ['गुब्बारों की तरह', 'फूलों की तरह', 'पत्तों की तरह', 'पत्थर की तरह'], 'गुब्बारों की तरह', 'बादल गुब्बारों जैसे गाल फुलाते हैं।')
        ],
        learningOutcomes: ['कविता का आनंद लेना', 'कल्पना शक्ति विकसित करना', 'प्रकृति के बारे में जानना'],
        crossCurricularLink: 'EVS: Clouds and weather'
      }]
    },

    {
      id: 'h2', title: '2. बीरबल की सूझ-बूझ', topics: [{
        id: 'h2-t1', title: 'बीरबल की चतुराई',
        subtopics: ['The Brain vs Brawn Analogy', 'The King\'s Impossible Questions', 'The Wit Detective', 'Solving Your Own Riddle', 'Logic & Clear Thinking', 'Birbal\'s Court History', 'Fair Justice Mission', 'The Future of Wisdom'],
        readingText: {
          en: 'Birbal was a witty minister in Akbar\'s court. When asked impossible questions, Birbal gave such clever answers that the questioner was left speechless. Intelligence is the greatest weapon.',
          hi: 'बीरबल अकबर के दरबार में सबसे चतुर मंत्री थे। जब अकबर ने असंभव सवाल पूछे, बीरबल ने ऐसे जवाब दिए कि पूछने वाले हैरान रह गए। बुद्धि सबसे बड़ा हथियार है!',
          kn: 'ಬೀರ್ಬಲ್ ಅಕ್ಬರನ ಆಸ್ಥಾನದಲ್ಲಿ ಬುದ್ಧಿವಂತ ಮಂತ್ರಿ.'
        },
        activities: [
          act('कहानी सुनाओ', 'बीरबल की कहानी अपने शब्दों में सुनाओ।', 'speaking', 'low',
            ['कहानी पढ़ो', 'मुख्य बातें नोट करो', 'अपने शब्दों में सुनाओ', 'सवाल-जवाब करो'],
            ['कहानी की किताब'], 'तुम बीरबल की जगह क्या जवाब देते?'),
          act('नाटक मंचन', 'अकबर-बीरबल का नाटक करो।', 'performing', 'mid',
            ['किरदार बाँटो', 'संवाद याद करो', 'अभ्यास करो', 'कक्षा में प्रस्तुत करो'],
            ['पोशाक', 'मंच सज्जा'], 'कौन सबसे अच्छा बीरबल बना?'),
          act('चतुर जवाब लेखन', 'मुश्किल सवालों के चतुर जवाब लिखो।', 'writing', 'high',
            ['5 मुश्किल सवाल सोचो', 'हर सवाल का चतुर जवाब लिखो', 'तर्क समझाओ', 'कक्षा में शेयर करो'],
            ['नोटबुक', 'पेन'], 'क्या तुम्हारे जवाब बीरबल जैसे थे?')
        ],
        quiz: [
          q('बीरबल किसके दरबार में थे?', ['शिवाजी', 'अकबर', 'शाहजहाँ', 'औरंगज़ेब'], 'अकबर', 'बीरबल मुग़ल बादशाह अकबर के नवरत्नों में से एक थे।'),
          q('बीरबल की सबसे बड़ी ताकत क्या थी?', ['तलवार', 'बुद्धि', 'धन', 'सेना'], 'बुद्धि', 'बीरबल अपनी बुद्धि और चतुराई के लिए प्रसिद्ध थे।'),
          q('अकबर-बीरबल की कहानियाँ क्या सिखाती हैं?', ['लड़ना', 'बुद्धि का उपयोग', 'भागना', 'सोना'], 'बुद्धि का उपयोग', 'ये कहानियाँ बुद्धिमानी से समस्या हल करना सिखाती हैं।'),
          q('बीरबल का असली नाम क्या था?', ['राम', 'महेश दास', 'गोपाल', 'तेनालीराम'], 'महेश दास', 'बीरबल का असली नाम महेश दास था।')
        ],
        learningOutcomes: ['कहानी समझना और सुनाना', 'बुद्धि का महत्व जानना', 'हिंदी में बोलने का अभ्यास'],
        crossCurricularLink: 'Social Studies: Mughal history'
      }]
    },

    {
      id: 'h3', title: '3. किरमिच की गेंद', topics: [{
        id: 'h3-t1', title: 'ईमानदारी',
        subtopics: ['The Lost Treasure Analogy', 'The Shiny Kirmic Ball', 'The Truth Mirror Test', 'Returning the Found Item', 'Honesty – The Real Gold', 'Trust Building Task', 'The Consequence Game', 'Becoming an Integrity Hero'],
        readingText: {
          en: 'This story is about a shiny ball made of kirmic (rexine). A child finds it and must decide whether to keep it or return it to its owner. Honesty is the best policy.',
          hi: 'यह कहानी किरमिच (रेक्सिन) की एक चमकदार गेंद के बारे में है। एक बच्चे को गेंद मिलती है और उसे फैसला करना है कि वह रखे या मालिक को लौटाए। ईमानदारी सबसे अच्छी नीति है।',
          kn: 'ಇದು ಕಿರ್ಮಿಚ್ ಚೆಂಡಿನ ಕಥೆ. ಪ್ರಾಮಾಣಿಕತೆ ಉತ್ತಮ ನೀತಿ.'
        },
        activities: [
          act('ईमानदारी पोस्टर', 'ईमानदारी के बारे में एक पोस्टर बनाओ।', 'drawing', 'low',
            ['ईमानदारी की एक कहानी सोचो', 'चित्र बनाओ', 'एक नारा लिखो', 'कक्षा में लगाओ'],
            ['चार्ट पेपर', 'रंग'], 'तुम्हारा नारा क्या है?'),
          act('सही-गलत खेल', 'स्थितियाँ बताओ और बच्चे सही या गलत कहें।', 'speaking', 'mid',
            ['10 स्थितियाँ तैयार करो', 'एक-एक करके पढ़ो', 'बच्चे हाथ उठाकर जवाब दें', 'चर्चा करो'],
            [], 'सबसे मुश्किल फैसला कौन सा था?'),
          act('डायरी लेखन', 'एक दिन की डायरी लिखो जहाँ तुमने ईमानदारी दिखाई।', 'writing', 'high',
            ['एक सच्ची घटना याद करो', 'विस्तार से लिखो', 'अपनी भावनाएँ बताओ', 'सीख लिखो'],
            ['डायरी', 'पेन'], 'ईमानदारी से तुम्हें कैसा लगा?')
        ],
        quiz: [
          q('किरमिच क्या है?', ['एक फल', 'एक कपड़ा/रेक्सिन', 'एक खिलौना', 'एक पक्षी'], 'एक कपड़ा/रेक्सिन', 'किरमिच एक प्रकार का रेक्सिन कपड़ा है।'),
          q('कहानी का मुख्य संदेश क्या है?', ['खेलना', 'ईमानदारी', 'पढ़ाई', 'खाना'], 'ईमानदारी', 'ईमानदारी सबसे अच्छी नीति है।'),
          q('अगर तुम्हें कोई चीज़ मिले तो क्या करोगे?', ['रख लूँगा', 'फेंक दूँगा', 'मालिक को लौटाऊँगा', 'बेच दूँगा'], 'मालिक को लौटाऊँगा', 'दूसरों की चीज़ें लौटाना ईमानदारी है।'),
          q('ईमानदार बच्चा कैसा होता है?', ['सच बोलता है', 'झूठ बोलता है', 'चोरी करता है', 'धोखा देता है'], 'सच बोलता है', 'ईमानदार बच्चा हमेशा सच बोलता है।')
        ],
        learningOutcomes: ['ईमानदारी का मूल्य समझना', 'नैतिक कहानियों से सीखना', 'हिंदी पढ़ना और लिखना'],
        crossCurricularLink: 'EVS: Values and ethics'
      }]
    },

    {
      id: 'h4', title: '4. पापा जब बच्चे थे', topics: [{
        id: 'h4-t1', title: 'बचपन की यादें',
        subtopics: ['The Time Machine Analogy', 'Papa\'s Funny Dreams', 'When Toys were Sticks', 'Interviewing Grandpa Task', 'The Bridge of Generations', 'The Value of Play', 'Dreaming Big Challenge', 'Building Your Own Future'],
        readingText: {
          en: 'This poem imagines what Papa was like as a child. Did he want to be a dog, or a watchman? Children have the funniest dreams! Let us explore Papa\'s childhood.',
          hi: 'यह कविता कल्पना करती है कि पापा बचपन में कैसे थे। क्या वे कुत्ता बनना चाहते थे या चौकीदार? बच्चों के सपने कितने मज़ेदार होते हैं! आइए पापा के बचपन की सैर करें।',
          kn: 'ಈ ಕವಿತೆ ಅಪ್ಪ ಚಿಕ್ಕವರಿದ್ದಾಗ ಹೇಗಿದ್ದರು ಎಂದು ಕಲ್ಪಿಸುತ್ತದೆ.'
        },
        activities: [
          act('पापा से बातचीत', 'पापा/माँ से उनके बचपन के बारे में पूछो।', 'listening', 'low',
            ['5 सवाल तैयार करो', 'पापा/माँ से पूछो', 'जवाब लिखो', 'कक्षा में शेयर करो'],
            ['नोटबुक'], 'सबसे मज़ेदार बात क्या थी?'),
          act('बचपन का चित्र', 'पापा के बचपन का एक दृश्य बनाओ।', 'drawing', 'mid',
            ['पापा से कहानी सुनो', 'सबसे मज़ेदार किस्सा चुनो', 'चित्र बनाओ', 'नीचे कहानी लिखो'],
            ['कागज', 'रंग'], 'क्या तुम भी ऐसा कुछ करते हो?'),
          act('तब और अब तुलना', 'पापा के बचपन और तुम्हारे बचपन की तुलना करो।', 'writing', 'high',
            ['एक टेबल बनाओ: पापा vs मैं', 'खिलौने, खेल, स्कूल की तुलना करो', 'क्या समान है, क्या अलग', 'निष्कर्ष लिखो'],
            ['नोटबुक'], 'सबसे बड़ा बदलाव क्या है?')
        ],
        quiz: [
          q('पापा बचपन में क्या बनना चाहते थे?', ['डॉक्टर', 'कुत्ता या चौकीदार', 'पायलट', 'शिक्षक'], 'कुत्ता या चौकीदार', 'कविता में पापा बचपन में कुत्ता या चौकीदार बनना चाहते थे।'),
          q('बच्चों के सपने कैसे होते हैं?', ['डरावने', 'मज़ेदार और अजीब', 'उबाऊ', 'लंबे'], 'मज़ेदार और अजीब', 'बच्चों की कल्पना बहुत मज़ेदार होती है।'),
          q('यह रचना एक ____ है।', ['कहानी', 'कविता', 'नाटक', 'पत्र'], 'कविता', 'यह एक हास्य कविता है।'),
          q('कविता हमें क्या सिखाती है?', ['पढ़ाई करो', 'बचपन का आनंद लो', 'डरो मत', 'जल्दी सोओ'], 'बचपन का आनंद लो', 'बचपन खास है, इसका आनंद लो।')
        ],
        learningOutcomes: ['कविता का रसास्वादन', 'परिवार के बारे में जानना', 'कल्पना और लेखन'],
        crossCurricularLink: 'EVS: Family and relationships'
      }]
    },

    {
      id: 'h7', title: '5. दान का हिसाब', topics: [{
        id: 'h7-t1', title: 'गणित और चतुराई',
        subtopics: ['The Doubling Rice Analogy', 'The Greedy King Trap', 'Exponential Growth Power', 'Charity – The Heart of Math', 'Clever Negotiation Task', 'Kingdom Budget Mission', 'Fair Resource Sharing', 'Math for Social Good'],
        readingText: {
          en: 'A saint asks a greedy king for just 1 rupee on the first day, doubling each day for 30 days. The king agrees, not realizing that 1 doubled 30 times is over 100 crore! Small beginnings can lead to huge results.',
          hi: 'एक संन्यासी ने लालची राजा से बस पहले दिन 1 रुपया माँगा, हर दिन दोगुना करते हुए 30 दिनों तक। राजा ने हाँ कर दी, बिना यह समझे कि 1 का 30 बार दोगुना 100 करोड़ से ज़्यादा बनता है!',
          kn: 'ಒಬ್ಬ ಸನ್ಯಾಸಿ ದುರಾಸೆ ರಾಜನಿಂದ ಮೊದಲ ದಿನ 1 ರೂಪಾಯಿ ಕೇಳಿದ, ಪ್ರತಿ ದಿನ ದ್ವಿಗುಣ.'
        },
        activities: [
          act('दोगुना कैलकुलेटर', '1 रुपये को 10 दिनों तक दोगुना करो।', 'calculating', 'low',
            ['दिन 1: ₹1 लिखो', 'हर दिन दोगुना करो', '10 दिनों तक करो', 'कुल जोड़ो'],
            ['नोटबुक', 'कैलकुलेटर'], '10वें दिन कितने रुपये होंगे?'),
          act('कहानी नाटक', 'राजा और संन्यासी का नाटक करो।', 'performing', 'mid',
            ['किरदार बाँटो', 'संवाद तैयार करो', 'राजा का आश्चर्य दिखाओ', 'मंचन करो'],
            [], 'राजा को कब समझ आया?'),
          act('चतुराई की कहानी', 'एक नई कहानी लिखो जहाँ गणित से समस्या हल हो।', 'writing', 'high',
            ['एक समस्या सोचो', 'गणित का उपयोग दिखाओ', 'चतुर समाधान लिखो', 'कक्षा में पढ़ो'],
            ['नोटबुक'], 'क्या गणित सच में ताकतवर है?')
        ],
        quiz: [
          q('संन्यासी ने पहले दिन कितने माँगे?', ['100 रुपये', '1 रुपया', '10 रुपये', '1000 रुपये'], '1 रुपया', 'संन्यासी ने सिर्फ 1 रुपया माँगा जो हर दिन दोगुना होता।'),
          q('₹1 को 5 बार दोगुना करने पर?', ['₹5', '₹10', '₹16', '₹32'], '₹32', '1→2→4→8→16→32, यानी ₹32'),
          q('राजा कैसा था?', ['दयालु', 'लालची', 'बुद्धिमान', 'गरीब'], 'लालची', 'कहानी में राजा लालची था।'),
          q('कहानी का संदेश क्या है?', ['लालच बुरी बला है', 'पैसा सब कुछ है', 'राजा हमेशा सही होता है', 'गणित कठिन है'], 'लालच बुरी बला है', 'लालच करने से राजा का खज़ाना खाली हो गया।')
        ],
        learningOutcomes: ['गणित का रोज़मर्रा में उपयोग', 'हिंदी कहानी समझना', 'नैतिक मूल्य सीखना'],
        crossCurricularLink: 'Math: Doubling and multiplication patterns'
      }]
    },

    {
      id: 'h9', title: '6. बिन्नी और गांधीजी', topics: [{
        id: 'h9-t1', title: 'स्वतंत्रता संग्राम',
        subtopics: ['The Salt & Freedom Analogy', 'The Long Walk Mission', 'Children in History', 'Passive Resistance Power-Up', 'Writing Your Own Message', 'Simple Living Philosophy', 'Swadeshi & Self-Reliance', 'Leading the Nation Vision'],
        readingText: {
          en: 'Binni is a child who cares for his goat while Gandhi prepares for the Salt March. Even children can be part of great missions. Gandhi\'s non-violent resistance changed India.',
          hi: 'बिन्नी एक बच्चा है जो अपनी बकरी की देखभाल करता है जबकि गांधीजी नमक यात्रा की तैयारी करते हैं। बच्चे भी बड़े मिशन का हिस्सा बन सकते हैं।',
          kn: 'ಬಿನ್ನಿ ತನ್ನ ಮೇಕೆಯನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತಾನೆ, ಗಾಂಧೀಜಿ ಉಪ್ಪಿನ ಸತ್ಯಾಗ್ರಹಕ್ಕೆ ತಯಾರಾಗುತ್ತಾರೆ.'
        },
        activities: [
          act('गांधीजी को पत्र', 'गांधीजी को एक पत्र लिखो।', 'writing', 'low',
            ['अभिवादन लिखो', 'अपना परिचय दो', 'एक सवाल पूछो', 'धन्यवाद लिखो'],
            ['पत्र लेखन सामग्री'], 'तुम गांधीजी से क्या पूछना चाहते हो?'),
          act('नमक बनाओ', 'समुद्री पानी से नमक बनाने का प्रयोग करो।', 'performing', 'mid',
            ['पानी में नमक घोलो', 'प्लेट में डालो', 'धूप में रखो', 'अगले दिन नमक देखो'],
            ['पानी', 'नमक', 'प्लेट'], 'नमक कैसे बना?'),
          act('स्वतंत्रता दिवस भाषण', 'स्वतंत्रता पर एक भाषण तैयार करो।', 'speaking', 'high',
            ['विषय चुनो', 'मुख्य बिंदु लिखो', 'अभ्यास करो', 'कक्षा में भाषण दो'],
            ['नोटबुक'], 'तुम्हारे लिए आज़ादी का क्या मतलब है?')
        ],
        quiz: [
          q('गांधीजी ने कौन सा आंदोलन चलाया?', ['भारत छोड़ो', 'नमक सत्याग्रह', 'असहयोग', 'सभी'], 'नमक सत्याग्रह', 'इस कहानी में नमक सत्याग्रह (दांडी मार्च) का ज़िक्र है।'),
          q('बिन्नी कौन है?', ['गांधीजी का बेटा', 'एक बच्चा जो बकरी पालता है', 'एक सिपाही', 'एक शिक्षक'], 'एक बच्चा जो बकरी पालता है', 'बिन्नी एक छोटा बच्चा है जो अपनी बकरी से प्यार करता है।'),
          q('गांधीजी का हथियार क्या था?', ['तलवार', 'बंदूक', 'अहिंसा', 'पैसा'], 'अहिंसा', 'गांधीजी ने अहिंसा (non-violence) से आज़ादी दिलाई।'),
          q('नमक सत्याग्रह कब हुआ?', ['1920', '1930', '1942', '1947'], '1930', 'दांडी मार्च 1930 में हुआ था।')
        ],
        learningOutcomes: ['स्वतंत्रता संग्राम के बारे में जानना', 'गांधीजी के मूल्य समझना', 'हिंदी कहानी समझना'],
        crossCurricularLink: 'Social Studies: Indian independence movement'
      }]
    }
  ]
};

// ─── ENGLISH (Marigold) ───────────────────────────────────────────────────────
const englishSubject: Subject = {
  id: 'english', title: 'English (Marigold)', icon: '📖', color: '#0984E3',
  chapters: [
    {
      id: 'en1', title: '1. Wake Up!', topics: [{
        id: 'en1-t1', title: 'Morning Poem',
        subtopics: ['The Sun Alarm Clock Analogy', 'Morning Buzz Activity', 'Rhyming Word Twins', 'Poetry Performance Skills', 'Morning Habits for Success', 'Early Bird vs Night Owl', 'Nature Observation Task', 'Writing Your First Stanza'],
        readingText: {
          en: 'The sun rises and the birds sing "Wake up!" The bees buzz and flowers open. It is like the whole world is throwing a party to celebrate a new day!',
          hi: 'सूरज उगता है और पक्षी गाते हैं "जागो!" मधुमक्खियाँ गुनगुनाती हैं और फूल खिलते हैं।',
          kn: 'ಸೂರ್ಯ ಹುಟ್ಟುತ್ತಾನೆ ಮತ್ತು ಹಕ್ಕಿಗಳು "ಎಚ್ಚರಾಗು!" ಎಂದು ಹಾಡುತ್ತವೆ.'
        },
        activities: [
          act('Morning Song', 'Recite the poem with actions.', 'speaking', 'low',
            ['Read the poem twice', 'Add hand actions for sun, birds, bees', 'Practice rhythm', 'Perform for the class'],
            ['Poem text'], 'Can you sing it instead of speaking?'),
          act('Rhyme Finder', 'Find rhyming words in the poem.', 'writing', 'mid',
            ['Read each line carefully', 'Write down words that rhyme', 'Create 5 new rhyming pairs', 'Write a small rhyme using them'],
            ['Notebook'], 'Can you write your own 4-line poem?'),
          act('Nature Journal', 'Wake up early and write about what you see and hear.', 'writing', 'high',
            ['Wake up at sunrise', 'Go to a window or garden', 'Writing everything you see, hear, smell', 'Draw a picture'],
            ['Journal', 'Pencil', 'Colours'], 'Read your journal entry to the class.')
        ],
        quiz: [
          q('In the poem, who wakes up first?', ['Children', 'The Sun', 'Dogs', 'Teachers'], 'The Sun', 'The sun rises first and wakes the world.'),
          q('What do bees do in the morning?', ['Sleep', 'Buzz and collect nectar', 'Fly away', 'Hide'], 'Buzz and collect nectar', 'Bees are busy workers who start early.'),
          q('Which word rhymes with "day"?', ['Night', 'Play', 'Sun', 'Moon'], 'Play', 'Day and Play rhyme (-ay sound).'),
          q('The poem is about?', ['Night time', 'Morning time', 'Afternoon', 'Evening'], 'Morning time', 'The poem describes the beauty of morning.')
        ],
        learningOutcomes: ['Recite English poems', 'Identify rhyming words', 'Appreciate nature through poetry'],
        crossCurricularLink: 'EVS: Birds and their habitats'
      }]
    },

    {
      id: 'en5', title: '2. Helen Keller', topics: [{
        id: 'en5-t1', title: 'Helen Keller\'s Story',
        subtopics: ['The Dark Room Analogy', 'Finger Language Secrets', 'Learning Through Touch', 'Anne Sullivan – The Guide', 'Breaking the Silence', 'Determination Power-Up', 'Inclusive Spirit Mission', 'Hope for the Future'],
        readingText: {
          en: 'Helen Keller lost her sight and hearing at 19 months old. With the help of teacher Anne Sullivan, she learned to read, write, and speak. She became a famous author and activist.',
          hi: 'हेलन केलर ने 19 महीने की उम्र में अपनी दृष्टि और सुनने की क्षमता खो दी। शिक्षिका ऐन सलिवन की मदद से उन्होंने पढ़ना-लिखना सीखा।',
          kn: 'ಹೆಲೆನ್ ಕೆಲ್ಲರ್ 19 ತಿಂಗಳ ವಯಸ್ಸಿನಲ್ಲಿ ದೃಷ್ಟಿ ಮತ್ತು ಶ್ರವಣ ಕಳೆದುಕೊಂಡರು.'
        },
        activities: [
          act('Touch Detective', 'Identify objects only by touch (blindfolded).', 'performing', 'low',
            ['Wear a blindfold', 'Touch 10 objects', 'Guess each object', 'Write your guesses'],
            ['Blindfold', 'Various objects'], 'How many did you get right?'),
          act('Braille Explorer', 'Learn the Braille alphabet and write your name.', 'writing', 'mid',
            ['Study the Braille chart', 'Find letters of your name', 'Write your name in Braille dots', 'Try reading a friend\'s name'],
            ['Braille chart', 'Paper', 'Pencil'], 'Can you write a short message in Braille?'),
          act('Helen\'s Diary', 'Write a diary entry as if you are Helen Keller.', 'writing', 'high',
            ['Imagine losing sight and hearing', 'Describe your feelings', 'Write about learning your first word', 'Express hope and determination'],
            ['Notebook'], 'What would you miss most if you couldn\'t see?')
        ],
        quiz: [
          q('When did Helen Keller lose her sight?', ['At birth', 'At 19 months', 'At 5 years', 'At 10 years'], 'At 19 months', 'She was 19 months old when illness took her sight and hearing.'),
          q('Who was Helen\'s teacher?', ['Anne Frank', 'Anne Sullivan', 'Anna Keller', 'Mary Poppins'], 'Anne Sullivan', 'Anne Sullivan taught Helen using touch and sign language.'),
          q('How did Helen learn to read?', ['By looking at books', 'Through Braille (touch)', 'By watching TV', 'By listening'], 'Through Braille (touch)', 'Braille uses raised dots that are read by touch.'),
          q('Helen Keller became a famous?', ['Singer', 'Author and activist', 'Chef', 'Painter'], 'Author and activist', 'She wrote many books and fought for disabled people\'s rights.')
        ],
        learningOutcomes: ['Read and understand biographical text', 'Empathise with people with disabilities', 'Learn about determination and courage'],
        crossCurricularLink: 'EVS: Disability and inclusion (Chuskit story)'
      }]
    },

    {
      id: 'en7', title: '3. The Giving Tree', topics: [{
        id: 'en7-t1', title: 'Friendship & Giving',
        subtopics: ['The Nature Power-Bank Analogy', 'Tree\'s Selfless Journey', 'The Growing Boy Cycle', 'Nature vs Need Logic', 'Gratitude Exercise', 'Tree Conservation Task', 'Sustainability Vision', 'Generosity Mastery'],
        readingText: {
          en: 'A tree gives shade, fruit, branches, and its trunk to a boy as he grows up. The tree is left as a stump but is still happy when the old man sits on it. It is about selfless friendship.',
          hi: 'एक पेड़ एक लड़के को छाँव, फल, डालियाँ और अपना तना देता है जब वह बड़ा होता है। यह निस्वार्थ मित्रता की कहानी है।',
          kn: 'ಒಂದು ಮರ ಹುಡುಗನಿಗೆ ನೆರಹ, ಹಣ್ಣು, ಕೊಂಬೆ ಮತ್ತು ಕಾಂಡವನ್ನು ಕೊಡುತ್ತದೆ.'
        },
        activities: [
          act('Tree Hugger', 'Visit a tree and write about what it gives you.', 'writing', 'low',
            ['Find a tree near your home', 'Sit under it for 10 minutes', 'List everything it provides', 'Draw the tree'],
            ['Notebook', 'Colours'], 'Thank the tree by writing a poem!'),
          act('Story Reteller', 'Retell The Giving Tree in your own words.', 'speaking', 'mid',
            ['Read the story twice', 'Note the main events', 'Retell to a partner', 'Add your own ending'],
            [], 'Would you change the ending? How?'),
          act('Gratitude Letter', 'Write a thank-you letter to someone who gives you a lot.', 'writing', 'high',
            ['Think of someone selfless (parent, teacher)', 'List what they give you', 'Write a heartfelt letter', 'Give the letter to them'],
            ['Letter paper', 'Envelope'], 'How did they react?')
        ],
        quiz: [
          q('What does the tree give the boy?', ['Money', 'Shade, fruit, and wood', 'A car', 'Clothes'], 'Shade, fruit, and wood', 'The tree gives shade, apples, branches, and its trunk.'),
          q('At the end, the tree is a?', ['Tall tree', 'Flower', 'Stump', 'Seed'], 'Stump', 'The tree gives everything until only a stump remains.'),
          q('The story teaches about?', ['Greed', 'Selfless giving', 'Fighting', 'Running away'], 'Selfless giving', 'The tree gives selflessly without expecting anything in return.'),
          q('Is the tree happy at the end?', ['No, it is sad', 'Yes, when the boy sits', 'It cannot feel', 'It runs away'], 'Yes, when the boy sits', 'The stump is happy when the old man sits on it to rest.')
        ],
        learningOutcomes: ['Understand themes of sacrifice and friendship', 'Practise storytelling', 'Express gratitude'],
        crossCurricularLink: 'EVS: Importance of trees'
      }]
    },

    {
      id: 'en9', title: '4. Pinocchio', topics: [{
        id: 'en9-t1', title: 'Honesty & Truth',
        subtopics: ['The Visual Glitch Analogy', 'Lies & The Growing Nose', 'Consequences of Truth', 'Becoming "Real" Strategy', 'Trust – The Broken Mirror', 'Honesty Challenge', 'Self-Improvement Mission', 'Character Building Mastery'],
        readingText: {
          en: 'Pinocchio is a wooden puppet who wants to become a real boy. Every time he tells a lie, his nose grows longer. He learns that honesty is the only way to become real. Always tell the truth!',
          hi: 'पिनोकियो एक लकड़ी का कठपुतली है जो असली लड़का बनना चाहता है। जब भी वह झूठ बोलता है, उसकी नाक बढ़ जाती है।',
          kn: 'ಪಿನೋಕಿಯೊ ಮರದ ಬೊಂಬೆ, ನಿಜವಾದ ಹುಡುಗನಾಗಲು ಬಯಸುತ್ತಾನೆ. ಸುಳ್ಳು ಹೇಳಿದಾಗ ಮೂಗು ಉದ್ದವಾಗುತ್ತದೆ.'
        },
        activities: [
          act('Truth or Lie', 'Play a game: tell 2 truths and 1 lie about yourself.', 'speaking', 'low',
            ['Think of 2 true facts about yourself', 'Make up 1 lie', 'Tell all 3 to your friends', 'Let them guess the lie'],
            [], 'Were your friends good at spotting lies?'),
          act('Puppet Show', 'Create a simple Pinocchio puppet and act out the story.', 'performing', 'mid',
            ['Draw Pinocchio on cardboard', 'Cut out and add a stick', 'Make a long removable nose', 'Act out a scene'],
            ['Cardboard', 'Stick', 'Scissors', 'Colours'], 'What happens when the nose grows?'),
          act('Honesty Essay', 'Write about why honesty is important.', 'writing', 'high',
            ['Define honesty', 'Give an example from your life', 'Explain why lies are harmful', 'Write a conclusion'],
            ['Notebook'], 'Read your essay to the class.')
        ],
        quiz: [
          q('What happens when Pinocchio lies?', ['He disappears', 'His nose grows', 'He shrinks', 'He splits'], 'His nose grows', 'His nose grows longer with every lie.'),
          q('Pinocchio wants to become a?', ['King', 'Puppet master', 'Real boy', 'Magician'], 'Real boy', 'His dream is to become a real human boy.'),
          q('What is the moral of the story?', ['Lie to get ahead', 'Always tell the truth', 'Run from problems', 'Trust nobody'], 'Always tell the truth', 'Honesty is the path to trust and being genuine.'),
          q('Who made Pinocchio?', ['A fairy', 'Geppetto the woodcarver', 'A king', 'A wizard'], 'Geppetto the woodcarver', 'Geppetto carved Pinocchio from a piece of wood.')
        ],
        learningOutcomes: ['Read and understand narratives', 'Understand the value of honesty', 'Perform puppet shows'],
        crossCurricularLink: 'Hindi: ईमानदारी (Honesty in Hindi - Kirmic ki Gend)'
      }]
    }
  ]
};

// ─── KANNADA (Siri Kannada) ───────────────────────────────────────────────────
const kannadaSubject: Subject = {
  id: 'kannada', title: 'Kannada (Siri Kannada)', icon: '🚩', color: '#D63031',
  chapters: [
    {
      id: 'k1', title: '1. ಕನ್ನಡ ನಾಡು', topics: [{
        id: 'k1-t1', title: 'ನಮ್ಮ ಕರ್ನಾಟಕ',
        subtopics: ['ನಮ್ಮ ನಾಡಿನ ಹೆಮ್ಮೆ', 'ಕನ್ನಡ ಅಕ್ಷರಗಳ ಮಾಂತ್ರಿಕ ಲೋಕ', 'ಕಲೆ ಮತ್ತು ಸಾಹಿತ್ಯ', 'ಐತಿಹಾಸಿಕ ತಾಣಗಳು', 'ನಾಡಹಬ್ಬಗಳ ಸಡಗರ', 'ನಮ್ಮ ಪರಿಸರ', 'ಕನ್ನಡವೇ ನಮ್ಮ ಉಸಿರು', 'ಭವ್ಯ ಕರ್ನಾಟಕದ ಕನಸು'],
        readingText: {
          en: 'Karnataka is known for its rich culture, language, and traditions. The Kannada language is one of the oldest Dravidian languages. Our duty is to respect and protect our mother tongue.',
          hi: 'कर्नाटक अपनी समृद्ध संस्कृति, भाषा और परंपराओं के लिए जाना जाता है।',
          kn: 'ಕರ್ನಾಟಕ ತನ್ನ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ, ಭಾಷೆ ಮತ್ತು ಸಂಪ್ರದಾಯಗಳಿಗೆ ಹೆಸರುವಾಸಿ. ಕನ್ನಡ ಅತ್ಯಂತ ಹಳೆಯ ದ್ರಾವಿಡ ಭಾಷೆಗಳಲ್ಲಿ ಒಂದು. ನಮ್ಮ ತಾಯ್ನಾಡಿನ ಗೌರವ ಕಾಪಾಡುವುದು ನಮ್ಮ ಕರ್ತವ್ಯ.'
        },
        activities: [
          act('ನಾಡಗೀತೆ ಹಾಡು', 'ಕರ್ನಾಟಕದ ನಾಡಗೀತೆ ಹಾಡಿ.', 'speaking', 'low',
            ['ನಾಡಗೀತೆ ಓದಿ', 'ರಾಗ ಕಲಿಯಿರಿ', 'ಗುಂಪಿನಲ್ಲಿ ಹಾಡಿ', 'ಅರ್ಥ ತಿಳಿಯಿರಿ'],
            ['ನಾಡಗೀತೆ ಪಠ್ಯ'], 'ನಾಡಗೀತೆಯ ಲೇಖಕರು ಯಾರು?'),
          act('ಕರ್ನಾಟಕ ಭೂಪಟ', 'ಕರ್ನಾಟಕದ ಭೂಪಟ ಬರೆಯಿರಿ.', 'drawing', 'mid',
            ['ಕರ್ನಾಟಕದ ಭೂಪಟ ನೋಡಿ', 'ಪ್ರಮುಖ ನಗರಗಳನ್ನು ಗುರುತಿಸಿ', 'ನದಿಗಳನ್ನು ಗುರುತಿಸಿ', 'ಬಣ್ಣ ಹಾಕಿ'],
            ['ಕಾಗದ', 'ಬಣ್ಣಗಳು'], 'ನಿಮ್ಮ ಊರು ಎಲ್ಲಿದೆ?'),
          act('ಸಂಸ್ಕೃತಿ ಪ್ರಬಂಧ', 'ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ಬಗ್ಗೆ ಪ್ರಬಂಧ ಬರೆಯಿರಿ.', 'writing', 'high',
            ['ಹಬ್ಬಗಳ ಬಗ್ಗೆ ಬರೆಯಿರಿ', 'ಆಹಾರ ಬಗ್ಗೆ ಬರೆಯಿರಿ', 'ಕಲೆ ಬಗ್ಗೆ ಬರೆಯಿರಿ', 'ನಿಮ್ಮ ಅಭಿಪ್ರಾಯ ಸೇರಿಸಿ'],
            ['ಪುಸ್ತಕ', 'ಪೆನ್'], 'ನಿಮಗೆ ಯಾವ ಹಬ್ಬ ಇಷ್ಟ?')
        ],
        quiz: [
          q('ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಯಾವುದು?', ['ಮೈಸೂರು', 'ಬೆಂಗಳೂರು', 'ಮಂಗಳೂರು', 'ಹುಬ್ಬಳ್ಳಿ'], 'ಬೆಂಗಳೂರು', 'ಬೆಂಗಳೂರು ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ.'),
          q('ಕನ್ನಡ ಭಾಷೆ ಯಾವ ಭಾಷಾ ಕುಟುಂಬಕ್ಕೆ ಸೇರುತ್ತದೆ?', ['ಆರ್ಯ', 'ದ್ರಾವಿಡ', 'ಯೂರೋಪಿಯನ್', 'ಚೀನೀ'], 'ದ್ರಾವಿಡ', 'ಕನ್ನಡ ದ್ರಾವಿಡ ಭಾಷಾ ಕುಟುಂಬಕ್ಕೆ ಸೇರುತ್ತದೆ.'),
          q('ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ಯಾವಾಗ?', ['ಜನವರಿ 26', 'ಆಗಸ್ಟ 15', 'ನವೆಂಬರ 1', 'ಅಕ್ಟೋಬರ 2'], 'ನವೆಂಬರ 1', 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ ನವೆಂಬರ 1 ರಂದು ಆಚರಿಸಲಾಗುತ್ತದೆ.'),
          q('ನಾಡಗೀತೆ ಬರೆದವರು?', ['ಕುವೆಂಪು', 'ಬೇಂದ್ರೆ', 'ಪಂಪ', 'ರನ್ನ'], 'ಕುವೆಂಪು', 'ಕುವೆಂಪು ಅವರು "ಜೈ ಭಾರತ ಜನನಿಯ ತನುಜಾತೆ" ನಾಡಗೀತೆ ಬರೆದರು.')
        ],
        learningOutcomes: ['ಕರ್ನಾಟಕದ ಸಂಸ್ಕೃತಿ ತಿಳಿಯುವುದು', 'ಕನ್ನಡ ಭಾಷೆಯ ಮಹತ್ವ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು', 'ನಾಡಗೀತೆ ಕಲಿಯುವುದು'],
        crossCurricularLink: 'EVS: Indian states and their traditions'
      }]
    },

    {
      id: 'k2', title: '2. ತೆನಾಲಿ ರಾಮಕೃಷ್ಣ', topics: [{
        id: 'k2-t1', title: 'ಬುದ್ಧಿವಂತಿಕೆ',
        subtopics: ['ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನ ಚತುರ್ಯ', 'ಬುದ್ಧಿ ಬಲದ ಕಥೆ', 'ಹಾಸ್ಯದ ಉಪಯೋಗ', 'ಸಮಸ್ಯೆ ಎದುರಿಸುವ ಹಾದಿ', 'ವಿಜಯನಗರದ ವೈಭವ', 'ತೆನಾಲಿ ಮತ್ತು ಕೃಷ್ಣದೇವರಾಯ', 'ಸತ್ಯ ಮತ್ತು ಧರ್ಮ', 'ಚತುರತೆಯ ಪಾಠಗಳು'],
        readingText: {
          en: 'Tenali Ramakrishna was a witty poet in the court of Krishnadevaraya. He solved problems using intelligence and humour, teaching us that brains beat brawn.',
          hi: 'तेनालीराम कृष्णदेवराय के दरबार में एक चतुर कवि थे।',
          kn: 'ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನು ಕೃಷ್ಣದೇವರಾಯನ ಆಸ್ಥಾನದಲ್ಲಿ ಬುದ್ಧಿವಂತ ಕವಿ. ಆತ ಬುದ್ಧಿ ಮತ್ತು ಹಾಸ್ಯದಿಂದ ಸಮಸ್ಯೆಗಳನ್ನು ಬಗೆಹರಿಸುತ್ತಿದ್ದ.'
        },
        activities: [
          act('ಕಥೆ ಹೇಳಿ', 'ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನ ಕಥೆ ಹೇಳಿ.', 'speaking', 'low',
            ['ಕಥೆ ಓದಿ', 'ಮುಖ್ಯ ವಿಷಯಗಳು ಬರೆಯಿರಿ', 'ನಿಮ್ಮ ಮಾತಿನಲ್ಲಿ ಹೇಳಿ', 'ಸ್ನೇಹಿತರಿಗೆ ಹೇಳಿ'],
            [], 'ನೀವು ತೆನಾಲಿ ಆಗಿದ್ದರೆ ಏನು ಮಾಡುತ್ತಿದ್ದಿರಿ?'),
          act('ನಾಟಕ ಮಂಚನ', 'ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನ ನಾಟಕ ಮಾಡಿ.', 'performing', 'mid',
            ['ಪಾತ್ರಗಳನ್ನು ಹಂಚಿ', 'ಸಂಭಾಷಣೆ ತಯಾರಿಸಿ', 'ಅಭ್ಯಾಸ ಮಾಡಿ', 'ತರಗತಿಯಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿ'],
            [], 'ಯಾರು ಉತ್ತಮ ತೆನಾಲಿ?'),
          act('ಬುದ್ಧಿ ಪ್ರಬಂಧ', 'ಬುದ್ಧಿಯ ಮಹತ್ವದ ಬಗ್ಗೆ ಬರೆಯಿರಿ.', 'writing', 'high',
            ['ಬುದ್ಧಿ ಏನು ಎಂದು ವ್ಯಾಖ್ಯಾನಿಸಿ', 'ಉದಾಹರಣೆ ಕೊಡಿ', 'ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಬುದ್ಧಿ ಹೇಗೆ ಸಹಾಯ ಮಾಡಿತು', 'ನಿರ್ಣಯ ಬರೆಯಿರಿ'],
            ['ಪುಸ್ತಕ', 'ಪೆನ್'], 'ಬುದ್ಧಿ ಬಲಕ್ಕಿಂತ ಹೆಚ್ಚು ಎಂದು ನಂಬುತ್ತೀರಾ?')
        ],
        quiz: [
          q('ತೆನಾಲಿ ರಾಮಕೃಷ್ಣ ಯಾರ ಆಸ್ಥಾನದಲ್ಲಿ ಇದ್ದನು?', ['ಅಕ್ಬರ', 'ಕೃಷ್ಣದೇವರಾಯ', 'ಶಿವಾಜಿ', 'ಟಿಪ್ಪು'], 'ಕೃಷ್ಣದೇವರಾಯ', 'ತೆನಾಲಿ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಕೃಷ್ಣದೇವರಾಯನ ಆಸ್ಥಾನದಲ್ಲಿ ಇದ್ದನು.'),
          q('ತೆನಾಲಿ ಏನಾಗಿದ್ದ?', ['ಸೈನಿಕ', 'ಕವಿ ಮತ್ತು ಬುದ್ಧಿವಂತ', 'ವ್ಯಾಪಾರಿ', 'ರೈತ'], 'ಕವಿ ಮತ್ತು ಬುದ್ಧಿವಂತ', 'ಆತ ಬುದ್ಧಿವಂತ ಕವಿಯಾಗಿದ್ದ.'),
          q('ತೆನಾಲಿ ಸಮಸ್ಯೆಗಳನ್ನು ಹೇಗೆ ಬಗೆಹರಿಸುತ್ತಿದ್ದ?', ['ಬಲದಿಂದ', 'ಬುದ್ಧಿಯಿಂದ', 'ಹಣದಿಂದ', 'ಓಡಿ ಹೋಗುತ್ತಿದ್ದ'], 'ಬುದ್ಧಿಯಿಂದ', 'ತೆನಾಲಿ ತನ್ನ ಬುದ್ಧಿ ಮತ್ತು ಹಾಸ್ಯದಿಂದ ಪರಿಹರಿಸುತ್ತಿದ್ದ.'),
          q('ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ ಎಲ್ಲಿತ್ತು?', ['ದೆಹಲಿ', 'ಹಂಪಿ (ಕರ್ನಾಟಕ)', 'ಮುಂಬಯಿ', 'ಕೇರಳ'], 'ಹಂಪಿ (ಕರ್ನಾಟಕ)', 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ ಈಗಿನ ಕರ್ನಾಟಕದ ಹಂಪಿಯಲ್ಲಿ ಇತ್ತು.')
        ],
        learningOutcomes: ['ಕಥೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು', 'ಬುದ್ಧಿಯ ಮಹತ್ವ ತಿಳಿಯುವುದು', 'ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡುವ ಅಭ್ಯಾಸ'],
        crossCurricularLink: 'Hindi: Birbal stories'
      }]
    },

    {
      id: 'k3', title: '3. ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿ', topics: [{
        id: 'k3-t1', title: 'ಧೈರ್ಯ ಮತ್ತು ಸ್ಫೂರ್ತಿ',
        subtopics: ['ವೀರಮಾತೆ ಜೀಜಾಬಾಯಿಯ ಶಕ್ತಿ', 'ಶಿವಾಜಿಯ ಸುಂದರ ಬಾಲ್ಯ', 'ದೇಶಪ್ರೇಮದ ಸಂಸ್ಕಾರ', 'ಧೈರ್ಯದ ಸ್ಫೂರ್ತಿ', 'ತಾಯಿಯ ಮಹತ್ವ', 'ನ್ಯಾಯದ ಹೋರಾಟ', 'ಸ್ವರಾಜ್ಯದ ಕನಸು', 'ನಮಗೆ ಜೀಜಾಬಾಯಿ ಸ್ಫೂರ್ತಿ'],
        readingText: {
          en: 'Jijabai was the brave mother of Shivaji Maharaj. She inspired Shivaji with stories of courage and taught him to fight for justice. She is an inspiration to all.',
          hi: 'जीजाबाई शिवाजी महाराज की वीर माता थीं। उन्होंने शिवाजी को साहस की कहानियाँ सुनाईं।',
          kn: 'ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿ ಮಹಾರಾಜರ ವೀರ ತಾಯಿ. ಅವರು ಶಿವಾಜಿಗೆ ಧೈರ್ಯದ ಕಥೆಗಳನ್ನು ಹೇಳಿ ನ್ಯಾಯಕ್ಕಾಗಿ ಹೋರಾಡಲು ಕಲಿಸಿದರು. ಅವರು ಎಲ್ಲರಿಗೂ ಸ್ಫೂರ್ತಿ.'
        },
        activities: [
          act('ಕಥೆ ಕೇಳಿ', 'ಜೀಜಾಬಾಯಿಯ ಕಥೆ ಕೇಳಿ ಮತ್ತು ಚಿತ್ರ ಬಿಡಿಸಿ.', 'listening', 'low',
            ['ಶಿಕ್ಷಕರಿಂದ ಕಥೆ ಕೇಳಿ', 'ಮುಖ್ಯ ಘಟನೆಗಳನ್ನು ಬರೆಯಿರಿ', 'ಜೀಜಾಬಾಯಿಯ ಚಿತ್ರ ಬಿಡಿಸಿ', 'ಕಥೆ ಹೇಳಿ'],
            ['ಪುಸ್ತಕ', 'ಬಣ್ಣಗಳು'], 'ಜೀಜಾಬಾಯಿಯಿಂದ ನಿಮಗೆ ಏನು ಕಲಿಯಲು ಸಿಕ್ಕಿತು?'),
          act('ಧೈರ್ಯ ಡೈರಿ', 'ನಿಮ್ಮ ಧೈರ್ಯದ ಒಂದು ಅನುಭವ ಬರೆಯಿರಿ.', 'writing', 'mid',
            ['ಧೈರ್ಯ ತೋರಿಸಿದ ಒಂದು ಸಂದರ್ಭ ನೆನಪಿಸಿ', 'ಏನಾಯಿತು ಬರೆಯಿರಿ', 'ನಿಮಗೆ ಹೇಗೆ ಅನಿಸಿತು', 'ಕಲಿತ ಪಾಠ ಬರೆಯಿರಿ'],
            ['ಪುಸ್ತಕ'], 'ಧೈರ್ಯ ಎಂದರೆ ಏನು?'),
          act('ವೀರ ಪೋಸ್ಟರ್', 'ಜೀಜಾಬಾಯಿ ಬಗ್ಗೆ ಪೋಸ್ಟರ್ ಮಾಡಿ.', 'drawing', 'high',
            ['ಜೀಜಾಬಾಯಿ ಬಗ್ಗೆ ಓದಿ', 'ಮುಖ್ಯ ಅಂಶಗಳನ್ನು ಬರೆಯಿರಿ', 'ಸುಂದರ ಪೋಸ್ಟರ್ ಮಾಡಿ', 'ತರಗತಿಯಲ್ಲಿ ಇಡಿ'],
            ['ಚಾರ್ಟ್ ಪೇಪರ್', 'ಬಣ್ಣಗಳು'], 'ನಿಮ್ಮ ಪೋಸ್ಟರ್ ಕಥೆ ಹೇಳಲಿ!')
        ],
        quiz: [
          q('ಜೀಜಾಬಾಯಿ ಯಾರ ತಾಯಿ?', ['ಅಕ್ಬರ', 'ಶಿವಾಜಿ', 'ತೆನಾಲಿ', 'ಗಾಂಧಿ'], 'ಶಿವಾಜಿ', 'ಜೀಜಾಬಾಯಿ ಛತ್ರಪತಿ ಶಿವಾಜಿ ಮಹಾರಾಜರ ತಾಯಿ.'),
          q('ಜೀಜಾಬಾಯಿ ಶಿವಾಜಿಗೆ ಏನು ಕಲಿಸಿದರು?', ['ಅಡುಗೆ', 'ಧೈರ್ಯ ಮತ್ತು ನ್ಯಾಯ', 'ಹಾಡು', 'ವ್ಯಾಪಾರ'], 'ಧೈರ್ಯ ಮತ್ತು ನ್ಯಾಯ', 'ಜೀಜಾಬಾಯಿ ಧೈರ್ಯ ಮತ್ತು ನ್ಯಾಯದ ಕಥೆಗಳಿಂದ ಶಿವಾಜಿಗೆ ಸ್ಫೂರ್ತಿ ನೀಡಿದರು.'),
          q('"ವೀರಮಾತೆ" ಎಂದರೆ?', ['ಸುಂದರ ತಾಯಿ', 'ಧೈರ್ಯದ ತಾಯಿ', 'ಓದಿನ ತಾಯಿ', 'ಹಾಡಿನ ತಾಯಿ'], 'ಧೈರ್ಯದ ತಾಯಿ', 'ವೀರ = ಧೈರ್ಯ, ಮಾತೆ = ತಾಯಿ. ವೀರಮಾತೆ = ಧೈರ್ಯದ ತಾಯಿ.'),
          q('ಶಿವಾಜಿ ಯಾವ ಸಾಮ್ರಾಜ್ಯ ಸ್ಥಾಪಿಸಿದ?', ['ಮೊಘಲ', 'ಮರಾಠ', 'ವಿಜಯನಗರ', 'ಚೋಳ'], 'ಮರಾಠ', 'ಶಿವಾಜಿ ಮಹಾರಾಜರು ಮರಾಠ ಸಾಮ್ರಾಜ್ಯ ಸ್ಥಾಪಿಸಿದರು.')
        ],
        learningOutcomes: ['ಐತಿಹಾಸಿಕ ವ್ಯಕ್ತಿಗಳ ಕಥೆ ತಿಳಿಯುವುದು', 'ಧೈರ್ಯದ ಮಹತ್ವ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು', 'ಕನ್ನಡದಲ್ಲಿ ಬರೆಯುವ ಅಭ್ಯಾಸ'],
        crossCurricularLink: 'Social Studies: Maratha Empire'
      }]
    },

    {
      id: 'k4', title: '4. ಮಳೆ', topics: [{
        id: 'k4-t1', title: 'ಮಳೆಯ ಸೌಂದರ್ಯ',
        subtopics: ['ಮಳೆಯ ಸದ್ದು ಮತ್ತು ಮೋಜು', 'ವರುಣನ ಕೃಪೆ', 'ನೀರಿನ ಚಕ್ರದ ಜಾದೂ', 'ರೈತರ ಸಡಗರ', 'ಪರಿಸರ ರಕ್ಷಣೆ', 'ಗುಡುಗು ಮಿಂಚಿನ ಪಾಠ', 'ಜಲ ಸಂರಕ್ಷಣೆ', 'ಪರಿಸರದ ಸೌಂದರ್ಯ'],
        readingText: {
          en: 'Rain makes the earth cool and green. The rain god Varuna brings water from the sky. Plants grow, rivers fill, and farmers smile when it rains. Rain is a blessing for all life.',
          hi: 'बारिश पृथ्वी को ठंडा और हरा बनाती है। वरुण देव आसमान से पानी लाते हैं।',
          kn: 'ಮಳೆ ಭೂಮಿಯನ್ನು ತಂಪು ಮತ್ತು ಹಸಿರು ಮಾಡುತ್ತದೆ. ವರುಣ ದೇವನು ಆಕಾಶದಿಂದ ನೀರು ತರುತ್ತಾನೆ. ಸಸ್ಯಗಳು ಬೆಳೆಯುತ್ತವೆ, ನದಿಗಳು ತುಂಬುತ್ತವೆ, ರೈತರು ಸಂತೋಷಪಡುತ್ತಾರೆ.'
        },
        activities: [
          act('ಮಳೆ ಚಿತ್ರ', 'ಮಳೆಯ ಚಿತ್ರ ಬಿಡಿಸಿ.', 'drawing', 'low',
            ['ಮಳೆ ಬೀಳುತ್ತಿರುವ ಚಿತ್ರ ಬಿಡಿಸಿ', 'ಮಕ್ಕಳು ಆಡುವ ಚಿತ್ರ ಸೇರಿಸಿ', 'ಕಾಮನಬಿಲ್ಲು ಬಿಡಿಸಿ', 'ಬಣ್ಣ ಹಾಕಿ'],
            ['ಕಾಗದ', 'ಬಣ್ಣಗಳು'], 'ಮಳೆಯಲ್ಲಿ ನಿಮಗೆ ಏನು ಇಷ್ಟ?'),
          act('ನೀರಿನ ಚಕ್ರ', 'ನೀರಿನ ಚಕ್ರದ ಮಾದರಿ ಮಾಡಿ.', 'performing', 'mid',
            ['ಪಾತ್ರೆಯಲ್ಲಿ ನೀರು ಕಾಯಿಸಿ', 'ಹಬೆ ನೋಡಿ', 'ಮುಚ್ಚಳದ ಮೇಲೆ ಹನಿ ನೋಡಿ', 'ಇದು ಮಳೆ ಆಗುವ ವಿಧಾನ'],
            ['ಪಾತ್ರೆ', 'ನೀರು', 'ಮುಚ್ಚಳ'], 'ಹಬೆ ಮೋಡ ಆಗುತ್ತದೆ ಎಂದು ಅರ್ಥವಾಯಿತೆ?'),
          act('ಮಳೆ ಕವನ', 'ಮಳೆ ಬಗ್ಗೆ ಕನ್ನಡದಲ್ಲಿ ಕವನ ಬರೆಯಿರಿ.', 'writing', 'high',
            ['ಮಳೆಯ ಶಬ್ದಗಳು ಸೇರಿಸಿ', 'ಪ್ರಕೃತಿ ವರ್ಣನೆ ಮಾಡಿ', 'ಪ್ರಾಸ ಬಳಸಿ', 'ತರಗತಿಯಲ್ಲಿ ಓದಿ'],
            ['ಪುಸ್ತಕ', 'ಪೆನ್'], 'ನಿಮ್ಮ ಕವನ ಕೇಳಿ ಸಂತೋಷವಾಯಿತೆ?')
        ],
        quiz: [
          q('ಮಳೆ ಯಾವ ದೇವರಿಂದ ಬರುತ್ತದೆ ಎಂದು ಹೇಳುತ್ತಾರೆ?', ['ಇಂದ್ರ', 'ವರುಣ', 'ಸೂರ್ಯ', 'ಚಂದ್ರ'], 'ವರುಣ', 'ವರುಣ ದೇವನನ್ನು ಮಳೆ ಮತ್ತು ನೀರಿನ ದೇವನೆಂದು ಕರೆಯುತ್ತಾರೆ.'),
          q('ಮಳೆ ಯಾಕೆ ಮುಖ್ಯ?', ['ಆಟಕ್ಕೆ', 'ಸಸ್ಯಗಳಿಗೆ ಮತ್ತು ಜೀವಿಗಳಿಗೆ', 'ರಜೆಗೆ', 'ಟಿವಿ ನೋಡಲು'], 'ಸಸ್ಯಗಳಿಗೆ ಮತ್ತು ಜೀವಿಗಳಿಗೆ', 'ಮಳೆ ಎಲ್ಲ ಜೀವಿಗಳಿಗೆ ನೀರು ಒದಗಿಸುತ್ತದೆ.'),
          q('ಕಾಮನಬಿಲ್ಲಿನಲ್ಲಿ ಎಷ್ಟು ಬಣ್ಣಗಳಿವೆ?', ['3', '5', '7', '10'], '7', 'ಕಾಮನಬಿಲ್ಲಿನಲ್ಲಿ 7 ಬಣ್ಣಗಳಿವೆ: ಕೆಂಪು, ಕಿತ್ತಳೆ, ಹಳದಿ, ಹಸಿರು, ನೀಲಿ, ನೀಲ, ನೇರಳೆ.'),
          q('ಮಳೆ ನಿಂತ ಮೇಲೆ ಏನು ಕಾಣುತ್ತದೆ?', ['ಚಂದ್ರ', 'ನಕ್ಷತ್ರ', 'ಕಾಮನಬಿಲ್ಲು', 'ಗ್ರಹಣ'], 'ಕಾಮನಬಿಲ್ಲು', 'ಮಳೆ ನಿಂತ ನಂತರ ಸೂರ್ಯನ ಬೆಳಕಿನಿಂದ ಕಾಮನಬಿಲ್ಲು ಕಾಣುತ್ತದೆ.')
        ],
        learningOutcomes: ['ಮಳೆಯ ಮಹತ್ವ ತಿಳಿಯುವುದು', 'ನೀರಿನ ಚಕ್ರ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು', 'ಕನ್ನಡ ಕವನ ಓದುವ ಅಭ್ಯಾಸ'],
        crossCurricularLink: 'EVS: Water cycle and rain'
      }]
    }
  ]
};

// ─── COMPUTERS ────────────────────────────────────────────────────────────────
const computerSubject: Subject = {
  id: 'computers', title: 'Computer Science', icon: '💻', color: '#636E72',
  chapters: [
    {
      id: 'c1', title: '1. Parts of a Computer', topics: [{
        id: 'c1-t1', title: 'Computer Hardware',
        subtopics: ['The Body Parts Analogy', 'CPU – The Silent Commander', 'Monitor – The Window', 'Input/Output Orchestra', 'The Parts Connection Task', 'Storage – The Memory Box', 'Healthy Tech Habits', 'Designing the Future PC'],
        readingText: {
          en: 'A computer has many parts. The CPU is the brain that processes everything. The monitor is the screen. The keyboard and mouse are input devices. Speakers and printers are output devices.',
          hi: 'कंप्यूटर के कई भाग होते हैं। CPU दिमाग है जो सब प्रोसेस करता है। मॉनिटर स्क्रीन है। कीबोर्ड और माउस इनपुट डिवाइस हैं।',
          kn: 'ಕಂಪ್ಯೂಟರ್‌ಗೆ ಹಲವು ಭಾಗಗಳಿವೆ. CPU ಮೆದುಳು. ಮಾನಿಟರ್ ಪರದೆ. ಕೀಬೋರ್ಡ್ ಮತ್ತು ಮೌಸ್ ಇನ್‌ಪುಟ್ ಸಾಧನಗಳು.'
        },
        activities: [
          act('Part Spotter', 'Identify 6 parts of a computer by pointing at them.', 'performing', 'low',
            ['Look at a computer', 'Point to the CPU', 'Point to the monitor', 'Identify keyboard, mouse, speakers, printer'],
            ['A computer or picture'], 'Draw and label all 6 parts.'),
          act('Input-Output Sorter', 'Sort devices into Input and Output categories.', 'calculating', 'mid',
            ['Write 10 device names on cards', 'Make two columns: Input and Output', 'Sort each card', 'Check your answers'],
            ['Index cards', 'Marker'], 'Is a touchscreen both input and output?'),
          act('Dream Computer', 'Design your dream computer.', 'drawing', 'high',
            ['Draw your ideal computer', 'Label all parts', 'Add special features', 'Present to class'],
            ['Paper', 'Colours'], 'What makes your computer special?')
        ],
        virtualLab: { title: 'Computer Parts Lab', simulation: 'Drag and drop computer parts to build a PC', task: 'Assemble a computer from 8 parts' },
        quiz: [
          q('The CPU is the ____ of a computer.', ['Leg', 'Heart', 'Brain', 'Eye'], 'Brain', 'CPU (Central Processing Unit) processes all instructions like a brain.'),
          q('Which is an input device?', ['Monitor', 'Printer', 'Keyboard', 'Speaker'], 'Keyboard', 'Keyboard is used to enter data into the computer.'),
          q('Which is an output device?', ['Mouse', 'Scanner', 'Keyboard', 'Monitor'], 'Monitor', 'Monitor displays information — it is an output device.'),
          q('CPU stands for?', ['Computer Personal Unit', 'Central Processing Unit', 'Central Power Unit', 'Computer Processing Unit'], 'Central Processing Unit', 'CPU = Central Processing Unit.')
        ],
        learningOutcomes: ['Identify parts of a computer', 'Distinguish input and output devices', 'Understand the role of CPU'],
        crossCurricularLink: 'EVS: Technology in daily life'
      }]
    },

    {
      id: 'c7', title: '2. Introduction to AI', topics: [{
        id: 'c7-t1', title: 'What is AI?',
        subtopics: ['The Robot Puppy Analogy', 'Training Your Machine', 'The Pattern recognition Detective', 'AI in Your Phone', 'Smart Assistant Challenge', 'Data – The AI Food', 'Safe AI Exploration', 'The Future of AI Friends'],
        readingText: {
          en: 'AI (Artificial Intelligence) means teaching machines to think and learn. AI recognises faces in photos, suggests songs you like, and powers voice assistants like Alexa and Google Assistant.',
          hi: 'AI (कृत्रिम बुद्धिमत्ता) का मतलब है मशीनों को सोचना और सीखना सिखाना। AI फ़ोटो में चेहरे पहचानता है।',
          kn: 'AI (ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ) ಎಂದರೆ ಯಂತ್ರಗಳಿಗೆ ಯೋಚಿಸಲು ಮತ್ತು ಕಲಿಯಲು ಕಲಿಸುವುದು.'
        },
        activities: [
          act('AI Spotter', 'Find 5 examples of AI in your daily life.', 'writing', 'low',
            ['Think about your phone, TV, and toys', 'List things that seem "smart"', 'Write why you think they are AI', 'Share with the class'],
            ['Notebook'], 'Is autocorrect on your phone AI?'),
          act('Pattern Teacher', 'Teach a friend to be an "AI" by showing patterns.', 'performing', 'mid',
            ['Show 10 pictures of cats and 10 of dogs', 'Ask your friend to find the pattern', 'Show a new picture', 'Can they correctly identify cat or dog?'],
            ['Picture cards'], 'This is exactly how AI learns!'),
          act('AI Story Writer', 'Write a story about a day when AI helps a student.', 'writing', 'high',
            ['Create a student character', 'Imagine 5 ways AI helps them in a day', 'Write the story', 'Draw illustrations'],
            ['Notebook', 'Colours'], 'Would you want an AI helper?')
        ],
        virtualLab: { title: 'AI Training Lab', simulation: 'Train a virtual AI to recognize shapes', task: 'Show the AI 20 shapes so it can identify circles vs squares' },
        quiz: [
          q('What does AI stand for?', ['Auto Internet', 'Artificial Intelligence', 'Advanced Information', 'Automatic Input'], 'Artificial Intelligence', 'AI = Artificial Intelligence.'),
          q('Which uses AI?', ['A chair', 'A pen', 'Voice assistants like Alexa', 'A wooden table'], 'Voice assistants like Alexa', 'Alexa and Google Assistant use AI to understand your voice.'),
          q('How does AI learn?', ['By eating food', 'By looking at patterns in data', 'By sleeping', 'By reading newspapers'], 'By looking at patterns in data', 'AI learns by analysing large amounts of data and finding patterns.'),
          q('Can AI think like a human?', ['Exactly the same', 'Not yet, but it can do many tasks', 'AI is smarter', 'AI cannot do anything'], 'Not yet, but it can do many tasks', 'AI is powerful but does not truly think like humans yet.')
        ],
        learningOutcomes: ['Understand what AI is', 'Identify AI in daily life', 'Know how AI learns from data'],
        crossCurricularLink: 'Math: Patterns and data'
      }]
    }
  ]
};

// ─── EXPORT SYLLABUS ──────────────────────────────────────────────────────────
export const syllabus: Subject[] = [
  mathSubject,
  evsSubject,
  hindiSubject,
  englishSubject,
  kannadaSubject,
  computerSubject
];
