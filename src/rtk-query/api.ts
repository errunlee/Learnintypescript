import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const posts = createApi({
  reducerPath: "posts", //this is the name of our slice in store,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({ query: () => "posts" }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export { posts };

export const { useGetPostsQuery, useAddPostMutation } = posts;
