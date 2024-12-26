import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  amount: 0,
  totalPrice: 0,
}

const getCartFromLocalStorage = () =>  {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addMenu: (state, action) => {
      const itemAdd = action.payload;
      const isExistingItem = state.cartItems.find((item) => item.id === itemAdd.id);
      if (isExistingItem) {
        isExistingItem.amount += 1;
      } else {
        state.cartItems.push({ ...itemAdd, amount: 1 });
      }
      state.amount += 1;
      state.totalPrice += itemAdd.price;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success(`Add ${itemAdd.title} to cart.`);
    },
    removeMenu: (state, action) => {
      const itemRemove = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemRemove.id);
      state.amount -= itemRemove.amount;
      state.totalPrice -= itemRemove.price * itemRemove.amount;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount += 1;
      state.amount += 1;
      state.totalPrice += cartItem.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount -= 1;
      state.amount -= 1;
      state.totalPrice -= cartItem.price;
      if (cartItem.amount === 0) {
        state.cartItems = state.cartItems.filter(item => item.id !== payload);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return initialState;
    },
  }
})

export const { addMenu, removeMenu, increase, decrease, clearCart } = cartSlice.actions;

export default cartSlice.reducer;