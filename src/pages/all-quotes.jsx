import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  const { sendRequest, status, data, error } = useHttp(getAllQuotes, true);
  console.log(status);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === 'success' && (!data || data.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={data} />;
};

export default AllQuotes;
