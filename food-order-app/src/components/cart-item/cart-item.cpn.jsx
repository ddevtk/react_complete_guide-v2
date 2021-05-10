import { useContext } from 'react';
import { CartContext } from '../../store/cart-context/cartProvider';
import classes from './cart-item.module.css';

const CartItem = ({ item }) => {
  const { addItem, removeItem, deleteItem } = useContext(CartContext);

  const { price, amount, name } = item;
  const priceTransformed = `${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${priceTransformed}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <div className={classes.group}>
          <button onClick={() => removeItem({ ...item, amount: 1 })}>−</button>
          <button onClick={() => addItem({ ...item, amount: 1 })}>+</button>
        </div>
        <span onClick={() => deleteItem(item)}>&#10008;</span>
      </div>
    </li>
  );
};

export default CartItem;
