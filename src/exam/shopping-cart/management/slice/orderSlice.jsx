import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  orderItems: [],
}

const formatDate = (addDate) => {
  const day = String(addDate.getDate()).padStart(2, '0');
  const month = String(addDate.getMonth() + 1).padStart(2, '0');
  const year = addDate.getFullYear();
  const hours = String(addDate.getHours()).padStart(2, '0');
  const minutes = String(addDate.getMinutes()).padStart(2, '0');
  const formattedDate = `${day} / ${month} / ${year} , Time: ${hours}:${minutes}`;
  return formattedDate;
}

const getOrderFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('order')) || initialState;
}

const orderSlice = createSlice({
  name: 'order',
  initialState: getOrderFromLocalStorage(),
  reducers: {
    saveOrder: (state, action) => {
      const itemAdd = action.payload;
      const addDate = new Date();
      const orderDate = formatDate(addDate);
      state.orderItems.push({
        order: itemAdd.cartItems,
        total: itemAdd.totalPrice,
        date: orderDate
      });
      localStorage.setItem('order', JSON.stringify(state));
      toast.success(`Save order successfully.`);
    },
    clearOrder: () => {
      localStorage.removeItem('order');
      toast.success(`Clear order successfully.`);
      return initialState;
    }
  }
})

export const { saveOrder, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;