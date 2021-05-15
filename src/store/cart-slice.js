import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    isShow: false,
  },
  reducers: {
    replaceData(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.isShow = true;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= action.payload.price;
      }
      state.isShow = true;
    },
  },
});

export const fetchCartData = () => {
  return async dispatch => {
    try {
      dispatch(
        uiActions.showNotification({
          status: 'Fetching...',
          title: 'Fetching...',
          message: 'Fetching cart data ... !',
        })
      );
      const res = await fetch(
        'https://send-http-request-guide-default-rtdb.firebaseio.com/carts.json'
      );
      if (!res.ok) {
        throw new Error('Fetching data failed');
      }
      const data = await res.json();
      console.log(data);
      dispatch(
        cartActions.replaceData({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: 'success 🚀',
          title: 'Success 🚀',
          message: 'Fetching cart data successfully 🚀',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Fetching data failed !',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    try {
      dispatch(
        uiActions.showNotification({
          status: 'Pending...',
          title: 'Sending...',
          message: 'Sending cart data !',
        })
      );

      const res = await fetch(
        'https://send-http-request-guide-default-rtdb.firebaseio.com/carts.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!res.ok) {
        throw new Error('Sending data failed!');
      }

      dispatch(
        uiActions.showNotification({
          status: 'success 🚀',
          title: 'Success 🚀',
          message: 'Sending cart data successfully 🚀',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Sending data failed !',
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
