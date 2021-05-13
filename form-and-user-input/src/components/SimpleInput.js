import { useState } from 'react';

const SimpleInput = () => {
  const [nameInput, setNameInput] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsNotEmpty = nameInput.trim() !== '';
  const inputIsInvalid = !inputIsNotEmpty && inputTouched;

  let formActive = false;
  if (inputIsNotEmpty) {
    formActive = true;
  }

  const changedNameHandler = e => {
    setNameInput(e.target.value);
  };
  const inputBlurHandler = () => {
    setInputTouched(true);
  };
  const submitHandler = e => {
    e.preventDefault();
    setInputTouched(true);
    if (nameInput.trim() === '') {
      return;
    }
    setNameInput('');
    setInputTouched(false);
  };
  const formStyle = inputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={formStyle}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={changedNameHandler}
          onBlur={inputBlurHandler}
          value={nameInput}
        />
      </div>
      {inputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      <div className='form-actions'>
        <button disabled={!formActive}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
