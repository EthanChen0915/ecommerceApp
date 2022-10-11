import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const deleteCartItem = (cartItems, productToRemove) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
const removeItemFromCartEntirly = (cartItems, ItemRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== ItemRemove.id);
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteItemFromCart: () => {},
  removeItemEntirely: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, cur) => {
      return (acc += cur.quantity * cur.price);
    }, 0);
    setPriceCount(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const deleteItemFromCart = (productToRemove) => {
    setCartItems(deleteCartItem(cartItems, productToRemove));
  };
  const removeItemEntirely = (itemRemoveEntirly) =>
    setCartItems(removeItemFromCartEntirly(cartItems, itemRemoveEntirly));

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    deleteItemFromCart,
    removeItemEntirely,
    priceCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
