/** @format */

import { configureStore } from '@reduxjs/toolkit';

import activeSlice from './reducers/activeSlice';

const store = configureStore({
  reducer: {
    activeSlice,
  }
});

export default store;