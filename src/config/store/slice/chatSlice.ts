import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  lastMessage: Message | null;
}

const initialState: ChatState = {
  messages: [],
  lastMessage: null
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
      state.lastMessage = action.payload;
    },
    clearChat: (state) => {
      state.messages = [];
      state.lastMessage = null;
    }
  }
});

export const { addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
