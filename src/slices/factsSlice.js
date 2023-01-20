/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

export const fetchFacts = createAsyncThunk(
  'facts/fetchFacts',
  async () => {
    const response = await axios.get(routes.tenFactsPath());
    return response.data;
  },
);

const factsSlice = createSlice({
  name: 'facts',
  initialState: { factsList: [], isLoading: true, isFilter: false },
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
        const facts = payload.map(({ _id, text }) => ({ id: _id, text, isLike: false }));
        state.factsList = facts;
        state.isLoading = true;
      })
      .addCase(fetchFacts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions } = factsSlice;
export default factsSlice.reducer;
