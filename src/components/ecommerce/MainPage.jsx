import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RecipeCart from "./RecipeCart";
import ViewProducts from "./ViewProducts";
import { addToCart, removeFromCart } from "../../redux/slice";
export default function MainPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  let [filterData, setFilteredData] = useState([]);

  const [items, setItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);

  const handleAddToCart = (item) => {
    // console.log(item, "item");
    // setItems((val) => val + 1);
    // setCartItems((prev) => [...prev, item]);
    // console.log(cartItems, "cart items");

    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      let filtered = data.filter(
        (ele) =>
          ele.name.toLowerCase().includes(search) ||
          ele.cuisine.toLowerCase().includes(search) ||
          ele.rating >= search
      );
      setFilteredData(filtered);
    }
  };

  const fetchApi = async () => {
    let resp = await fetch("https://dummyjson.com/recipes");
    let data = await resp.json();
    setData(data.recipes);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <h1>Food App</h1>
        <div style={{ float: "right" }}>
          {/* <Link to={"ViewProducts"} state={{cartItems}}> */}
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
            }
            alt=""
            height="30px"
            onClick={() => navigate("ViewProducts")}
          />
          {/* </Link> */}
          <span>
            <sup>{totalItems}</sup>
          </span>
        </div>
        <div>
          <input
            type="text"
            name="search"
            value={search}
            placeholder="search here"
            onChange={handleChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {search === ""
          ? data.map((recp) => {
              return (
                <div key={recp.id}>
                  <RecipeCart data={recp} ind={recp.id} />
                  <button onClick={() => handleAddToCart(recp)}>
                    Add to Cart
                  </button>
                  <button onClick={() => handleRemoveFromCart(recp)}>
                    Remove from Cart
                  </button>
                </div>
              );
            })
          : filterData.map((recp) => {
              return (
                <div key={recp.id}>
                  <RecipeCart data={recp} ind={recp.id} />
                  <button onClick={() => handleAddToCart(recp)}>
                    Add to Cart
                  </button>
                  <button onClick={() => handleRemoveFromCart(recp)}>
                    Remove from Cart
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
}
