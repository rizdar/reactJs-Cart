import { Fragment } from 'react';
import MealsSummary from './MealsSummary';
import AvailaibleMeals from './AvailableMeals';
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailaibleMeals />
    </Fragment>
  );
};

export default Meals;
