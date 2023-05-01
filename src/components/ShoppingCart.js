import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";
import CartContext from "../contexts/CartContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart, checkout, removeItem } = useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item, index) => (
        <Item key={index} {...item} removeItem={removeItem} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button onClick={() => checkout()}>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
