{
    id: 'm10', title: '10. Play with Patterns', topics: [{
        id: 'm10t1', title: 'Number Patterns & Sequences',
        subtopics: ['Repeating patterns', 'Growing patterns', 'Number sequences', 'Magic squares'],
        readingText: {
            en: 'A pattern is a rule that repeats. In the sequence 2, 4, 6, 8 — the rule is +2. In 1, 3, 9, 27 — the rule is ×3. Finding the rule helps us predict the next number.',
            hi: 'पैटर्न एक नियम है जो दोहराता है। अनुक्रम 2, 4, 6, 8 में नियम +2 है। 1, 3, 9, 27 में नियम ×3 है।',
            kn: 'ಮಾದರಿ ಎಂದರೆ ಪುನರಾವರ್ತನೆಯಾಗುವ ನಿಯಮ. 2, 4, 6, 8 ಅನುಕ್ರಮದಲ್ಲಿ ನಿಯಮ +2.'
        },
        activities: [
            act('Pattern Stamp', 'Create a repeating pattern using potato stamps.', 'performing', 'low',
                ['Cut a potato in half', 'Carve a simple shape', 'Dip in paint and stamp', 'Repeat the pattern 3 times'], ['Potato', 'Paint', 'Paper'], 'What is the rule in your pattern?'),
            act('Number Detective', 'Find the rule in 5 different number sequences.', 'calculating', 'mid',
                ['Write sequence: 5, 10, 15, 20, ___', 'Find the rule (+5)', 'Fill the blank', 'Create your own sequence'], ['Notebook', 'Pencil'], 'Can you make a sequence with rule ×2?'),
            act('Magic Square', 'Complete a 3×3 magic square where every row, column and diagonal adds to 15.', 'calculating', 'high',
                ['Draw a 3×3 grid', 'Place 5 in the centre', 'Fill remaining numbers 1-9', 'Check all rows, columns, diagonals sum to 15'], ['Pencil', 'Paper'], 'What is the magic sum if you use numbers 2-10?')],
        quiz: [
            q('Next in: 3, 6, 9, 12, ___', ['13', '14', '15', '16'], '15', 'The rule is +3. 12 + 3 = 15.'),
            q('Next in: 2, 4, 8, 16, ___', ['18', '24', '32', '20'], '32', 'The rule is ×2. 16 × 2 = 32.'),
            q('Which is a repeating pattern?', ['1,2,3,4,5', 'A,B,A,B,A', '2,4,6,8', '1,3,6,10'], 'A,B,A,B,A', 'A,B,A,B,A repeats the same A,B unit.'),
            q('Missing: 100, 90, 80, ___, 60', ['65', '70', '75', '85'], '70', 'The rule is −10. 80 − 10 = 70.')],
        learningOutcomes: ['Identify and extend patterns', 'Find rules in sequences', 'Create own patterns'],
        crossCurricularLink: 'Art: Rangoli and tile patterns'
    }]
},
{
    id: 'm11', title: '11. Tables and Shares', topics: [{
        id: 'm11t1', title: 'Multiplication and Division',
        subtopics: ['Multiplication tables 2–10', 'Division as equal sharing', 'Relationship between × and ÷'],
        readingText: {
            en: 'Multiplication is repeated addition. 4 × 3 = 4 + 4 + 4 = 12. Division is equal sharing. 12 ÷ 3 = 4 means 12 shared among 3 gives 4 each.',
            hi: 'गुणा बार-बार जोड़ना है। 4 × 3 = 12। भाग बराबर बाँटना है। 12 ÷ 3 = 4 का अर्थ है 12 को 3 में बाँटने पर 4 मिलता है।',
            kn: 'ಗುಣಾಕಾರ ಎಂದರೆ ಪುನರಾವರ್ತಿತ ಕೂಡಿಸುವಿಕೆ. 4 × 3 = 12. ಭಾಗಾಕಾರ ಎಂದರೆ ಸಮಾನ ಹಂಚಿಕೆ. 12 ÷ 3 = 4.'
        },
        activities: [
            act('Table Chant', 'Sing multiplication tables 6, 7, 8 to a rhythm.', 'speaking', 'low',
                ['Choose table of 6', 'Clap on each answer', 'Sing: 6×1=6, 6×2=12...', 'Repeat for 7 and 8'], [], 'Can you say the 9-times table backwards?'),
            act('Equal Groups', 'Divide 24 counters into equal groups.', 'performing', 'mid',
                ['Get 24 small objects (coins/seeds)', 'Divide into groups of 4', 'Count groups: 24 ÷ 4 = 6', 'Try groups of 6, 8, 3'], ['24 counters'], 'What are all the ways to divide 24 equally?'),
            act('Multiplication Grid', 'Fill a 10×10 multiplication grid.', 'calculating', 'high',
                ['Draw a 10×10 table', 'Fill row 1 with multiples of 1', 'Continue for rows 2–10', 'Find patterns in the diagonal'], ['Pencil', 'Ruler', 'Paper'], 'What pattern do you see in the 5-times column?')],
        quiz: [
            q('7 × 8 = ?', ['54', '56', '63', '48'], '56', '7 × 8 = 56. Remember: 7 ate (8) 56!'),
            q('48 ÷ 6 = ?', ['6', '7', '8', '9'], '8', '6 × 8 = 48, so 48 ÷ 6 = 8.'),
            q('Which is the same as 5 × 4?', ['5+4', '5+5+5+5', '4+4+4+4+4', 'Both B and C'], 'Both B and C', '5×4 = 20 = 5+5+5+5 = 4+4+4+4+4.'),
            q('36 ÷ 9 = ?', ['3', '4', '5', '6'], '4', '9 × 4 = 36.')],
        learningOutcomes: ['Recall multiplication tables 2–10', 'Divide by equal sharing', 'Relate multiplication and division'],
        crossCurricularLink: 'EVS: Distributing food and resources'
    }]
},
