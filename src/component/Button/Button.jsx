import React from "react";
import "./Button.scss";
const buttonTypeClass = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      className={`button-container ${buttonTypeClass[buttonType]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
