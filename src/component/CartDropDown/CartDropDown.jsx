import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartcontext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./CartDropDown.scss";

const CartDropDown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItems={item} />;
        })}
      </div>
      <Button onClick={goToCheckOutHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
