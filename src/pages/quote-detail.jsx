import { Fragment, useEffect } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { quoteId } = params;

  const { sendRequest, data, error, status } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }
  if (status === 'error') {
    return <p className='centered focused'>{error}</p>;
  }

  if (!data) {
    return <p className='centered'>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote {...data} />
      <Route exact path={match.path}>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load comments...
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} component={Comments} />
    </Fragment>
  );
};

export default QuoteDetail;
