// English subject seed
const t = (id, title, subtopics, en, hi, kn, activities, quiz, outcomes, cross) => ({
    id, title, subtopics,
    readingText: { en, hi, kn },
    activities, quiz,
    learningOutcomes: outcomes,
    crossCurricularLink: cross
});
const q = (question, options, correctAnswer, explanation) => ({ question, options, correctAnswer, explanation });
const a = (title, description, skill, level, steps, materials, doItYourself) =>
    ({ title, description, skill, level, steps, ...(materials ? { materials } : {}), ...(doItYourself ? { doItYourself } : {}) });

const englishChapters = [];

// ── PROSE & POETRY ────────────────────────────────────────────────────────────
const prosePoemTopics = [
    t('en-wakeup', 'Wake Up! (Poem)',
        ['Reading aloud with expression', 'Identifying rhyming words', 'Understanding the morning theme'],
        'Wake Up! is a cheerful morning poem. Birds sing, bees buzz and the sun shines. It tells us to enjoy the beautiful day.',
        'जागो! एक प्रसन्न सुबह की कविता है। पक्षी गाते हैं, मधुमक्खियाँ गुनगुनाती हैं और सूरज चमकता है।',
        'ಎದ್ದೇಳು! ಒಂದು ಸಂತೋಷದ ಬೆಳಗಿನ ಕವಿತೆ. ಹಕ್ಕಿಗಳು ಹಾಡುತ್ತವೆ, ಜೇನ್ನೊಣ ಝೇಂಕರಿಸುತ್ತದೆ.',
        [
            a('Read Aloud', 'Read the poem with expression and clap on rhyming words.', 'speaking', 'low',
                ['Listen to the poem once', 'Read line by line slowly', 'Clap on every rhyming word', 'Recite the full poem'],
                [], 'Can you add one more line to the poem?'),
            a('Rhyme Finder', 'Find all rhyming pairs in the poem.', 'writing', 'mid',
                ['Read the poem carefully', 'Underline words that rhyme', 'Write pairs in notebook', 'Make 2 new rhyming pairs'],
                ['Notebook', 'Pencil']),
            a('Write Your Poem', 'Write your own 4-line morning poem.', 'writing', 'high',
                ['Think of 4 morning things you see', 'Write line 1 & 2 (rhyming)', 'Write line 3 & 4 (rhyming)', 'Illustrate your poem'],
                ['Notebook', 'Crayons'], 'Share your poem with the class!')
        ],
        [
            q('Who says Buzz-buzz in the poem?', ['Birds', 'Bees', 'Dogs', 'Cats'], 'Bees', 'Bees make a buzzing sound.'),
            q('What does the poem ask us to do?', ['Sleep', 'Wake up', 'Eat', 'Study'], 'Wake up', 'The poem is a cheerful call to wake up.'),
            q('Which word rhymes with sing?', ['Song', 'Ring', 'Bird', 'Sun'], 'Ring', 'Sing and Ring both end with -ing.'),
            q('What time of day is the poem about?', ['Night', 'Afternoon', 'Morning', 'Evening'], 'Morning', 'Birds, bees and sunrise are all morning things.')
        ],
        ['Read a poem with expression', 'Identify rhyming words', 'Understand a poem\'s theme'],
        'EVS: Morning routines and nature'
    ),
