// CBSE Grade 4 — Full Curriculum Writer
// Run: node scripts/write_all.js
const fs = require('fs'), path = require('path');
const OUT = path.join(__dirname, '..', 'lib', 'curriculum.ts');

const INTERFACES = `
export interface Activity { title:string; description:string; skill:'listening'|'speaking'|'writing'|'performing'|'drawing'|'calculating'; level:'low'|'mid'|'high'; steps:string[]; materials?:string[]; doItYourself?:string; }
export interface VirtualLab { title:string; simulation:string; task:string; }
export interface QuizQuestion { question:string; options:string[]; correctAnswer:string; explanation?:string; hint?:string; }
export interface Topic { id:string; title:string; subtopics:string[]; activities:Activity[]; virtualLab?:VirtualLab; quiz:QuizQuestion[]; learningOutcomes:string[]; crossCurricularLink?:string; readingText?:{en:string;hi?:string;kn?:string}; }
export interface Chapter { id:string; title:string; topics:Topic[]; }
export interface Subject { id:string; title:string; icon:string; color:string; chapters:Chapter[]; }
`;

// ── helpers ──────────────────────────────────────────────────────────────────
const q = (question, options, correctAnswer, explanation) => JSON.stringify({ question, options, correctAnswer, ...(explanation ? { explanation } : {}) });
const a = (title, description, skill, level, steps, materials, diy) => JSON.stringify({ title, description, skill, level, steps, ...(materials && materials.length ? { materials } : {}), ...(diy ? { doItYourself: diy } : {}) });
const rt = (en, hi, kn) => JSON.stringify({ en, ...(hi ? { hi } : {}), ...(kn ? { kn } : {}) });
const lab = (title, simulation, task) => JSON.stringify({ title, simulation, task });

// ── topic builder ─────────────────────────────────────────────────────────────
function topic(id, title, subtopics, rtObj, activities, quizArr, outcomes, cross, vlab) {
    return `{id:"${id}",title:${JSON.stringify(title)},subtopics:${JSON.stringify(subtopics)},readingText:${JSON.stringify(rtObj)},activities:[${activities.join(',')}],quiz:[${quizArr.join(',')}],learningOutcomes:${JSON.stringify(outcomes)}${cross ? `,crossCurricularLink:${JSON.stringify(cross)}` : ''}${vlab ? `,virtualLab:${vlab}` : ''}}`;
}
function chapter(id, title, ...topics) { return `{id:"${id}",title:${JSON.stringify(title)},topics:[${topics.join(',')}]}`; }
function subject(id, title, icon, color, ...chapters) { return `{id:"${id}",title:${JSON.stringify(title)},icon:"${icon}",color:"${color}",chapters:[${chapters.join(',')}]}`; }

// ════════════════════════════════════════════════════════════════════════════
// MATHEMATICS — 14 chapters
// ════════════════════════════════════════════════════════════════════════════
const MATH = subject('mathematics', 'Mathematics (Math-Magic)', '📐', '#6C5CE7',
    chapter('m1', '1. Building with Bricks',
        topic('m1t1', 'Patterns & Symmetry', ['Jaali patterns', 'Mirror symmetry', 'Faces of a brick'],
            { en: 'Bricks are cuboids with 6 faces, 8 corners and 12 edges. A Jaali is a decorative pattern with holes that lets air and light through.', hi: 'ईंट एक घनाभ है जिसके 6 फलक, 8 कोने और 12 किनारे होते हैं। जाली एक सजावटी पैटर्न है।', kn: 'ಇಟ್ಟಿಗೆ ಒಂದು ಘನಾಕೃತಿ, 6 ಮುಖ, 8 ಮೂಲೆ ಮತ್ತು 12 ಅಂಚುಗಳಿವೆ.' },
            [a('Wall Designer', 'Draw a 3×3 brick wall on grid paper and find its line of symmetry.', 'drawing', 'low', ['Draw 3×3 grid', 'Sketch bricks', 'Colour alternate bricks', 'Find symmetry line'], ['Grid paper', 'Crayons'], 'Use a mirror to check symmetry!'),
            a('Jaali Maker', 'Fold and cut paper to make a Jaali pattern.', 'performing', 'mid', ['Fold paper in half', 'Cut shapes along fold', 'Unfold and hold to light', 'Count holes'], ['Paper', 'Scissors'], 'How many holes did you make?'),
            a('Clay Brick', 'Make a clay brick and count its faces, edges and corners.', 'performing', 'high', ['Roll clay into rectangle', 'Flatten 6 sides', 'Count faces/edges/corners', 'Compare with real brick'], ['Clay', 'Ruler'], 'Can you make a Jaali wall with 4 clay bricks?')],
            [q('How many faces does a brick have?', ['4', '6', '8', '12'], '6', 'A brick is a cuboid — it has 6 rectangular faces.'),
            q('What is a Jaali?', ['A solid wall', 'A pattern with holes', 'A window frame', 'A door'], 'A pattern with holes', 'Jaali patterns have holes to let air and light through.'),
            q('How many corners does a brick have?', ['4', '6', '8', '10'], '8', 'A cuboid has 8 vertices (corners).'),
            q('A brick is which 3D shape?', ['Cube', 'Cuboid', 'Cylinder', 'Sphere'], 'Cuboid', 'A brick is longer than wide — making it a cuboid, not a cube.')],
            ['Identify 3D shapes in real life', 'Understand symmetry', 'Count faces, edges, vertices'], 'EVS: Building materials',
            lab('Brick Builder Lab', 'Place bricks on a grid', 'Build a Jaali wall with 9 bricks'))),

    chapter('m2', '2. Long and Short',
        topic('m2t1', 'Measuring Length', ['mm, cm, m, km', 'Measuring with a ruler', 'Estimating distances'],
            { en: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. Always measure from the zero mark on a ruler.', hi: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km। हमेशा शून्य से मापें।', kn: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. ಯಾವಾಗಲೂ ಶೂನ್ಯದಿಂದ ಅಳೆಯಿರಿ.' },
            [a('Body Ruler', 'Measure hand span, foot length and height.', 'calculating', 'low', ['Trace hand on paper', 'Measure span in cm', 'Measure foot length', 'Record all'], ['Ruler', 'Paper'], 'Whose foot is longest in your family?'),
            a('Classroom Survey', 'Estimate then measure 5 objects.', 'calculating', 'mid', ['List 5 objects', 'Write estimate', 'Measure with ruler', 'Find difference'], ['Ruler', 'Notebook'], 'Which estimate was closest?'),
            a('Step Counter', 'Calculate steps needed to walk 1 km.', 'performing', 'high', ['Measure step length in cm', 'Convert to metres', 'Calculate steps for 1 km', 'Walk and verify'], ['Measuring tape', 'Notebook'], 'How many of your steps make 1 km?')],
            [q('1 km = how many metres?', ['100', '500', '1000', '2000'], '1000', '1 kilometre = 1000 metres.'),
            q('1 m = how many cm?', ['10', '100', '1000', '50'], '100', '1 metre = 100 centimetres.'),
            q('Longest unit of length?', ['mm', 'cm', 'm', 'km'], 'km', 'Kilometre is the largest unit here.'),
            q('A pencil is about 15 ___', ['km', 'm', 'cm', 'mm'], 'cm', 'A standard pencil is about 15 cm long.')],
            ['Convert between units of length', 'Measure using a ruler', 'Estimate lengths'], 'EVS: Distances on a map',
            lab('Ruler Lab', 'Drag objects onto a ruler', 'Measure 5 objects and order shortest to longest'))),
    chapter('m3', '3. A Trip to Bhopal',
        topic('m3t1', 'Large Number Operations', ['Adding 4-digit numbers', 'Subtracting with borrowing', 'Travel word problems'],
            { en: 'Line up digits by place value: ones, tens, hundreds, thousands. Start adding from the ones column. Carry over when a column exceeds 9.', hi: 'अंकों को स्थानीय मान के अनुसार लगाएं: इकाई, दहाई, सैकड़ा, हजार।', kn: 'ಸ್ಥಾನ ಮೌಲ್ಯದ ಪ್ರಕಾರ ಅಂಕೆಗಳನ್ನು ಜೋಡಿಸಿ: ಒಂದು, ಹತ್ತು, ನೂರು, ಸಾವಿರ.' },
            [a('Trip Planner', 'Add ticket costs for 30 students.', 'calculating', 'low', ['Ticket = ₹45', 'Multiply 45×30', 'Add bus ₹500', 'Find total'], ['Notebook'], 'Can you find a cheaper way?'),
            a('Distance Chart', 'Chart distances between 5 Indian cities.', 'writing', 'mid', ['List 5 cities', 'Find distances', 'Add round-trip', 'Find shortest route'], ['Atlas', 'Notebook'], 'Which two cities are farthest?'),
            a('Budget Manager', 'Plan a ₹5000 trip.', 'calculating', 'high', ['List expenses', 'Add all costs', 'Subtract from ₹5000', 'Find remainder'], ['Notebook'], 'What would you do with leftover money?')],
            [q('2345 + 1432 = ?', ['3777', '3677', '3877', '3700'], '3777', 'Add column by column from ones: 7,7,7,3.'),
            q('5000 − 1234 = ?', ['3766', '3876', '3666', '4766'], '3766', 'Subtract with borrowing carefully.'),
            q('Hundreds digit in 4,567?', ['4', '5', '6', '7'], '5', 'Th=4, H=5, T=6, O=7.'),
            q('Round 3,748 to nearest hundred.', ['3700', '3800', '3750', '4000'], '3800', '48 rounds up to 100.')],
            ['Add and subtract 4-digit numbers', 'Solve word problems', 'Understand place value'], 'EVS: Transport in India')),
    chapter('m4', '4. Tick-Tick-Tick',
        topic('m4t1', 'Time and Calendar', ['Reading a clock', '24-hour time', 'Days, months, years'],
            { en: 'Short hand = hours, long hand = minutes. 60 minutes = 1 hour, 24 hours = 1 day, 7 days = 1 week, 12 months = 1 year.', hi: 'छोटी सुई = घंटे, लंबी सुई = मिनट। 60 मिनट = 1 घंटा, 24 घंटे = 1 दिन।', kn: 'ಚಿಕ್ಕ ಮುಳ್ಳು = ಗಂಟೆ, ಉದ್ದ ಮುಳ್ಳು = ನಿಮಿಷ. 60 ನಿಮಿಷ = 1 ಗಂಟೆ.' },
            [a('Paper Clock', 'Make a paper clock and show 5 different times.', 'performing', 'low', ['Cut cardboard circle', 'Write 1-12', 'Make two hands', 'Show 3:30, 7:15, 11:45, 9:00, 6:30'], ['Cardboard', 'Fastener'], 'What time do you wake up?'),
            a('Daily Schedule', 'Write your timetable with start and end times.', 'writing', 'mid', ['List 8 daily activities', 'Write start/end time', 'Calculate duration', 'Find total study time'], ['Notebook'], 'How many hours do you sleep?'),
            a('Calendar Detective', 'Answer 5 questions using a real calendar.', 'calculating', 'high', ['Count Sundays this month', 'Days from birthday to today', 'Day of Jan 26', 'Days until next holiday', 'Weeks in this year'], ['Calendar', 'Notebook'], 'How many days until your birthday?')],
            [q('Hours in a day?', ['12', '24', '48', '60'], '24', 'A full day = 24 hours.'),
            q('Minutes in 1 hour?', ['30', '45', '60', '100'], '60', '60 minutes in every hour.'),
            q('Short hand shows ___', ['Minutes', 'Seconds', 'Hours', 'Days'], 'Hours', 'The short hand moves slowly — it shows hours.'),
            q('Months in a year?', ['10', '11', '12', '13'], '12', 'January to December = 12 months.')],
            ['Read time on a clock', 'Use a calendar', 'Calculate duration'], 'Hindi: Poems about seasons')),

    chapter('m5', '5. The Way The World Looks',
        topic('m5t1', 'Maps and Top Views', ['Top view vs side view', 'Reading a map', 'N, S, E, W'],
            { en: 'A map is a top view of a place. North is up, South is down, East is right, West is left. A compass always points North.', hi: 'नक्शा किसी स्थान का ऊपरी दृश्य है। उत्तर ऊपर, दक्षिण नीचे, पूर्व दाएं, पश्चिम बाएं।', kn: 'ನಕ್ಷೆ ಒಂದು ಸ್ಥಳದ ಮೇಲ್ನೋಟ. ಉತ್ತರ ಮೇಲೆ, ದಕ್ಷಿಣ ಕೆಳಗೆ, ಪೂರ್ವ ಬಲಕ್ಕೆ, ಪಶ್ಚಿಮ ಎಡಕ್ಕೆ.' },
            [a('Room Map', 'Draw a top-view map of your room.', 'drawing', 'low', ['Imagine looking down', 'Draw outline', 'Add furniture as shapes', 'Label each item'], ['Paper', 'Ruler'], 'Can a friend find your bed using only your map?'),
            a('School Map', 'Draw your school with compass directions.', 'drawing', 'mid', ['Draw boundary', 'Add classrooms, playground, office', 'Mark N/S/E/W', 'Add compass rose'], ['Paper', 'Ruler'], 'Which direction does your classroom face?'),
            a('Treasure Hunt', 'Create a treasure hunt map for a friend.', 'performing', 'high', ['Choose location', 'Draw map with landmarks', 'Write N/S/E/W directions', 'Hide treasure'], ['Paper'], 'How many steps North to the treasure?')],
            [q('A map shows a ___ view.', ['Side', 'Front', 'Top', 'Bottom'], 'Top', 'Maps are drawn as if looking down from above.'),
            q('Sun rises in the ___', ['North', 'South', 'East', 'West'], 'East', 'The sun always rises in the East.'),
            q('Opposite of North?', ['East', 'West', 'South', 'Up'], 'South', 'North and South are opposite directions.'),
            q('Tool to find directions?', ['Ruler', 'Compass', 'Scale', 'Protractor'], 'Compass', 'A compass needle always points North.')],
            ['Draw top-view maps', 'Use cardinal directions', 'Read simple maps'], 'EVS: Maps of India')),
    chapter('m6', '6. The Junk Seller',
        topic('m6t1', 'Money — Profit and Loss', ['Indian currency', 'Profit = SP − CP', 'Loss', 'Simple bills'],
            { en: 'Profit = Selling Price − Cost Price. If SP > CP → profit. If SP < CP → loss. 100 paise = ₹1.', hi: 'लाभ = बिक्री मूल्य − लागत मूल्य। 100 पैसे = ₹1।', kn: 'ಲಾಭ = ಮಾರಾಟ ಬೆಲೆ − ಖರ್ಚು ಬೆಲೆ. 100 ಪೈಸೆ = ₹1.' },
            [a('Mini Shop', 'Set up a pretend shop with 5 items.', 'performing', 'low', ['Choose 5 items', 'Write cost price', 'Write selling price', 'Calculate profit/loss'], ['Paper', 'Items'], 'Which item gave most profit?'),
            a('Bill Maker', 'Write a shopping bill for 4 items.', 'writing', 'mid', ['List 4 items with prices', 'Add all prices', 'Calculate change from ₹100', 'Write neat bill'], ['Notebook'], 'How much change did you get?'),
            a('Junk Collector', 'Calculate profit from selling old newspapers.', 'calculating', 'high', ['Weigh newspapers', 'Rate = ₹8/kg', 'Calculate earnings', 'Subtract bag cost'], ['Scale', 'Notebook'], 'How much in a month?')],
            [q('CP ₹30, SP ₹45. Profit = ?', ['₹10', '₹15', '₹20', '₹75'], '₹15', 'Profit = 45 − 30 = ₹15.'),
            q('CP ₹50, SP ₹40. This is ___', ['Profit ₹10', 'Loss ₹10', 'Profit ₹90', 'No change'], 'Loss ₹10', 'SP < CP means loss. Loss = 50 − 40 = ₹10.'),
            q('50 paise coins to make ₹5?', ['5', '10', '15', '20'], '10', '₹5 = 500p ÷ 50 = 10 coins.'),
            q('₹1 = how many paise?', ['10', '50', '100', '1000'], '100', 'One rupee = 100 paise.')],
            ['Calculate profit and loss', 'Make simple bills', 'Handle Indian currency'], 'EVS: Occupations')),
    chapter('m7', '7. Jugs and Mugs',
        topic('m7t1', 'Capacity and Volume', ['Litres and millilitres', 'Comparing capacities', 'Measuring liquids'],
            { en: '1 litre = 1000 mL. A teaspoon ≈ 5 mL. A glass ≈ 200 mL. A bucket ≈ 10 L.', hi: '1 लीटर = 1000 मिलीलीटर। एक चम्मच ≈ 5 mL।', kn: '1 ಲೀಟರ್ = 1000 mL. ಒಂದು ಚಮಚ ≈ 5 mL.' },
            [a('Container Survey', 'Find 5 containers and read their capacity labels.', 'listening', 'low', ['Find bottles/jars/cups', 'Read mL or L label', 'List smallest to largest', 'Add total capacity'], ['Various containers'], 'Which holds most?'),
            a('Water Pouring', 'Fill a 1-litre bottle using a 250 mL cup.', 'performing', 'mid', ['Get 250 mL cup', 'Pour into 1-litre bottle', 'Count cups needed', 'Verify: 4×250=1000'], ['Cup', 'Bottle', 'Water'], 'How many 200 mL glasses fill 1 litre?'),
            a('Recipe Calculator', 'Double a recipe needing 250 mL milk.', 'calculating', 'high', ['Original: 250 mL', 'Double it', 'Convert if needed', 'Write new recipe'], ['Notebook'], 'Triple the recipe — how many mL?')],
            [q('1 litre = how many mL?', ['10', '100', '1000', '10000'], '1000', '1 litre = 1000 millilitres.'),
            q('A teaspoon holds about ___', ['5 mL', '50 mL', '500 mL', '5 L'], '5 mL', 'A teaspoon ≈ 5 mL.'),
            q('2.5 litres = how many mL?', ['250', '2500', '25000', '25'], '2500', '2.5 × 1000 = 2500 mL.'),
            q('Which holds more — bucket or glass?', ['Glass', 'Bucket', 'Same', 'Cannot say'], 'Bucket', 'Bucket ≈ 10 L; glass ≈ 200 mL.')],
            ['Convert litres to mL', 'Compare capacities', 'Measure liquids'], 'Science: Water conservation')),
    chapter('m8', '8. Carts and Wheels',
        topic('m8t1', 'Circles and Shapes', ['Centre, radius, diameter', 'Drawing circles', 'Circles in real life'],
            { en: 'Radius = centre to edge. Diameter = 2 × radius. A circle has no corners. Diameter passes through the centre.', hi: 'त्रिज्या = केंद्र से किनारे तक। व्यास = 2 × त्रिज्या।', kn: 'ತ್ರಿಜ್ಯ = ಕೇಂದ್ರದಿಂದ ಅಂಚಿಗೆ. ವ್ಯಾಸ = 2 × ತ್ರಿಜ್ಯ.' },
            [a('Wheel Spotter', 'Find 5 circular objects and measure diameter.', 'calculating', 'low', ['Find 5 round objects', 'Measure diameter', 'Calculate radius = d÷2', 'List smallest to largest'], ['Ruler', 'Notebook'], 'Which has biggest radius?'),
            a('Compass Artist', 'Draw 3 circles of different sizes.', 'drawing', 'mid', ['Set compass to 2 cm', 'Draw circle', 'Change to 4 cm', 'Change to 6 cm'], ['Compass', 'Pencil'], 'Can you draw a flower using circles?'),
            a('Wheel Designer', 'Design a cart wheel with spokes.', 'drawing', 'high', ['Draw large circle', 'Draw small hub circle', 'Add 8 spokes (radii)', 'Label radius and diameter'], ['Compass', 'Ruler', 'Crayons'], 'How many spokes on a bicycle wheel?')],
            [q('Diameter = ?', ['Radius × 2', 'Radius + 2', 'Radius ÷ 2', 'Radius − 2'], 'Radius × 2', 'Diameter is always twice the radius.'),
            q('Centre of a circle is ___', ['On the edge', 'Outside', 'The middle point', 'The top'], 'The middle point', 'The centre is equidistant from all edge points.'),
            q('If radius = 7 cm, diameter = ?', ['7 cm', '14 cm', '3.5 cm', '21 cm'], '14 cm', 'Diameter = 2 × 7 = 14 cm.'),
            q('A wheel is which shape?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'Circle', 'Wheels are circular for smooth rolling.')],
            ['Identify parts of a circle', 'Draw circles with a compass', 'Relate radius and diameter'], 'EVS: Wheels and transport')),
