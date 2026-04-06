export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate',
  topic: string,
  context?: string
): Promise<string> => {
  // In a real implementation, you would call an LLM API here.
  // For this stateless demo, we use custom logic or a mocked engine.
  
  const apiKey = typeof localStorage !== 'undefined' ? localStorage.getItem('LLM_API_KEY') : null;
  
  if (apiKey) {
    // Logic for real API call (e.g. OpenAI or Gemini)
    // For now, let's mock the complexity
  }

  // Fallback / Mock logic for demonstration
  return new Promise((resolve) => {
    setTimeout(() => {
      if (promptType === 'explain') {
        resolve(`Hey Yasmeen! Let's talk about ${topic}. ${topic} is super interesting. It's like when you have a set of patterns and you try to understand the logic behind them. For example, in Grade 4, we see this in ${context || 'our daily life'}. Would you like an example or should I ask you a question?`);
      } else if (promptType === 'quiz') {
        resolve(`Ready for a challenge? Here is a question about ${topic}: If you have 5 bricks and you add 3 more, how many do you have?`);
      } else {
        resolve(`That's a great attempt! You're learning fast. Let's try another one!`);
      }
    }, 1500);
  });
};
