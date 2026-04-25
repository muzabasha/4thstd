// lib/ai.ts
import { KB } from './ai_kb';

export async function generateAIResponse(type: string, title: string, context?: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const key = title;
  const ctx = context?.toLowerCase() || '';
  
  // Try exact match, then context match, then subject fallback
  let response = KB[key];
  
  if (!response && context) {
    // Try to find if any KB key contains the context or vice versa
    const foundKey = Object.keys(KB).find(k => k.includes(title) || title.includes(k));
    if (foundKey) response = KB[foundKey];
  }

  if (!response) {
    if (ctx.includes('math')) response = KB['mathematics'];
    else if (ctx.includes('evs') || ctx.includes('sci')) response = KB['science'];
    else if (ctx.includes('hindi')) response = KB['hindi'];
    else if (ctx.includes('english')) response = KB['english'];
    else if (ctx.includes('kannada')) response = KB['kannada'];
    else if (ctx.includes('computer')) response = KB['computers'];
  }

  return response || `That's a very interesting topic! Let's explore more about **${title}** together. It's an important part of our Grade 4 journey! 🚀`;
}
