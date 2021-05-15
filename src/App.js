import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment } from 'react-is';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-slice';

let isShowNotificationFirstly = false;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);

  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (!isShowNotificationFirstly) {
      isShowNotificationFirstly = true;
      return;
    }
    if (cart.isShow) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
