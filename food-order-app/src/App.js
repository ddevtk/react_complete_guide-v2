import { useState } from 'react';
import './App.css';
import Cart from './components/cart/cart.cpn';
import Header from './components/header/header.cpn';
import Meals from './components/meals/meals.cpn';

const App = () => {
  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  };
  const hiddenCartHandler = () => {
    setCartShown(false);
  };

  return (
    <div className='App'>
      {cartShown && <Cart onHidden={hiddenCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
