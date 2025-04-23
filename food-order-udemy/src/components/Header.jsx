import { use } from "react";
import logoImg from "../assets/logo.jpg";
import { CartContext } from "../store/CartContext";
import { UserProgressContext } from "../store/UserProgressContext";
import Button from "./UI/Button";
function Header({}) {
  const { items } = use(CartContext);
  const { showCart } = use(UserProgressContext);

  const totCardItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  function handleShowCart() {
    showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totCardItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
