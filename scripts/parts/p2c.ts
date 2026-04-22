{
    id: 'm4', title: '4. Tick-Tick-Tick', topics: [{
        id: 'm4t1', title: 'Time and Calendar',
        subtopics: ['Reading a clock (hours & minutes)', '24-hour clock', 'Days, months, years'],
        readingText: {
            en: 'A clock has 12 hours. The short hand shows hours and the long hand shows minutes. There are 60 minutes in 1 hour and 24 hours in 1 day.',
            hi: 'घड़ी में 12 घंटे होते हैं। छोटी सुई घंटे दिखाती है और लंबी सुई मिनट। 1 घंटे में 60 मिनट और 1 दिन में 24 घंटे होते हैं।',
            kn: 'ಗಡಿಯಾರದಲ್ಲಿ 12 ಗಂಟೆಗಳಿವೆ. ಚಿಕ್ಕ ಮುಳ್ಳು ಗಂಟೆ ತೋರಿಸುತ್ತದೆ, ಉದ್ದ ಮುಳ್ಳು ನಿಮಿಷ ತೋರಿಸುತ್ತದೆ.'
        },
        activities: [
            act('Clock Maker', 'Make a paper clock and show different times.', 'performing', 'low',
                ['Cut a circle from cardboard', 'Write numbers 1-12', 'Make two hands from paper', 'Show 3:30, 7:15, 11:45'],
                ['Cardboard', 'Scissors', 'Fastener'], 'What time do you wake up? Show it on your clock!'),
            act('My Daily Schedule', 'Write your daily timetable with times.', 'writing', 'mid',
                ['List 8 activities of your day', 'Write start and end time for each', 'Calculate time spent on each', 'Find total study time'],
                ['Notebook', 'Pencil'], 'How many hours do you sleep each night?'),
            act('Calendar Detective', 'Answer questions using a real calendar.', 'calculating', 'high',
                ['Find how many Sundays in this month', 'Count days from your birthday to today', 'Find what day Jan 26 falls on', 'Calculate days until your next holiday'],
                ['Calendar', 'Notebook'], 'How many days until your next birthday?')
        ],
        quiz: [
            q('How many hours are in a day?', ['12', '24', '48', '60'], '24', 'A full day has 24 hours.'),
            q('How many minutes are in 1 hour?', ['30', '45', '60', '100'], '60', 'There are 60 minutes in every hour.'),
            q('The short hand of a clock shows ___', ['Minutes', 'Seconds', 'Hours', 'Days'], 'Hours', 'The short (hour) hand moves slowly around the clock.'),
            q('How many months are in a year?', ['10', '11', '12', '13'], '12', 'January to December — 12 months in a year.')
        ],
        learningOutcomes: ['Read time on a clock', 'Use a calendar', 'Calculate duration'],
        crossCurricularLink: 'Hindi: Poems about seasons and time'
    }]
},
{
    id: 'm5', title: '5. The Way The World Looks', topics: [{
        id: 'm5t1', title: 'Maps and Top Views',
        subtopics: ['Top view vs side view', 'Reading a simple map', 'Directions: N, S, E, W'],
        readingText: {
            en: 'When we look at objects from above, we see their top view. A map is a top view of a place. We use directions North, South, East and West to find our way.',
            hi: 'जब हम ऊपर से वस्तुओं को देखते हैं, तो हमें उनका ऊपरी दृश्य दिखता है। नक्शा किसी स्थान का ऊपरी दृश्य होता है।',
            kn: 'ನಾವು ಮೇಲಿನಿಂದ ವಸ್ತುಗಳನ್ನು ನೋಡಿದಾಗ ಅವುಗಳ ಮೇಲ್ನೋಟ ಕಾಣುತ್ತದೆ. ನಕ್ಷೆ ಒಂದು ಸ್ಥಳದ ಮೇಲ್ನೋಟ.'
        },
        activities: [
            act('Room Map', 'Draw a top-view map of your room.', 'drawing', 'low',
                ['Look at your room from above (imagine)', 'Draw the outline', 'Add furniture as rectangles/squares', 'Label each item'],
                ['Paper', 'Pencil', 'Ruler'], 'Can a friend find your bed using only your map?'),
            act('School Map', 'Draw a map of your school with directions.', 'drawing', 'mid',
                ['Draw the school boundary', 'Add classrooms, playground, office', 'Mark N, S, E, W', 'Add a compass rose'],
                ['Paper', 'Pencil', 'Ruler'], 'Which direction does your classroom face?'),
            act('Treasure Hunt Map', 'Create a treasure hunt map for a friend.', 'performing', 'high',
                ['Choose a location', 'Draw the map with landmarks', 'Write directions using N/S/E/W', 'Hide a "treasure" and let friend find it'],
                ['Paper', 'Pencil'], 'How many steps North to reach the treasure?')
        ],
        quiz: [
            q('A map shows a ___ view of a place.', ['Side', 'Front', 'Top', 'Bottom'], 'Top', 'Maps are drawn as if you are looking down from above.'),
            q('The sun rises in the ___', ['North', 'South', 'East', 'West'], 'East', 'The sun always rises in the East.'),
            q('Opposite of North is ___', ['East', 'West', 'South', 'Up'], 'South', 'North and South are opposite directions.'),
            q('Which tool helps us find directions?', ['Ruler', 'Compass', 'Scale', 'Protractor'], 'Compass', 'A compass needle always points North.')
        ],
        learningOutcomes: ['Draw top-view maps', 'Use cardinal directions', 'Read simple maps'],
        crossCurricularLink: 'EVS: Maps of India, states and districts'
    }]
},
