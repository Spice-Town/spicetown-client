/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    clearActive: (state) => {
      state.active = null;
    },
  },
});

export const { setActive, clearActive } = activeSlice.actions;

export default activeSlice.reducer;
