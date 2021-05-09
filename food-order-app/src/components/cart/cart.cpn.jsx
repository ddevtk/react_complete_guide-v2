import Modal from '../modal/modal.cpn';
import classes from './cart.module.css';

const Cart = ({ onHidden }) => {
  const cartItemContent = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHidden={onHidden}>
      {cartItemContent}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onHidden}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
