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

      console.log(providerInfo); // Log the providerInfo array

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
      console.log("Fetching price ranges..."); // Log the fetching of price ranges

      // Your asynchronous API call code here

      const priceRanges = priceRangesData;

      console.log("Price Ranges:", priceRanges); // Log the priceRanges array

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
