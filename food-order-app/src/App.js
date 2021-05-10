import { useContext } from 'react';
import './App.css';
import Cart from './components/cart/cart.cpn';
import Header from './components/header/header.cpn';
import Meals from './components/meals/meals.cpn';
import CartProvider from './store/cart-context/cartProvider';
import { showCartContext } from './store/show-cart-context/showCartProvider';

const App = () => {
  const { isShown } = useContext(showCartContext);
  return (
    <CartProvider>
      {isShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
