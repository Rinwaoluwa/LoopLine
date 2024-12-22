const generalResponses = [
    "That's interesting! Tell me more.",
    "I see. How does that make you feel?",
    "Fascinating! What do you think about that?",
    "I understand. What would you like to chat about next?",
    "That's a great point. Can you elaborate?",
    "Interesting perspective. Have you considered the opposite view?",
    "I'm curious to hear more about your thoughts on this.",
    "That reminds me of something I read recently. What are your thoughts on it?",
    "I appreciate you sharing that. How has this affected your daily life?",
    "That's quite unique! How did you come to that conclusion?",
  ];
  
  const greetings = [
    "Hello! How are you doing today?",
    "Hi there! What's on your mind?",
    "Hey! It's great to chat with you. How can I help?",
    "Greetings! What would you like to talk about?",
    "Welcome! How has your day been so far?",
  ];
  
  const farewells = [
    "It was great chatting with you! Take care!",
    "Thanks for the conversation. Have a wonderful day!",
    "I enjoyed our chat. Hope to talk again soon!",
    "Wishing you all the best. Goodbye for now!",
    "Take care and stay safe. Bye!",
  ];
  
  export function getRandomResponse(message: string): string {
    if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
  
    if (message.toLowerCase().includes('bye') || message.toLowerCase().includes('goodbye')) {
      return farewells[Math.floor(Math.random() * farewells.length)];
    }
  
    return generalResponses[Math.floor(Math.random() * generalResponses.length)];
  }
  
  