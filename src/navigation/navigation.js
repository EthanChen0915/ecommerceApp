import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crwnlog } from "../asset/crown1.svg";
import "./navigation.scss";
import { UserContext } from "../context/context";
import { signOutUser } from "../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const signOutHandler = async () => {
    await signOutUser();
  };

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
          {currentUser ? (
            <span>
              {currentUser.email}
              <span onClick={signOutHandler} className="nav-link">
                SIGN OUT
              </span>
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              <h2>SIGN IN</h2>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
