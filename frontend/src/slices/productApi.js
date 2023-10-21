import { PRODUCTS_URL } from "../constants.js";
import { apiSlice } from "./apiSlice.js";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getProductDetail: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`
      })
    })

  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productApi;
