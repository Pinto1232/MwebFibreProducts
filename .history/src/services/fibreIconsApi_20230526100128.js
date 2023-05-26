import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fibreIconsApi = createApi({
  reducerPath: "fibreIconsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFibreIconsApi: builder.query({
      query: () => "/packages",
    }),
    getPackageById: builder.query({
      query: (id) => `/packages/${id}`,
    }),
  
  }),
});

export const {
  useGetPackagesQuery,
} = fibreIconsApi;

export default fibreIconsApi;