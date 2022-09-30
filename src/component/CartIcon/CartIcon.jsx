import React from "react";
import { useContext } from "react";
import { ReactComponent as ShoppingcartIcon } from "../../asset/shopping-bag.svg";
import { CartContext } from "../../context/cartcontext";
import "./CartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={cartOpenHandler}>
      <ShoppingcartIcon className="shopping-icon"></ShoppingcartIcon>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
