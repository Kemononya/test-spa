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
  initialState: { factsList: [], isLoading: true },
  reducers: {
    removeFact(state, { payload }) {
      const newFactsList = state.factsList.filter(({ _id }) => _id !== payload);
      state.factsList = newFactsList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFacts.fulfilled, (state, { payload }) => {
        state.factsList = payload;
        state.isLoading = true;
      })
      .addCase(fetchFacts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions } = factsSlice;
export default factsSlice.reducer;
