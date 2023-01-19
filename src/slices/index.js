import { configureStore } from '@reduxjs/toolkit';
import facts from './factsSlice';

export default configureStore({
  reducer: {
    facts,
  },
});
