import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

import { FormControlContainer } from './course-input.styled';

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControlContainer invalid={!isValid}>
        <label>Course Goal</label>
        <input onChange={goalInputChangeHandler} />
      </FormControlContainer>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
