import { configureStore } from '@reduxjs/toolkit';
import fashionReducer from '../features/fashionSlice';

export default configureStore({
  reducer: {
    fashion: fashionReducer,
  },
});
