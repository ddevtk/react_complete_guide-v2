import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg';

import classes from './header-button.module.css';

const HeaderButton = props => {
  return (
    <button className={classes.button}>
      <CartIcon className={classes.icon} />
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
