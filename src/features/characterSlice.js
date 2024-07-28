import { createSlice } from '@reduxjs/toolkit';

const characterImages = { // home 화면에서 사용하는 key value
  '/src/assets/chaMake/pinkrabbit.gif': '/src/assets/chaHome/pinkrabbit3.gif',
  '/src/assets/chaMake/blackrabbit.gif': '/src/assets/chaHome/blackrabbit3.gif',
  '/src/assets/chaMake/bluerabbit.gif': '/src/assets/chaHome/bluerabbit3.gif',
  '/src/assets/chaMake/brownrabbit.gif': '/src/assets/chaHome/brownrabbit3.gif',
  '/src/assets/chaMake/pinkcat.gif': '/src/assets/chaHome/pinkcat3.gif',
  '/src/assets/chaMake/bluecat.gif': '/src/assets/chaHome/bluecat3.gif',
  '/src/assets/chaMake/blackcat.gif': '/src/assets/chaHome/blackcat3.gif',
  '/src/assets/chaMake/browncat.gif': '/src/assets/chaHome/browncat3.gif',
  '/src/assets/chaMake/pinkbear.gif': '/src/assets/chaHome/pinkbear3.gif',
  '/src/assets/chaMake/bluebear.gif': '/src/assets/chaHome/bluebear3.gif',
  '/src/assets/chaMake/blackbear.gif': '/src/assets/chaHome/blackbear3.gif',
  '/src/assets/chaMake/brownbear.gif': '/src/assets/chaHome/brownbear3.gif',
  '/src/assets/firstCha.gif': '/src/assets/firstCha.gif',
};

const characterImages2 = { // Namecomplete에서 사용하는 key value값 
    '/src/assets/chaMake/pinkrabbit.gif': '/src/assets/chaName/pinkrabbit2.gif',
    '/src/assets/chaMake/blackrabbit.gif': '/src/assets/chaName/blackrabbit2.gif',
    '/src/assets/chaMake/bluerabbit.gif': '/src/assets/chaName/bluerabbit2.gif',
    '/src/assets/chaMake/brownrabbit.gif': '/src/assets/chaName/brownrabbit2.gif',
    '/src/assets/chaMake/pinkcat.gif': '/src/assets/chaName/pinkcat2.gif',
    '/src/assets/chaMake/bluecat.gif': '/src/assets/chaName/bluecat2.gif',
    '/src/assets/chaMake/blackcat.gif': '/src/assets/chaName/blackcat2.gif',
    '/src/assets/chaMake/browncat.gif': '/src/assets/chaName/browncat2.gif',
    '/src/assets/chaMake/pinkbear.gif': '/src/assets/chaName/pinkbear2.gif',
    '/src/assets/chaMake/bluebear.gif': '/src/assets/chaName/bluebear2.gif',
    '/src/assets/chaMake/blackbear.gif': '/src/assets/chaName/blackbear2.gif',
    '/src/assets/chaMake/brownbear.gif': '/src/assets/chaName/brownbear2.gif',
    '/src/assets/firstCha.gif': '/src/assets/firstCha.gif',
  };

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characterImage: '',
    previousImage: '',
    characterImages,
    characterImages2,
  },
  reducers: {
    setCharacterImage: (state, action) => {
      state.previousImage = state.characterImage || '/src/assets/firstCha.gif';
      state.characterImage = action.payload;
    },
    resetCharacterImage: (state) => {
      state.characterImage = state.previousImage;
    },
  },
});

export const { setCharacterImage, resetCharacterImage } = characterSlice.actions;
export default characterSlice.reducer;
