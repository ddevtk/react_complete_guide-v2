import { useContext } from 'react';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { CartContext } from '../../store/cart-context/cartProvider';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';

import classes from './header-button.module.css';

const HeaderButton = () => {
  const { onShow } = useContext(showCartContext);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <button className={classes.button} onClick={onShow}>
      <CartIcon className={classes.icon} />
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
