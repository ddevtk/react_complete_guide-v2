import { useContext, useEffect, useState } from 'react';
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';
import { CartContext } from '../../store/cart-context/cartProvider';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';

import classes from './header-button.module.css';

const HeaderButton = () => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const { onShow } = useContext(showCartContext);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0);
  const buttonStyled = `${classes.button} ${btnAnimation ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonStyled} onClick={onShow}>
      <CartIcon className={classes.icon} />
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
