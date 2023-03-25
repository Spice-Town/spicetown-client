import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  modalImages: [],
  loading: false,
  error: null,
};

export const createModalImage = (imageData) => async (dispatch) => {
  dispatch(createModalImageStart());
  try {
    const response = await axios.post('http://localhost:3001/mod_img', imageData);
    dispatch(createModalImageSuccess(response.data));
  } catch (error) {
    dispatch(createModalImageError(error.message));
  }
};

export const fetchAllModalImages = () => async (dispatch) => {
  console.log('Fetching all modal images...');
  dispatch(fetchAllModalImagesStart());
  try {
    const response = await axios.get('http://localhost:3001/mod_img');
    console.log('Modal images fetched:', response.data);
    dispatch(fetchAllModalImagesSuccess(response.data));
  } catch (error) {
    console.log('Error fetching modal images:', error.message);
    dispatch(fetchAllModalImagesError(error.message));
  }
};

export const deleteModalImage = (imageId) => async (dispatch) => {
  dispatch(deleteModalImageStart());
  try {
    const response = await axios.delete(`http://localhost:3001/mod_img/${imageId}`);
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
} = modalImagesSlice.actions;

export default modalImagesSlice.reducer;
