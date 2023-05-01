import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  checkout: () => {},
  removeItem: () => {},
});

export default CartContext;
