import React from 'react';
import './expense-list.styled.scss';
import ExpenseItem from '../expenseItem/expense-item.component';

const ExpenseList = ({ filteredExpense }) => {
  let contentExpenseItem = <p className='paragraph'>No expense found</p>;

  if (filteredExpense.length > 0) {
    contentExpenseItem = filteredExpense.map(expense => (
      <ExpenseItem key={expense.id} {...expense} />
    ));
  }
  return <ul>{contentExpenseItem}</ul>;
};

export default ExpenseList;
