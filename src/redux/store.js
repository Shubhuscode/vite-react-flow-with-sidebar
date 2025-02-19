import { configureStore } from '@reduxjs/toolkit';
import nodeReducer from './reducers';

export const store = configureStore({
  reducer: {
    nodes: nodeReducer, 
  },
});
