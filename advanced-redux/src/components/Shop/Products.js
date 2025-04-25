import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const dumy_data = [
  {
    id: "p1",
    price: 6,
    title: "my",
    description: "123123",
  },
  {
    id: "p2",
    price: 5,
    title: "my2",
    description: "123123",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dumy_data.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
