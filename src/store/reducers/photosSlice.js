import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

export const fetchPhotos = () => async (dispatch) => {
  dispatch(fetchPhotosStart());
  try {
    const response = await axios.get('http://localhost:3001/item');
    dispatch(fetchPhotosSuccess(response.data));
  } catch (error) {
    dispatch(fetchPhotosError(error.message));
  }
};

export const updatePhoto = (photoId, updates) => async (dispatch) => {
  dispatch(updatePhotoStart());
  try {
    const response = await axios.put(`http://localhost:3001/item/${photoId}`, updates);
    dispatch(updatePhotoSuccess(response.data));
  } catch (error) {
    dispatch(updatePhotoError(error.message));
  }
};

export const deletePhoto = (photoId) => async (dispatch) => {
  dispatch(deletePhotoStart());
  try {
    const response = await axios.delete(`http://localhost:3001/item/${photoId}`);
    dispatch(deletePhotoSuccess(response.data));
  } catch (error) {
    dispatch(deletePhotoError(error.message));
  }
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    fetchPhotosStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPhotosSuccess(state, action) {
      state.loading = false;
      state.photos = action.payload;
    },
    fetchPhotosError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updatePhotoStart(state) {
      state.loading = true;
      state.error = null;
    },
    updatePhotoSuccess(state, action) {
      state.loading = false;
      const updatedPhoto = action.payload;
      const index = state.photos.findIndex(photo => photo._id === updatedPhoto._id);
      if (index !== -1) {
        state.photos.splice(index, 1, updatedPhoto);
      }
    },
    updatePhotoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deletePhotoStart(state) {
      state.loading = true;
      state.error = null;
    },
    deletePhotoSuccess(state, action) {
      state.loading = false;
      state.photos = state.photos.filter((photo) => photo._id !== action.payload._id);
    },
    deletePhotoError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPhotosStart, fetchPhotosSuccess, fetchPhotosError, deletePhotoStart, deletePhotoSuccess, deletePhotoError, updatePhotoStart, updatePhotoSuccess, updatePhotoError } = photosSlice.actions;

export default photosSlice.reducer;
