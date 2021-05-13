import './expense-date.styled.scss';
const ExpenseDate = ({ year, month, day }) => {
  return (
    <div className='expense-item__date'>
      <div className='expense-item__month'>{month}</div>
      <div className='expense-item__year'>{year}</div>
      <div className='expense-item__day'>{day}</div>
    </div>
  );
};
export default ExpenseDate;
