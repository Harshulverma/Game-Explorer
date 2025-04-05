import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkslice";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});
