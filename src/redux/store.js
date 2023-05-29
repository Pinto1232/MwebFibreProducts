import { configureStore } from '@reduxjs/toolkit';
import providerReducer from './reducers';

const store = configureStore({
  reducer: {
    provider: providerReducer,
    // Other reducers...
  },
});

export default store;
