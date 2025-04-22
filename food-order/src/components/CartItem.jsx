import React from "react";

function CartItem({ name, cnt, price, onMinusClick, onPlusClick }) {
  return (
    <li className="cart-item">
      <span>
        {name} - {cnt} x ${price}
      </span>
      <span className="cart-item-actions">
        <button onClick={onMinusClick}>-</button>
        {cnt}
        <button onClick={onPlusClick}>+</button>
      </span>
    </li>
  );
}

export default CartItem;
