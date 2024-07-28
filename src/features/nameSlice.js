import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    name: '',
    modalOpen: false,
    savedName: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
    setSavedName: (state, action) => {
      state.savedName = action.payload;
    },
  },
});

export const { setName, setModalOpen, setSavedName } = nameSlice.actions;
export default nameSlice.reducer;
