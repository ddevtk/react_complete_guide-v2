import FormInput from '../../form-input/form-input.cpn';
import classes from './meal-item-form.module.css';

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <FormInput
        label='Amount'
        input={{
          name: 'amount',
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
