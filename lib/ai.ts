export interface AIResponse {
  content: string;
  type: 'explanation' | 'question' | 'feedback';
}

export const generateAIResponse = async (
  promptType: 'explain' | 'quiz' | 'evaluate' | 'activity',
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
        if (topic.includes('बादल') || topic.includes('कविता')) {
          resolve(`नमस्ते यासमीन! आज हम बादलों के बारे में हिन्दी में सीखेंगे। बादल बहुत प्यारे और मनमौजी होते हैं। क्या आप कविता शुरू करने के लिए तैयार हैं?`);
        } else if (topic.includes('ಕೆನ್ನಡ') || topic.includes('Varnamale')) {
          resolve(`ನಮಸ್ಕಾರ ಯಾಸ್ಮೀನ್! ಇಂದು ನಾವು ಕನ್ನಡ ವರ್ಣಮಾಲೆಯನ್ನು ಕಲಿಯೋಣ. ಇದು ಬಹಳ ಸುಲಭ ಮತ್ತು ಸುಂದರವಾಗಿದೆ. ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?`);
        } else {
          resolve(`Hey Yasmeen! Let's talk about ${topic}. ${topic} is super interesting. It's like when you have a set of patterns and you try to understand the logic behind them. For example, in Grade 4, we see this in ${context || 'our daily life'}. Would you like an example or should I ask you a question?`);
        }
      } else if (promptType === 'quiz') {
        resolve(`Ready for a challenge? Here is a question about ${topic}: If you have 5 bricks and you add 3 more, how many do you have?`);
      } else if (promptType === 'activity') {
        resolve(`Okay Yasmeen, let's do the ${topic} activity together! 🎯 \n\nStep 1: ${context || 'Gather your materials'}. \nStep 2: Start by observing carefully. \nStep 3: Tell me what you see or do! \n\nI'm right here to help you. Ready to start?`);
      } else {
        resolve(`That's a great attempt! You're learning fast. Let's try another one!`);
      }
    }, 1500);
  });
};
