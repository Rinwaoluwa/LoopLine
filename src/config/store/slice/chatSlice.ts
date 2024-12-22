import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatState {
  lastMessage: Message | "";
}

const initialState: ChatState = {
  lastMessage: "",
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.lastMessage = action.payload;
    },
    clearChat: (state) => {
      state.lastMessage = "";
    }
  }
});

export const { addMessage, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
