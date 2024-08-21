import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice"; // Import your other reducers
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productSlice,
});

export default rootReducer;
