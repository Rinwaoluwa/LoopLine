import { useState, useCallback, useEffect } from 'react';
import { getRandomResponse } from '../utils/chatResponses';
import { useAppDispatch } from '../src/config/store/hooks';
import { addMessage } from '../src/config/store/slice/chatSlice';

interface Message {
  id: string; // Changed from number to string
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export function useChatLogic() {
  const dispatch = useAppDispatch();
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

  const addNewMessage = useCallback((text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: getTimestamp()
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    dispatch(addMessage(newMessage));
  }, [dispatch]);

  const handleSendMessage = useCallback((message: string) => {
    if (message.trim()) {
      addNewMessage(message.trim(), 'user');
      setInputMessage('');
      setIsTyping(true);
      
      setTimeout(() => {
        const botResponse = getRandomResponse(message.trim());
        addNewMessage(botResponse, 'bot');
        setIsTyping(false);
      }, 1000);
    }
  }, [addNewMessage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const initialGreeting = getRandomResponse('hello');
      addNewMessage(initialGreeting, 'bot');
    }, 1000);

    return () => clearTimeout(timer);
  }, [addNewMessage]);

  return {
    messages,
    inputMessage,
    setInputMessage,
    isTyping,
    handleSendMessage,
    handleInputChange: setInputMessage
  };
}
