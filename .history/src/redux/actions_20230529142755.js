import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProviderInfo = createAsyncThunk(
  "provider/fetchProviderInfo",
  async (logoBaseURL) => {
    try {
      const response = await axios.get(
        "https://www.mweb.co.za/media/images/providers"
      );

      const providerInfo = response.data.map((provider) => ({
        code: provider.code,
        name: provider.name,
        url: `${logoBaseURL}/provider-${provider.code}.png`,
      }));

      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);
