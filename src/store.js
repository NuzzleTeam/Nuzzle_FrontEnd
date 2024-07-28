import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './features/colorSlice';
import characterReducer from './features/characterSlice';
import nameReducer from './features/nameSlice';
import keywordReducer from './features/keywordSlice';

const store = configureStore({
  reducer: {
    color: colorReducer,
    character: characterReducer,
    name: nameReducer,
    keyword: keywordReducer,
  },
});

export default store;
