import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../src/config/store/store';
import { addMessage } from '../src/config/store/slice/chatSlice';

interface LastMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const useChat = () => {
  const dispatch = useDispatch();
  const lastMessage = useSelector((state: RootState) => state.chat.lastMessage);

  const updateLastMessage = useCallback((message: LastMessage) => {
    dispatch(addMessage(message));
  }, [dispatch]);

  return {
    lastMessage,
    updateLastMessage,
  };
};

