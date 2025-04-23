import Button from "./UI/Button";
import { currentFormatter } from "../util/formatting";
import { CartContext } from "../store/CartContext";
import { use } from "react";
function MealsItem({ meal }) {
  const { addItem } = use(CartContext);
  function handleAddMealToCart() {
    addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <div>
          <img src={"http://localhost:3000/" + meal.image} alet={meal.name} />
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currentFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-items-actions">
          <Button
            onClick={() => {
              handleAddMealToCart();
            }}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  );
}

export default MealsItem;
