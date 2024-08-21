import { createSlice } from "@reduxjs/toolkit";

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push(action.payload);
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const invoiceId = Number(action.payload.id);
      
      // Log details for debugging
      console.log("Action payload ID:", invoiceId);
      console.log("Current invoices:", state.map(invoice => ({
        id: invoice.id,
        type: typeof invoice.id
      })));
    
      // Find the index of the invoice to update
      const index = state.findIndex((invoice) => {
        return Number(invoice.id) === invoiceId; // Ensure both IDs are compared as numbers
      });
    
      if (index !== -1) {
        console.log("Found invoice to update at index ", index);
        state[index] = { ...action.payload.updatedInvoice };
      } else {
        console.log("Invoice not found");
      }
    },
    

    updateInvoiceItems: (state, action) => {
      const { itemId, updatedProduct } = action.payload;
      state.forEach((invoice) => {
        invoice.items.forEach((item) => {
          if (item.itemId === itemId) {
            item.itemName = updatedProduct.name;
            item.itemDescription = updatedProduct.description;
            item.itemPrice = updatedProduct.price;
            console.log("found same invoice ", item.itemId, itemId);
          }
        });
      });
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice, updateInvoiceItems } =
  invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
