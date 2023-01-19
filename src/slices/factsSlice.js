/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const factsSlice = createSlice({
  name: 'facts',
  initialState: { factsList: [] },
  reducers: {
    addFacts(state, { payload }) {
      state.factsList = payload;
    },
  },
});

export const { actions } = factsSlice;
export default factsSlice.reducer;
