import MealItemForm from './meal-item-form/meal-item-form.cpn';
import classes from './meal-item.module.css';

const MealItem = ({ name, description, price }) => {
  const priceFix = price.toFixed(2);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${priceFix}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
