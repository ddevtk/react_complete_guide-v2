import { Fragment, useContext, useState } from 'react';
import { CartContext } from '../../store/cart-context/cartProvider';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';
import CartItem from '../cart-item/cart-item.cpn';
import CheckOut from '../checkout/checkout.cpn';
import Modal from '../modal/modal.cpn';
import classes from './cart.module.css';

const Cart = () => {
  const { items, amount, clearCart } = useContext(CartContext);
  const { onHidden } = useContext(showCartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const onSubmitHandler = async data => {
    setSubmitting(true);
    await fetch(
      'https://fooder-order-app-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: data,
          orderItems: items,
        }),
      }
    );
    setSubmitting(false);
    setDidSubmit(true);
    clearCart();
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const cartItemContent = (
    <ul className={classes['cart-items']}>
      {items.length > 0 &&
        items.map(item => <CartItem key={item.id} item={item} />)}
    </ul>
  );

  const modalContent = (
    <Fragment>
      {cartItemContent}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${`${amount.toFixed(2)}`}</span>
      </div>
      {isCheckout && <CheckOut onConfirm={onSubmitHandler} />}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onHidden}>
            Close
          </button>
          {items.length > 0 ? (
            <button className={classes.button} onClick={checkoutHandler}>
              Order
            </button>
          ) : null}
        </div>
      )}
    </Fragment>
  );

  return (
    <Modal>
      {submitting && <p>Sending order data ...</p>}
      {didSubmit && (
        <Fragment>
          <p>Successfully send the order 🚀🚀🚀</p>
          <div className={classes.actions}>
            <button className={classes.button} onClick={onHidden}>
              Close
            </button>
          </div>
        </Fragment>
      )}
      {!submitting && !didSubmit && modalContent}
    </Modal>
  );
};

export default Cart;
