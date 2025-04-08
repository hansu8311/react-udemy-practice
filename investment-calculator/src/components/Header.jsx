import iclogo from "../assets/investment-calculator-logo.png";

function Header({ children }) {
  return (
    <div id="header">
      <img src={iclogo} />
      <h1>{children}</h1>
    </div>
  );
}

export default Header;
