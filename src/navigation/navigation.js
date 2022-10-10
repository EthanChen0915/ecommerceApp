import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Crwnlog } from "../asset/crown1.svg";
import "./navigation.scss";
import { UserContext } from "../context/context";
import { CartContext } from "../context/cartcontext";
import { signOutUser } from "../utils/firebase/firebase";
import CartIcon from "../component/CartIcon/CartIcon";
import CartDropDown from "../component/CartDropDown/CartDropDown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  const closeCartHandler = (e) => {
    console.log(e.target);
  };

  return (
    <Fragment>
      <div className="navigation" onClick={closeCartHandler}>
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
