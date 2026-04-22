{
    id: 'm8', title: '8. Carts and Wheels', topics: [{
        id: 'm8t1', title: 'Circles and Shapes',
        subtopics: ['Parts of a circle: centre, radius, diameter', 'Drawing circles with a compass', 'Circles in real life'],
        readingText: {
            en: 'A circle has a centre point. The radius is the distance from the centre to the edge. The diameter is twice the radius and passes through the centre.',
            hi: 'वृत्त का एक केंद्र बिंदु होता है। त्रिज्या केंद्र से किनारे तक की दूरी है। व्यास त्रिज्या का दोगुना होता है।',
            kn: 'ವೃತ್ತಕ್ಕೆ ಒಂದು ಕೇಂದ್ರ ಬಿಂದು ಇರುತ್ತದೆ. ತ್ರಿಜ್ಯ ಕೇಂದ್ರದಿಂದ ಅಂಚಿನವರೆಗಿನ ದೂರ. ವ್ಯಾಸ ತ್ರಿಜ್ಯದ ಎರಡು ಪಟ್ಟು.'
        },
        activities: [
            act('Wheel Spotter', 'Find 5 circular objects at home and measure their diameter.', 'calculating', 'low',
                ['Find 5 round objects', 'Measure diameter with a ruler', 'Calculate radius (diameter ÷ 2)', 'List from smallest to largest'], ['Ruler', 'Notebook'], 'Which circle has the biggest radius?'),
            act('Compass Artist', 'Draw 3 circles of different sizes using a compass.', 'drawing', 'mid',
                ['Set compass to 2 cm', 'Draw first circle', 'Change to 4 cm and draw second', 'Change to 6 cm and draw third'], ['Compass', 'Pencil', 'Paper'], 'Can you draw a flower using circles?'),
            act('Wheel Designer', 'Design a cart wheel with spokes using circles.', 'drawing', 'high',
                ['Draw a large circle (wheel)', 'Draw a small circle at centre (hub)', 'Add 8 spokes (radii)', 'Colour and label radius, diameter'], ['Compass', 'Ruler', 'Crayons'], 'How many spokes does a bicycle wheel have?')],
        virtualLab: { title: 'Circle Lab', simulation: 'Drag the radius slider to change circle size', task: 'Draw a circle with radius 5 cm and find its diameter' },
        quiz: [
            q('Diameter = ?', ['Radius × 2', 'Radius + 2', 'Radius ÷ 2', 'Radius − 2'], 'Radius × 2', 'Diameter is always twice the radius.'),
            q('The centre of a circle is ___', ['On the edge', 'Outside the circle', 'The middle point', 'The top point'], 'The middle point', 'The centre is equidistant from all points on the circle.'),
            q('A wheel is which shape?', ['Square', 'Triangle', 'Circle', 'Rectangle'], 'Circle', 'Wheels are circular so they roll smoothly.'),
            q('If radius = 7 cm, diameter = ?', ['7 cm', '14 cm', '3.5 cm', '21 cm'], '14 cm', 'Diameter = 2 × 7 = 14 cm.')],
        learningOutcomes: ['Identify parts of a circle', 'Draw circles with a compass', 'Relate radius and diameter'],
        crossCurricularLink: 'EVS: Wheels and transport'
    }]
},
{
    id: 'm9', title: '9. Halves and Quarters', topics: [{
        id: 'm9t1', title: 'Fractions',
        subtopics: ['Half (1/2)', 'Quarter (1/4)', 'Three-quarters (3/4)', 'Equal parts'],
        readingText: {
            en: 'A fraction shows equal parts of a whole. 1/2 means one out of two equal parts. 1/4 means one out of four equal parts. 2/4 = 1/2.',
            hi: 'भिन्न किसी पूर्ण के बराबर भागों को दर्शाता है। 1/2 का अर्थ है दो बराबर भागों में से एक। 1/4 का अर्थ है चार बराबर भागों में से एक।',
            kn: 'ಭಿನ್ನರಾಶಿ ಒಂದು ಪೂರ್ಣದ ಸಮಾನ ಭಾಗಗಳನ್ನು ತೋರಿಸುತ್ತದೆ. 1/2 ಎಂದರೆ ಎರಡು ಸಮಾನ ಭಾಗಗಳಲ್ಲಿ ಒಂದು.'
        },
        activities: [
            act('Roti Fractions', 'Fold a paper roti into halves and quarters.', 'performing', 'low',
                ['Cut a circle from paper', 'Fold in half — label 1/2', 'Fold again — label 1/4', 'Shade 3/4 and name it'], ['Paper', 'Scissors', 'Crayons'], 'If you eat 1/4, how much is left?'),
            act('Fraction Wall', 'Draw a fraction wall showing 1, 1/2, 1/4, 1/8.', 'drawing', 'mid',
                ['Draw 4 equal rectangles', 'Leave first whole', 'Divide second into 2 parts', 'Divide third into 4, fourth into 8'], ['Ruler', 'Paper', 'Crayons'], 'Which is bigger: 1/2 or 1/4?'),
            act('Pizza Party', 'Share a paper pizza equally among 4 friends.', 'calculating', 'high',
                ['Draw a circle (pizza)', 'Divide into 4 equal slices', 'Each person gets 1/4', 'If one friend leaves, each gets 1/3'], ['Paper', 'Scissors'], 'How many slices is 3/4 of the pizza?')],
        quiz: [
            q('1/2 of 8 = ?', ['2', '4', '6', '8'], '4', 'Half of 8 = 8 ÷ 2 = 4.'),
            q('1/4 of 12 = ?', ['2', '3', '4', '6'], '3', 'Quarter of 12 = 12 ÷ 4 = 3.'),
            q('Which is greater: 1/2 or 1/4?', ['1/4', '1/2', 'Equal', 'Cannot say'], '1/2', '1/2 = 2/4, which is greater than 1/4.'),
            q('3/4 means ___', ['3 wholes', '3 out of 4 equal parts', '4 out of 3 parts', '1 part'], '3 out of 4 equal parts', 'The numerator 3 tells us how many parts we have out of 4.')],
        learningOutcomes: ['Understand fractions as equal parts', 'Compare simple fractions', 'Find fraction of a number'],
        crossCurricularLink: 'EVS: Sharing food and resources equally'
    }]
},
