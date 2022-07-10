import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // kita menggunakan ini karena memang setiap dirender pertama kaali akan loading
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      // setIsLoading(true); // karena status ini diloading sebelum fetching, ini  alternatif
      const response = await fetch('https://food-d0359-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json(); // ini objek

      const loadedMeals = []; //diubah ke array

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealIsLoading}>
        <p>loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => <MealsItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
