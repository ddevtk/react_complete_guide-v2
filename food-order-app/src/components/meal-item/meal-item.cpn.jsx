import { useContext } from 'react';
import { CartContext } from '../../store/cart-context/cartProvider';
import MealItemForm from './meal-item-form/meal-item-form.cpn';
import classes from './meal-item.module.css';

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useContext(CartContext);
  const priceFix = price.toFixed(2);

  const addAmountHandler = amount => {
    addItem({
      id: id,
      name: name,
      description: description,
      price: price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${priceFix}</div>
      </div>
      <div>
        <MealItemForm onAddAmount={addAmountHandler} />
      </div>
    </li>
  );
};

export default MealItem;
