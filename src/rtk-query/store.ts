import { configureStore } from "@reduxjs/toolkit";
import { posts } from "./api";
import { kidneyApi } from "./kidneyApi";
import { placeholderApi } from "./jsonPlaceholderApi";
export const store = configureStore({
  reducer: {
    posts: posts.reducer,
    kidneyApi: kidneyApi.reducer,
    [placeholderApi.reducerPath]: placeholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(posts.middleware, placeholderApi.middleware),
});
