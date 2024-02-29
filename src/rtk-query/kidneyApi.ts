import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface IFormData {
  sellerName: string;
  receiverName: string;
  kidneyPrice: number | null;
}

export const kidneyApi = createApi({
  reducerPath: "kidneyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["kidney"],
  endpoints: (builder) => ({
    getPrevTransplants: builder.query<IFormData[], string>({
      query: () => `business`,
      providesTags: ["kidney"],
    }),
    postNewTransplant: builder.mutation<IFormData, IFormData>({
      query: (body) => ({
        url: "business",
        method: "POST",
        body,
      }),
      providesTags: ["kidney"],

    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPrevTransplantsQuery, usePostNewTransplantMutation } =
  kidneyApi;
