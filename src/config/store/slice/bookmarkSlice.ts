import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bookmark {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
  authorName: string;
}

interface BookmarkState {
  bookmarks: Bookmark[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<Bookmark>) => {
      const existingBookmark = state.bookmarks.find(bookmark => bookmark.id === action.payload.id);
      if (!existingBookmark) {
        state.bookmarks = [...state.bookmarks, action.payload];
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;

