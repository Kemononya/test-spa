/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';
import image1 from '../assets/cat1.jpeg';
import image2 from '../assets/cat2.jpeg';
import image3 from '../assets/cat3.jpeg';
import image4 from '../assets/cat4.jpeg';
import image5 from '../assets/cat5.jpeg';

export const fetchFacts = createAsyncThunk(
  'facts/fetchFacts',
  async () => {
    const response = await axios.get(routes.fiveFactsPath());
    return response.data;
  },
);

const images = [image1, image2, image3, image4, image5];

const factsSlice = createSlice({
  name: 'facts',
  initialState: { factsList: [], loadingStatus: 'idle', isFilter: false },
  reducers: {
    removeFact(state, { payload }) {
      const newFactsList = state.factsList.filter(({ id }) => id !== payload);
      state.factsList = newFactsList;
    },
    switchLike(state, { payload }) {
      const curFact = state.factsList.find(({ id }) => id === payload.id);
      curFact.isLike = payload.isLike;
    },
    switchFilter(state, { payload }) {
      state.isFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacts.fulfilled, (state, { payload }) => {
        const facts = payload.map(({ _id, text }, idx) => (
          {
            id: _id, text, isLike: false, image: images[idx],
          }));
        state.factsList = facts;
        state.loadingStatus = 'idle';
      })
      .addCase(fetchFacts.rejected, (state) => {
        state.loadingStatus = 'failed';
      })
      .addCase(fetchFacts.pending, (state) => {
        state.loadingStatus = 'loading';
      });
  },
});

export const { actions } = factsSlice;
export default factsSlice.reducer;
