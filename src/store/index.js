/** @format */

import { configureStore } from '@reduxjs/toolkit';

import activeSlice from './reducers/activeSlice';
import photosSlice from './reducers/photosSlice';

const store = configureStore({
  reducer: {
    activeSlice,
    photosSlice,
  }
});

export default store;
