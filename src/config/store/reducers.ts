import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import bookmarksReducer from "./slice/bookmarkSlice";
import chatReducer from "./slice/chatSlice";

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
  chat: chatReducer
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export { persistedReducer };
