{
    id: 'm2', title: '2. Long and Short', topics: [{
        id: 'm2t1', title: 'Measuring Length',
        subtopics: ['Units of length: mm, cm, m, km', 'Measuring with a ruler', 'Estimating distances'],
        readingText: {
            en: 'We measure length using millimetres (mm), centimetres (cm), metres (m) and kilometres (km). 10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km.',
            hi: 'हम लंबाई को मिलीमीटर (mm), सेंटीमीटर (cm), मीटर (m) और किलोमीटर (km) में मापते हैं। 10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km।',
            kn: 'ನಾವು ಉದ್ದವನ್ನು ಮಿಲಿಮೀಟರ್ (mm), ಸೆಂಟಿಮೀಟರ್ (cm), ಮೀಟರ್ (m) ಮತ್ತು ಕಿಲೋಮೀಟರ್ (km) ನಲ್ಲಿ ಅಳೆಯುತ್ತೇವೆ.'
        },
        activities: [
            act('Body Ruler', 'Measure your hand span, foot length and height using a ruler.', 'calculating', 'low',
                ['Trace your hand on paper', 'Measure the span in cm', 'Measure your foot length', 'Record all measurements'],
                ['Ruler', 'Paper', 'Pencil'], 'Whose foot is longest in your family?'),
            act('Classroom Survey', 'Estimate then measure 5 objects in the classroom.', 'calculating', 'mid',
                ['List 5 objects', 'Write your estimate in cm', 'Measure with a ruler', 'Find the difference'],
                ['Ruler', 'Notebook'], 'Which estimate was closest to the real measurement?'),
            act('Distance Detective', 'Calculate how many steps it takes to walk 100 m.', 'performing', 'high',
                ['Measure your step length in cm', 'Convert to metres', 'Calculate steps for 100 m', 'Walk and count to verify'],
                ['Measuring tape', 'Notebook'], 'How many of your steps make 1 km?')
        ],
        virtualLab: { title: 'Ruler Lab', simulation: 'Drag objects onto a ruler to measure them', task: 'Measure 5 objects and arrange them from shortest to longest' },
        quiz: [
            q('1 km = how many metres?', ['100', '500', '1000', '2000'], '1000', '1 kilometre = 1000 metres.'),
            q('1 m = how many centimetres?', ['10', '100', '1000', '10'], '100', '1 metre = 100 centimetres.'),
            q('Which is the longest unit?', ['mm', 'cm', 'm', 'km'], 'km', 'Kilometre is the largest unit of length here.'),
            q('A pencil is about 15 ___', ['km', 'm', 'cm', 'mm'], 'cm', 'A standard pencil is about 15 centimetres long.')
        ],
        learningOutcomes: ['Convert between units of length', 'Measure using a ruler', 'Estimate lengths'],
        crossCurricularLink: 'EVS: Distances between places on a map'
    }]
},
{
    id: 'm3', title: '3. A Trip to Bhopal', topics: [{
        id: 'm3t1', title: 'Large Number Operations',
        subtopics: ['Adding 4-digit numbers', 'Subtracting with borrowing', 'Word problems on travel'],
        readingText: {
            en: 'When we add large numbers, we line up the digits by place value: ones, tens, hundreds, thousands. Always start adding from the ones column.',
            hi: 'जब हम बड़ी संख्याओं को जोड़ते हैं, तो हम अंकों को स्थानीय मान के अनुसार लगाते हैं: इकाई, दहाई, सैकड़ा, हजार।',
            kn: 'ದೊಡ್ಡ ಸಂಖ್ಯೆಗಳನ್ನು ಕೂಡಿಸುವಾಗ, ಸ್ಥಾನ ಮೌಲ್ಯದ ಪ್ರಕಾರ ಅಂಕೆಗಳನ್ನು ಜೋಡಿಸಿ: ಒಂದು, ಹತ್ತು, ನೂರು, ಸಾವಿರ.'
        },
        activities: [
            act('Trip Planner', 'Plan a school trip: add up ticket costs for 30 students.', 'calculating', 'low',
                ['Ticket price = ₹45', 'Multiply 45 × 30', 'Add bus cost ₹500', 'Find total trip cost'],
                ['Notebook', 'Pencil'], 'Can you find a cheaper way to travel?'),
            act('Distance Chart', 'Make a chart of distances between 5 Indian cities.', 'writing', 'mid',
                ['List 5 cities', 'Find distances from an atlas', 'Add distances for a round trip', 'Find the shortest route'],
                ['Atlas', 'Ruler', 'Notebook'], 'Which two cities are farthest apart?'),
            act('Budget Manager', 'You have ₹5000 for a trip. Plan your spending.', 'calculating', 'high',
                ['List expenses: food, tickets, hotel', 'Add all costs', 'Subtract from ₹5000', 'Find remaining money'],
                ['Notebook', 'Pencil'], 'What would you do with the leftover money?')
        ],
        quiz: [
            q('2345 + 1432 = ?', ['3777', '3677', '3877', '3700'], '3777', 'Add ones: 5+2=7, tens: 4+3=7, hundreds: 3+4=7, thousands: 2+1=3.'),
            q('5000 − 1234 = ?', ['3766', '3876', '3666', '4766'], '3766', 'Subtract carefully with borrowing.'),
            q('Which digit is in the hundreds place in 4,567?', ['4', '5', '6', '7'], '5', 'Thousands=4, Hundreds=5, Tens=6, Ones=7.'),
            q('Round 3,748 to the nearest hundred.', ['3700', '3800', '3750', '4000'], '3800', '48 is closer to 100 than to 0, so round up.')
        ],
        learningOutcomes: ['Add and subtract 4-digit numbers', 'Solve travel word problems', 'Understand place value'],
        crossCurricularLink: 'EVS: Transport and travel in India'
    }]
},
