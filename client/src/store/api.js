import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Product", "Customer", "Transaction"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),

    getProducts: builder.query({
      query: () => `/client/products`,
      providesTags: ["Product"],
    }),
    getCustomers: builder.query({
      query: () => `/client/customers`,
      providesTags: ["Customer"],
    }),
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
} = api;
