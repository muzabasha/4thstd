// generate-curriculum.js
// Writes the complete CBSE Grade 4 curriculum to lib/curriculum.ts
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', 'lib', 'curriculum.ts');
const lines = [];
const w = (...args) => lines.push(...args);

w(`/* CBSE Grade 4 — Complete Syllabus for Yasmeen */`);
w(`export interface Activity {`);
w(`  title: string; description: string;`);
w(`  skill: 'listening'|'speaking'|'writing'|'performing'|'drawing'|'calculating';`);
w(`  level: 'low'|'mid'|'high';`);
w(`  steps: string[]; materials?: string[]; doItYourself?: string;`);
w(`}`);
w(`export interface VirtualLab { title: string; simulation: string; task: string; }`);
w(`export interface QuizQuestion {`);
w(`  question: string; options: string[]; correctAnswer: string;`);
w(`  explanation?: string; hint?: string;`);
w(`}`);
w(`export interface Topic {`);
w(`  id: string; title: string; subtopics: string[];`);
w(`  activities: Activity[]; virtualLab?: VirtualLab; quiz: QuizQuestion[];`);
w(`  learningOutcomes: string[]; crossCurricularLink?: string;`);
w(`  readingText?: { en: string; hi?: string; kn?: string };`);
w(`}`);
w(`export interface Chapter { id: string; title: string; topics: Topic[]; }`);
w(`export interface Subject { id: string; title: string; icon: string; color: string; chapters: Chapter[]; }`);
w(``);
w(`function q(question: string, options: string[], correctAnswer: string, explanation?: string): QuizQuestion {`);
w(`  return { question, options, correctAnswer, explanation };`);
w(`}`);
w(`function act(title: string, description: string, skill: Activity['skill'], level: Activity['level'],`);
w(`  steps: string[], materials?: string[], doItYourself?: string): Activity {`);
w(`  return { title, description, skill, level, steps, materials, doItYourself };`);
w(`}`);
w(``);

// ── helper to build a topic ──────────────────────────────────────────────────
function topic(id, title, subtopics, en, hi, kn, acts, quiz, outcomes, cross, vlab) {
  const rt = `{ en: ${JSON.stringify(en)}, hi: ${JSON.stringify(hi)}, kn: ${JSON.stringify(kn)} }`;
  const actsStr = acts.map(a =>
    `act(${JSON.stringify(a[0])},${JSON.stringify(a[1])},${JSON.stringify(a[2])},${JSON.stringify(a[3])},` +
    `${JSON.stringify(a[4])},${JSON.stringify(a[5] || [])},${JSON.stringify(a[6] || '')})`
  ).join(',\n        ');
  const quizStr = quiz.map(([q2, o, a, e]) =>
    `q(${JSON.stringify(q2)},${JSON.stringify(o)},${JSON.stringify(a)},${JSON.stringify(e || '')})`
  ).join(',\n        ');
  const vlabStr = vlab
    ? `,\n      virtualLab: { title: ${JSON.stringify(vlab[0])}, simulation: ${JSON.stringify(vlab[1])}, task: ${JSON.stringify(vlab[2])} }`
    : '';
  return `    { id: ${JSON.stringify(id)}, title: ${JSON.stringify(title)},
      subtopics: ${JSON.stringify(subtopics)},
      readingText: ${rt},
      activities: [
        ${actsStr}
      ]${vlabStr},
      quiz: [
        ${quizStr}
      ],
      learningOutcomes: ${JSON.stringify(outcomes)},
      crossCurricularLink: ${JSON.stringify(cross || '')}
    }`;
}

function chapter(id, title, topics) {
  return `  { id: ${JSON.stringify(id)}, title: ${JSON.stringify(title)}, topics: [\n${topics.join(',\n')}\n  ]}`;
}

function subject(varName, id, title, icon, color, chapters) {
  return `const ${varName}: Subject = {\n  id: ${JSON.stringify(id)}, title: ${JSON.stringify(title)}, icon: ${JSON.stringify(icon)}, color: ${JSON.stringify(color)},\n  chapters: [\n${chapters.join(',\n')}\n  ]\n};`;
}

// ── MATHEMATICS ──────────────────────────────────────────────────────────────

// ── MATHEMATICS ──────────────────────────────────────────────────────────────
const mathChapters = [];

mathChapters.push(chapter('m1', '1. Building with Bricks', [
  topic('m1t1', 'Patterns & Symmetry',
    ['Jaali patterns', 'Mirror symmetry', 'Faces of a brick'],
    'Bricks are cuboids with 6 faces, 8 corners and 12 edges. A Jaali is a decorative pattern with holes that lets air and light through.',
    'ईंटें घनाभ होती हैं जिनके 6 फलक, 8 कोने और 12 किनारे होते हैं। जाली एक सजावटी पैटर्न है।',
    'ಇಟ್ಟಿಗೆಗಳು ಆಯತಾಕಾರದ ಘನಗಳಾಗಿದ್ದು 6 ಮುಖ, 8 ಮೂಲೆ ಮತ್ತು 12 ಅಂಚುಗಳಿವೆ.',
    [
      ['Wall Designer', 'Draw a 3×3 brick wall on grid paper and find its symmetry line.', 'drawing', 'low', ['Draw a 3×3 grid', 'Sketch bricks', 'Colour alternate bricks', 'Find the symmetry line'], ['Grid paper', 'Crayons'], 'Use a mirror to check symmetry!'],
      ['Jaali Maker', 'Cut a Jaali pattern from paper and hold it to light.', 'performing', 'mid', ['Fold paper in half', 'Cut small shapes', 'Unfold and hold to light', 'Count the holes'], ['Paper', 'Scissors'], 'How many holes did you make?'],
      ['3D Brick Model', 'Build a brick from clay and count its faces, edges and corners.', 'performing', 'high', ['Roll clay into a rectangle', 'Press flat on all 6 sides', 'Count faces, edges, corners', 'Compare with a real brick'], ['Clay', 'Ruler'], 'Can you make a Jaali wall with 4 clay bricks?']
    ],
    [
      ['How many faces does a brick have?', ['4', '6', '8', '12'], '6', 'A brick is a cuboid with 6 rectangular faces.'],
      ['What is a Jaali?', ['A solid wall', 'A pattern with holes', 'A window frame', 'A door'], 'A pattern with holes', 'Jaali patterns have holes to let air and light through.'],
      ['How many corners does a brick have?', ['4', '6', '8', '10'], '8', 'A cuboid has 8 corners (vertices).'],
      ['A brick is which 3D shape?', ['Cube', 'Cuboid', 'Cylinder', 'Sphere'], 'Cuboid', 'A brick is longer than wide — that makes it a cuboid.']
    ],
    ['Identify 3D shapes in real life', 'Understand symmetry', 'Count faces, edges, vertices'],
    'EVS: Building materials and types of houses',
    ['Brick Builder Lab', 'Place bricks on a grid to build a wall', 'Build a wall with a Jaali pattern using 9 bricks']
  )
]));

mathChapters.push(chapter('m2', '2. Long and Short', [
  topic('m2t1', 'Measuring Length', ['mm, cm, m, km', 'Measuring with a ruler', 'Estimating distances'],
    '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. We measure length using a ruler.',
    '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km। हम लंबाई मापने के लिए रूलर का उपयोग करते हैं।',
    '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. ನಾವು ಉದ್ದ ಅಳೆಯಲು ರೂಲರ್ ಬಳಸುತ್ತೇವೆ.',
    [
      ['Body Ruler', 'Measure your hand span and foot length in cm.', 'calculating', 'low', ['Trace your hand on paper', 'Measure the span in cm', 'Measure your foot length', 'Record all measurements'], ['Ruler', 'Paper'], 'Whose foot is longest in your family?'],
      ['Classroom Survey', 'Estimate then measure 5 objects in the classroom.', 'calculating', 'mid', ['List 5 objects', 'Write your estimate in cm', 'Measure with a ruler', 'Find the difference'], ['Ruler', 'Notebook'], 'Which estimate was closest to the real measurement?'],
      ['Distance Detective', 'Calculate how many steps it takes to walk 100 m.', 'performing', 'high', ['Measure your step length in cm', 'Convert to metres', 'Calculate steps for 100 m', 'Walk and count to verify'], ['Measuring tape', 'Notebook'], 'How many of your steps make 1 km?']
    ],
    [
      ['1 km = how many metres?', ['100', '500', '1000', '2000'], '1000', '1 kilometre = 1000 metres.'],
      ['1 m = how many centimetres?', ['10', '100', '1000', '50'], '100', '1 metre = 100 centimetres.'],
      ['Which is the longest unit?', ['mm', 'cm', 'm', 'km'], 'km', 'Kilometre is the largest unit of length here.'],
      ['A pencil is about 15 ___', ['km', 'm', 'cm', 'mm'], 'cm', 'A standard pencil is about 15 centimetres long.']
    ],
    ['Convert between units of length', 'Measure using a ruler', 'Estimate lengths'],
    'EVS: Distances between places on a map'
  )
]));

mathChapters.push(chapter('m3', '3. A Trip to Bhopal', [
  topic('m3t1', 'Large Number Operations', ['Adding 4-digit numbers', 'Subtracting with borrowing', 'Word problems on travel'],
    'When we add large numbers, we line up digits by place value: ones, tens, hundreds, thousands. Always start adding from the ones column.',
    'जब हम बड़ी संख्याओं को जोड़ते हैं, तो हम अंकों को स्थानीय मान के अनुसार लगाते हैं: इकाई, दहाई, सैकड़ा, हजार।',
    'ದೊಡ್ಡ ಸಂಖ್ಯೆಗಳನ್ನು ಕೂಡಿಸುವಾಗ, ಸ್ಥಾನ ಮೌಲ್ಯದ ಪ್ರಕಾರ ಅಂಕೆಗಳನ್ನು ಜೋಡಿಸಿ: ಒಂದು, ಹತ್ತು, ನೂರು, ಸಾವಿರ.',
    [
      ['Trip Planner', 'Add up ticket costs for 30 students going on a school trip.', 'calculating', 'low', ['Ticket price = ₹45', 'Multiply 45 × 30', 'Add bus cost ₹500', 'Find total trip cost'], ['Notebook', 'Pencil'], 'Can you find a cheaper way to travel?'],
      ['Distance Chart', 'Make a chart of distances between 5 Indian cities.', 'writing', 'mid', ['List 5 cities', 'Find distances from an atlas', 'Add distances for a round trip', 'Find the shortest route'], ['Atlas', 'Notebook'], 'Which two cities are farthest apart?'],
      ['Budget Manager', 'You have ₹5000 for a trip. Plan your spending.', 'calculating', 'high', ['List expenses: food, tickets, hotel', 'Add all costs', 'Subtract from ₹5000', 'Find remaining money'], ['Notebook', 'Pencil'], 'What would you do with the leftover money?']
    ],
    [
      ['2345 + 1432 = ?', ['3777', '3677', '3877', '3700'], '3777', 'Add ones: 5+2=7, tens: 4+3=7, hundreds: 3+4=7, thousands: 2+1=3.'],
      ['5000 − 1234 = ?', ['3766', '3876', '3666', '4766'], '3766', 'Subtract carefully with borrowing.'],
      ['Which digit is in the hundreds place in 4,567?', ['4', '5', '6', '7'], '5', 'Thousands=4, Hundreds=5, Tens=6, Ones=7.'],
      ['Round 3,748 to the nearest hundred.', ['3700', '3800', '3750', '4000'], '3800', '48 is closer to 100 than to 0, so round up.']
    ],
    ['Add and subtract 4-digit numbers', 'Solve travel word problems', 'Understand place value'],
    'EVS: Transport and travel in India'
  )
]));

mathChapters.push(chapter('m4', '4. Tick-Tick-Tick', [
  topic('m4t1', 'Time and Calendar', ['Reading a clock', '24-hour clock', 'Days, months, years'],
    'A clock has 12 hours. The short hand shows hours and the long hand shows minutes. There are 60 minutes in 1 hour and 24 hours in 1 day.',
    'घड़ी में 12 घंटे होते हैं। छोटी सुई घंटे दिखाती है और लंबी सुई मिनट। 1 घंटे में 60 मिनट और 1 दिन में 24 घंटे होते हैं।',
    'ಗಡಿಯಾರದಲ್ಲಿ 12 ಗಂಟೆಗಳಿವೆ. ಚಿಕ್ಕ ಮುಳ್ಳು ಗಂಟೆ ತೋರಿಸುತ್ತದೆ, ಉದ್ದ ಮುಳ್ಳು ನಿಮಿಷ ತೋರಿಸುತ್ತದೆ.',
    [
      ['Clock Maker', 'Make a paper clock and show different times.', 'performing', 'low', ['Cut a circle from cardboard', 'Write numbers 1-12', 'Make two hands from paper', 'Show 3:30, 7:15, 11:45'], ['Cardboard', 'Scissors', 'Fastener'], 'What time do you wake up? Show it on your clock!'],
      ['My Daily Schedule', 'Write your daily timetable with start and end times.', 'writing', 'mid', ['List 8 activities of your day', 'Write start and end time for each', 'Calculate time spent on each', 'Find total study time'], ['Notebook', 'Pencil'], 'How many hours do you sleep each night?'],
      ['Calendar Detective', 'Answer questions using a real calendar.', 'calculating', 'high', ['Find how many Sundays in this month', 'Count days from your birthday to today', 'Find what day Jan 26 falls on', 'Calculate days until your next holiday'], ['Calendar', 'Notebook'], 'How many days until your next birthday?']
    ],
    [
      ['How many hours are in a day?', ['12', '24', '48', '60'], '24', 'A full day has 24 hours.'],
      ['How many minutes are in 1 hour?', ['30', '45', '60', '100'], '60', 'There are 60 minutes in every hour.'],
      ['The short hand of a clock shows ___', ['Minutes', 'Seconds', 'Hours', 'Days'], 'Hours', 'The short (hour) hand moves slowly around the clock.'],
      ['How many months are in a year?', ['10', '11', '12', '13'], '12', 'January to December — 12 months in a year.']
    ],
    ['Read time on a clock', 'Use a calendar', 'Calculate duration'],
    'Hindi: Poems about seasons and time'
  )
]));

mathChapters.push(chapter('m5', '5. The Way The World Looks', [
  topic('m5t1', 'Maps and Top Views', ['Top view vs side view', 'Reading a simple map', 'Directions: N, S, E, W'],
    'When we look at objects from above, we see their top view. A map is a top view of a place. We use directions North, South, East and West to find our way.',
    'जब हम ऊपर से वस्तुओं को देखते हैं, तो हमें उनका ऊपरी दृश्य दिखता है। नक्शा किसी स्थान का ऊपरी दृश्य होता है।',
    'ನಾವು ಮೇಲಿನಿಂದ ವಸ್ತುಗಳನ್ನು ನೋಡಿದಾಗ ಅವುಗಳ ಮೇಲ್ನೋಟ ಕಾಣುತ್ತದೆ. ನಕ್ಷೆ ಒಂದು ಸ್ಥಳದ ಮೇಲ್ನೋಟ.',
    [
      ['Room Map', 'Draw a top-view map of your room.', 'drawing', 'low', ['Look at your room from above (imagine)', 'Draw the outline', 'Add furniture as rectangles/squares', 'Label each item'], ['Paper', 'Pencil', 'Ruler'], 'Can a friend find your bed using only your map?'],
      ['School Map', 'Draw a map of your school with directions.', 'drawing', 'mid', ['Draw the school boundary', 'Add classrooms, playground, office', 'Mark N, S, E, W', 'Add a compass rose'], ['Paper', 'Pencil', 'Ruler'], 'Which direction does your classroom face?'],
      ['Treasure Hunt Map', 'Create a treasure hunt map for a friend.', 'performing', 'high', ['Choose a location', 'Draw the map with landmarks', 'Write directions using N/S/E/W', 'Hide a "treasure" and let friend find it'], ['Paper', 'Pencil'], 'How many steps North to reach the treasure?']
    ],
    [
      ['A map shows a ___ view of a place.', ['Side', 'Front', 'Top', 'Bottom'], 'Top', 'Maps are drawn as if you are looking down from above.'],
      ['The sun rises in the ___', ['North', 'South', 'East', 'West'], 'East', 'The sun always rises in the East.'],
      ['Opposite of North is ___', ['East', 'West', 'South', 'Up'], 'South', 'North and South are opposite directions.'],
      ['Which tool helps us find directions?', ['Ruler', 'Compass', 'Scale', 'Protractor'], 'Compass', 'A compass needle always points North.']
    ],
    ['Draw top-view maps', 'Use cardinal directions', 'Read simple maps'],
    'EVS: Maps of India, states and districts'
  )
]));

mathChapters.push(chapter('m6', '6. The Junk Seller', [
  topic('m6t1', 'Money — Profit and Loss', ['Indian currency', 'Calculating profit', 'Calculating loss', 'Simple bills'],
    'Profit = Selling Price − Cost Price. If you buy for ₹20 and sell for ₹25, your profit is ₹5. If you sell for less than you paid, that is a loss.',
    'लाभ = बिक्री मूल्य − लागत मूल्य। यदि आप ₹20 में खरीदते हैं और ₹25 में बेचते हैं, तो लाभ ₹5 है।',
    'ಲಾಭ = ಮಾರಾಟ ಬೆಲೆ − ಖರ್ಚು ಬೆಲೆ. ₹20 ಕ್ಕೆ ಕೊಂಡು ₹25 ಕ್ಕೆ ಮಾರಿದರೆ ₹5 ಲಾಭ.',
    [
      ['Mini Shop', 'Set up a pretend shop with 5 items and price tags.', 'performing', 'low', ['Choose 5 household items', 'Write a cost price for each', 'Write a selling price', 'Calculate profit or loss for each'], ['Paper', 'Pencil', 'Household items'], 'Which item gave you the most profit?'],
      ['Bill Maker', 'Write a shopping bill for 4 items.', 'writing', 'mid', ['List 4 items with prices', 'Add all prices', 'Calculate change from ₹100', 'Write a neat bill'], ['Notebook', 'Pencil'], 'Did you get change? How much?'],
      ['Junk Collector', 'Collect old newspapers and calculate profit if sold.', 'calculating', 'high', ['Weigh newspapers in kg', 'Rate = ₹8 per kg', 'Calculate total money earned', 'Subtract cost of collection bag'], ['Old newspapers', 'Scale', 'Notebook'], 'How much would you earn in a month?']
    ],
    [
      ['Cost price ₹30, Selling price ₹45. Profit = ?', ['₹10', '₹15', '₹20', '₹75'], '₹15', 'Profit = 45 − 30 = ₹15.'],
      ['Cost price ₹50, Selling price ₹40. This is a ___', ['Profit of ₹10', 'Loss of ₹10', 'Profit of ₹90', 'No change'], 'Loss of ₹10', 'When selling price < cost price, it is a loss.'],
      ['How many 50 paise coins make ₹5?', ['5', '10', '15', '20'], '10', '₹5 = 500 paise ÷ 50 = 10 coins.'],
      ['₹1 = how many paise?', ['10', '50', '100', '1000'], '100', 'One rupee equals 100 paise.']
    ],
    ['Calculate profit and loss', 'Make simple bills', 'Handle Indian currency'],
    'EVS: Occupations and livelihoods'
  )
]));

mathChapters.push(chapter('m7', '7. Jugs and Mugs', [
  topic('m7t1', 'Capacity and Volume', ['Litres and millilitres', 'Comparing capacities', 'Measuring liquids'],
    '1 litre = 1000 millilitres. A small water bottle holds about 500 mL. A bucket holds about 10 litres.',
    '1 लीटर = 1000 मिलीलीटर। एक छोटी पानी की बोतल में लगभग 500 mL होता है।',
    '1 ಲೀಟರ್ = 1000 ಮಿಲಿಲೀಟರ್. ಒಂದು ಸಣ್ಣ ನೀರಿನ ಬಾಟಲಿ ಸುಮಾರು 500 mL ಹಿಡಿಯುತ್ತದೆ.',
    [
      ['Container Survey', 'Find 5 containers at home and read their capacity labels.', 'listening', 'low', ['Find bottles, jars, cups', 'Read the mL or L label', 'List them from smallest to largest', 'Add up total capacity'], ['Various containers'], 'Which container holds the most water?'],
      ['Water Pouring', 'Use a measuring cup to fill a 1-litre bottle.', 'performing', 'mid', ['Get a 250 mL cup', 'Pour into a 1-litre bottle', 'Count how many cups needed', 'Verify: 4 × 250 = 1000 mL'], ['Measuring cup', '1-litre bottle', 'Water'], 'How many 200 mL glasses fill a 1-litre bottle?'],
      ['Recipe Calculator', 'Double a recipe that needs 250 mL of milk.', 'calculating', 'high', ['Original: 250 mL milk', 'Double the recipe', 'Convert to litres if needed', 'Write the new recipe'], ['Notebook', 'Pencil'], 'If you triple the recipe, how many mL of milk do you need?']
    ],
    [
      ['1 litre = how many mL?', ['10', '100', '1000', '10000'], '1000', '1 litre = 1000 millilitres.'],
      ['A teaspoon holds about ___', ['5 mL', '50 mL', '500 mL', '5 L'], '5 mL', 'A teaspoon holds approximately 5 millilitres.'],
      ['2.5 litres = how many mL?', ['250', '2500', '25000', '25'], '2500', '2.5 × 1000 = 2500 mL.'],
      ['Which holds more — a bucket or a glass?', ['Glass', 'Bucket', 'Same', 'Cannot say'], 'Bucket', 'A bucket holds about 10 litres; a glass holds about 200 mL.']
    ],
    ['Convert litres to mL', 'Compare capacities', 'Measure liquids accurately'],
    'Science: Water conservation'
  )
]));

mathChapters.push(chapter('m8', '8. Carts and Wheels', [
  topic('m8t1', 'Circles and Shapes', ['Centre, radius, diameter', 'Drawing circles with a compass', 'Circles in real life'],
    'A circle has a centre point. The radius is the distance from the centre to the edge. The diameter is twice the radius.',
    'वृत्त का एक केंद्र बिंदु होता है। त्रिज्या केंद्र से किनारे तक की दूरी है। व्यास त्रिज्या का दोगुना होता है।',
    'ವೃತ್ತಕ್ಕೆ ಒಂದು ಕೇಂದ್ರ ಬಿಂದು ಇರುತ್ತದೆ. ತ್ರಿಜ್ಯ ಕೇಂದ್ರದಿಂದ ಅಂಚಿನವರೆಗಿನ ದೂರ. ವ್ಯಾಸ ತ್ರಿಜ್ಯದ ಎರಡು ಪಟ್ಟು.',
    [
      ['Wheel Spotter', 'Find 5 circular objects at home and measure their diameter.', 'calculating', 'low', ['Find 5 round objects', 'Measure diameter with a ruler', 'Calculate radius (diameter ÷ 2)', 'List from smallest to largest'], ['Ruler', 'Notebook'], 'Which circle has the biggest radius?'],
      ['Compass Artist', 'Draw 3 circles of different sizes using a compass.', 'drawing', 'mid', ['Set compass to 2 cm', 'Draw first circle', 'Change to 4 cm and draw second', 'Change to 6 cm and draw third'], ['Compass', 'Pencil', 'Paper'], 'Can you draw a flower using circles?'],
      ['Wheel Designer', 'Design a cart wheel with spokes using circles.', 'drawing', 'high', ['Draw a large circle (wheel)', 'Draw a small circle at centre (hub)', 'Add 8 spokes (radii)', 'Colour and label radius, diameter'], ['Compass', 'Ruler', 'Crayons'], 'How many spokes does a bicycle wheel have?']
    ],
    [
      ['Diameter = ?', ['Radius × 2', 'Radius + 2', 'Radius ÷ 2', 'Radius − 2'], 'Radius × 2', 'Diameter is always twice the radius.'],
      ['The centre of a circle is ___', ['On the edge', 'Outside the circle', 'The middle point', 'The top point'], 'The middle point', 'The centre is equidistant from all points on the circle.'],
      ['A wheel is which shape?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'Circle', 'Wheels are circular so they roll smoothly.'],
      ['If radius = 7 cm, diameter = ?', ['7 cm', '14 cm', '3.5 cm', '21 cm'], '14 cm', 'Diameter = 2 × 7 = 14 cm.']
    ],
    ['Identify parts of a circle', 'Draw circles with a compass', 'Relate radius and diameter'],
    'EVS: Wheels and transport',
    ['Circle Lab', 'Drag the radius slider to change circle size', 'Draw a circle with radius 5 cm and find its diameter']
  )
]));

mathChapters.push(chapter('m9', '9. Halves and Quarters', [
  topic('m9t1', 'Fractions', ['Half (1/2)', 'Quarter (1/4)', 'Three-quarters (3/4)', 'Equal parts'],
    'A fraction shows equal parts of a whole. 1/2 means one out of two equal parts. 1/4 means one out of four equal parts.',
    'भिन्न किसी पूर्ण के बराबर भागों को दर्शाता है। 1/2 का अर्थ है दो बराबर भागों में से एक।',
    'ಭಿನ್ನರಾಶಿ ಒಂದು ಪೂರ್ಣದ ಸಮಾನ ಭಾಗಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. 1/2 ಎಂದರೆ ಎರಡು ಸಮಾನ ಭಾಗಗಳಲ್ಲಿ ಒಂದು.',
    [
      ['Roti Fractions', 'Fold a paper roti into halves and quarters.', 'performing', 'low', ['Cut a circle from paper', 'Fold in half — label 1/2', 'Fold again — label 1/4', 'Shade 3/4 and name it'], ['Paper', 'Scissors', 'Crayons'], 'If you eat 1/4, how much is left?'],
      ['Fraction Wall', 'Draw a fraction wall showing 1, 1/2, 1/4, 1/8.', 'drawing', 'mid', ['Draw 4 equal rectangles', 'Leave first whole', 'Divide second into 2 parts', 'Divide third into 4, fourth into 8'], ['Ruler', 'Paper', 'Crayons'], 'Which is bigger: 1/2 or 1/4?'],
      ['Pizza Party', 'Share a paper pizza equally among 4 friends.', 'calculating', 'high', ['Draw a circle (pizza)', 'Divide into 4 equal slices', 'Each person gets 1/4', 'If one friend leaves, each gets 1/3'], ['Paper', 'Scissors'], 'How many slices is 3/4 of the pizza?']
    ],
    [
      ['1/2 of 8 = ?', ['2', '4', '6', '8'], '4', 'Half of 8 = 8 ÷ 2 = 4.'],
      ['1/4 of 12 = ?', ['2', '3', '4', '6'], '3', 'Quarter of 12 = 12 ÷ 4 = 3.'],
      ['Which is greater: 1/2 or 1/4?', ['1/4', '1/2', 'Equal', 'Cannot say'], '1/2', '1/2 = 2/4, which is greater than 1/4.'],
      ['3/4 means ___', ['3 wholes', '3 out of 4 equal parts', '4 out of 3 parts', '1 part'], '3 out of 4 equal parts', 'The numerator 3 tells us how many parts we have out of 4.']
    ],
    ['Understand fractions as equal parts', 'Compare simple fractions', 'Find fraction of a number'],
    'EVS: Sharing food and resources equally'
  )
]));

mathChapters.push(chapter('m10', '10. Play with Patterns', [
  topic('m10t1', 'Number Patterns & Sequences', ['Repeating patterns', 'Growing patterns', 'Number sequences', 'Magic squares'],
    'A pattern is a rule that repeats. In 2, 4, 6, 8 the rule is +2. In 1, 3, 9, 27 the rule is ×3.',
    'पैटर्न एक नियम है जो दोहराता है। 2, 4, 6, 8 में नियम +2 है। 1, 3, 9, 27 में नियम ×3 है।',
    'ಮಾದರಿ ಎಂದರೆ ಪುನರಾವರ್ತನೆಯಾಗುವ ನಿಯಮ. 2, 4, 6, 8 ಅನುಕ್ರಮದಲ್ಲಿ ನಿಯಮ +2.',
    [
      ['Pattern Stamp', 'Create a repeating pattern using potato stamps.', 'performing', 'low', ['Cut a potato in half', 'Carve a simple shape', 'Dip in paint and stamp', 'Repeat the pattern 3 times'], ['Potato', 'Paint', 'Paper'], 'What is the rule in your pattern?'],
      ['Number Detective', 'Find the rule in 5 different number sequences.', 'calculating', 'mid', ['Write sequence: 5, 10, 15, 20, ___', 'Find the rule (+5)', 'Fill the blank', 'Create your own sequence'], ['Notebook', 'Pencil'], 'Can you make a sequence with rule ×2?'],
      ['Magic Square', 'Complete a 3×3 magic square where every row, column and diagonal adds to 15.', 'calculating', 'high', ['Draw a 3×3 grid', 'Place 5 in the centre', 'Fill remaining numbers 1-9', 'Check all rows, columns, diagonals sum to 15'], ['Pencil', 'Paper'], 'What is the magic sum if you use numbers 2-10?']
    ],
    [
      ['Next in: 3, 6, 9, 12, ___', ['13', '14', '15', '16'], '15', 'The rule is +3. 12 + 3 = 15.'],
      ['Next in: 2, 4, 8, 16, ___', ['18', '24', '32', '20'], '32', 'The rule is ×2. 16 × 2 = 32.'],
      ['Which is a repeating pattern?', ['1,2,3,4,5', 'A,B,A,B,A', '2,4,6,8', '1,3,6,10'], 'A,B,A,B,A', 'A,B,A,B,A repeats the same A,B unit.'],
      ['Missing: 100, 90, 80, ___, 60', ['65', '70', '75', '85'], '70', 'The rule is −10. 80 − 10 = 70.']
    ],
    ['Identify and extend patterns', 'Find rules in sequences', 'Create own patterns'],
    'Art: Rangoli and tile patterns'
  )
]));

mathChapters.push(chapter('m11', '11. Tables and Shares', [
  topic('m11t1', 'Multiplication and Division', ['Multiplication tables 2–10', 'Division as equal sharing', 'Relationship between × and ÷'],
    'Multiplication is repeated addition. 4 × 3 = 12. Division is equal sharing. 12 ÷ 3 = 4 means 12 shared among 3 gives 4 each.',
    'गुणा बार-बार जोड़ना है। 4 × 3 = 12। भाग बराबर बाँटना है। 12 ÷ 3 = 4 का अर्थ है 12 को 3 में बाँटने पर 4 मिलता है।',
    'ಗುಣಾಕಾರ ಎಂದರೆ ಪುನರಾವರ್ತಿತ ಕೂಡಿಸುವಿಕೆ. 4 × 3 = 12. ಭಾಗಾಕಾರ ಎಂದರೆ ಸಮಾನ ಹಂಚಿಕೆ.',
    [
      ['Table Chant', 'Sing multiplication tables 6, 7, 8 to a rhythm.', 'speaking', 'low', ['Choose table of 6', 'Clap on each answer', 'Sing: 6×1=6, 6×2=12...', 'Repeat for 7 and 8'], [], 'Can you say the 9-times table backwards?'],
      ['Equal Groups', 'Divide 24 counters into equal groups.', 'performing', 'mid', ['Get 24 small objects (coins/seeds)', 'Divide into groups of 4', 'Count groups: 24 ÷ 4 = 6', 'Try groups of 6, 8, 3'], ['24 counters'], 'What are all the ways to divide 24 equally?'],
      ['Multiplication Grid', 'Fill a 10×10 multiplication grid.', 'calculating', 'high', ['Draw a 10×10 table', 'Fill row 1 with multiples of 1', 'Continue for rows 2–10', 'Find patterns in the diagonal'], ['Pencil', 'Ruler', 'Paper'], 'What pattern do you see in the 5-times column?']
    ],
    [
      ['7 × 8 = ?', ['54', '56', '63', '48'], '56', '7 × 8 = 56. Remember: 7 ate (8) 56!'],
      ['48 ÷ 6 = ?', ['6', '7', '8', '9'], '8', '6 × 8 = 48, so 48 ÷ 6 = 8.'],
      ['Which is the same as 5 × 4?', ['5+4', '5+5+5+5', '4+4+4+4+4', 'Both B and C'], 'Both B and C', '5×4 = 20 = 5+5+5+5 = 4+4+4+4+4.'],
      ['36 ÷ 9 = ?', ['3', '4', '5', '6'], '4', '9 × 4 = 36.']
    ],
    ['Recall multiplication tables 2–10', 'Divide by equal sharing', 'Relate multiplication and division'],
    'EVS: Distributing food and resources'
  )
]));

mathChapters.push(chapter('m12', '12. How Heavy? How Light?', [
  topic('m12t1', 'Weight and Mass', ['Grams and kilograms', 'Using a balance scale', 'Estimating weight'],
    '1 kilogram (kg) = 1000 grams (g). We use a balance scale to compare weights. A mango weighs about 200 g.',
    '1 किलोग्राम (kg) = 1000 ग्राम (g)। हम तराजू से वजन की तुलना करते हैं।',
    '1 ಕಿಲೋಗ್ರಾಂ (kg) = 1000 ಗ್ರಾಂ (g). ತ್ರಾಸು ಬಳಸಿ ತೂಕ ಹೋಲಿಸುತ್ತೇವೆ.',
    [
      ['Kitchen Weighing', 'Weigh 5 kitchen items and record in grams.', 'calculating', 'low', ['Find a kitchen scale', 'Weigh: apple, onion, potato, cup, spoon', 'Record each weight in grams', 'Order from lightest to heaviest'], ['Kitchen scale', 'Notebook'], 'Which weighs more — 1 kg of cotton or 1 kg of iron?'],
      ['Balance Challenge', 'Make a simple balance scale using a ruler and cups.', 'performing', 'mid', ['Balance a ruler on a pencil', 'Hang paper cups on each end', 'Add objects to compare weights', 'Find objects that balance each other'], ['Ruler', 'Pencil', 'Paper cups', 'String'], 'Can you balance 10 coins with a rubber?'],
      ['Grocery Bill', 'Calculate the cost of vegetables bought by weight.', 'calculating', 'high', ['Tomatoes: 500 g at ₹40/kg', 'Potatoes: 2 kg at ₹25/kg', 'Onions: 1.5 kg at ₹30/kg', 'Add total cost'], ['Notebook', 'Pencil'], 'How much change from ₹200?']
    ],
    [
      ['1 kg = how many grams?', ['10', '100', '1000', '10000'], '1000', '1 kilogram = 1000 grams.'],
      ['Which is heavier: 500 g or 1 kg?', ['500 g', '1 kg', 'Equal', 'Cannot say'], '1 kg', '1 kg = 1000 g, which is more than 500 g.'],
      ['A bag of rice weighs 5 ___', ['mg', 'g', 'kg', 'km'], 'kg', 'Rice bags are measured in kilograms.'],
      ['2.5 kg = how many grams?', ['250', '2500', '25000', '25'], '2500', '2.5 × 1000 = 2500 g.']
    ],
    ['Convert kg to grams', 'Use a balance scale', 'Estimate weights of common objects'],
    'EVS: Food and nutrition'
  )
]));

mathChapters.push(chapter('m13', '13. Fields and Fences', [
  topic('m13t1', 'Area and Perimeter', ['Perimeter of rectangles and squares', 'Area by counting squares', 'Units: cm², m²'],
    'Perimeter is the total distance around a shape. Area is the space inside. Perimeter of rectangle = 2 × (length + breadth). Area = length × breadth.',
    'परिमाप किसी आकृति के चारों ओर की कुल दूरी है। क्षेत्रफल आकृति के अंदर का स्थान है।',
    'ಪರಿಧಿ ಎಂದರೆ ಆಕಾರದ ಸುತ್ತಲಿನ ಒಟ್ಟು ದೂರ. ವಿಸ್ತೀರ್ಣ ಎಂದರೆ ಆಕಾರದ ಒಳಗಿನ ಜಾಗ.',
    [
      ['Room Perimeter', 'Measure the perimeter of your room using a measuring tape.', 'calculating', 'low', ['Measure length of room', 'Measure breadth of room', 'Calculate perimeter = 2×(L+B)', 'Compare with a classmate\'s room'], ['Measuring tape', 'Notebook'], 'How much fencing would you need for your garden?'],
      ['Grid Area', 'Find the area of irregular shapes by counting squares.', 'calculating', 'mid', ['Draw shapes on 1 cm grid paper', 'Count full squares', 'Count half squares (÷2)', 'Add for total area'], ['Grid paper', 'Pencil'], 'Draw two shapes with the same area but different perimeters.'],
      ['Field Designer', 'Design a school garden with area 24 m² and find its perimeter.', 'calculating', 'high', ['List all rectangles with area 24 m²', 'E.g. 4×6, 3×8, 2×12', 'Calculate perimeter of each', 'Which needs least fencing?'], ['Notebook', 'Pencil'], 'Which shape uses the least fencing for the same area?']
    ],
    [
      ['Perimeter of a square with side 5 cm = ?', ['10 cm', '15 cm', '20 cm', '25 cm'], '20 cm', 'Perimeter of square = 4 × side = 4 × 5 = 20 cm.'],
      ['Area of rectangle 6 cm × 4 cm = ?', ['10 cm²', '20 cm²', '24 cm²', '28 cm²'], '24 cm²', 'Area = length × breadth = 6 × 4 = 24 cm².'],
      ['A square has perimeter 36 cm. Its side = ?', ['6 cm', '9 cm', '12 cm', '18 cm'], '9 cm', 'Side = Perimeter ÷ 4 = 36 ÷ 4 = 9 cm.'],
      ['Which unit measures area?', ['cm', 'kg', 'cm²', 'mL'], 'cm²', 'Area is measured in square units like cm².']
    ],
    ['Calculate perimeter of rectangles and squares', 'Find area by counting squares', 'Apply area and perimeter to real life'],
    'EVS: Farming and land use'
  )
]));

mathChapters.push(chapter('m14', '14. Smart Charts', [
  topic('m14t1', 'Data Handling', ['Tally marks', 'Pictographs', 'Bar graphs', 'Reading tables'],
    'We collect data and show it in charts. Tally marks group data in fives. A pictograph uses pictures. A bar graph uses bars of different heights.',
    'हम डेटा इकट्ठा करते हैं और उसे चार्ट में दिखाते हैं। टैली मार्क्स डेटा को पाँच के समूहों में दिखाते हैं।',
    'ನಾವು ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಿ ಚಾರ್ಟ್‌ನಲ್ಲಿ ತೋರಿಸುತ್ತೇವೆ. ಟ್ಯಾಲಿ ಗುರುತುಗಳು ಮಾಹಿತಿಯನ್ನು ಐದರ ಗುಂಪಿನಲ್ಲಿ ತೋರಿಸುತ್ತವೆ.',
    [
      ['Favourite Fruit Survey', 'Survey 10 classmates about their favourite fruit and make a tally chart.', 'writing', 'low', ['Ask 10 friends their favourite fruit', 'Make tally marks for each answer', 'Count totals', 'Find the most popular fruit'], ['Notebook', 'Pencil'], 'Which fruit got the most votes?'],
      ['Pictograph Maker', 'Draw a pictograph of your weekly weather.', 'drawing', 'mid', ['Record weather for 7 days', 'Choose a symbol for each type', 'Draw the pictograph', 'Write a key'], ['Notebook', 'Crayons'], 'How many sunny days did you have?'],
      ['Bar Graph', 'Draw a bar graph of marks scored in 5 subjects.', 'drawing', 'high', ['List 5 subjects and marks', 'Draw x-axis (subjects) and y-axis (marks)', 'Draw bars to correct height', 'Title and label the graph'], ['Graph paper', 'Ruler', 'Crayons'], 'Which subject had the highest bar?']
    ],
    [
      ['Tally marks IIII with a diagonal = ?', ['4', '5', '6', '10'], '5', 'Four vertical marks crossed by one diagonal = 5.'],
      ['In a pictograph, 1 picture = 5 students. 4 pictures = ?', ['4', '9', '20', '25'], '20', '4 × 5 = 20 students.'],
      ['Which graph uses bars to show data?', ['Pictograph', 'Tally chart', 'Bar graph', 'Pie chart'], 'Bar graph', 'Bar graphs use rectangular bars of different heights.'],
      ['The most common value in a data set is called ___', ['Mean', 'Mode', 'Median', 'Range'], 'Mode', 'The mode is the value that appears most often.']
    ],
    ['Collect and organise data', 'Draw tally charts and pictographs', 'Read and interpret bar graphs'],
    'Science: Recording observations in experiments'
  )
]));

w(subject('mathSubject', 'mathematics', 'Mathematics (Math-Magic)', '📐', '#6C5CE7', mathChapters));
w('');

// ── EVS ───────────────────────────────────────────────────────────────────────
const evsChapters = [];

const evsData = [
  ['e1', '1. Going to School', 'Transport to School', ['Different ways children travel', 'Bridges: bamboo, rope, cement', 'Boats and vallams in Kerala'],
    'Children in India travel to school by bus, boat, horse, bicycle or on foot. In hilly areas, children cross rope bridges. In Kerala, some children use small boats called vallams.',
    'भारत में बच्चे बस, नाव, घोड़े, साइकिल या पैदल स्कूल जाते हैं। पहाड़ी इलाकों में बच्चे रस्सी के पुल पार करते हैं।',
    'ಭಾರತದಲ್ಲಿ ಮಕ್ಕಳು ಬಸ್, ದೋಣಿ, ಕುದುರೆ, ಸೈಕಲ್ ಅಥವಾ ನಡೆದು ಶಾಲೆಗೆ ಹೋಗುತ್ತಾರೆ.',
    [['My Journey Map', 'Draw a map of your route from home to school.', 'drawing', 'low', ['Draw your home', 'Draw the school', 'Draw the path between them', 'Mark landmarks like shops, parks'], ['Paper', 'Crayons'], 'How many minutes does your journey take?'],
    ['Transport Survey', 'Survey classmates: how do they come to school?', 'writing', 'mid', ['Ask 15 classmates', 'Record: walk/bus/car/cycle/other', 'Make a tally chart', 'Draw a bar graph'], ['Notebook', 'Pencil'], 'Which is the most common way to travel?'],
    ['Bridge Builder', 'Build a model bridge using sticks and string.', 'performing', 'high', ['Collect 10 ice-cream sticks', 'Tie with string to make a rope bridge', 'Test with a small toy', 'Compare strength with a flat stick bridge'], ['Ice-cream sticks', 'String', 'Small toy'], 'Which bridge design is stronger?']],
    [['Children in Kerala use ___ to cross water.', ['Rope bridge', 'Vallam (boat)', 'Bicycle', 'Bus'], 'Vallam (boat)', 'Vallams are small wooden boats used in Kerala.'],
    ['A bamboo bridge is used in ___ areas.', ['Desert', 'Hilly/forest', 'City', 'Coastal'], 'Hilly/forest', 'Bamboo bridges are common in hilly and forested regions.'],
    ['Which transport does NOT need a road?', ['Car', 'Bus', 'Boat', 'Truck'], 'Boat', 'Boats travel on water, not roads.'],
    ['Why do some children walk long distances to school?', ['They like walking', 'No other transport available', 'School is nearby', 'Roads are good'], 'No other transport available', 'In remote areas, there may be no buses or roads.']],
    ['Appreciate diversity of transport in India', 'Understand challenges faced by children', 'Draw simple maps'], 'Maths: Measuring distances'],

  ['e2', '2. Ear to Ear', 'Animal Ears and Hearing', ['Different ear shapes in animals', 'How animals use hearing', 'Animals with hidden ears'],
    'Different animals have different ear shapes. Elephants have large fan-shaped ears to cool their body. Rabbits have long ears to hear predators. Birds have tiny holes hidden by feathers.',
    'अलग-अलग जानवरों के कान अलग-अलग आकार के होते हैं। हाथी के बड़े पंखे जैसे कान शरीर को ठंडा रखते हैं।',
    'ವಿವಿಧ ಪ್ರಾಣಿಗಳಿಗೆ ವಿವಿಧ ಆಕಾರದ ಕಿವಿಗಳಿವೆ. ಆನೆಯ ದೊಡ್ಡ ಬೀಸಣಿಗೆ ಆಕಾರದ ಕಿವಿಗಳು ದೇಹವನ್ನು ತಂಪಾಗಿಸುತ್ತವೆ.',
    [['Ear Shape Book', 'Draw 6 animals and their ear shapes.', 'drawing', 'low', ['Draw elephant, rabbit, cat, dog, bird, snake', 'Draw their ears accurately', 'Label each ear type', 'Write one fact about each'], ['Paper', 'Crayons'], 'Which animal has the biggest ears compared to its body?'],
    ['Sound Experiment', 'Test how ear shape affects hearing using paper cones.', 'performing', 'mid', ['Roll paper into a cone', 'Hold wide end to ear', 'Listen to a soft sound', 'Compare with and without cone'], ['Paper', 'Tape'], 'Why do elephants flap their ears?'],
    ['Animal Hearing Research', 'Find out which animals can hear sounds humans cannot.', 'writing', 'high', ['Research: dogs, bats, dolphins', 'Write their hearing range', 'Compare with human hearing', 'Make a comparison chart'], ['Books', 'Notebook'], 'How do bats use sound to navigate?']],
    [['Which animal has fan-shaped ears to cool its body?', ['Rabbit', 'Elephant', 'Dog', 'Cat'], 'Elephant', 'Elephant ears have many blood vessels and act like fans to cool the blood.'],
    ['Birds have ___ instead of outer ears.', ['Big ears', 'Tiny holes covered by feathers', 'No ears at all', 'Ears like humans'], 'Tiny holes covered by feathers', 'Birds have ear openings hidden under their feathers.'],
    ['Long ears help rabbits to ___', ['Run faster', 'Hear predators from far', 'Keep warm', 'Swim better'], 'Hear predators from far', 'Long ears can rotate to catch sounds from different directions.'],
    ['Which animal cannot hear?', ['Snake', 'Dog', 'Elephant', 'Bat'], 'Snake', 'Snakes have no ears; they sense vibrations through their jaw.']],
    ['Compare ear shapes across animals', 'Understand the function of ears', 'Appreciate animal adaptations'], 'Science: Sound and vibration'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of evsData) {
  evsChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

// remaining EVS chapters
const evsMore = [
  ['e3', '3. A Day with Nandu', 'Elephants — Life and Behaviour', ['Elephant herd structure', 'What elephants eat', 'Elephant communication'],
    'Elephants live in herds led by the oldest female (matriarch). They eat grass, leaves, bark and fruit. Baby elephants are called calves.',
    'हाथी झुंड में रहते हैं जिसका नेतृत्व सबसे बुजुर्ग मादा करती है। वे घास, पत्तियाँ, छाल और फल खाते हैं।',
    'ಆನೆಗಳು ಹಿಂಡಿನಲ್ಲಿ ವಾಸಿಸುತ್ತವೆ. ಅತ್ಯಂತ ಹಿರಿಯ ಹೆಣ್ಣಾನೆ ನಾಯಕಿ.',
    [['Elephant Diary', 'Write a diary entry as Nandu the elephant for one day.', 'writing', 'low', ['Imagine you are Nandu', 'Write what you ate', 'Describe your herd', 'Write about a challenge you faced'], ['Notebook', 'Pencil'], 'What would be the hardest part of being an elephant?'],
    ['Elephant Food Chart', 'Make a chart of what elephants eat in a day.', 'drawing', 'mid', ['Research elephant diet', 'Draw each food item', 'Write quantity (elephants eat 150 kg/day!)', 'Compare with what you eat'], ['Paper', 'Crayons'], 'How many times your weight does an elephant eat per day?'],
    ['Save the Elephant', 'Make a poster about elephant conservation.', 'performing', 'high', ['List threats: habitat loss, poaching', 'Write 3 ways to protect elephants', 'Draw an elephant in its habitat', 'Present to class'], ['Paper', 'Crayons'], 'What can YOU do to help elephants?']],
    [['Who leads an elephant herd?', ['Oldest male', 'Youngest female', 'Oldest female', 'Strongest elephant'], 'Oldest female', 'The matriarch (oldest female) leads the herd with her experience.'],
    ['Baby elephants are called ___', ['Cubs', 'Calves', 'Foals', 'Pups'], 'Calves', 'Baby elephants, like baby cows, are called calves.'],
    ['Elephants eat about ___ kg of food per day.', ['15', '50', '150', '500'], '150', 'Adult elephants eat up to 150 kg of vegetation daily.'],
    ['Male elephants leave the herd at about age ___', ['5', '10', '15', '20'], '15', 'Young male elephants leave the herd around age 14-15.']],
    ['Understand elephant social structure', 'Learn about elephant diet and habitat', 'Appreciate wildlife conservation'], 'Hindi: Story of Nandu'],

  ['e4', '4. The Story of Amrita', 'Trees and Conservation', ['Chipko movement', 'Why trees are important', 'Amrita Devi\'s sacrifice'],
    'Amrita Devi Bishnoi hugged a tree to save it from being cut down. The Chipko movement started when people hugged trees to prevent deforestation. Trees give us oxygen, food, shade and homes for animals.',
    'अमृता देवी बिश्नोई ने पेड़ को कटने से बचाने के लिए उसे गले लगाया। चिपको आंदोलन में लोगों ने पेड़ों को गले लगाकर उन्हें बचाया।',
    'ಅಮೃತಾ ದೇವಿ ಬಿಷ್ಣೋಯ್ ಮರ ಕಡಿಯದಂತೆ ತಡೆಯಲು ಅದನ್ನು ತಬ್ಬಿಕೊಂಡರು. ಚಿಪ್ಕೋ ಚಳವಳಿಯಲ್ಲಿ ಜನರು ಮರಗಳನ್ನು ತಬ್ಬಿಕೊಂಡು ರಕ್ಷಿಸಿದರು.',
    [['Tree Hugger Pledge', 'Write a pledge to protect trees and plant one sapling.', 'writing', 'low', ['Write 5 reasons trees are important', 'Write your pledge', 'Draw a tree you want to protect', 'Sign your pledge'], ['Notebook', 'Pencil'], 'How old is the oldest tree in your neighbourhood?'],
    ['Tree Survey', 'Identify and count trees in your school compound.', 'performing', 'mid', ['Walk around school', 'Count trees', 'Identify 3 types by leaves', 'Record in a table'], ['Notebook', 'Pencil'], 'Which tree is most common in your school?'],
    ['Chipko Drama', 'Act out the Chipko movement with classmates.', 'performing', 'high', ['Assign roles: Amrita, woodcutters, villagers', 'Write a short script', 'Perform the scene', 'Discuss what you learned'], [], 'What would you do if someone tried to cut a tree in your area?']],
    [['Amrita Devi saved trees by ___', ['Planting new ones', 'Hugging them', 'Watering them', 'Painting them'], 'Hugging them', 'She hugged the tree to prevent woodcutters from cutting it.'],
    ['The Chipko movement started in which state?', ['Kerala', 'Rajasthan', 'Uttarakhand', 'Punjab'], 'Uttarakhand', 'Chipko started in the Garhwal Himalayas of Uttarakhand.'],
    ['Trees release ___ which we breathe.', ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], 'Oxygen', 'Trees absorb CO₂ and release oxygen through photosynthesis.'],
    ['Deforestation means ___', ['Planting trees', 'Cutting down forests', 'Watering trees', 'Growing crops'], 'Cutting down forests', 'Deforestation is the large-scale removal of forests.']],
    ['Understand importance of trees', 'Learn about Chipko movement', 'Develop conservation mindset'], 'Hindi: Story of Amrita Devi'],

  ['e5', '5. Anita and the Honeybees', 'Bees and Insects', ['Bee colony structure', 'How honey is made', 'Pollination'],
    'A beehive has one queen bee, thousands of worker bees and a few drones. Worker bees collect nectar from flowers and make honey. Bees also carry pollen from flower to flower — this is called pollination.',
    'एक मधुमक्खी के छत्ते में एक रानी मधुमक्खी, हजारों कामकाजी मधुमक्खियाँ और कुछ नर मधुमक्खियाँ होती हैं।',
    'ಒಂದು ಜೇನುಗೂಡಿನಲ್ಲಿ ಒಂದು ರಾಣಿ ಜೇನು, ಸಾವಿರಾರು ಕೆಲಸಗಾರ ಜೇನುಗಳು ಮತ್ತು ಕೆಲವು ಗಂಡು ಜೇನುಗಳಿರುತ್ತವೆ.',
    [['Bee Colony Chart', 'Draw a beehive and label queen, workers and drones.', 'drawing', 'low', ['Draw a hexagonal honeycomb', 'Draw queen bee (largest)', 'Draw worker bees', 'Label each type and their job'], ['Paper', 'Crayons'], 'How many worker bees can a hive have?'],
    ['Honey Journey', 'Trace the journey of honey from flower to jar.', 'writing', 'mid', ['Step 1: Bee visits flower', 'Step 2: Collects nectar', 'Step 3: Returns to hive', 'Step 4: Nectar becomes honey'], ['Notebook', 'Pencil'], 'How long does it take bees to make 1 kg of honey?'],
    ['Pollination Experiment', 'Simulate pollination using cotton buds and chalk powder.', 'performing', 'high', ['Draw 4 paper flowers', 'Put chalk powder (pollen) on flower 1', 'Use cotton bud to transfer to flower 2', 'Observe and record'], ['Paper flowers', 'Cotton buds', 'Chalk powder'], 'What would happen to plants if there were no bees?']],
    [['Every beehive has one ___ bee.', ['King', 'Prince', 'Queen', 'Soldier'], 'Queen', 'The queen bee is the only bee that lays eggs in the hive.'],
    ['Bees make honey from ___', ['Water', 'Nectar', 'Pollen', 'Leaves'], 'Nectar', 'Bees collect nectar from flowers and convert it to honey.'],
    ['Carrying pollen from flower to flower is called ___', ['Germination', 'Pollination', 'Fertilisation', 'Photosynthesis'], 'Pollination', 'Pollination helps plants reproduce by transferring pollen.'],
    ['Worker bees are ___', ['Male', 'Female', 'Neither', 'Both'], 'Female', 'Worker bees are all female; drones are male.']],
    ['Understand bee colony structure', 'Learn how honey is made', 'Appreciate pollination'], 'Maths: Hexagonal patterns in honeycomb'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of evsMore) {
  evsChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

// EVS chapters 6-27 (key ones)
const evsRest = [
  ['e6', '6. Omana\'s Journey', 'Train Travel in India', ['Indian Railways', 'Reading a train timetable', 'States and landscapes'],
    'India has one of the largest railway networks in the world. Trains pass through mountains, plains, rivers and forests. A PNR number is your unique ticket ID.',
    'भारत में दुनिया के सबसे बड़े रेलवे नेटवर्क में से एक है। ट्रेनें पहाड़ों, मैदानों, नदियों और जंगलों से गुजरती हैं।',
    'ಭಾರತದಲ್ಲಿ ವಿಶ್ವದ ಅತಿ ದೊಡ್ಡ ರೈಲ್ವೆ ಜಾಲಗಳಲ್ಲಿ ಒಂದಿದೆ.',
    [['Train Route Map', 'Draw a map of a train journey from your city to another.', 'drawing', 'low', ['Choose start and end city', 'Draw the route on India map', 'Mark 3 states the train passes through', 'Write distance and time'], ['India map', 'Pencil', 'Crayons'], 'What landscapes would you see on this journey?'],
    ['Timetable Reader', 'Read a train timetable and answer questions.', 'calculating', 'mid', ['Find departure time', 'Find arrival time', 'Calculate journey duration', 'Find the fastest train'], ['Printed timetable', 'Notebook'], 'If the train is 2 hours late, when will it arrive?'],
    ['Journey Journal', 'Write a journal of an imaginary train journey across India.', 'writing', 'high', ['Choose a route (e.g. Delhi to Chennai)', 'Write about each state you pass', 'Describe food, language, landscape', 'Draw 3 things you see'], ['Notebook', 'Pencil'], 'How many states does the longest train route in India cross?']],
    [['India\'s railway network is one of the ___ in the world.', ['Smallest', 'Oldest', 'Largest', 'Fastest'], 'Largest', 'Indian Railways is one of the largest rail networks globally.'],
    ['A PNR number is ___', ['Train name', 'Platform number', 'Unique ticket ID', 'Coach number'], 'Unique ticket ID', 'PNR (Passenger Name Record) is your unique booking reference.'],
    ['Which landscape would you NOT see from a train in India?', ['Mountains', 'Deserts', 'Oceans', 'Forests'], 'Oceans', 'Trains travel on land, not through oceans.'],
    ['Train timetables show ___', ['Weather', 'Departure and arrival times', 'Ticket prices only', 'Passenger names'], 'Departure and arrival times', 'Timetables list all stops with times.']],
    ['Understand Indian Railways', 'Read a timetable', 'Identify Indian states and landscapes'], 'Maths: Calculating time and distance'],

  ['e11', '11. The Valley of Flowers', 'Plants and Flowers', ['Valley of Flowers, Uttarakhand', 'Edible flowers and plants', 'Medicinal plants'],
    'The Valley of Flowers in Uttarakhand is a UNESCO World Heritage Site. It blooms with hundreds of wild flowers in summer. Some flowers like Kachnar and Sahjan are eaten as vegetables. Many plants like Tulsi and Neem have medicinal properties.',
    'उत्तराखंड में फूलों की घाटी एक यूनेस्को विश्व धरोहर स्थल है। गर्मियों में यहाँ सैकड़ों जंगली फूल खिलते हैं।',
    'ಉತ್ತರಾಖಂಡದ ಹೂವಿನ ಕಣಿವೆ ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ.',
    [['Flower Scrapbook', 'Collect and press 5 different flowers and label them.', 'performing', 'low', ['Collect 5 flowers from garden', 'Press between book pages for 3 days', 'Stick in notebook', 'Label: name, colour, smell'], ['Flowers', 'Heavy book', 'Notebook', 'Glue'], 'Which flower has the strongest smell?'],
    ['Edible Plants Chart', 'Make a chart of 10 plants we eat.', 'drawing', 'mid', ['List: spinach, banana flower, drumstick, lotus stem...', 'Draw each plant', 'Write which part we eat', 'Write one health benefit'], ['Paper', 'Crayons'], 'How many of these plants grow in your area?'],
    ['Medicinal Plant Garden', 'Grow a tulsi plant and record its growth for 2 weeks.', 'performing', 'high', ['Plant tulsi seeds in a pot', 'Water daily', 'Measure height every 3 days', 'Record in a table and draw a graph'], ['Pot', 'Soil', 'Tulsi seeds', 'Ruler'], 'What are 3 uses of tulsi in your home?']],
    [['The Valley of Flowers is in ___', ['Kerala', 'Uttarakhand', 'Punjab', 'Bihar'], 'Uttarakhand', 'The Valley of Flowers National Park is in Chamoli district, Uttarakhand.'],
    ['Kachnar flowers are used as ___', ['Medicine', 'Decoration only', 'Vegetable', 'Perfume'], 'Vegetable', 'Kachnar flowers are cooked and eaten as a vegetable in India.'],
    ['Tulsi is known for its ___ properties.', ['Poisonous', 'Medicinal', 'Decorative only', 'Sour taste'], 'Medicinal', 'Tulsi (Holy Basil) is used in Ayurvedic medicine for colds and immunity.'],
    ['UNESCO protects places of ___', ['Political importance', 'Military importance', 'Natural and cultural heritage', 'Economic value'], 'Natural and cultural heritage', 'UNESCO World Heritage Sites are of outstanding universal value.']],
    ['Identify edible and medicinal plants', 'Learn about Valley of Flowers', 'Appreciate plant diversity'], 'Maths: Measuring plant growth'],

  ['e27', '27. Chuskit Goes to School', 'Inclusion and Accessibility', ['Chuskit\'s story', 'Challenges faced by differently-abled people', 'Making spaces accessible'],
    'Chuskit is a 10-year-old girl in Ladakh who uses a wheelchair. Her father and the community built a bridge so she could cross the river to reach school. Everyone deserves the right to education.',
    'चुस्कित लद्दाख की 10 साल की लड़की है जो व्हीलचेयर का उपयोग करती है। उसके पिता और समुदाय ने एक पुल बनाया ताकि वह नदी पार कर सके।',
    'ಚುಸ್ಕಿತ್ ಲಡಾಖ್‌ನ 10 ವರ್ಷದ ಹುಡುಗಿ, ಚಕ್ರದ ಕುರ್ಚಿ ಬಳಸುತ್ತಾಳೆ. ಅವಳ ತಂದೆ ಮತ್ತು ಸಮುದಾಯ ಸೇತುವೆ ನಿರ್ಮಿಸಿ ಅವಳು ಶಾಲೆಗೆ ಹೋಗಲು ಸಾಧ್ಯವಾಯಿತು.',
    [['Empathy Walk', 'Spend 10 minutes doing tasks with one hand tied behind your back.', 'performing', 'low', ['Tie one hand behind back', 'Try: writing, eating, opening a bottle', 'Record what was difficult', 'Discuss how to help differently-abled people'], ['Cloth for tying'], 'How did it feel? What did you learn?'],
    ['Accessibility Audit', 'Check your school for accessibility features.', 'performing', 'mid', ['Look for: ramps, wide doors, handrails', 'Check toilets for wheelchair access', 'List what is missing', 'Suggest improvements'], ['Notebook', 'Pencil'], 'Is your school fully accessible?'],
    ['Inclusion Campaign', 'Make a poster about the right to education for all.', 'drawing', 'high', ['Write: "Education is for Everyone"', 'Draw children of different abilities', 'List 3 ways to make schools inclusive', 'Present to class'], ['Paper', 'Crayons'], 'What can YOU do to include everyone in your class?']],
    [['Chuskit uses a ___ to move around.', ['Crutches', 'Wheelchair', 'Walking stick', 'Bicycle'], 'Wheelchair', 'Chuskit has a physical disability and uses a wheelchair.'],
    ['What did Chuskit\'s community build for her?', ['A ramp', 'A bridge', 'A new school', 'A road'], 'A bridge', 'The community built a bridge over the river so Chuskit could reach school.'],
    ['Every child has the right to ___', ['Work', 'Education', 'Drive', 'Vote'], 'Education', 'The Right to Education Act guarantees free education for all children in India.'],
    ['Making spaces accessible means ___', ['Making them expensive', 'Making them usable by everyone', 'Making them smaller', 'Making them prettier'], 'Making them usable by everyone', 'Accessibility ensures people with disabilities can use spaces independently.']],
    ['Understand challenges faced by differently-abled people', 'Appreciate inclusion', 'Advocate for equal rights'], 'Hindi: Story of Sunita\'s wheelchair'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of evsRest) {
  evsChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

w(subject('evsSubject', 'science', 'EVS (Looking Around)', '🌿', '#00B894', evsChapters));
w('');

// ── ENGLISH ───────────────────────────────────────────────────────────────────
const englishChapters = [];
const englishData = [
  ['en1', 'Unit 1: Wake Up!', 'Poem: Wake Up!', ['Reading the poem aloud', 'Animals in the poem', 'Describing morning sounds'],
    'Wake up! The sun is up. The birds are singing. The bees are buzzing. The flowers are blooming. It is a beautiful morning!',
    'उठो! सूरज उग आया है। पक्षी गा रहे हैं। मधुमक्खियाँ गुनगुना रही हैं। फूल खिल रहे हैं।',
    'ಎದ್ದೇಳಿ! ಸೂರ್ಯ ಉದಯಿಸಿದ್ದಾನೆ. ಹಕ್ಕಿಗಳು ಹಾಡುತ್ತಿವೆ. ಜೇನ್ನೊಣಗಳು ಝೇಂಕರಿಸುತ್ತಿವೆ.',
    [['Read Aloud', 'Read the poem aloud with expression and actions.', 'speaking', 'low', ['Read poem once silently', 'Identify action words', 'Read aloud with actions', 'Record yourself reading'], [], 'Can you add one more verse to the poem?'],
    ['Morning Sounds', 'Go outside for 5 minutes and list all sounds you hear.', 'listening', 'mid', ['Sit quietly outside', 'Listen carefully', 'Write every sound you hear', 'Classify: animal, nature, human-made'], ['Notebook', 'Pencil'], 'Which sound do you like most in the morning?'],
    ['Poem Illustration', 'Draw a picture for each stanza of the poem.', 'drawing', 'high', ['Read each stanza', 'Draw what you imagine', 'Add colour', 'Write the stanza below each drawing'], ['Paper', 'Crayons'], 'Which stanza did you enjoy illustrating most?']],
    [['Who says "Buzz-buzz" in the poem?', ['Birds', 'Bees', 'Dogs', 'Cats'], 'Bees', 'Bees make a buzzing sound — "buzz-buzz."'],
    ['What does the sun do in the poem?', ['Sets', 'Rises/comes up', 'Hides', 'Shines at night'], 'Rises/comes up', 'The poem describes the sun rising in the morning.'],
    ['The poem is about ___', ['Night time', 'Morning time', 'Afternoon', 'Evening'], 'Morning time', 'The poem describes a beautiful morning with birds, bees and flowers.'],
    ['What do flowers do in the poem?', ['Sleep', 'Bloom', 'Fall', 'Dance'], 'Bloom', 'Flowers bloom (open up) in the morning sunlight.']],
    ['Read a poem with expression', 'Identify rhyming words', 'Describe morning sounds'], 'EVS: Animals and their sounds'],

  ['en2', 'Unit 2: Neha\'s Alarm Clock', 'Story: Neha\'s Alarm Clock', ['Reading comprehension', 'Sequence of events', 'Describing characters'],
    'Neha always woke up late. One day, her mother gave her an alarm clock. The next morning, the alarm rang at 6 o\'clock. Neha woke up, got ready quickly and reached school on time.',
    'नेहा हमेशा देर से उठती थी। एक दिन उसकी माँ ने उसे एक अलार्म घड़ी दी। अगली सुबह अलार्म 6 बजे बजा।',
    'ನೇಹಾ ಯಾವಾಗಲೂ ತಡವಾಗಿ ಎದ್ದೇಳುತ್ತಿದ್ದಳು. ಒಂದು ದಿನ ಅವಳ ತಾಯಿ ಅಲಾರಂ ಗಡಿಯಾರ ಕೊಟ್ಟರು.',
    [['Story Sequence', 'Put the events of the story in the correct order.', 'writing', 'low', ['Write 5 events from the story', 'Cut them into strips', 'Arrange in correct order', 'Paste in sequence'], ['Paper', 'Scissors', 'Glue'], 'What would have happened if Neha had no alarm clock?'],
    ['Character Description', 'Write 5 sentences describing Neha.', 'writing', 'mid', ['Think about Neha\'s habits', 'Write about her problem', 'Write about the solution', 'Write about the change in her'], ['Notebook', 'Pencil'], 'How is Neha similar to or different from you?'],
    ['My Morning Routine', 'Write and illustrate your morning routine.', 'writing', 'high', ['List 8 things you do each morning', 'Write the time for each', 'Draw each activity', 'Write sentences about each'], ['Paper', 'Crayons'], 'How can you make your morning routine better?']],
    [['Why did Neha\'s mother give her an alarm clock?', ['As a birthday gift', 'Because she woke up late', 'For decoration', 'To learn time'], 'Because she woke up late', 'Neha had a habit of waking up late, so her mother gave her an alarm clock.'],
    ['What time did the alarm ring?', ['5 o\'clock', '6 o\'clock', '7 o\'clock', '8 o\'clock'], '6 o\'clock', 'The alarm rang at 6 o\'clock in the morning.'],
    ['How did Neha feel after reaching school on time?', ['Sad', 'Angry', 'Happy/proud', 'Tired'], 'Happy/proud', 'Neha felt good about being on time for the first time.'],
    ['The opposite of "late" is ___', ['Slow', 'Early', 'Fast', 'Quick'], 'Early', 'Late and early are antonyms (opposites).']],
    ['Read and understand a story', 'Sequence events', 'Write simple sentences'], 'Maths: Reading time on a clock'],

  ['en5', 'Unit 5: Helen Keller', 'Biography: Helen Keller', ['Reading comprehension', 'Overcoming challenges', 'Describing feelings'],
    'Helen Keller was blind and deaf from the age of 19 months. Her teacher Anne Sullivan taught her to communicate through touch. Helen learned to read, write and speak. She became a famous author and activist.',
    'हेलेन केलर 19 महीने की उम्र से अंधी और बहरी थीं। उनकी शिक्षिका ऐनी सुलिवन ने उन्हें स्पर्श के माध्यम से संवाद करना सिखाया।',
    'ಹೆಲೆನ್ ಕೆಲ್ಲರ್ 19 ತಿಂಗಳ ವಯಸ್ಸಿನಿಂದ ಕುರುಡು ಮತ್ತು ಕಿವುಡು. ಅವರ ಶಿಕ್ಷಕಿ ಆನ್ ಸುಲ್ಲಿವಾನ್ ಸ್ಪರ್ಶದ ಮೂಲಕ ಸಂವಹನ ಕಲಿಸಿದರು.',
    [['Braille Alphabet', 'Learn to write your name in Braille using dots.', 'writing', 'low', ['Look up the Braille alphabet', 'Find the dots for each letter of your name', 'Draw the dots on paper', 'Show a friend'], ['Paper', 'Pencil'], 'How do blind people read books?'],
    ['Overcoming Challenges', 'Write about a challenge you overcame.', 'writing', 'mid', ['Think of a difficulty you faced', 'Write what the challenge was', 'Write how you overcame it', 'Write what you learned'], ['Notebook', 'Pencil'], 'What helped you most when things were difficult?'],
    ['Inspirational Biography', 'Research another person who overcame a disability.', 'writing', 'high', ['Choose: Stephen Hawking, Sudha Chandran, or another', 'Write their story', 'Write what inspired you', 'Present to class'], ['Books', 'Notebook'], 'What does Helen Keller\'s story teach us?']],
    [['Helen Keller was ___', ['Only blind', 'Only deaf', 'Both blind and deaf', 'Neither'], 'Both blind and deaf', 'Helen Keller lost both sight and hearing after an illness at 19 months.'],
    ['Who taught Helen Keller?', ['Her mother', 'Anne Sullivan', 'A doctor', 'Her father'], 'Anne Sullivan', 'Anne Sullivan was Helen\'s dedicated teacher and companion.'],
    ['Helen Keller communicated through ___', ['Sign language only', 'Touch and finger spelling', 'Speaking only', 'Writing only'], 'Touch and finger spelling', 'Anne Sullivan spelled words into Helen\'s hand using touch.'],
    ['Helen Keller\'s story teaches us ___', ['Give up when things are hard', 'Determination can overcome any obstacle', 'Disabilities cannot be overcome', 'Only special people succeed'], 'Determination can overcome any obstacle', 'Helen\'s life shows that with determination and support, anything is possible.']],
    ['Read and understand a biography', 'Understand overcoming challenges', 'Write about personal experiences'], 'EVS: Differently-abled people'],

  ['en7', 'Unit 7: The Giving Tree', 'Story: The Giving Tree', ['Reading comprehension', 'Friendship and giving', 'Describing a tree\'s gifts'],
    'There was a tree that loved a little boy. The tree gave the boy apples to eat, branches to swing on, and shade to rest in. As the boy grew older, the tree gave its trunk for a boat and its stump to sit on. The tree was happy to give.',
    'एक पेड़ था जो एक छोटे लड़के से प्यार करता था। पेड़ ने लड़के को खाने के लिए सेब, झूलने के लिए डालियाँ और आराम के लिए छाया दी।',
    'ಒಂದು ಮರ ಒಂದು ಸಣ್ಣ ಹುಡುಗನನ್ನು ಪ್ರೀತಿಸುತ್ತಿತ್ತು. ಮರ ಹುಡುಗನಿಗೆ ತಿನ್ನಲು ಸೇಬು, ಜೋಕಾಲಿ ಆಡಲು ಕೊಂಬೆಗಳು ಮತ್ತು ವಿಶ್ರಮಿಸಲು ನೆರಳು ನೀಡಿತು.',
    [['Gifts of the Tree', 'List all the things the tree gave the boy.', 'writing', 'low', ['Read the story', 'List each gift', 'Write who benefited', 'Write how you would thank the tree'], ['Notebook', 'Pencil'], 'What would you give to a tree in return?'],
    ['Giving and Receiving', 'Write about someone who gives a lot to you.', 'writing', 'mid', ['Think of a person who gives to you', 'Write what they give', 'Write how it makes you feel', 'Write how you can give back'], ['Notebook', 'Pencil'], 'How does it feel to give something to someone?'],
    ['Tree Appreciation Letter', 'Write a letter from the boy to the tree.', 'writing', 'high', ['Start: "Dear Tree..."', 'Thank the tree for each gift', 'Apologise for taking so much', 'Promise to protect trees'], ['Notebook', 'Pencil'], 'What is the message of this story for us today?']],
    [['What did the tree give the boy to eat?', ['Mangoes', 'Apples', 'Bananas', 'Oranges'], 'Apples', 'The tree gave the boy apples to eat.'],
    ['What did the boy use the tree\'s trunk for?', ['A house', 'A boat', 'A table', 'A bridge'], 'A boat', 'The boy cut the trunk to make a boat.'],
    ['The tree was happy because ___', ['It grew tall', 'It could give to the boy', 'It had many leaves', 'It was in a forest'], 'It could give to the boy', 'The tree found happiness in giving to the boy it loved.'],
    ['The story teaches us about ___', ['Cutting trees', 'Selfless giving and love', 'Making boats', 'Growing apples'], 'Selfless giving and love', 'The tree gives everything without expecting anything in return.']],
    ['Read and understand a story', 'Understand themes of giving and friendship', 'Write a letter'], 'EVS: Trees and conservation'],

  ['en9', 'Unit 9: Pinocchio', 'Story: Pinocchio', ['Reading comprehension', 'Honesty and truth', 'Story characters'],
    'Pinocchio was a wooden puppet who wanted to be a real boy. Every time he told a lie, his nose grew longer. His father Geppetto loved him very much. Pinocchio learned that honesty is the most important quality.',
    'पिनोकियो एक लकड़ी का पुतला था जो एक असली लड़का बनना चाहता था। जब भी वह झूठ बोलता, उसकी नाक लंबी हो जाती।',
    'ಪಿನೋಕಿಯೋ ಒಂದು ಮರದ ಗೊಂಬೆ, ನಿಜವಾದ ಹುಡುಗನಾಗಲು ಬಯಸುತ್ತಿತ್ತು. ಅವನು ಸುಳ್ಳು ಹೇಳಿದಾಗಲೆಲ್ಲ ಅವನ ಮೂಗು ಉದ್ದವಾಗುತ್ತಿತ್ತು.',
    [['Honesty Pledge', 'Write a pledge to always be honest.', 'writing', 'low', ['Write: "I promise to..."', 'List 3 situations where honesty is hard', 'Write why honesty matters', 'Sign your pledge'], ['Notebook', 'Pencil'], 'Has telling the truth ever been difficult for you?'],
    ['Character Analysis', 'Write about Pinocchio\'s character — his faults and good qualities.', 'writing', 'mid', ['List Pinocchio\'s faults', 'List his good qualities', 'Write how he changed', 'Write what you learned from him'], ['Notebook', 'Pencil'], 'Do you think Pinocchio was a good person at heart?'],
    ['Story Retelling', 'Retell the story of Pinocchio in 10 sentences.', 'writing', 'high', ['Write the beginning', 'Write the problem', 'Write what happened', 'Write the ending and moral'], ['Notebook', 'Pencil'], 'Can you write a modern version of Pinocchio?']],
    [['What happened when Pinocchio lied?', ['He grew taller', 'His nose grew longer', 'He became invisible', 'He turned to wood'], 'His nose grew longer', 'Pinocchio\'s nose grew as a sign of his dishonesty.'],
    ['What did Pinocchio want to become?', ['A king', 'A real boy', 'A puppet master', 'A sailor'], 'A real boy', 'Pinocchio\'s greatest wish was to become a real human boy.'],
    ['Who made Pinocchio?', ['A fairy', 'Geppetto', 'A wizard', 'His mother'], 'Geppetto', 'Geppetto was the woodcarver who made Pinocchio.'],
    ['The story teaches us that ___', ['Lying is fun', 'Honesty is important', 'Puppets are real', 'Noses can grow'], 'Honesty is important', 'Pinocchio\'s journey shows that honesty leads to true happiness.']],
    ['Read and understand a classic story', 'Understand the value of honesty', 'Write a story summary'], 'Hindi: Stories about truth and honesty'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of englishData) {
  englishChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

w(subject('englishSubject', 'english', 'English (Marigold)', '📖', '#0984E3', englishChapters));
w('');

// ── HINDI ─────────────────────────────────────────────────────────────────────
const hindiChapters = [];
const hindiData = [
  ['h1', '१. मन के भोले-भाले बादल', 'कविता: बादल', ['बादलों का वर्णन', 'कविता का भाव', 'नए शब्द सीखना'],
    'This poem describes clouds as innocent and playful children. The clouds puff up like balloons, have fluffy hair, and run across the sky.',
    'यह कविता बादलों को भोले-भाले बच्चों की तरह बताती है। बादल गुब्बारों की तरह फूल जाते हैं, उनके झब्बर-झब्बर बाल होते हैं और वे आसमान में दौड़ते हैं।',
    'ಈ ಕವಿತೆ ಮೋಡಗಳನ್ನು ಮುಗ್ಧ ಮತ್ತು ತುಂಟ ಮಕ್ಕಳಂತೆ ವರ್ಣಿಸುತ್ತದೆ.',
    [['कविता पाठ', 'कविता को भाव के साथ जोर से पढ़ो।', 'speaking', 'low', ['कविता एक बार चुपचाप पढ़ो', 'कठिन शब्द ढूँढो', 'भाव के साथ जोर से पढ़ो', 'अपनी आवाज़ रिकॉर्ड करो'], [], 'बादलों के बारे में अपनी एक कविता लिखो।'],
    ['बादल चित्र', 'बादलों के अलग-अलग आकार बनाओ।', 'drawing', 'mid', ['नीले कागज़ पर सफेद बादल बनाओ', 'अलग-अलग आकार दो', 'बादलों में चेहरे बनाओ', 'कविता की पंक्तियाँ लिखो'], ['नीला कागज़', 'सफेद रंग'], 'बादल किस जानवर जैसे दिखते हैं?'],
    ['मौसम डायरी', 'एक हफ्ते तक आसमान देखो और लिखो।', 'writing', 'high', ['हर दिन आसमान देखो', 'बादलों का वर्णन लिखो', 'मौसम नोट करो', 'चित्र बनाओ'], ['डायरी', 'पेंसिल'], 'बारिश से पहले बादल कैसे दिखते हैं?']],
    [['कविता में बादल किसके जैसे हैं?', ['बूढ़े लोग', 'भोले-भाले बच्चे', 'पहाड़', 'नदी'], 'भोले-भाले बच्चे', 'कविता में बादलों को मासूम बच्चों की तरह बताया गया है।'],
    ['"भोला" का अर्थ है ___', ['चालाक', 'मासूम/सीधा', 'बड़ा', 'काला'], 'मासूम/सीधा', 'भोला का अर्थ है सरल और मासूम।'],
    ['बादल आसमान में क्या करते हैं?', ['सोते हैं', 'दौड़ते हैं', 'खाते हैं', 'पढ़ते हैं'], 'दौड़ते हैं', 'कविता में बादल आसमान में दौड़ते हुए बताए गए हैं।'],
    ['यह कविता किस मौसम के बारे में है?', ['सर्दी', 'गर्मी', 'बरसात', 'वसंत'], 'बरसात', 'बादलों की कविता बरसात के मौसम से जुड़ी है।']],
    ['कविता को भाव के साथ पढ़ना', 'नए शब्दों का अर्थ जानना', 'बादलों का वर्णन करना'], 'EVS: मौसम और बादल'],

  ['h2', '२. जैसा सवाल वैसा जवाब', 'कहानी: बीरबल की चतुराई', ['बीरबल की बुद्धिमानी', 'अकबर के सवाल', 'चतुर जवाब देना'],
    'This story is about Birbal\'s wit. Emperor Akbar asked tricky questions and Birbal always gave clever answers. The story teaches us that intelligence is more powerful than strength.',
    'यह कहानी बीरबल की चतुराई के बारे में है। बादशाह अकबर ने मुश्किल सवाल पूछे और बीरबल ने हमेशा चतुर जवाब दिए।',
    'ಈ ಕಥೆ ಬೀರ್ಬಲ್‌ನ ಚಾಣಾಕ್ಷತೆಯ ಬಗ್ಗೆ. ಚಕ್ರವರ್ತಿ ಅಕ್ಬರ್ ಕಷ್ಟದ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿದ ಮತ್ತು ಬೀರ್ಬಲ್ ಯಾವಾಗಲೂ ಚಾಣಾಕ್ಷ ಉತ್ತರ ನೀಡಿದ.',
    [['कहानी सुनाओ', 'बीरबल की कहानी अपने शब्दों में सुनाओ।', 'speaking', 'low', ['कहानी पढ़ो', 'मुख्य घटनाएँ याद करो', 'दोस्त को सुनाओ', 'बीरबल का जवाब बताओ'], [], 'बीरबल की एक और कहानी ढूँढो।'],
    ['चतुर जवाब', 'पाँच मुश्किल सवालों के चतुर जवाब लिखो।', 'writing', 'mid', ['सवाल: "दुनिया का केंद्र कहाँ है?"', 'सोचो और चतुर जवाब लिखो', 'दोस्त से पूछो', 'सबसे अच्छा जवाब चुनो'], ['नोटबुक', 'पेंसिल'], 'क्या तुम बीरबल जैसे चतुर हो?'],
    ['नाटक', 'अकबर-बीरबल का एक दृश्य अभिनय करो।', 'performing', 'high', ['भूमिकाएँ बाँटो: अकबर, बीरबल, दरबारी', 'संवाद लिखो', 'अभिनय करो', 'कक्षा में प्रस्तुत करो'], [], 'नाटक में सबसे मज़ेदार हिस्सा कौन सा था?']],
    [['बीरबल किसके दरबार में थे?', ['औरंगज़ेब', 'अकबर', 'शाहजहाँ', 'बाबर'], 'अकबर', 'बीरबल मुगल बादशाह अकबर के नवरत्नों में से एक थे।'],
    ['बीरबल किस बात के लिए प्रसिद्ध थे?', ['ताकत', 'बुद्धिमानी', 'धन', 'गाना'], 'बुद्धिमानी', 'बीरबल अपनी असाधारण बुद्धि और चतुराई के लिए जाने जाते थे।'],
    ['"जैसा सवाल वैसा जवाब" का अर्थ है ___', ['हर सवाल का एक ही जवाब', 'सवाल जैसा हो वैसा जवाब दो', 'सवाल मत पूछो', 'जवाब मत दो'], 'सवाल जैसा हो वैसा जवाब दो', 'इसका अर्थ है कि जैसा प्रश्न हो, उसी के अनुसार उत्तर देना चाहिए।'],
    ['बुद्धि किससे बड़ी होती है?', ['धन', 'ताकत', 'उम्र', 'रूप'], 'ताकत', 'बीरबल की कहानियाँ सिखाती हैं कि बुद्धि शारीरिक ताकत से बड़ी होती है।']],
    ['कहानी को समझना और सुनाना', 'चतुर सोच विकसित करना', 'संवाद लिखना'], 'English: Nasruddin\'s clever stories'],

  ['h9', '९. स्वतंत्रता की ओर', 'कहानी: गांधीजी और नमक', ['नमक सत्याग्रह', 'स्वतंत्रता संग्राम', 'अहिंसा का महत्व'],
    'This story is about Gandhi\'s Salt March (Dandi March) of 1930. Gandhi walked 240 miles to the sea to make salt and break the British salt law.',
    'यह कहानी 1930 के गांधीजी के नमक सत्याग्रह (दांडी मार्च) के बारे में है। गांधीजी ने नमक बनाने और अंग्रेजों के नमक कानून को तोड़ने के लिए समुद्र तक 240 मील पैदल चले।',
    'ಈ ಕಥೆ 1930ರ ಗಾಂಧೀಜಿಯ ಉಪ್ಪಿನ ಸತ್ಯಾಗ್ರಹ (ದಂಡಿ ಮಾರ್ಚ್) ಬಗ್ಗೆ.',
    [['दांडी मार्च नक्शा', 'गांधीजी के दांडी मार्च का नक्शा बनाओ।', 'drawing', 'low', ['साबरमती आश्रम से दांडी तक का रास्ता बनाओ', 'दूरी लिखो: 240 मील', 'रास्ते में 3 जगह चिह्नित करो', 'तारीख लिखो: 12 मार्च 1930'], ['भारत का नक्शा', 'पेंसिल'], 'गांधीजी ने नमक कानून क्यों तोड़ा?'],
    ['स्वतंत्रता सेनानी', 'किसी एक स्वतंत्रता सेनानी के बारे में लिखो।', 'writing', 'mid', ['एक सेनानी चुनो: भगत सिंह, सुभाष चंद्र बोस, रानी लक्ष्मीबाई', 'उनका जन्म और कार्य लिखो', 'उनका योगदान लिखो', 'चित्र बनाओ'], ['नोटबुक', 'पेंसिल'], 'तुम्हें कौन सा स्वतंत्रता सेनानी सबसे प्रेरणादायक लगता है?'],
    ['अहिंसा का नाटक', 'गांधीजी के अहिंसा के सिद्धांत पर एक नाटक करो।', 'performing', 'high', ['भूमिकाएँ: गांधीजी, अंग्रेज अधिकारी, भारतीय जनता', 'संवाद लिखो', 'अहिंसा का संदेश दिखाओ', 'कक्षा में प्रस्तुत करो'], [], 'अहिंसा का क्या अर्थ है? क्या यह कमज़ोरी है?']],
    [['दांडी मार्च कब हुआ?', ['1920', '1930', '1942', '1947'], '1930', 'गांधीजी ने 12 मार्च 1930 को दांडी मार्च शुरू किया।'],
    ['गांधीजी ने नमक कानून क्यों तोड़ा?', ['नमक पसंद था', 'अंग्रेजों के अन्यायपूर्ण कानून का विरोध', 'समुद्र देखना था', 'व्यायाम के लिए'], 'अंग्रेजों के अन्यायपूर्ण कानून का विरोध', 'अंग्रेजों ने भारतीयों पर नमक बनाने पर प्रतिबंध लगाया था।'],
    ['"अहिंसा" का अर्थ है ___', ['हिंसा करना', 'हिंसा न करना', 'लड़ाई करना', 'भागना'], 'हिंसा न करना', 'अहिंसा गांधीजी का मूल सिद्धांत था — बिना हिंसा के विरोध।'],
    ['गांधीजी को प्यार से क्या कहते हैं?', ['नेताजी', 'बापू/राष्ट्रपिता', 'पंडितजी', 'सरदार'], 'बापू/राष्ट्रपिता', 'गांधीजी को "बापू" और "राष्ट्रपिता" कहा जाता है।']],
    ['स्वतंत्रता संग्राम को समझना', 'अहिंसा का महत्व जानना', 'देशभक्ति की भावना विकसित करना'], 'EVS: भारत का इतिहास और स्वतंत्रता'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of hindiData) {
  hindiChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

// Add remaining Hindi chapters h3-h8, h10-h14 as stubs with real content
const hindiStubs = [
  ['h3', '३. किरमिच की गेंद', 'कहानी: ईमानदारी', ['ईमानदारी का महत्व', 'गेंद की कहानी', 'सही और गलत'],
    'This story is about a cricket ball that was found. The child who found it had to decide whether to keep it or return it. The story teaches the importance of honesty.',
    'यह कहानी एक क्रिकेट की गेंद के बारे में है जो मिली थी। जिस बच्चे को गेंद मिली उसे तय करना था कि उसे रखे या वापस करे।',
    'ಈ ಕಥೆ ಸಿಕ್ಕ ಕ್ರಿಕೆಟ್ ಚೆಂಡಿನ ಬಗ್ಗೆ. ಚೆಂಡು ಸಿಕ್ಕ ಮಗು ಅದನ್ನು ಇಟ್ಟುಕೊಳ್ಳಬೇಕೋ ಅಥವಾ ಹಿಂದಿರುಗಿಸಬೇಕೋ ಎಂದು ನಿರ್ಧರಿಸಬೇಕಿತ್ತು.',
    [['ईमानदारी की कहानी', 'एक ऐसी कहानी लिखो जब तुमने ईमानदारी दिखाई।', 'writing', 'low', ['एक घटना याद करो', 'शुरुआत लिखो', 'क्या हुआ लिखो', 'अंत और सीख लिखो'], ['नोटबुक', 'पेंसिल'], 'ईमानदारी से काम करने पर कैसा लगा?'],
    ['सही या गलत', 'पाँच परिस्थितियाँ पढ़ो और बताओ क्या करना चाहिए।', 'writing', 'mid', ['परिस्थिति 1: किसी का पैसा मिला', 'परिस्थिति 2: परीक्षा में नकल का मौका', 'परिस्थिति 3: दोस्त का खिलौना टूटा', 'हर बार सही काम लिखो'], ['नोटबुक', 'पेंसिल'], 'ईमानदारी हमेशा आसान क्यों नहीं होती?'],
    ['नाटक: गेंद वापस करो', 'कहानी का नाटक करो।', 'performing', 'high', ['भूमिकाएँ बाँटो', 'संवाद लिखो', 'अभिनय करो', 'सीख पर चर्चा करो'], [], 'अगर तुम उस बच्चे की जगह होते तो क्या करते?']],
    [['किरमिच की गेंद किस खेल में इस्तेमाल होती है?', ['फुटबॉल', 'क्रिकेट', 'हॉकी', 'बैडमिंटन'], 'क्रिकेट', 'किरमिच (leather) की गेंद क्रिकेट में इस्तेमाल होती है।'],
    ['कहानी की मुख्य सीख क्या है?', ['खेलना अच्छा है', 'ईमानदारी सबसे अच्छी नीति है', 'गेंद महँगी होती है', 'दोस्त बनाओ'], 'ईमानदारी सबसे अच्छी नीति है', 'कहानी सिखाती है कि हमेशा सच बोलना और ईमानदार रहना चाहिए।'],
    ['"ईमानदारी" का अर्थ है ___', ['झूठ बोलना', 'सच बोलना और सही काम करना', 'चालाकी करना', 'चुप रहना'], 'सच बोलना और सही काम करना', 'ईमानदारी का अर्थ है सत्य बोलना और नैतिक रूप से सही काम करना।'],
    ['अगर कोई चीज़ मिले तो क्या करना चाहिए?', ['रख लो', 'असली मालिक को वापस करो', 'फेंक दो', 'बेच दो'], 'असली मालिक को वापस करो', 'ईमानदारी यही है कि मिली हुई चीज़ उसके मालिक को वापस करें।']],
    ['ईमानदारी का महत्व समझना', 'कहानी से सीख लेना', 'सही निर्णय लेना'], 'English: Pinocchio — honesty'],
  ['h4', '४. पापा जब बच्चे थे', 'कहानी: बचपन की यादें', ['पुराने ज़माने का बचपन', 'बदलाव और समानताएँ', 'परिवार की कहानियाँ'],
    'This story is about a father sharing memories of his childhood — the games he played, the food he ate, and the mischief he got into.',
    'यह कहानी एक पिता की बचपन की यादों के बारे में है। वे उन खेलों, खाने और शरारतों के बारे में बताते हैं जो उन्होंने बचपन में किए।',
    'ಈ ಕಥೆ ತಂದೆ ತನ್ನ ಬಾಲ್ಯದ ನೆನಪುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಬಗ್ಗೆ.',
    [['दादा-दादी का इंटरव्यू', 'दादा-दादी या माता-पिता से उनके बचपन के बारे में पूछो।', 'speaking', 'low', ['5 सवाल तैयार करो', 'इंटरव्यू लो', 'जवाब लिखो', 'कक्षा में बताओ'], ['नोटबुक', 'पेंसिल'], 'उनके बचपन में क्या था जो आज नहीं है?'],
    ['तब और अब', 'पुराने और नए खेलों की तुलना करो।', 'writing', 'mid', ['पुराने खेल: गिल्ली-डंडा, कंचे, पतंग', 'नए खेल: वीडियो गेम, क्रिकेट', 'दोनों की तुलना करो', 'कौन से खेल बेहतर हैं?'], ['नोटबुक', 'पेंसिल'], 'क्या तुम पुराने खेल खेलना चाहोगे?'],
    ['मेरे बचपन की कहानी', 'अपने बचपन की एक मज़ेदार घटना लिखो।', 'writing', 'high', ['एक मज़ेदार घटना याद करो', 'शुरुआत, मध्य, अंत लिखो', 'भावनाएँ लिखो', 'चित्र बनाओ'], ['नोटबुक', 'पेंसिल'], 'तुम्हारी सबसे अच्छी बचपन की याद क्या है?']],
    [['कहानी में पापा क्या याद करते हैं?', ['स्कूल की पढ़ाई', 'बचपन के खेल और शरारतें', 'काम', 'यात्राएँ'], 'बचपन के खेल और शरारतें', 'पापा अपने बचपन के खेल, खाना और शरारतें याद करते हैं।'],
    ['कहानी से हमें क्या पता चलता है?', ['पापा हमेशा बड़े थे', 'माता-पिता भी कभी बच्चे थे', 'बचपन बुरा होता है', 'खेलना गलत है'], 'माता-पिता भी कभी बच्चे थे', 'कहानी दिखाती है कि हर बड़ा इंसान कभी बच्चा था।'],
    ['गिल्ली-डंडा किस प्रकार का खेल है?', ['पानी का खेल', 'पारंपरिक भारतीय खेल', 'विदेशी खेल', 'कंप्यूटर गेम'], 'पारंपरिक भारतीय खेल', 'गिल्ली-डंडा एक प्राचीन भारतीय खेल है।'],
    ['"शरारत" का अर्थ है ___', ['पढ़ाई', 'नटखटपन/मस्ती', 'रोना', 'सोना'], 'नटखटपन/मस्ती', 'शरारत का अर्थ है मज़ेदार तरीके से शैतानी करना।']],
    ['परिवार की कहानियाँ सुनना और सुनाना', 'पुराने और नए की तुलना करना', 'अनुच्छेद लिखना'], 'EVS: परिवार और बदलाव'],
];

for (const [id, chTitle, topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross] of hindiStubs) {
  hindiChapters.push(chapter(id, chTitle, [topic(id + 't1', topTitle, subtopics, en, hi, kn, acts, quiz, outcomes, cross)]));
}

w(subject('hindiSubject', 'hindi', 'हिन्दी (रिमझिम)', '🇮🇳', '#E17055', hindiChapters));
w('');
