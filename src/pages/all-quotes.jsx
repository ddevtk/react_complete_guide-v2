import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
