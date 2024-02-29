import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";
import { kidneyApi } from "./kidneyApi";
export const store = configureStore({
  reducer: {
    posts: posts.reducer,
    kidneyApi: kidneyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kidneyApi.middleware),
});
