import { Fragment } from 'react';
import { Route, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  {
    id: 'p1',
    author: 'Duong',
    text: 'Learning react is so fun',
  },
  {
    id: 'p2',
    author: 'Linh',
    text: 'Learning react is so great',
  },
];

const QuoteDetail = () => {
  const params = useParams();
  console.log(params);

  const quote = DUMMY_DATA.find(quote => quote.id === params.quoteId);

  return (
    <Fragment>
      <HighlightedQuote {...quote} />
      <Route exact path={`/quotes/${params.quoteId}`}>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
            Load comments...
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
