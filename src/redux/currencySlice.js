// currencySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  symbol: '$',
  value: 1,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.symbol = action.payload.symbol;
      state.value = action.payload.value;
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
