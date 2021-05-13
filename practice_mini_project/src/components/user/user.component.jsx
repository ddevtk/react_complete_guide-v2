import { useRef, useState } from 'react';
import ErrorModal from '../error-modal/error-modal.component';
import Button from '../UI/button/button.component';
import Card from '../UI/card/card.component';
import classes from './user.module.css';

const AddUser = ({ onAddToList }) => {
  // const [credential, setCredential] = useState({
  //   username: '',
  //   age: '',
  // });
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const { username, age } = credential;

  // const changedHandler = e => {
  //   const { name, value } = e.target;
  //   setCredential(preState => {
  //     return { ...preState, [name]: value };
  //   });
  // };

  const addUserHandler = e => {
    e.preventDefault();

    const nameInput = nameInputRef.current.value;
    const ageInput = ageInputRef.current.value;

    if (nameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values) 🚀🚀🚀 ',
      });
      return;
    }
    if (+ageInput < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age  🚀🚀🚀 ',
      });
      return;
    }

    // setCredential(preState => {
    //   return { ...preState };
    // });

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    onAddToList(nameInput, ageInput);
  };
  const hiddenError = () => {
    setError(null);
  };

  const contentError = error && (
    <ErrorModal
      title={error.title}
      message={error.message}
      onSubmit={hiddenError}
    />
  );

  return (
    <div>
      {contentError}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            // name='username'
            // value={username}
            // onChange={changedHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'> Age (years) </label>
          <input
            id='age'
            type='number'
            // name='age'
            // value={age}
            // onChange={changedHandler}
            ref={ageInputRef}
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
