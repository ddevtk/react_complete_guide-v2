import React, { useReducer } from 'react';
import { addItemToCart, reduceItemFromCart } from './cart.utils';
export const CartContext = React.createContext({});

const INITIAL_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
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
        ...state,
        items: newItems,
        totalAmount: newItems.reduce(
          (acc, value) => acc + value.price * value.amount,
          0
        ),
      };
    case 'CLEAR_CART':
      return INITIAL_CART_STATE;
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
  const clearCart = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  };
  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    deleteItem: deleteItemFromCart,
    clearCart: clearCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
