import { useContext } from 'react';
import { CartContext } from '../../store/cart-context/cartProvider';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';
import CartItem from '../cart-item/cart-item.cpn';
import Modal from '../modal/modal.cpn';
import classes from './cart.module.css';

const Cart = () => {
  const { items, amount } = useContext(CartContext);
  console.log(amount);
  const cartItemContent = (
    <ul className={classes['cart-items']}>
      {items.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </ul>
  );
  const { onHidden } = useContext(showCartContext);
  return (
    <Modal>
      {cartItemContent}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHidden}>
          Close
        </button>
        {items.length > 0 ? (
          <button className={classes.button}>Order</button>
        ) : null}
      </div>
    </Modal>
  );
};

export default Cart;
