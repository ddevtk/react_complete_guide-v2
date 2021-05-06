import ExpenseForm from './expense-form.component';
import './new-expense.styled.scss';

const NewExpense = ({ onAddDataHandler }) => {
  const saveExpenseData = inputExpenseDate => {
    const data = {
      ...inputExpenseDate,
      id: Math.random().toString(),
    };
    onAddDataHandler(data);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm saveExpenseData={saveExpenseData} />
    </div>
  );
};
export default NewExpense;
