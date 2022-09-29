import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlog } from "../asset/crown1.svg";

import "./navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <Crwnlog className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <h2>SHOP</h2>
          </Link>
          <Link className="nav-link" to="/auth">
            <h2>SIGN IN</h2>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
