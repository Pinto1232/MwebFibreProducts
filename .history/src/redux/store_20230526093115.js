import { configureStore } from '@reduxjs/toolkit';
/* import studentApi from '../services/studentApi';
import packageApi from '../services/packageApi'; */
import fibreIconsApi from '../services/fibreIconsApi';
import fibreMultipleSelectProvidersApi from '../services/fibreMultipleSelectProvidersApi';
import fibreProductsApi from '../services/fibreProductsApi';
import fibrePriceRangeApi from '../services/fibrePriceRangeApi';

export default configureStore({
  reducer: {
    /* [studentApi.reducerPath]: studentApi.reducer,
    [packageApi.reducerPath]: packageApi.reducer, */
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      /* studentApi.middleware,
      packageApi.middleware */
    ),
});