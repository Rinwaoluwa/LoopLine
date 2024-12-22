import { useState, useCallback, useEffect } from 'react';
import { getRandomResponse } from '../utils/chatResponses';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export function useChatLogic() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const addMessage = useCallback((text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: getTimestamp()
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  }, []);

  const handleSendMessage = useCallback((message: string) => {
    if (message.trim()) {
      // Add user message
      addMessage(message.trim(), 'user');
      
      // Clear input
      setInputMessage('');
      
      // Show bot typing
      setIsTyping(true);
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = getRandomResponse(message.trim());
        addMessage(botResponse, 'bot');
        setIsTyping(false);
      }, 1000);
    }
  }, [addMessage]);

  const handleInputChange = useCallback((text: string) => {
    setInputMessage(text);
  }, []);

  // Initial greeting
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialGreeting = getRandomResponse('hello');
      addMessage(initialGreeting, 'bot');
    }, 1000);

    return () => clearTimeout(timer);
  }, [addMessage]);

  return {
    messages,
    inputMessage,
    setInputMessage,
    isTyping,
    handleSendMessage,
    handleInputChange,
  };
}
