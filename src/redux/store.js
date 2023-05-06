import { configureStore } from '@reduxjs/toolkit';
import fishReducer from './FishSlice';

const store = configureStore({
  reducer: {
    fish: fishReducer,
  },
});

export default store;
