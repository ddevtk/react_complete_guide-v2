import { Fragment } from 'react';
import MealAvailable from '../meal-available/meal-available.cpn';
import MealSummary from '../meal-summary/meal-summary.cpn';

const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <MealAvailable />
    </Fragment>
  );
};
export default Meals;
