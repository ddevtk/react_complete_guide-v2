import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortedQuote = (quote, isAsc) => {
  return quote.sort((q1, q2) => {
    if (isAsc) {
      return q1.id > q2.id ? 1 : -1;
    } else {
      return q1.id > q2.id ? -1 : 1;
    }
  });
};

const QuoteList = ({ quotes }) => {
  const history = useHistory();
  const location = useLocation();


  const queryParams = new URLSearchParams(location.search);

  const isSortingAsc = queryParams.get('sort') === 'asc';

  const newQuotes = sortedQuote(quotes, isSortingAsc);

  const sortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsc ? 'desc' : 'asc'}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isSortingAsc ? 'descending' : 'ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {newQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
