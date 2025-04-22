import { use } from "react";
import { MealsContext } from "../store/food-context";
import MealsItem from "./MealsItem";

function Meals() {
  const { meals, addCard } = use(MealsContext);
  return (
    <div id="meals">
      {Array.isArray(meals) &&
        meals.map((meal) => (
          <MealsItem
            key={meal.id}
            {...meal}
            onAddCard={() => {
              addCard(meal);
            }}
          />
        ))}
    </div>
  );
}

export default Meals;
