import { MealsContext } from "../store/food-context";
import { use } from "react";
import CartItem from "./CartItem";

function Cart({ onCancel, onCeckOutClick }) {
  const { orders, orderTotAmt, plusOrderCnt, minusOrderCnt } =
    use(MealsContext);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {Array.isArray(orders) &&
          orders.map((order) => (
            <CartItem
              {...order}
              key={order.id}
              onPlusClick={() => {
                plusOrderCnt(order.id);
              }}
              onMinusClick={() => {
                minusOrderCnt(order.id);
              }}
            />
          ))}
      </ul>
      <p className="cart-total "> ${orderTotAmt}</p>
      <div className="modal-actions">
        <button className="text-button" onClick={onCancel}>
          close
        </button>
        <button className="button" onClick={onCeckOutClick}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
