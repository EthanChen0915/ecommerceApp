import React, { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const {
    cartItems,
    addItemToCart,
    deleteItemFromCart,
    removeItemEntirely,
    priceCount,
  } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => {
            deleteItemFromCart(cartItem);
          }}
        >
          -
        </span>
        {quantity}
        <span
          className="arrow"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          +
        </span>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemEntirely(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
