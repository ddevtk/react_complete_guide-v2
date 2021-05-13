import { useEffect, useState } from 'react';
import Card from '../card/card.cpn';
import MealItem from '../meal-item/meal-item.cpn';
import classes from './meal-available.module.css';

const MealAvailable = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://fooder-order-app-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('fail request');
      }

      const dataObj = await response.json();
      console.log(dataObj);

      const loadedMeals = [];

      for (const key in dataObj) {
        loadedMeals.push({
          id: key,
          name: dataObj[key].name,
          description: dataObj[key].description,
          price: dataObj[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  let content = (
    <Card>
      <ul>
        <li>
          {meals.map(meal => (
            <MealItem key={meal.id} {...meal} />
          ))}
        </li>
      </ul>
    </Card>
  );

  if (isLoading) {
    content = <p className={classes['loading-text']}>Loading ...</p>;
  }

  if (error) {
    content = <p className={classes['error-text']}>{error}</p>;
  }

  return <div className={classes.meals}>{content}</div>;
};

export default MealAvailable;
