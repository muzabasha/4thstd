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
      id: 'm5', title: '5. The Way The World Looks', topics: [{
        id: 'm5-t1', title: 'Perspective & 3D Shapes',
        subtopics: ['The Bird\'s Eye View Analogy', 'Top, Side & Front Views', 'Drawing 3D on 2D', 'Map Reading Mastery', 'The Hidden Corner Challenge', 'Designing from Above', 'Architectural Blueprints', 'VR View of the Future'],
        readingText: {
          en: 'Objects look different from different sides. A top view of a house shows the roof, while a front view shows the door. Maps are like top views of a large area.',
          hi: 'चीज़ें अलग-अलग तरफ से अलग दिखती हैं। घर का टॉप व्यू छत दिखाता है। नक्शे ऊपर से देखे गए दृश्य की तरह होते हैं।',
          kn: 'ವಸ್ತುಗಳು ವಿವಿಧ ದಿಕ್ಕುಗಳಿಂದ ವಿಭಿನ್ನವಾಗಿ ಕಾಣುತ್ತವೆ.'
        },
        activities: [
          act('View Spotter', 'Draw a water bottle from 3 different sides.', 'drawing', 'low',
            ['Look at a bottle from the front', 'Look from the top', 'Look from the side', 'Draw all 3 views'],
            ['Water bottle', 'Paper', 'Pencil'], 'Which view shows the cap most clearly?'),
          act('Classroom Mapper', 'Draw a map of your classroom from a top view.', 'drawing', 'mid',
            ['Imagine you are a bird flying above the class', 'Draw rectangles for desks', 'Mark the door and windows', 'Label each part'],
            ['Notebook', 'Ruler'], 'Can you show where the teacher sits?'),
          act('3D Builder', 'Build a 3D shape from its net (flat paper).', 'performing', 'high',
            ['Cut a T-shape (net of a cube)', 'Fold along the lines', 'Tape the edges', 'Count the faces'],
            ['Cardboard', 'Scissors', 'Tape'], 'How many squares make a cube?')
        ],
        virtualLab: { title: '3D View Lab', simulation: 'Rotate 3D objects and match them to their 2D views', task: 'Identify the top view of 5 complex shapes' },
        quiz: [
          q('Which view shows the height of a building?', ['Top View', 'Side View', 'Bottom View', 'Map View'], 'Side View', 'Side or front views show how tall an object is.'),
          q('A map is usually drawn from which view?', ['Front View', 'Side View', 'Top View', 'Inside View'], 'Top View', 'Maps are bird\'s-eye views (top views).'),
          q('How many faces does a cube have?', ['4', '6', '8', '12'], '6', 'A cube has 6 equal square faces.'),
          q('Looking at a cylinder from the top, you see a?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'Circle', 'The top of a cylinder is circular.')
        ],
        learningOutcomes: ['Visualise objects from different angles', 'Read and draw simple maps', 'Understand 3D shapes'],
        crossCurricularLink: 'Computers: Designing 3D models'
      }]
    },

    {
      id: 'm6', title: '6. The Junk Seller', topics: [{
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
      id: 'm7', title: '7. Jugs and Mugs', topics: [{
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
      id: 'm8', title: '8. Carts and Wheels', topics: [{
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
      id: 'm9', title: '9. Halves and Quarters', topics: [{
        id: 'm9-t1', title: 'Fractions',
        subtopics: ['The Pizza Slice Analogy', 'Half vs Quarter', 'Numerator – The Part', 'Denominator – The Whole', 'Equal Sharing Mission', 'Fraction Art Challenge', 'Cooking with Fractions', 'Dividing the Earth'],
        readingText: {
          en: 'A fraction represents a part of a whole. Half (1/2) means one out of two equal parts. Quarter (1/4) means one out of four equal parts.',
          hi: 'एक अंश पूरे का एक हिस्सा दर्शाता है। आधा (1/2) का मतलब है दो बराबर हिस्सों में से एक। चौथाई (1/4) का मतलब है चार बराबर हिस्सों में से एक।',
          kn: 'ಅಂಶ ಎಂದರೆ ಪೂರ್ಣದ ಒಂದು ಭಾಗ. ಅರ್ಧ (1/2) ಎಂದರೆ ಎರಡು ಸಮ ಭಾಗಗಳಲ್ಲಿ ಒಂದು.'
        },
        activities: [
          act('Paper Folder', 'Fold paper into halves and quarters.', 'drawing', 'low',
            ['Take a square paper', 'Fold in half', 'Fold in half again', 'Unfold and shade 1/4'],
            ['Paper', 'Colours'], 'How many quarters make a half?'),
          act('Fruit Divider', 'Divide a fruit (like an orange) into equal parts.', 'calculating', 'mid',
            ['Count total segments in an orange', 'Eat half of them', 'Write the fraction remaining', 'Eat one more segment and write the new fraction'],
            ['Orange', 'Notebook'], 'What is the fraction of 1 segment?'),
          act('Fraction Artist', 'Create a flag using different fractions of colours.', 'drawing', 'high',
            ['Draw a rectangle', 'Divide into 3 equal parts', 'Colour 1/3 red, 1/3 white, 1/3 green', 'Add a symbol in the centre'],
            ['Paper', 'Colours'], 'Which flag is 1/3 Saffron, 1/3 White, 1/3 Green?')
        ],
        virtualLab: { title: 'Fraction Lab', simulation: 'Cut virtual shapes and shade requested fractions', task: 'Shade 3/4 of a circle' },
        quiz: [
          q('What is half of 100?', ['25', '50', '75', '10'], '50', '1/2 of 100 = 50.'),
          q('How many quarters make a whole?', ['1', '2', '3', '4'], '4', 'Four quarters (1/4 + 1/4 + 1/4 + 1/4) make 1 whole.'),
          q('If you eat 1/4 of a pizza, how much is left?', ['1/2', '1/4', '3/4', 'None'], '3/4', '1 − 1/4 = 3/4.'),
          q('Which is larger: 1/2 or 1/4?', ['1/2', '1/4', 'Both same', 'None'], '1/2', 'Half is larger than a quarter.')
        ],
        learningOutcomes: ['Identify halves and quarters', 'Understand numerator and denominator', 'Compare basic fractions'],
        crossCurricularLink: 'Art: Symmetry and patterns'
      }]
    },

    {
      id: 'm10', title: '10. Play with Patterns', topics: [{
        id: 'm10-t1', title: 'Sequences & Logic',
        subtopics: ['The Nature Pattern Analogy', 'Growing Patterns', 'Number Tower Logic', 'Secret Code Mission', 'Symmetry in Patterns', 'Designing Floor Tiles', 'Pattern Detective Work', 'Coding the Future'],
        readingText: {
          en: 'Patterns are repeated designs or sequences. They can be found in flowers, number series (2, 4, 6...), and even in the stars. Understanding patterns helps us predict what comes next.',
          hi: 'पैटर्न दोहराए गए डिज़ाइन या क्रम हैं। वे फूलों, संख्या श्रृंखलाओं में पाए जाते हैं। पैटर्न समझने से हमें यह बताने में मदद मिलती है कि आगे क्या आएगा।',
          kn: 'ವಿನ್ಯಾಸಗಳು ಪುನರಾವರ್ತಿತ ವಿನ್ಯಾಸ ಅಥವಾ ಕ್ರಮಗಳು.'
        },
        activities: [
          act('Pattern Maker', 'Create a block pattern using potato stamps.', 'drawing', 'low',
            ['Cut a potato in half', 'Carve a shape', 'Dip in paint', 'Repeat to make a pattern'],
            ['Potato', 'Paint', 'Paper'], 'Can you make a pattern that grows?'),
          act('Number Detective', 'Find the rule in a number series.', 'calculating', 'mid',
            ['Look at 5, 10, 15, 20...', 'Identify the rule (+5)', 'Find the next 3 numbers', 'Create your own series'],
            ['Notebook'], 'What comes after 1, 2, 4, 8?'),
          act('Code Breaker', 'Create and solve secret codes.', 'writing', 'high',
            ['A=1, B=2, C=3...', 'Write "HELLO" in numbers', 'Create a pattern code (A=Z, B=Y...)', 'Exchange with a friend'],
            ['Notebook', 'Pen'], 'Can you decode "8 5 12 12 15"?')
        ],
        virtualLab: { title: 'Pattern Lab', simulation: 'Complete visual and number patterns', task: 'Solve 10 logic puzzles' },
        quiz: [
          q('What comes next: 2, 4, 6, 8, ?', ['9', '10', '11', '12'], '10', 'The rule is +2.'),
          q('Complete the pattern: ↑, →, ↓, ?', ['↑', '→', '↓', '←'], '←', 'The pattern rotates clockwise.'),
          q('1, 3, 5, 7 are ____ numbers.', ['Even', 'Odd', 'Square', 'Prime'], 'Odd', 'Odd numbers follow a +2 pattern starting from 1.'),
          q('What is a repeating pattern?', ['A random line', 'A design that repeats', 'A single dot', 'A blank page'], 'A design that repeats', 'Patterns follow a specific rule to repeat.')
        ],
        learningOutcomes: ['Identify rules in patterns', 'Extend number and shape sequences', 'Create basic codes'],
        crossCurricularLink: 'Computers: Logic and algorithms'
      }]
    },

    {
      id: 'm11', title: '11. Tables and Shares', topics: [{
        id: 'm11-t1', title: 'Multiplication & Division',
        subtopics: ['The Army March Analogy', 'Multiplication Gardens', 'Division Sharing Mission', 'Grouping Strategy', 'The Remainder Mystery', 'Word Problem Detective', 'Market Math Mastery', 'Scaling Up Vision'],
        readingText: {
          en: 'Multiplication is repeated addition (3 × 4 = 4+4+4). Division is equal sharing or repeated subtraction. Tables help us calculate faster.',
          hi: 'गुणा बार-बार जोड़ना है। भाग बराबर बाँटना है। पहाड़े हमें जल्दी गणना करने में मदद करते हैं।',
          kn: 'ಗುಣಾಕಾರ ಎಂದರೆ ಪದೇ ಪದೇ ಕೂಡಿಸುವುದು. ಭಾಗಾಕಾರ ಎಂದರೆ ಸಮನಾಗಿ ಹಂಚುವುದು.'
        },
        activities: [
          act('Array Creator', 'Arrange pebbles in rows and columns.', 'calculating', 'low',
            ['Take 12 pebbles', 'Arrange in 3 rows of 4', 'Count total', 'Arrange in 2 rows of 6'],
            ['Pebbles or buttons'], 'Does 3 × 4 = 4 × 3?'),
          act('Equal Sharer', 'Share 20 sweets among 4 friends.', 'calculating', 'mid',
            ['Take 20 counters', 'Give one by one to 4 circles', 'Count how many in each circle', 'Write the division fact'],
            ['Counters', 'Paper circles'], '20 ÷ 4 = ?'),
          act('Table Master', 'Create a multiplication table up to 15.', 'writing', 'high',
            ['Pick a number (e.g. 12)', 'Write the table', 'Identify patterns in the last digit', 'Test a friend'],
            ['Notebook', 'Pen'], 'What is 12 × 12?')
        ],
        virtualLab: { title: 'Sharing Lab', simulation: 'Drag items to share equally among groups', task: 'Divide 45 apples among 9 baskets' },
        quiz: [
          q('7 × 8 = ?', ['48', '54', '56', '63'], '56', '7 times 8 is 56.'),
          q('30 ÷ 5 = ?', ['4', '5', '6', '7'], '6', '30 divided by 5 is 6.'),
          q('If 4 pens cost ₹40, how much is 1 pen?', ['₹5', '₹10', '₹20', '₹4'], '₹10', '40 ÷ 4 = ₹10.'),
          q('What is the result of division called?', ['Product', 'Sum', 'Quotient', 'Difference'], 'Quotient', 'The answer in division is the quotient.')
        ],
        learningOutcomes: ['Master multiplication tables', 'Perform basic division', 'Solve real-life sharing problems'],
        crossCurricularLink: 'EVS: Counting populations and resources'
      }]
    },

    {
      id: 'm12', title: '12. How Heavy? How Light?', topics: [{
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
      id: 'm13', title: '13. Fields and Fences', topics: [{
        id: 'm13-t1', title: 'Perimeter & Area',
        subtopics: ['The Fence Around Playground Analogy', 'Measuring the Boundary', 'Square vs Rectangle Area', 'Grid Paper Detective', 'Designing a Garden', 'Farmer\'s Field Challenge', 'Cost of Fencing', 'City Planning Vision'],
        readingText: {
          en: 'Perimeter is the total length of the boundary of a shape. Area is the space inside a shape. We use metres for perimeter and square metres for area.',
          hi: 'परिमाप किसी आकृति की सीमा की कुल लंबाई है। क्षेत्रफल आकृति के अंदर की जगह है।',
          kn: 'ಸುತ್ತಳತೆ ಎಂದರೆ ಒಂದು ಆಕಾರದ ಅಂಚಿನ ಒಟ್ಟು ಉದ್ದ. ವಿಸ್ತೀರ್ಣ ಎಂದರೆ ಆಕಾರದ ಒಳಗಿನ ಜಾಗ.'
        },
        activities: [
          act('Boundary Walker', 'Measure the perimeter of your desk using string.', 'calculating', 'low',
            ['Take a piece of string', 'Wrap around the edge of desk', 'Mark the string', 'Measure string with a ruler'],
            ['String', 'Ruler'], 'What is the perimeter in cm?'),
          act('Area Finder', 'Count squares on grid paper to find area.', 'calculating', 'mid',
            ['Draw a 4x3 rectangle on grid paper', 'Count all squares inside', 'Write the area', 'Draw a different shape with same area'],
            ['Grid paper', 'Pencil'], 'Can you find area without counting each square?'),
          act('Garden Architect', 'Design a garden with a 20m perimeter.', 'drawing', 'high',
            ['Draw different shapes with perimeter = 20cm (on paper)', 'Find which shape has the biggest area', 'Label flower beds and paths', 'Present your design'],
            ['Notebook', 'Ruler', 'Colours'], 'Which shape gives more space for plants?')
        ],
        virtualLab: { title: 'Area & Perimeter Lab', simulation: 'Build shapes with given perimeter or area', task: 'Create a rectangle with area 24 and perimeter 20' },
        quiz: [
          q('What is the perimeter of a square with side 5 cm?', ['5 cm', '10 cm', '20 cm', '25 cm'], '20 cm', '4 × 5 = 20 cm.'),
          q('Area is measured in ____ units.', ['Linear', 'Square', 'Cubic', 'Weight'], 'Square', 'Area is 2D, so it uses square units like sq. cm.'),
          q('A field is 10m long and 5m wide. Perimeter?', ['15m', '30m', '50m', '25m'], '30m', '2 × (10 + 5) = 30m.'),
          q('Total length of a boundary is called?', ['Area', 'Volume', 'Perimeter', 'Radius'], 'Perimeter', 'Perimeter = sum of all sides.')
        ],
        learningOutcomes: ['Calculate perimeter of simple shapes', 'Find area by counting squares', 'Apply concepts to real-world fencing'],
        crossCurricularLink: 'EVS: Farming and land use'
      }]
    },

    {
      id: 'm14', title: '14. Smart Charts', topics: [{
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
          en: 'Children use many ways to reach school—walking, cycling, boats (Vallams in Kerala), bamboo bridges, and rope bridges.',
          hi: 'बच्चे स्कूल पहुँचने के लिए कई तरीके अपनाते हैं—पैदल चलना, साइकिल, नाव (केरल में वल्लम), बाँस के पुल।',
          kn: 'ಮಕ್ಕಳು ಶಾಲೆಗೆ ನಡೆದು, ಸೈಕಲ್‌ನಲ್ಲಿ, ದೋಣಿಯಲ್ಲಿ, ಬಿದಿರು ಸೇತುವೆ ಮೂಲಕ ಹೋಗುತ್ತಾರೆ.'
        },
        activities: [
          act('Bridge Builder', 'Build a bridge from paper and test its strength.', 'performing', 'low',
            ['Fold paper into a plank', 'Place between two books', 'Add coins on top'],
            ['Paper', 'Books', 'Coins'], 'Can you make a stronger bridge?'),
          act('Boat Racer', 'Make a paper boat and test it in water.', 'performing', 'high',
            ['Fold a paper boat', 'Place it in a tub of water', 'Add small weights'],
            ['Paper', 'Tub of water', 'Small weights'], 'Can your boat carry 10 coins?')
        ],
        virtualLab: { title: 'Bridge Engineering Lab', simulation: 'Design and test bridges', task: 'Build a bridge that can hold 50g' },
        quiz: [
          q('What is a Vallam?', ['A type of car', 'A small boat used in Kerala', 'A bridge', 'A bicycle'], 'A small boat used in Kerala', 'Vallams are traditional boats.'),
          q('Bamboo bridges are found in?', ['Cities', 'Hilly or river areas', 'Deserts', 'Oceans'], 'Hilly or river areas', 'Common in hilly regions.')
        ],
        learningOutcomes: ['Understand different modes of transport', 'Know how geography affects travel'],
        crossCurricularLink: 'Math: Distance and measurement'
      }]
    },

    {
      id: 'e2', title: '2. Ear to Ear', topics: [{
        id: 'e2-t1', title: 'Animal Ears & Hearing',
        subtopics: ['The Fan-Ears Analogy', 'Hidden Ear Detective', 'Sound Vibrations Secrets', 'Hearing Ranges in Nature'],
        readingText: {
          en: 'Animals have ears of different shapes and sizes. Elephants have huge fan-shaped ears. Birds and lizards have tiny holes.',
          hi: 'जानवरों के कान अलग-अलग आकार के होते हैं। हाथी के बड़े पंखे जैसे कान।',
          kn: 'ಪ್ರಾಣಿಗಳ ಕಿವಿಗಳು ವಿವಿಧ ಆಕಾರ ಮತ್ತು ಗಾತ್ರಗಳಲ್ಲಿ ಇರುತ್ತವೆ.'
        },
        activities: [
          act('Ear Spotter', 'Identify ears of animals from pictures.', 'drawing', 'low',
            ['Look at animal pictures', 'Draw the ears'],
            ['Animal pictures'], 'Which animal has biggest ears?')
        ],
        virtualLab: { title: 'Animal Hearing Lab', simulation: 'Compare hearing ranges', task: 'Match 8 animals with their ear types' },
        quiz: [
          q('Which animal has fan-shaped ears?', ['Cat', 'Elephant', 'Fish', 'Snake'], 'Elephant', 'Elephants use their large ears to cool down too!'),
          q('Do birds have outer ears?', ['Yes', 'No, they have holes', 'No, they cannot hear'], 'No, they have holes', 'Birds have small holes.')
        ],
        learningOutcomes: ['Observe differences in animal ears'],
        crossCurricularLink: 'Science: Sound'
      }]
    },

    {
      id: 'e3', title: '3. A Day with Nandu', topics: [{
        id: 'e3-t1', title: 'Elephant Families',
        subtopics: ['Herd life', 'Baby elephants', 'Matriarch leadership'],
        readingText: {
          en: 'Elephants live in herds led by the oldest female (matriarch).',
          hi: 'हाथी झुंड में रहते हैं जिसका नेतृत्व सबसे बुज़ुर्ग मादा करती है।',
          kn: 'ಆನೆಗಳು ಹಿಂಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಹಿರಿಯ ಹೆಣ್ಣು ಆನೆ ನಾಯಕಿ.'
        },
        activities: [
          act('Elephant Diary', 'Write a diary entry as a baby elephant.', 'writing', 'mid',
            ['Imagine you are Nandu', 'Describe your morning'],
            ['Notebook'], 'What was the best part of the day?')
        ],
        virtualLab: { title: 'Elephant Habitat Lab', simulation: 'Explore an elephant\'s daily life', task: 'Guide a herd to water' },
        quiz: [
          q('Who leads an elephant herd?', ['Oldest female', 'Youngest male', 'Biggest male'], 'Oldest female', 'The matriarch leads.')
        ],
        learningOutcomes: ['Understand elephant social structure']
      }]
    },

    {
      id: 'e4', title: '4. The Story of Amrita', topics: [{
        id: 'e4-t1', title: 'Trees & Conservation',
        subtopics: ['The Khejadi Tree Miracle', 'Bishnoi Community Spirit', 'Hugging the Trees'],
        readingText: {
          en: 'Amrita Devi Bishnoi protected Khejadi trees by hugging them. They sacrificed lives to save trees.',
          hi: 'अमृता देवी बिश्नोई ने खेजड़ी के पेड़ों को बचाने के लिए उन्हें गले लगाया।',
          kn: 'ಅಮೃತಾ ದೇವಿ ಬಿಶ್ನೋಯಿ ಖೇಜಡಿ ಮರಗಳನ್ನು ಉಳಿಸಲು ಅವುಗಳನ್ನು ಅಪ್ಪಿಕೊಂಡರು.'
        },
        activities: [
          act('Tree Friend', 'Adopt a tree near your house.', 'performing', 'low',
            ['Choose a tree', 'Water it', 'Observe it'],
            ['Water', 'Paper'], 'What is your tree\'s name?')
        ],
        quiz: [
          q('Where did Amrita live?', ['Rajasthan', 'Kerala', 'Assam'], 'Rajasthan', 'She lived in Khejadli village.')
        ],
        learningOutcomes: ['Understand value of trees']
      }]
    },

    {
      id: 'e10', title: '5. Hu Tu Tu, Hu Tu Tu', topics: [{
        id: 'e10-t1', title: 'Games We Play',
        subtopics: ['Traditional Indian games', 'Rules of Kabaddi', 'Teamwork'],
        readingText: {
          en: 'India has many traditional games like Kabaddi, Kho-Kho. Games keep us fit.',
          hi: 'भारत में कबड्डी, खो-खो जैसे पारंपरिक खेल हैं।',
          kn: 'ಭಾರತದಲ್ಲಿ ಕಬಡ್ಡಿ, ಖೋ-ಖೋ ಮುಂತಾದ ಸಾಂಪ್ರದಾಯಿಕ ಆಟಗಳಿವೆ.'
        },
        activities: [
          act('Kabaddi Coach', 'Organise a game of Kabaddi.', 'performing', 'mid',
            ['Divide into 2 teams', 'Mark area', 'Play 5 mins'],
            ['Chalk'], 'Who was best raider?')
        ],
        quiz: [
          q('In Kabaddi, what must the raider say?', ['Run-run', 'Kabaddi-Kabaddi', 'Tag-tag'], 'Kabaddi-Kabaddi', 'Prove they hold breath.')
        ],
        learningOutcomes: ['Know traditional games']
      }]
    },

    {
      id: 'e11', title: '6. The Valley of Flowers', topics: [{
        id: 'e11-t1', title: 'Flowers & Plants',
        subtopics: ['Valley of Flowers', 'Medicinal plants', 'Edible flowers'],
        readingText: {
          en: 'The Valley of Flowers in Uttarakhand is home to rare wildflowers.',
          hi: 'उत्तराखंड में फूलों की घाटी दुर्लभ फूलों का घर है।',
          kn: 'ಉತ್ತರಾಖಂಡದ ಹೂಗಳ ಕಣಿವೆ ಅಪರೂಪದ ಹೂವುಗಳಿಗೆ ನೆಲೆ.'
        },
        activities: [
          act('Flower Press', 'Collect and press flowers.', 'performing', 'low',
            ['Collect 5 flowers', 'Place in newspaper', 'Put heavy books'],
            ['Newspaper', 'Books'], 'Check after 5 days.')
        ],
        quiz: [
          q('Where is the Valley of Flowers?', ['Uttarakhand', 'Kerala', 'Rajasthan'], 'Uttarakhand', 'UNESCO World Heritage Site.')
        ],
        learningOutcomes: ['Identify common flowers']
      }]
    },

    {
      id: 'e13', title: '7. A River\'s Tale', topics: [{
        id: 'e13-t1', title: 'Water Pollution',
        subtopics: ['Clean vs dirty water', 'Water conservation'],
        readingText: {
          en: 'Rivers start clean from mountains but get polluted near cities.',
          hi: 'नदियाँ पहाड़ों से साफ शुरू होती हैं लेकिन शहरों में प्रदूषित हो जाती हैं।',
          kn: 'ನದಿಗಳು ಬೆಟ್ಟಗಳಿಂದ ಶುದ್ಧವಾಗಿ ಹರಿಯುತ್ತವೆ ಆದರೆ ನಗರಗಳಲ್ಲಿ ಮಲಿನವಾಗುತ್ತವೆ.'
        },
        activities: [
          act('Water Tester', 'Compare clean and muddy water.', 'performing', 'low',
            ['Take two glasses', 'Add mud to one'],
            ['Glasses', 'Mud'], 'Which one is better?')
        ],
        quiz: [
          q('Where do rivers start?', ['Mountains', 'Oceans', 'Lakes'], 'Mountains', 'From glaciers or springs.')
        ],
        learningOutcomes: ['Understand pollution causes']
      }]
    },

    {
      id: 'e19', title: '8. Abdul in the Garden', topics: [{
        id: 'e19-t1', title: 'Roots & Plants',
        subtopics: ['Types of roots', 'Root functions', 'Banyan tree aerial roots'],
        readingText: {
          en: 'Roots anchor plants. Banyan has aerial roots hanging from branches.',
          hi: 'जड़ें पौधों को टिकाती हैं। बरगद की हवाई जड़ें होती हैं।',
          kn: 'ಬೇರುಗಳು ಸಸ್ಯಗಳನ್ನು ಹಿಡಿಯುತ್ತವೆ. ಆಲದ ಮರಕ್ಕೆ ಗಾಳಿಯ ಬೇರುಗಳಿವೆ.'
        },
        activities: [
          act('Seed Germinator', 'Grow a bean seed.', 'performing', 'mid',
            ['Wet cotton in glass', 'Place bean', 'Watch daily'],
            ['Cotton', 'Bean'], 'Root or shoot first?')
        ],
        quiz: [
          q('Which plant has aerial roots?', ['Mango', 'Banyan', 'Rose'], 'Banyan', 'Roots hang from branches.')
        ],
        learningOutcomes: ['Identify tap and fibrous roots']
      }]
    },

    {
      id: 'e27', title: '9. Chuskit Goes to School', topics: [{
        id: 'e27-t1', title: 'Disability & Inclusion',
        subtopics: ['Chuskit\'s story', 'Accessibility'],
        readingText: {
          en: 'Chuskit from Ladakh uses a wheelchair. Friends built a bridge for her.',
          hi: 'चुसकित लद्दाख की लड़की है जो व्हीलचेयर इस्तेमाल करती है।',
          kn: 'ಚುಸ್ಕಿತ್ ಲಡಾಖ್‌ನ ಹುಡುಗಿ, ವೀಲ್‌ಚೇರ್ ಬಳಸುತ್ತಾಳೆ.'
        },
        activities: [
          act('Accessibility Auditor', 'Check if school is accessible.', 'writing', 'mid',
            ['Check for ramps', 'Check bathrooms'],
            ['Notebook'], 'Write suggestions.')
        ],
        quiz: [
          q('Where is Chuskit from?', ['Ladakh', 'Kerala', 'Assam'], 'Ladakh', 'A region in northern India.')
        ],
        learningOutcomes: ['Understand inclusion']
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
        subtopics: ['रुई के गोले', 'बादलों का जादू'],
        readingText: {
          en: 'Clouds are like innocent children.',
          hi: 'बादल भोले-भाले बच्चों की तरह हैं जो गाल फुलाकर आसमान में दौड़ते हैं।',
          kn: 'ಮೋಡಗಳು ಮುಗ್ಧ ಮಕ್ಕಳಂತೆ.'
        },
        activities: [
          act('बादल चित्रकार', 'चित्र बनाओ।', 'drawing', 'low', ['आसमान देखो', 'चित्र बनाओ'], ['कागज', 'रंग'], 'कैसा बादल दिखा?')
        ],
        quiz: [
          q('कविता में बादल कैसे हैं?', ['भोले-भाले', 'गुस्से वाले'], 'भोले-भाले', 'वे मासूम हैं।')
        ],
        learningOutcomes: ['कविता का आनंद']
      }]
    },
    {
      id: 'h2', title: '2. जैसा सवाल वैसा जवाब', topics: [{
        id: 'h2-t1', title: 'बीरबल की चतुराई',
        subtopics: ['बुद्धि बनाम ताकत'],
        readingText: {
          en: 'Birbal solved impossible questions with wit.',
          hi: 'बीरबल अकबर के सबसे चतुर मंत्री थे।',
          kn: 'ಬೀರ್ಬಲ್ ತನ್ನ ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಅಸಾಧ್ಯವಾದ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿದ.'
        },
        activities: [
          act('पहेली पूछो', 'पहेली पूछो।', 'speaking', 'low', ['पहेली सोचो', 'पूछो'], [], 'किसने जवाब दिया?')
        ],
        quiz: [
          q('अकबर के चतुर मंत्री कौन थे?', ['बीरबल', 'मानसिंह'], 'बीरबल', 'बीरबल बुद्धिमानी के लिए प्रसिद्ध थे।')
        ],
        learningOutcomes: ['बुद्धि का महत्व']
      }]
    },
    {
      id: 'h3', title: '3. किरमिच की गेंद', topics: [{
        id: 'h3-t1', title: 'ईमानदारी',
        subtopics: ['सच्चाई का आईना'],
        readingText: {
          en: 'A child chooses honesty.',
          hi: 'दिनेश को एक किरमिच की गेंद मिली। उसने ईमानदारी दिखाई।',
          kn: 'ದಿನೇಶನಿಗೆ ಒಂದು ಚೆಂಡು ಸಿಕ್ಕಿತು, ಅವನು ಪ್ರಾಮಾಣಿಕತೆಯ ಹಾದಿ ಹಿಡಿದನು.'
        },
        activities: [
          act('ईमानदारी पोस्टर', 'पोस्टर बनाओ।', 'drawing', 'low', ['चित्र बनाओ'], ['कागज'], 'सच बोलो!')
        ],
        quiz: [
          q('ईमानदारी क्या है?', ['सच बोलना', 'झूठ बोलना'], 'सच बोलना', 'ईमानदारी सबसे अच्छी नीति है।')
        ],
        learningOutcomes: ['नैतिकता']
      }]
    },
    {
      id: 'h7', title: '4. दान का हिसाब', topics: [{
        id: 'h7-t1', title: 'गणित और चतुराई',
        subtopics: ['दोगुना होने की शक्ति'],
        readingText: {
          en: 'A saint teaches a greedy king a lesson.',
          hi: 'एक संन्यासी ने लालची राजा को सबक सिखाया।',
          kn: 'ಒಬ್ಬ ಸನ್ಯಾಸಿ ದುರಾಸೆ ರಾಜನಿಗೆ ಪಾಠ ಕಲಿಸಿದ.'
        },
        activities: [
          act('दोगुना खेल', '१ को १० बार दोगुना करो।', 'calculating', 'mid', ['१ से शुरू करो', 'दोगुना करो'], [], 'कितना हुआ?')
        ],
        quiz: [
          q('संन्यासी ने पहले दिन क्या माँगा?', ['१ रुपया', '१०० रुपये'], '१ रुपया', 'वह हर दिन दोगुना होता गया।')
        ],
        learningOutcomes: ['लालच बुरी बला']
      }]
    },
    {
      id: 'h9', title: '5. स्वतंत्रता की ओर', topics: [{
        id: 'h9-t1', title: 'गांधीजी और बिन्नी',
        subtopics: ['अहिंसा', 'दांडी मार्च'],
        readingText: {
          en: 'Binni helps during Gandhi\'s Salt March.',
          hi: 'बिन्नी एक बच्चा है जो गांधीजी की नमक यात्रा के बारे में जानता है।',
          kn: 'ಬಿನ್ನಿ ಮತ್ತು ಗಾಂಧೀಜಿಯ ಉಪ್ಪಿನ ಸತ್ಯಾಗ್ರಹದ ಕಥೆ.'
        },
        activities: [
          act('शांति संदेश', 'संदेश लिखो।', 'writing', 'low', ['लिखो'], [], 'गांधीजी खुश होंगे!')
        ],
        quiz: [
          q('नमक यात्रा किसने शुरू की?', ['गांधीजी', 'नेहरू'], 'गांधीजी', 'इसे दांडी मार्च भी कहते हैं।')
        ],
        learningOutcomes: ['आज़ादी का महत्व']
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
        subtopics: ['Rhyming Words'],
        readingText: {
          en: 'Wake up! It\'s a lovely day. The birds are singing.',
          hi: 'जागो! यह एक प्यारा दिन है।',
          kn: 'ಎಚ್ಚರಾಗು! ಇದು ಸುಂದರ ದಿನ.'
        },
        activities: [
          act('Morning Rhyme', 'Recite the poem.', 'speaking', 'low', ['Read'], [], 'Good morning!')
        ],
        quiz: [
          q('What are the birds doing?', ['Singing', 'Sleeping'], 'Singing', 'Morning song.')
        ],
        learningOutcomes: ['Recitation']
      }]
    },
    {
      id: 'en5', title: '2. Helen Keller', topics: [{
        id: 'en5-t1', title: 'Helen\'s Courage',
        subtopics: ['Anne Sullivan'],
        readingText: {
          en: 'Helen Keller was blind and deaf, but learned to communicate.',
          hi: 'हेलन केलर देख और सुन नहीं सकती थीं।',
          kn: 'ಹೆಲೆನ್ ಕೆಲ್ಲರ್ ಶ್ರವಣ ಮತ್ತು ದೃಷ್ಟಿಹೀನರಾಗಿದ್ದರೂ ಕಲಿಯುವ ಹಠ ಬಿಡಲಿಲ್ಲ.'
        },
        activities: [
          act('Blindfold Test', 'Identify items by touch.', 'performing', 'low', ['Touch'], [], 'What was it?')
        ],
        quiz: [
          q('Who was Helen\'s teacher?', ['Anne Sullivan', 'Jane'], 'Anne Sullivan', 'A great guide.')
        ],
        learningOutcomes: ['Empathy']
      }]
    },
    {
      id: 'en7', title: '3. The Giving Tree', topics: [{
        id: 'en7-t1', title: 'Selfless Love',
        subtopics: ['Gratitude'],
        readingText: {
          en: 'The tree gave everything to the boy.',
          hi: 'पेड़ ने लड़के को सब कुछ दे दिया।',
          kn: 'ಮರವು ಹುಡುಗನಿಗೆ ಎಲ್ಲವನ್ನೂ ನೀಡಿತು.'
        },
        activities: [
          act('Thank You Note', 'Write to a tree.', 'writing', 'low', ['Write'], [], 'Tree is happy!')
        ],
        quiz: [
          q('What did the tree give at the end?', ['Apples', 'A stump to sit on'], 'A stump to sit on', 'It gave everything.')
        ],
        learningOutcomes: ['Generosity']
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
        subtopics: ['ನಾಡಿನ ಹೆಮ್ಮೆ'],
        readingText: {
          en: 'Karnataka is rich in culture.',
          hi: 'कर्नाटक अपनी संस्कृति के लिए प्रसिद्ध है।',
          kn: 'ಕರ್ನಾಟಕ ತನ್ನ ಶ್ರೀಮಂತ ಸಂಸ್ಕೃತಿ ಮತ್ತು ಕನ್ನಡ ಭಾಷೆಗೆ ಹೆಸರುವಾಸಿ.'
        },
        activities: [
          act('ನಾಡಗೀತೆ', 'ಹಾಡಿರಿ.', 'speaking', 'low', ['ಹಾಡಿ'], [], 'ಜೈ ಕರ್ನಾಟಕ!')
        ],
        quiz: [
          q('ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ?', ['ಬೆಂಗಳೂರು', 'ಮೈಸೂರು'], 'ಬೆಂಗಳೂರು', 'ಉದ್ಯಾನ ನಗರಿ.')
        ],
        learningOutcomes: ['ನಾಡಿನ ಅರಿವು']
      }]
    },
    {
      id: 'k2', title: '2. ತೆನಾಲಿ ರಾಮಕೃಷ್ಣ', topics: [{
        id: 'k2-t1', title: 'ಬುದ್ಧಿವಂತಿಕೆ',
        subtopics: ['ಹಾಸ್ಯ'],
        readingText: {
          en: 'Tenali was a witty poet.',
          hi: 'तेनालीराम अपनी चतुराई के लिए जाने जाते थे।',
          kn: 'ತೆನಾಲಿ ರಾಮಕೃಷ್ಣನು ಕೃಷ್ಣದೇವರಾಯನ ಆಸ್ಥಾನದ ಚತುರ ಕವಿ.'
        },
        activities: [
          act('ಕಥೆ ಹೇಳಿ', 'ತೆನಾಲಿ ಕಥೆ.', 'speaking', 'low', ['ಹೇಳಿ'], [], 'ಮಜಾ ಬಂತೇ?')
        ],
        quiz: [
          q('ತೆನಾಲಿ ಯಾರ ಆಸ್ಥಾನದಲ್ಲಿದ್ದ?', ['ಕೃಷ್ಣದೇವರಾಯ', 'ಅಕ್ಬರ'], 'ಕೃಷ್ಣದೇವರಾಯ', 'ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ.')
        ],
        learningOutcomes: ['ಚತುರತೆ']
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
        subtopics: ['CPU - Brain'],
        readingText: {
          en: 'CPU is the brain, monitor is the screen.',
          hi: 'CPU दिमाग है, मॉनिटर स्क्रीन है।',
          kn: 'CPU ಮೆದುಳು, ಮಾನಿಟರ್ ಪರದೆ.'
        },
        activities: [
          act('Identify', 'Point to parts.', 'performing', 'low', ['Point'], [], 'Well done!')
        ],
        quiz: [
          q('Which is the brain?', ['CPU', 'Mouse'], 'CPU', 'Central Processing Unit.')
        ],
        learningOutcomes: ['Hardware knowledge']
      }]
    },
    {
      id: 'c7', title: '2. Introduction to AI', topics: [{
        id: 'c7-t1', title: 'What is AI?',
        subtopics: ['Smart Machines'],
        readingText: {
          en: 'AI teaches machines to learn.',
          hi: 'AI मशीनों को सोचना सिखाता है।',
          kn: 'AI ಯಂತ್ರಗಳಿಗೆ ಕಲಿಯಲು ಕಲಿಸುತ್ತದೆ.'
        },
        activities: [
          act('AI Spotter', 'Find AI around you.', 'writing', 'low', ['List'], [], 'Siri/Alexa are AI!')
        ],
        quiz: [
          q('AI stands for?', ['Artificial Intelligence', 'Auto Ink'], 'Artificial Intelligence', 'Smart machines.')
        ],
        learningOutcomes: ['Future tech']
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
