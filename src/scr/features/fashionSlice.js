import { createSlice } from '@reduxjs/toolkit';

export const fashionSlice = createSlice({
  name: 'fashion',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = fashionSlice.actions;
export default fashionSlice.reducer;