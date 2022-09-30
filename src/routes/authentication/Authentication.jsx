import React from "react";
import SignUp from "../../component/SignUp/SignUp";

import SignIn from "../../component/SignIn/SignIn";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default Authentication;
