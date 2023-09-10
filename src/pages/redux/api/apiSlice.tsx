import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/news",
    }),
    getNews: builder.query({
      query: (newsId) => `/news/${newsId}`,
    }),
    addNewNews: builder.mutation({
      query: (initialNews) => ({
        url: "/news",
        method: "POST",
        body: initialNews,
      }),
    }),
  }),
});

export const { useGetNewsesQuery, useGetNewsQuery, useAddNewNewsMutation } = apiSlice;
