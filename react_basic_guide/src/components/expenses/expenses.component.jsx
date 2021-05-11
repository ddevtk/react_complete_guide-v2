import { useState } from 'react';
import ExpenseFilter from '../expense-filter/expense-filter.component';
import ExpenseList from '../expense-list/expense-list.component';
import './expenses.styled.scss';

const Expenses = ({ expenses }) => {
  const [filteredYearExpense, setFilteredYearExpense] = useState('2021');

  const filterHandler = expense => {
    setFilteredYearExpense(expense);
  };
  const filteredExpense = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYearExpense;
  });

  return (
    <div className='expenses'>
      <ExpenseFilter
        onFilteredHandler={filterHandler}
        selected={filteredYearExpense}
      />
      <ExpenseList filteredExpense={filteredExpense} />
    </div>
  );
};
export default Expenses;
