import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fibreIconsApi = createApi({
  reducerPath: "fibreIconsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.mweb.co.za",
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
      query: () => "/media/images/providers",
    }),
  }),
});

export const {
  useGetFibreIconsApiQuery, // Update the function name here
} = fibreIconsApi;

export default fibreIconsApi;
