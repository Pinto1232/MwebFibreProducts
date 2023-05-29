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

      const providerInfo = Object.entries(response.data).map(([code, name]) => {
        const formattedCode = code.replace(/\s/g, "").toLowerCase();
        return {
          code: formattedCode,
          name,
          url: `${logoBaseURL}/provider-${formattedCode}.png`,
        };
      });
      
      

      console.log(providerInfo); // Log the providerInfo array

      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

