import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment } from "react-is";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isShowNotificationFirstly = false;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!isShowNotificationFirstly) {
      isShowNotificationFirstly = true;
      return;
    }
    dispatch(sendCartData(cart));
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
