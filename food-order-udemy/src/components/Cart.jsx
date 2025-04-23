import React from "react";
import Modal from "./Modal";
import { CartContext } from "../store/CartContext";
import { currentFormatter } from "../util/formatting";
import Button from "./UI/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import { use } from "react";
import CartItem from "./CartItem";

function Cart() {
  const { items, addItem, removeItem } = use(CartContext);
  const { progress, hideCart, showCheckout } = use(UserProgressContext);
  const cartTotal = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  function handleHideCart() {
    hideCart();
  }
  function handleShowCheckout() {
    showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleHideCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currentFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button disabled={items.length === 0} onClick={handleShowCheckout}>
          Go to Checkout
        </Button>
      </p>
    </Modal>
  );
}

export default Cart;
