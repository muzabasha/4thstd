export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // Math - Patterns
  "Jaali patterns": "Imagine your house is wearing a beautiful lace dress! That's what a Jaali is. It's a wall with tiny holes that lets the wind play hide-and-seek and keeps the house cool without a fan. Just like how your window screen keeps out flies, Jaali keeps out the heat but welcomes the breeze!",
  
  "Brick Symmetry": "Think of a brick as a twin! If you cut it down the middle, the left side looks exactly like the right side, like they are looking into a mirror. It's like your face—two eyes, two ears, and one nose in the middle. If a brick wasn't symmetrical, your wall would look like it was doing a funny dance!",
  
  // Math - Time
  "24-Hour Clock": "Imagine a clock that never sleeps! Most clocks count to 12 and then start over, like they've had enough. But the 24-hour clock is a marathon runner. It goes all the way to 24. For example, 13:00 is just 1 PM after a lunch nap. It's like counting your fingers and then starting on your toes!",
  
  // Science - Travel
  "Different Bridges": "Imagine you're an ant trying to cross a puddle. A bamboo bridge is like using a single straw—it's light and wiggly! A cement bridge is like a giant elephant standing across the water—it's super strong and doesn't move at all. Bamboo bridges are for light-footed explorers, while cement bridges can carry heavy school buses!",
  
  "Animal Skins": "Imagine if you could wear a suit that makes you invisible! Some animals, like Zebras, wear striped pajamas so they can hide in the tall grass. It's like playing a giant game of 'Where's Waldo?' in the wild. The patterns help them stay safe from bigger animals who are looking for a snack!",

  // Computers
  "CPU": "The CPU is the Master Chef of the computer! It's a tiny brain that tells the screen what to show and the mouse where to go. Just like a chef follows a recipe to make yummy pasta, the CPU follows codes to run your favorite games!",
  
  "MS Word": "Think of MS Word as your digital magic notebook. If you make a mistake, you don't need an eraser; you just tap 'Delete' and it vanishes! It's like writing on a chalkboard that never gets dusty. You can even change your handwriting to look like a robot or a princess with just one click!",

  // AI
  "Smart Machines": "Imagine your toy car started deciding where to drive by itself! That's a bit like AI. It's when a machine learns to 'think' by looking at thousands of examples. It's like teaching a puppy a trick, but the puppy is a computer chip that never forgets!",

  "default": "Imagine this part of our topic is like a secret ingredient in a recipe! It helps everything else make sense. Just like how salt brings out the flavor in food, this concept helps us understand the bigger picture of our world."
};

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate' | 'activity',
  topic: string,
  context?: string
): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'explain') {
        let explanation = KNOWLEDGE_BASE[context || ""] || KNOWLEDGE_BASE[topic] || KNOWLEDGE_BASE["default"];
        
        // Scenario augmentation
        if (context === 'Introduction') {
          explanation = `Picture this: You are the lead explorer in a new world! To navigate, you need to master ${topic}. It's like having a secret map that only you can read. Ready to find the treasure?`;
        } else if (context === 'Core Concepts') {
          explanation = `These concepts are the 'Superpowers' of ${topic}. Without them, you'd be like a superhero without a cape! Let's learn to fly!`;
        }
        
        resolve(explanation);
      } else if (promptType === 'quiz') {
        resolve(`Quick Quiz! Imagine you're on a game show. For 100 points, what's one funny thing you learned about ${topic}?`);
      } else if (promptType === 'activity') {
        resolve(`Time to get your hands dirty! Let's do the ${topic} activity. It's more fun than a barrel of monkeys!`);
      } else {
        resolve(`You're a genius! You've navigated this part of the scenario perfectly. Onward to the next adventure!`);
      }
    }, 1000);
  });
};
