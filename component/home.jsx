import { useEffect, useState } from "react";
import "./style/home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    })();
  }, []);

  const addToCart = (user) => {
    setCart([...cart, { ...user }]);
  };

  const removeFromCart = (userToRemove) => {
    setCart(cart.filter((item) => item !== userToRemove));
  };

  return (
    <>
    {/* render shop  */}
      <div className="shop">
        <h1>Alfa's shop</h1>
        {users.map((user) => (
          <div className="cart-item" key={user.id}>
            <img src="" alt="item-name" />
            <h3>{user.firstName + " " + user.lastName}</h3>
            <p>{user.age}</p>
            <br />
            <button onClick={() => addToCart(user)}>Add to Cart</button>
          </div>
        ))}


        {/* render cart */}
        <div className="cart">
          <h1>Cart {cart.length}</h1>
          {cart.map((item, index) => (
            <div className="cart-item" key={`${item.id}_${index}`}>
              <img src="" alt="item-name" />
              <h3>{item.firstName + " " + item.lastName}</h3>
              <p>{item.age}</p>
              <br />
              <button onClick={() => removeFromCart(item)}>
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
