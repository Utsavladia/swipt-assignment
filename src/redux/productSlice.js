import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.itemId
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.updatedProduct };
      }
    },
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct, setProducts } =
  productsSlice.actions;

export const selectProductList = (state) => state.products;

export const selectProductById = (state, productId) =>
  state.products.find((product) => product.id === productId);

export default productsSlice.reducer;
