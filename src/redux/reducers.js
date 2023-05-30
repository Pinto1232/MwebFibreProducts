import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProviderInfo,
  fetchPriceRanges,
  updatePriceRanges,
} from "../redux/actions";

const initialState = {
  providerInfo: [],
  loading: false,
  error: null,
  priceRanges: [],
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProviderInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProviderInfo.fulfilled, (state, action) => {
        state.providerInfo = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProviderInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPriceRanges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPriceRanges.fulfilled, (state, action) => {
        state.priceRanges = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPriceRanges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePriceRanges, (state, action) => {
        state.priceRanges = action.payload;
      });
  },
});

export default providerSlice.reducer;
