import React, { useReducer } from 'react';
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
        items: state.items.concat(action.payload),
        totalAmount: state.totalAmount + action.payload.price * action.payload.amount,
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
  };

  const removeItemFromCart = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
  };
  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
