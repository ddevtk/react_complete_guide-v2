import React, { useReducer } from 'react';
import { addItemToCart, reduceItemFromCart } from './cart.utils';
export const CartContext = React.createContext({});

const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
        totalAmount:
          state.totalAmount + action.payload.price * action.payload.amount,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: reduceItemFromCart(state.items, action.payload),
        totalAmount:
          state.totalAmount - action.payload.price * action.payload.amount,
      };
    case 'DELETE_ITEM':
      const newItems = state.items.filter(
        item => item.id !== action.payload.id
      );

      return {
        items: newItems,
        totalAmount: newItems.reduce(
          (acc, value) => acc + value.price * value.amount,
          0
        ),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    INITIAL_CART_STATE
  );

  const addItemToCart = item => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: item });
    console.log(item);
    console.log(cartState.items);
  };

  const removeItemFromCart = item => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: item });
  };
  const deleteItemFromCart = item => {
    dispatchCartAction({ type: 'DELETE_ITEM', payload: item });
  };
  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    deleteItem: deleteItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
