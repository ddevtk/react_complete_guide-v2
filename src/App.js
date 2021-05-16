import './App.css';
import MainHeader from './components/main-header/main-header.cpn';
import { Route, Switch } from 'react-router';
import Welcome from './pages/welcome/welcome.cpn';
import Product from './pages/product/product.cpn';
import ProductDetail from './pages/product-detail/product-detail.cpn';

function App() {
  return (
    <div className='App'>
      <MainHeader />
      <Switch>
        <Route path='/welcome' component={Welcome} />
        <Route exact path='/products' component={Product} />
        <Route path='/products/:ProductId' component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
