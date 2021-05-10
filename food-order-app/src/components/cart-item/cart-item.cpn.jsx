import { useContext } from 'react';
import { CartContext } from '../../store/cart-context/cartProvider';
import classes from './cart-item.module.css';

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);
  console.log(item);

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
        <button onClick={() => removeItem({ ...item, amount: 1 })}>−</button>
        <button onClick={() => addItem({ ...item, amount: 1 })}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
