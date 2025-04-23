import Error from "./Error";
import MealsItem from "./MealsItem";
import useHttp from "./hooks/useHttp";

const requestConfig = {};

function Meals({}) {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <div className="center">Fetching meals...</div>;
  }

  if (error)
    return <Error title="Failed to fetch meals" message={error}></Error>;

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
