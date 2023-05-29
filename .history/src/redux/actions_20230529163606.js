import { createAsyncThunk } from "@reduxjs/toolkit";
import providerInfoData from "../data/providerInfo.json";

export const fetchProviderInfo = createAsyncThunk(
  "provider/fetchProviderInfo",
  async () => {
    try {
      const providerInfo = providerInfoData.map(({ code, name, url }) => {
        const formattedCode = code.replace(/\s/g, "").toLowerCase();
        return {
          code: formattedCode,
          name,
          url,
        };
      });

      console.log(providerInfo); // Log the providerInfo array

      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);
