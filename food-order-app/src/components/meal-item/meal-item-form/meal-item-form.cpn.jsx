import { useRef } from 'react';
import FormInput from '../../form-input/form-input.cpn';
import classes from './meal-item-form.module.css';

const MealItemForm = ({ onAddAmount }) => {
  const amountRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    onAddAmount(+amountRef.current.value);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <FormInput
        label='Amount'
        ref={amountRef}
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
      <button type='submit'>+ Add</button>
    </form>
  );
};

export default MealItemForm;
