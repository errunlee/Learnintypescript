import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IUser {
  body: string;
  title: string;
  id: string;
}

export const placeholderApi = createApi({
  reducerPath: "placeholder",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query<IUser[], number>({
      query: (page) => `posts?_page=${page}&_limit=3`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDataQuery } = placeholderApi;
