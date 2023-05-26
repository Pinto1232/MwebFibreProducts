import { configureStore } from '@reduxjs/toolkit';
import fibreIconsApi from '../services/fibreIconsApi';
import fibreMultipleSelectProvidersApi from '../services/fibreMultipleSelectProvidersApi';
import fibreProductsApi from '../services/fibreProductsApi';
import fibrePriceRangeApi from '../services/fibrePriceRangeApi';

export default configureStore({
  reducer: {
    [fibreIconsApi.reducerPath]: fibreIconsApi.reducer,
    [fibreMultipleSelectProvidersApi.reducerPath]: fibreMultipleSelectProvidersApi.reducer,
    [fibreProductsApi.reducerPath]: fibreProductsApi.reducer,
    [fibrePriceRangeApi.reducerPath]: fibrePriceRangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      fibreIconsApi.middleware,
      fibreMultipleSelectProvidersApi.middleware,
      fibreProductsApi.middleware,
      fibrePriceRangeApi.middleware
    ),
});