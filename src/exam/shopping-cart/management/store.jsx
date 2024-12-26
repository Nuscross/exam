import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice
  }
})