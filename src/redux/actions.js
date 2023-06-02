import { createAsyncThunk } from "@reduxjs/toolkit";
import providerInfoData from "../data/providerInfo.json";
import priceRangesData from "../data/priceRanges.json";

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
      console.log(providerInfo); 
      return providerInfo;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const fetchPriceRanges = createAsyncThunk(
  "provider/fetchPriceRanges",
  async () => {
    try {
      const priceRanges = priceRangesData;
      return priceRanges;
    } catch (error) {
      throw Error(error.message);
    }
  }
);
export const updatePriceRanges = (priceRanges) => ({
  type: "provider/updatePriceRanges",
  payload: priceRanges,
});
