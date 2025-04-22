import { use } from "react";
import iclogo from "../assets/logo.jpg";
import { MealsContext } from "../store/food-context";

function Header({ children, onCartClick }) {
  const { orderTotCnt } = use(MealsContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={iclogo} alt="logo" />
        <h1>{children}</h1>
      </div>
      <button className="text-button" onClick={onCartClick}>
        cart({orderTotCnt})
      </button>
    </header>
  );
}

export default Header;
