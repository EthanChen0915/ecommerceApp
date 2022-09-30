import React from "react";
import Button from "../Button/Button";
import "./CartDropDown.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
