import { useContext, useRef, useState } from 'react';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';
import classes from './checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const CheckOut = ({ onConfirm }) => {
  const { onHidden } = useContext(showCartContext);

  const [formValidation, setFormValidation] = useState({
    nameField: true,
    streetField: true,
    cityField: true,
    postalCodeField: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalCodeIsValid = isFiveChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidation({
      nameField: nameIsValid,
      cityField: cityIsValid,
      streetField: streetIsValid,
      postalCodeField: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      city: enteredCity,
      postalCode: enteredPostal,
      street: enteredStreet,
    });
  };
  const nameClasses = `${classes.control} ${
    formValidation.nameField ? '' : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formValidation.cityField ? '' : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formValidation.streetField ? '' : classes.invalid
  }`;
  const postalCodeClasses = `${classes.control} ${
    formValidation.postalCodeField ? '' : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formValidation.nameField && <p>Please enter a valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formValidation.streetField && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor='postal'>Postal code</label>
        <input type='text' id='postal' ref={postalInputRef} />
        {!formValidation.postalCodeField && (
          <p>please enter a valid code (5 characters long)</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formValidation.cityField && <p>please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={onHidden}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};
export default CheckOut;
