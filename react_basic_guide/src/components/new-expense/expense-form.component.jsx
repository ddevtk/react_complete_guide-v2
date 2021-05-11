import { useState } from 'react';
import './expense-form.styled.scss';

const ExpenseForm = ({ saveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const changedTitleHandler = e => {
    setUserInput(preState => {
      return { ...preState, title: e.target.value };
    });
  };
  const changedAmountHandler = e => {
    setUserInput({ ...userInput, amount: e.target.value });
  };
  const changedDateHandler = e => {
    setUserInput({ ...userInput, date: e.target.value });
  };
  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    saveExpenseData(expenseData);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={userInput.title}
            onChange={changedTitleHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={changedAmountHandler}
            name='amount'
            value={userInput.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={changedDateHandler}
            name='date'
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
