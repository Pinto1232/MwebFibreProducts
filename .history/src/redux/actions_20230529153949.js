import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProviderInfo = createAsyncThunk(
  "provider/fetchProviderInfo",
  async () => {
    try {
      const response = await axios.get(
        "https://www.mweb.co.za/media/images/providers"
      );

      const logoBaseURL = "https://www.mweb.co.za/media/images/providers";

      const providerInfo = Object.keys(response.data).map((code) => ({
        code,
        name: response.data[code],
        url: `${logoBaseURL}/provider-${code.toLowerCase()}.png`,
      }));

      console.log(providerInfo); // Log the providerInfo array

      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);




