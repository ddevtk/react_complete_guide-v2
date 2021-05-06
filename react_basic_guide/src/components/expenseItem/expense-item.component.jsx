import React from 'react';
import Card from '../card/card.component';
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
  return (
    <div className='expense-item'>
      <ExpenseDate year={year} month={month} day={day} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
