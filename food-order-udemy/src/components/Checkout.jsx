import { currentFormatter } from "../util/formatting";
import { UserProgressContext } from "../store/UserProgressContext";
import { CartContext } from "../store/CartContext";
import Input from "./Input";
import Button from "./UI/Button";
import Modal from "./Modal";
import { use } from "react";
import useHttp from "./hooks/useHttp";
import Error from "./Error";

const requsetConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Checkout() {
  const { items } = use(CartContext);
  const { progress, hideCheckout } = use(UserProgressContext);
  const cartTotal = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  const { data, isLoading, error, sendRequest } = useHttp(
    "http://localhost:3000/orders",
    requsetConfig,
    []
  );

  function handleHideCheckout() {
    hideCheckout();
  }
  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);

    const customerData = Object.entries(fd.entries());

    try {
      await sendRequest({ order: { items, customer: customerData } });
    } catch {}

    const data = await res.json();
  }

  let actions = (
    <>
      <Button textOnly onClick={handleHideCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isLoading) {
    actions = <span>sending....</span>;
  }
  if (data && !error) {
    return (
      <Modal
        open={progress === "checkout"}
        onClose={progress === "checkout" ? handleHideCheckout : null}
      >
        <h2>Success!</h2>
        <p>You order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email withing the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleHideCheckout}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      className=""
      open={progress === "checkout"}
      onClose={progress === "checkout" ? handleHideCheckout : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currentFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
export default Checkout;
