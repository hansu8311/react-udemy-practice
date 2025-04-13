import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CardContextProvidr from "./store/shopping-card-context.jsx";
import Product from "./components/Product.jsx";

function App() {
  return (
    <CardContextProvidr>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CardContextProvidr>
  );
}

export default App;
