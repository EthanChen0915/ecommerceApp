import React, { useContext } from "react";
import CheckoutItem from "../../component/CheckoutItem/CheckoutItem";
import { CartContext } from "../../context/cartcontext";
import "./Checkout.scss";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    deleteItemFromCart,
    removeItemEntirely,
    priceCount,
  } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">
        Total : {priceCount === 0 ? "" : `$${priceCount}`}
      </span>
    </div>
  );
};

export default Checkout;
