import React from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import { currentFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import { use } from "react";

function Cart({ oepn }) {
  const { items, addItem, removeItem } = use(CartContext);
  const { progress, hideCart } = use(UserProgressContext);
  const cartTotal = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  function handleHideCart() {
    hideCart();
  }
  return (
    <>
      {progress === "cart" && (
        <Modal className="cart" open={progress === "cart"}>
          <h2>Your Cart</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity}
              </li>
            ))}
          </ul>
          <p className="cart-total">{currentFormatter.format(cartTotal)}</p>
          <p className="modal-actions">
            <Button textOnly onClick={handleHideCart}>
              Close
            </Button>
            <Button>Go to Checkout</Button>
          </p>
        </Modal>
      )}
    </>
  );
}

export default Cart;
