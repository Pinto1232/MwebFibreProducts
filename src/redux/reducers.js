import { createSlice } from '@reduxjs/toolkit';
import { fetchProviderInfo } from './actions';

const initialState = {
  providerInfo: [],
  loading: false,
  error: null,
};

const providerSlice = createSlice({
  name: 'provider',
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
      });
  },
});

export default providerSlice.reducer;
