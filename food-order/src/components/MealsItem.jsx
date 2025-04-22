import { imgBaseUrl } from "../http";
function MealsItem({ name, price, description, image, onAddCard }) {
  return (
    <article className="meal-item">
      <img src={`${imgBaseUrl}${image}`} />
      <h3>{name}</h3>
      <p className="meal-item-price">{price}</p>
      <p className="meal-item-description">{description}</p>
      <p className="meal-item-actions">
        <button className="button" onClick={onAddCard}>
          Add To Cart
        </button>
      </p>
    </article>
  );
}

export default MealsItem;
