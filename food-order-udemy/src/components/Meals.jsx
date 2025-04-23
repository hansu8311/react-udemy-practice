import { useEffect, useState } from "react";
import MealsItem from "./MealsItem";

function Meals({}) {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [isFetching, setInsFetching] = useState(false);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //error
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
