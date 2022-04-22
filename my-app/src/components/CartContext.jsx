import { React, createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const indexPlant = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (indexPlant !== -1) {
      const newCart = [...cart];
      newCart[indexPlant].count = newCart[indexPlant].count + item.count;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };
  const deleteFromCart = (id) => {
    setCart(cart.filter((plant) => plant.id !== id));
  };

  const buyAll = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, buyAll }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;