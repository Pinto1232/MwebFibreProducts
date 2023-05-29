import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProviderInfo = createAsyncThunk(
  "provider/fetchProviderInfo",
  async (logoBaseURL) => {
    try {
      const response = await axios.get(
        "https://www.mweb.co.za/media/images/providers"
      );
      
      // Transform the response data into an array of providers
      const providerInfo = Object.entries(response.data).map(([url, name]) => ({
        code,
        name,
        url: `${logoBaseURL}/provider-${url}.png`,
      }));

      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

