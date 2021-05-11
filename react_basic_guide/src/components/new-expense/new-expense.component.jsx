import { useState } from 'react';
import ExpenseForm from './expense-form.component';
import './new-expense.styled.scss';

const NewExpense = ({ onAddDataHandler }) => {
  const [isHidden, setHidden] = useState(true);
  const saveExpenseData = inputExpenseDate => {
    const data = {
      ...inputExpenseDate,
      id: Math.random().toString(),
    };
    onAddDataHandler(data);
  };

  const showForm = () => {
    setHidden(false);
  };

  const hiddenForm = () => {
    setHidden(true);
  };

  let newExpenseContent = isHidden ? (
    <button onClick={showForm}>Add new expense</button>
  ) : (
    <ExpenseForm saveExpenseData={saveExpenseData} onCancel={hiddenForm} />
  );
  return <div className='new-expense'>{newExpenseContent}</div>;
};
export default NewExpense;
