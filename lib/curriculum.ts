export interface Topic {
  id: string;
  title: string;
  subtopics: string[];
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  chapters: Chapter[];
}

export const syllabus: Subject[] = [
  {
    id: "mathematics",
    title: "Mathematics (Math-Magic)",
    chapters: [
      {
        id: "math-c1",
        title: "Building with Bricks",
        topics: [
          { id: "math-c1-t1", title: "Patterns of Bricks", subtopics: ["Jaali patterns", "Jharokha patterns", "Arch patterns"] },
          { id: "math-c1-t2", title: "Brick Dimensions", subtopics: ["Length, width, height", "Drawing a brick"] }
        ]
      },
      {
        id: "math-c2",
        title: "Long and Short",
        topics: [
          { id: "math-c2-t1", title: "Measuring Length", subtopics: ["Centimeters", "Meters", "Kilometers"] },
          { id: "math-c2-t2", title: "Inter-conversion", subtopics: ["m to cm", "km to m"] }
        ]
      },
      {
        id: "math-c3",
        title: "A Trip to Bhopal",
        topics: [
          { id: "math-c3-t1", title: "Word Problems", subtopics: ["Addition", "Subtraction", "Multiplication", "Division"] },
          { id: "math-c3-t2", title: "Time and Distance", subtopics: ["Estimating time", "Fuel consumption"] }
        ]
      },
      {
        id: "math-c4",
        title: "Tick-Tick-Tick",
        topics: [
          { id: "math-c4-t1", title: "Reading Time", subtopics: ["Clock faces", "12-hour vs 24-hour", "Minutes and hours"] },
          { id: "math-c4-t2", title: "Calendar", subtopics: ["Dates", "Duration calculation"] }
        ]
      },
      {
        id: "math-c5",
        title: "The Way The World Looks",
        topics: [
          { id: "math-c5-t1", title: "Perspectives", subtopics: ["Top view", "Side view", "Front view"] },
          { id: "math-c5-t2", title: "Mapping", subtopics: ["Finding routes", "Distances on maps"] }
        ]
      },
      {
        id: "math-c6",
        title: "The Junk Seller",
        topics: [
          { id: "math-c6-t1", title: "Buying and Selling", subtopics: ["Profit and Loss", "Loan concepts"] },
          { id: "math-c6-t2", title: "Multiplication", subtopics: ["Box method", "Mental math"] }
        ]
      },
      {
        id: "math-c7",
        title: "Jugs and Mugs",
        topics: [
          { id: "math-c7-t1", title: "Measuring Capacity", subtopics: ["Liters", "Milliliters"] },
          { id: "math-c7-t2", title: "Daily Life application", subtopics: ["Liquid addition", "Container sizes"] }
        ]
      },
      {
        id: "math-c8",
        title: "Carts and Wheels",
        topics: [
          { id: "math-c8-t1", title: "Circles", subtopics: ["Radius", "Diameter", "Center"] },
          { id: "math-c8-t2", title: "Compass Work", subtopics: ["Drawing circles", "Circle patterns"] }
        ]
      },
      {
        id: "math-c9",
        title: "Halves and Quarters",
        topics: [
          { id: "math-c9-t1", title: "Fractions Intro", subtopics: ["Whole to parts", "1/2, 1/4, 3/4"] },
          { id: "math-c9-t2", title: "Equivalent Parts", subtopics: ["Fractional shapes", "Shading regions"] }
        ]
      },
      {
        id: "math-c10",
        title: "Play with Patterns",
        topics: [
          { id: "math-c10-t1", title: "Number Patterns", subtopics: ["Increasing/Decreasing sequence", "Magic Squares"] },
          { id: "math-c10-t2", title: "Secret Messages", subtopics: ["Ciphers", "Encoding/Decoding"] }
        ]
      },
      {
        id: "math-c11",
        title: "Tables and Shares",
        topics: [
          { id: "math-c11-t1", title: "Multiplication Tables", subtopics: ["Tables up to 20", "Doubling"] },
          { id: "math-c11-t2", title: "Division", subtopics: ["Equal sharing", "Laying out objects"] }
        ]
      },
      {
        id: "math-c12",
        title: "How Heavy? How Light?",
        topics: [
          { id: "math-c12-t1", title: "Measuring Weight", subtopics: ["Gram", "Kilogram"] },
          { id: "math-c12-t2", title: "Balance Scales", subtopics: ["Using a balance", "Estimating weight"] }
        ]
      },
      {
        id: "math-c13",
        title: "Fields and Fences",
        topics: [
          { id: "math-c13-t1", title: "Perimeter", subtopics: ["Boundary measurement", "Irregular shapes"] },
          { id: "math-c13-t2", title: "Area (Simple)", subtopics: ["Inside spaces", "Grid counting"] }
        ]
      },
      {
        id: "math-c14",
        title: "Smart Charts",
        topics: [
          { id: "math-c14-t1", title: "Tally Marks", subtopics: ["Recording data", "Table representation"] },
          { id: "math-c14-t2", title: "Graphs", subtopics: ["Bar graphs", "Pie (Chapati) charts"] }
        ]
      }
    ]
  },
  {
    id: "environmental-studies",
    title: "Environmental Studies (Looking Around)",
    chapters: [
      {
        id: "evs-c1",
        title: "Going to School",
        topics: [
          { id: "evs-c1-t1", title: "Modes of Transport", subtopics: ["Bamboo Bridge", "Trolley", "Vallam", "Camel cart", "Bullock cart"] },
          { id: "evs-c1-t2", title: "Geographical Challenges", subtopics: ["Mountains", "Snowy paths", "Jungles"] }
        ]
      },
      {
        id: "evs-c2",
        title: "Ear to Ear",
        topics: [
          { id: "evs-c2-t1", title: "Animal Ears", subtopics: ["Visible ears", "Internal ears", "Patterns on skin"] },
          { id: "evs-c2-t2", title: "Classification", subtopics: ["Mammals", "Birds", "Reptiles"] }
        ]
      },
      {
        id: "evs-c3",
        title: "A Day with Nandu",
        topics: [
          { id: "evs-c3-t1", title: "Elephant Herds", subtopics: ["Herd life", "Elephant habits"] },
          { id: "evs-c3-t2", title: "Social Animals", subtopics: ["Living in groups", "Animal behavior"] }
        ]
      },
      {
        id: "evs-c4",
        title: "The Story of Amrita",
        topics: [
          { id: "evs-c4-t1", title: "Trees and People", subtopics: ["Bishnoi community", "Khejadli village"] },
          { id: "evs-c4-t2", title: "Protecting Nature", subtopics: ["Importance of trees", "Environment conservation"] }
        ]
      },
      {
        id: "evs-c5",
        title: "Anita and the Honeybees",
        topics: [
          { id: "evs-c5-t1", title: "Beekeeping", subtopics: ["Life of honeybees", "Honey production"] },
          { id: "evs-c5-t2", title: "Education and Empowerment", subtopics: ["Right to education", "Overcoming challenges"] }
        ]
      },
      {
        id: "evs-c6",
        title: "Omana’s Journey",
        topics: [
          { id: "evs-c6-t1", title: "Train Travel", subtopics: ["Travel arrangements", "Railway stations"] },
          { id: "evs-c6-t2", title: "Geography of India", subtopics: ["Landscape observation", "Regional differences"] }
        ]
      },
      {
        id: "evs-c25",
        title: "Spicy Riddles",
        topics: [
          { id: "evs-c25-t1", title: "Spices in Food", subtopics: ["Identification of spices", "Taste and aroma"] },
          { id: "evs-c25-t2", title: "Culinary Uses", subtopics: ["Spices as medicine", "Daily cooking"] }
        ]
      }
      // Note: Coverage expanded to core themes; others follow same structure
    ]
  },
  {
    id: "english",
    title: "English (Marigold)",
    chapters: [
      {
        id: "eng-c1",
        title: "Wake Up! & Neha’s Alarm Clock",
        topics: [
          { id: "eng-c1-t1", title: "Wake Up! (Poem)", subtopics: ["Poem recitation", "Phyming words"] },
          { id: "eng-c1-t2", title: "Neha’s Alarm Clock", subtopics: ["Comprehension", "Daily Routine"] }
        ]
      },
      {
        id: "eng-c2",
        title: "Noses & The Little Fir Tree",
        topics: [
          { id: "eng-c2-t1", title: "Noses (Poem)", subtopics: ["Imagery", "Body parts vocabulary"] },
          { id: "eng-c2-t2", title: "The Little Fir Tree", subtopics: ["Story summary", "Self-acceptance"] }
        ]
      },
      {
        id: "eng-c3",
        title: "Run! & Nasiruddin’s Aim",
        topics: [
          { id: "eng-c3-t1", title: "Run! (Poem)", subtopics: ["Action words", "Rhythm"] },
          { id: "eng-c3-t2", title: "Nasiruddin’s Aim", subtopics: ["Humor in stories", "Dialogue practice"] }
        ]
      },
      {
        id: "eng-c4",
        title: "Why? & Alice in Wonderland",
        topics: [
          { id: "eng-c4-t1", title: "Why? (Poem)", subtopics: ["Inquiry skills", "Curiosity"] },
          { id: "eng-c4-t2", title: "Alice in Wonderland", subtopics: ["Fantasy stories", "Adjective practice"] }
        ]
      }
    ]
  },
  {
    id: "grammar",
    title: "Grammar & Communication",
    chapters: [
      {
        id: "g-c1",
        title: "Parts of Speech (Basic)",
        topics: [
          { id: "g-c1-t1", title: "Nouns", subtopics: ["Proper, Common, Collective"] },
          { id: "g-c1-t2", title: "Pronouns", subtopics: ["Personal, Possessive"] },
          { id: "g-c1-t3", title: "Verbs", subtopics: ["Action verbs", "Helping verbs"] }
        ]
      },
      {
        id: "g-c2",
        title: "Tenses",
        topics: [
          { id: "g-c2-t1", title: "Simple Present", subtopics: ["Daily habits", "General truths"] },
          { id: "g-c2-t2", title: "Simple Past", subtopics: ["Past actions", "Yesterday events"] }
        ]
      }
    ]
  }
];
