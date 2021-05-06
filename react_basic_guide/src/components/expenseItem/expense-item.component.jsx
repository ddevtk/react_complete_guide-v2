import React, { useState } from 'react';
import ExpenseDate from './expense-date/expense-date.component';

import './expense-item.styled.scss';

const ExpenseItem = ({ title, amount, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', {
    month: 'long',
  });
  const day = date.toLocaleString('en-US', {
    day: 'numeric',
  });

  const [titleChanged, setTitleChanged] = useState(title);
  const changedHandler = () => {
    setTitleChanged('Update');
  };
  return (
    <div className='expense-item'>
      <ExpenseDate year={year} month={month} day={day} />
      <div className='expense-item__description'>
        <h2>{titleChanged}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={changedHandler}>Change</button>
      </div>
    </div>
  );
};
export default ExpenseItem;
