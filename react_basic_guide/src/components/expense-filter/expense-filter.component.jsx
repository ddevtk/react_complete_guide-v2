import React from 'react';
import './expense-filter.styled.scss';

const ExpenseFilter = ({ onFilteredHandler,selected }) => {
  const dropdownChangedHandler = e => {
    onFilteredHandler(e.target.value);
  };

  return (
    <div className='expense-filter'>
      <label>Filter by year</label>
      <select onChange={dropdownChangedHandler} value={selected}>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </div>
  );
};
export default ExpenseFilter;
