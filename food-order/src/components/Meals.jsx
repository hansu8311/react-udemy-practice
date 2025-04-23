import { use } from "react";
import { MealsContext } from "../store/food-context";
import MealsItem from "./MealsItem";

function Meals({ meals, isLoading, loadingText, fallbackText }) {
  const { addCard } = use(MealsContext);
  return (
    <div id="meals">
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && meals.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading &&
        meals.length > 0 &&
        Array.isArray(meals) &&
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
