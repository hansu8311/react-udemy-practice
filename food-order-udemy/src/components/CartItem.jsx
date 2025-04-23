import { currentFormatter } from "../util/formatting";
function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currentFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => onDecrease()}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onIncrease()}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
