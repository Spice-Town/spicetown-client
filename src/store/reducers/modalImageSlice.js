import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  modalImages: [],
  loading: false,
  error: null,
  currentIndex: 0,
};

export const createModalImage = (imageData) => async (dispatch) => {
  dispatch(createModalImageStart());
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER}/mod_img`, imageData);
    dispatch(createModalImageSuccess(response.data));
  } catch (error) {
    dispatch(createModalImageError(error.message));
  }
};



export const fetchAllModalImages = () => async (dispatch) => {
  dispatch(fetchAllModalImagesStart());
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/mod_img`);
    dispatch(fetchAllModalImagesSuccess(response.data));
  } catch (error) {
    dispatch(fetchAllModalImagesError(error.message));
  }
};

export const deleteModalImage = (imageId) => async (dispatch) => {
  dispatch(deleteModalImageStart());
  try {
    const response = await axios.delete(`${import.meta.env.VITE_SERVER}/mod_img/${imageId}`);
    dispatch(deleteModalImageSuccess(response.data));
  } catch (error) {
    dispatch(deleteModalImageError(error.message));
  }
};

const modalImagesSlice = createSlice({
  name: 'modalImages',
  initialState,
  reducers: {
    createModalImageStart(state) {
      state.loading = true;
      state.error = null;
    },
    createModalImageSuccess(state, action) {
      state.loading = false;
      state.modalImages.push(action.payload);
    },
    createModalImageError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAllModalImagesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllModalImagesSuccess(state, action) {
      state.loading = false;
      state.modalImages = action.payload;
    },
    fetchAllModalImagesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteModalImageStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteModalImageSuccess(state, action) {
      state.loading = false;
      state.modalImages = state.modalImages.filter((image) => image._id !== action.payload._id);
    },
    deleteModalImageError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentIndex(state, action) {
      state.currentIndex = action.payload;
    },
  },
});

export const {
  createModalImageStart,
  createModalImageSuccess,
  createModalImageError,
  fetchAllModalImagesStart,
  fetchAllModalImagesSuccess,
  fetchAllModalImagesError,
  deleteModalImageStart,
  deleteModalImageSuccess,
  deleteModalImageError,
  setCurrentIndex,
} = modalImagesSlice.actions;

export default modalImagesSlice.reducer;
