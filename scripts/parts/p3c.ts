{
    id: 'm12', title: '12. How Heavy? How Light?', topics: [{
        id: 'm12t1', title: 'Weight and Mass',
        subtopics: ['Grams and kilograms', 'Using a balance scale', 'Estimating weight'],
        readingText: {
            en: '1 kilogram (kg) = 1000 grams (g). We use a balance scale to compare weights. A mango weighs about 200 g. A school bag weighs about 3 kg.',
            hi: '1 किलोग्राम (kg) = 1000 ग्राम (g)। हम तराजू से वजन की तुलना करते हैं। एक आम का वजन लगभग 200 ग्राम होता है।',
            kn: '1 ಕಿಲೋಗ್ರಾಂ (kg) = 1000 ಗ್ರಾಂ (g). ತ್ರಾಸು ಬಳಸಿ ತೂಕ ಹೋಲಿಸುತ್ತೇವೆ. ಒಂದು ಮಾವಿನ ಹಣ್ಣು ಸುಮಾರು 200 ಗ್ರಾಂ ತೂಗುತ್ತದೆ.'
        },
        activities: [
            act('Kitchen Weighing', 'Weigh 5 kitchen items and record in grams.', 'calculating', 'low',
                ['Find a kitchen scale', 'Weigh: apple, onion, potato, cup, spoon', 'Record each weight in grams', 'Order from lightest to heaviest'], ['Kitchen scale', 'Notebook'], 'Which weighs more — 1 kg of cotton or 1 kg of iron?'),
            act('Balance Challenge', 'Make a simple balance scale using a ruler and cups.', 'performing', 'mid',
                ['Balance a ruler on a pencil', 'Hang paper cups on each end', 'Add objects to compare weights', 'Find objects that balance each other'], ['Ruler', 'Pencil', 'Paper cups', 'String'], 'Can you balance 10 coins with a rubber?'),
            act('Grocery Bill', 'Calculate the cost of vegetables bought by weight.', 'calculating', 'high',
                ['Tomatoes: 500 g at ₹40/kg', 'Potatoes: 2 kg at ₹25/kg', 'Onions: 1.5 kg at ₹30/kg', 'Add total cost'], ['Notebook', 'Pencil'], 'How much change from ₹200?')],
        quiz: [
            q('1 kg = how many grams?', ['10', '100', '1000', '10000'], '1000', '1 kilogram = 1000 grams.'),
            q('Which is heavier: 500 g or 1 kg?', ['500 g', '1 kg', 'Equal', 'Cannot say'], '1 kg', '1 kg = 1000 g, which is more than 500 g.'),
            q('A bag of rice weighs 5 ___', ['mg', 'g', 'kg', 'km'], 'kg', 'Rice bags are measured in kilograms.'),
            q('2.5 kg = how many grams?', ['250', '2500', '25000', '25'], '2500', '2.5 × 1000 = 2500 g.')],
        learningOutcomes: ['Convert kg to grams', 'Use a balance scale', 'Estimate weights of common objects'],
        crossCurricularLink: 'EVS: Food and nutrition'
    }]
},
{
    id: 'm13', title: '13. Fields and Fences', topics: [{
        id: 'm13t1', title: 'Area and Perimeter',
        subtopics: ['Perimeter of rectangles and squares', 'Area by counting squares', 'Units: cm², m²'],
        readingText: {
            en: 'Perimeter is the total distance around a shape. Area is the space inside a shape. Perimeter of rectangle = 2 × (length + breadth). Area of rectangle = length × breadth.',
            hi: 'परिमाप किसी आकृति के चारों ओर की कुल दूरी है। क्षेत्रफल आकृति के अंदर का स्थान है। आयत का परिमाप = 2 × (लंबाई + चौड़ाई)।',
            kn: 'ಪರಿಧಿ ಎಂದರೆ ಆಕಾರದ ಸುತ್ತಲಿನ ಒಟ್ಟು ದೂರ. ವಿಸ್ತೀರ್ಣ ಎಂದರೆ ಆಕಾರದ ಒಳಗಿನ ಜಾಗ. ಆಯತದ ಪರಿಧಿ = 2 × (ಉದ್ದ + ಅಗಲ).'
        },
        activities: [
            act('Room Perimeter', 'Measure the perimeter of your room using a measuring tape.', 'calculating', 'low',
                ['Measure length of room', 'Measure breadth of room', 'Calculate perimeter = 2×(L+B)', 'Compare with a classmate\'s room'], ['Measuring tape', 'Notebook'], 'How much fencing would you need for your garden?'),
            act('Grid Area', 'Find the area of irregular shapes by counting squares.', 'calculating', 'mid',
                ['Draw shapes on 1 cm grid paper', 'Count full squares', 'Count half squares (÷2)', 'Add for total area'], ['Grid paper', 'Pencil'], 'Draw two shapes with the same area but different perimeters.'),
            act('Field Designer', 'Design a school garden with area 24 m² and find its perimeter.', 'calculating', 'high',
                ['List all rectangles with area 24 m²', 'E.g. 4×6, 3×8, 2×12', 'Calculate perimeter of each', 'Which needs least fencing?'], ['Notebook', 'Pencil'], 'Which shape uses the least fencing for the same area?')],
        quiz: [
            q('Perimeter of a square with side 5 cm = ?', ['10 cm', '15 cm', '20 cm', '25 cm'], '20 cm', 'Perimeter of square = 4 × side = 4 × 5 = 20 cm.'),
            q('Area of rectangle 6 cm × 4 cm = ?', ['10 cm²', '20 cm²', '24 cm²', '28 cm²'], '24 cm²', 'Area = length × breadth = 6 × 4 = 24 cm².'),
            q('A square has perimeter 36 cm. Its side = ?', ['6 cm', '9 cm', '12 cm', '18 cm'], '9 cm', 'Side = Perimeter ÷ 4 = 36 ÷ 4 = 9 cm.'),
            q('Which unit measures area?', ['cm', 'kg', 'cm²', 'mL'], 'cm²', 'Area is measured in square units like cm².')],
        learningOutcomes: ['Calculate perimeter of rectangles and squares', 'Find area by counting squares', 'Apply area and perimeter to real life'],
        crossCurricularLink: 'EVS: Farming and land use'
    }]
},
{
    id: 'm14', title: '14. Smart Charts', topics: [{
        id: 'm14t1', title: 'Data Handling',
        subtopics: ['Tally marks', 'Pictographs', 'Bar graphs', 'Reading tables'],
        readingText: {
            en: 'We collect data and show it in charts. Tally marks group data in fives. A pictograph uses pictures to show data. A bar graph uses bars of different heights.',
            hi: 'हम डेटा इकट्ठा करते हैं और उसे चार्ट में दिखाते हैं। टैली मार्क्स डेटा को पाँच के समूहों में दिखाते हैं। पिक्टोग्राफ में चित्रों का उपयोग होता है।',
            kn: 'ನಾವು ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಿ ಚಾರ್ಟ್‌ನಲ್ಲಿ ತೋರಿಸುತ್ತೇವೆ. ಟ್ಯಾಲಿ ಗುರುತುಗಳು ಮಾಹಿತಿಯನ್ನು ಐದರ ಗುಂಪಿನಲ್ಲಿ ತೋರಿಸುತ್ತವೆ.'
        },
        activities: [
            act('Favourite Fruit Survey', 'Survey 10 classmates about their favourite fruit and make a tally chart.', 'writing', 'low',
                ['Ask 10 friends their favourite fruit', 'Make tally marks for each answer', 'Count totals', 'Find the most popular fruit'], ['Notebook', 'Pencil'], 'Which fruit got the most votes?'),
            act('Pictograph Maker', 'Draw a pictograph of your weekly weather.', 'drawing', 'mid',
                ['Record weather for 7 days', 'Choose a symbol for each type', 'Draw the pictograph', 'Write a key'], ['Notebook', 'Crayons'], 'How many sunny days did you have?'),
            act('Bar Graph', 'Draw a bar graph of marks scored in 5 subjects.', 'drawing', 'high',
                ['List 5 subjects and marks', 'Draw x-axis (subjects) and y-axis (marks)', 'Draw bars to correct height', 'Title and label the graph'], ['Graph paper', 'Ruler', 'Crayons'], 'Which subject had the highest bar?')],
        quiz: [
            q('Tally marks IIII with a diagonal = ?', ['4', '5', '6', '10'], '5', 'Four vertical marks crossed by one diagonal = 5.'),
            q('In a pictograph, 1 picture = 5 students. 4 pictures = ?', ['4', '9', '20', '25'], '20', '4 × 5 = 20 students.'),
            q('Which graph uses bars to show data?', ['Pictograph', 'Tally chart', 'Bar graph', 'Pie chart'], 'Bar graph', 'Bar graphs use rectangular bars of different heights.'),
            q('The most common value in a data set is called ___', ['Mean', 'Mode', 'Median', 'Range'], 'Mode', 'The mode is the value that appears most often.')],
        learningOutcomes: ['Collect and organise data', 'Draw tally charts and pictographs', 'Read and interpret bar graphs'],
        crossCurricularLink: 'Science: Recording observations in experiments'
    }]
}
  ]
};
