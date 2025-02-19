import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecipeCart from "./RecipeCart";
export default function ViewProducts() {
  const items = useSelector((state) => state.cart.cartItems);
  console.log(items, "items from view");
  return (
    <div>
      <h1>view added products to cart</h1>
      <Link to="/">back to home</Link>
      <div>
        {items.map((item) => (
          <div>
            <RecipeCart data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
