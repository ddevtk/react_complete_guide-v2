import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/all-quotes';
import NewQuote from './pages/new-quote';
import NotFound from './pages/not-found';
import QuoteDetail from './pages/quote-detail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/quotes' />
        </Route>
        <Route exact path='/quotes' component={AllQuotes} />
        <Route path='/quotes/:quoteId' component={QuoteDetail} />
        <Route path='/new-quote' component={NewQuote} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
