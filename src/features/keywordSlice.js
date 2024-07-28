import { createSlice } from '@reduxjs/toolkit';

const keywordSlice = createSlice({
  name: 'keyword',
  initialState: {
    showAll: false,
    selectedKeywords: [],
    showWarning: false,
  },
  reducers: {
    setShowAll: (state, action) => {
      state.showAll = action.payload;
    },
    setSelectedKeywords: (state, action) => {
      state.selectedKeywords = action.payload;
    },
    setShowWarning: (state, action) => {
      state.showWarning = action.payload;
    },
  },
});

export const { setShowAll, setSelectedKeywords, setShowWarning } = keywordSlice.actions;
export default keywordSlice.reducer;
