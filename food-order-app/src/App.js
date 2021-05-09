import './App.css';
import Header from './components/header/header.cpn';
import Meals from './components/meals/meals.cpn';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
};

export default App;
