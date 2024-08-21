import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice"; // Import your other reducers
import productSlice from "./productSlice";
import currencySlice from "./currencySlice";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productSlice,
  currency: currencySlice,
});

export default rootReducer;
