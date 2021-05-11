export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? { ...item, amount: item.amount + 1 } : item
    );
  }

  return [...cartItems, { ...cartItemToAdd }];
};

export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToReduce.id
  );
  if (existingCartItem.amount === 1) {
    return cartItems.filter(item => item.id !== cartItemToReduce.id);
  } else
    return cartItems.map(item =>
      item.id === cartItemToReduce.id
        ? { ...item, amount: item.amount - 1 }
        : item
    );
};
