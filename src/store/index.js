/** @format */

import { configureStore } from '@reduxjs/toolkit';

import activeSlice from './reducers/activeSlice';
import photosSlice from './reducers/photosSlice';
import modalImageSlice from './reducers/modalImageSlice';

const store = configureStore({
  reducer: {
    activeSlice,
    photosSlice,
    modalImageSlice,
  }
});

export default store;
