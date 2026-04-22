// ── MATHEMATICS ───────────────────────────────────────────────────────────────
const mathSubject: Subject = {
    id: 'mathematics', title: 'Mathematics (Math-Magic)', icon: '📐', color: '#6C5CE7',
    chapters: [
        {
            id: 'm1', title: '1. Building with Bricks', topics: [{
                id: 'm1t1', title: 'Patterns & Symmetry',
                subtopics: ['Jaali patterns', 'Mirror symmetry', 'Faces of a brick'],
                readingText: {
                    en: 'Bricks are cuboids with 6 faces, 8 corners and 12 edges. A Jaali is a decorative pattern with holes that lets air and light through.',
                    hi: 'ईंटें घनाभ होती हैं जिनके 6 फलक, 8 कोने और 12 किनारे होते हैं। जाली एक सजावटी पैटर्न है।',
                    kn: 'ಇಟ್ಟಿಗೆಗಳು ಆಯತಾಕಾರದ ಘನಗಳಾಗಿದ್ದು 6 ಮುಖ, 8 ಮೂಲೆ ಮತ್ತು 12 ಅಂಚುಗಳಿವೆ.'
                },
                activities: [
                    act('Wall Designer', 'Draw a 3×3 brick wall on grid paper and find its symmetry line.', 'drawing', 'low',
                        ['Draw a 3×3 grid', 'Sketch bricks', 'Colour alternate bricks', 'Find the symmetry line'], ['Grid paper', 'Crayons'], 'Use a mirror to check symmetry!'),
                    act('Jaali Maker', 'Cut a Jaali pattern from paper.', 'performing', 'mid',
                        ['Fold paper in half', 'Cut small shapes', 'Unfold and hold to light', 'Count the holes'], ['Paper', 'Scissors'], 'How many holes did you make?'),
                    act('3D Brick Model', 'Build a brick from clay and count its faces.', 'performing', 'high',
                        ['Roll clay into a rectangle', 'Press flat on all 6 sides', 'Count faces, edges, corners', 'Compare with a real brick'], ['Clay', 'Ruler'], 'Can you make a Jaali wall with 4 clay bricks?')
                ],
                virtualLab: { title: 'Brick Builder Lab', simulation: 'Place bricks on a grid', task: 'Build a wall with a Jaali pattern using 9 bricks' },
                quiz: [
                    q('How many faces does a brick have?', ['4', '6', '8', '12'], '6', 'A brick is a cuboid with 6 rectangular faces.'),
                    q('What is a Jaali?', ['A solid wall', 'A pattern with holes', 'A window frame', 'A door'], 'A pattern with holes'),
                    q('How many corners does a brick have?', ['4', '6', '8', '10'], '8', 'A cuboid has 8 corners.'),
                    q('A brick is which 3D shape?', ['Cube', 'Cuboid', 'Cylinder', 'Sphere'], 'Cuboid')
                ],
                learningOutcomes: ['Identify 3D shapes', 'Understand symmetry', 'Count faces, edges, vertices'],
                crossCurricularLink: 'EVS: Building materials'
            }]
        },
        {
            id: 'm2', title: '2. Long and Short', topics: [{
                id: 'm2t1', title: 'Measuring Length',
                subtopics: ['mm, cm, m, km', 'Measuring with a ruler', 'Estimating distances'],
                readingText: {
                    en: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. We measure length using a ruler.',
                    hi: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km। हम लंबाई मापने के लिए रूलर का उपयोग करते हैं।',
                    kn: '10 mm = 1 cm, 100 cm = 1 m, 1000 m = 1 km. ನಾವು ಉದ್ದ ಅಳೆಯಲು ರೂಲರ್ ಬಳಸುತ್ತೇವೆ.'
                },
                activities: [
                    act('Body Ruler', 'Measure your hand span and foot length.', 'calculating', 'low',
                        ['Trace your hand', 'Measure span in cm', 'Measure foot length', 'Record all'], ['Ruler', 'Paper'], 'Whose foot is longest in your family?'),
                    act('Classroom Survey', 'Estimate then measure 5 objects.', 'calculating', 'mid',
                        ['List 5 objects', 'Write estimate in cm', 'Measure with ruler', 'Find the difference'], ['Ruler', 'Notebook'], 'Which estimate was closest?'),
                    act('Distance Detective', 'Calculate steps needed to walk 100 m.', 'performing', 'high',
                        ['Measure your step length', 'Convert to metres', 'Calculate steps for 100 m', 'Walk and count to verify'], ['Measuring tape'], 'How many steps make 1 km?')
                ],
                quiz: [
                    q('1 km = how many metres?', ['100', '500', '1000', '2000'], '1000', '1 kilometre = 1000 metres.'),
                    q('1 m = how many centimetres?', ['10', '100', '1000', '10'], '100', '1 metre = 100 centimetres.'),
                    q('Which is the longest unit?', ['mm', 'cm', 'm', 'km'], 'km', 'Kilometre is the largest unit here.'),
                    q('A pencil is about 15 ___', ['km', 'm', 'cm', 'mm'], 'cm', 'A standard pencil is about 15 cm long.')
                ],
                learningOutcomes: ['Convert between units of length', 'Measure using a ruler', 'Estimate lengths'],
                crossCurricularLink: 'EVS: Distances on a map'
            }]
        },
