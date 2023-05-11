import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import { useAppSelector } from "../../../store/redux-hooks";
import Burger from "../Burger";
import { Cart, Container, StyledMenu } from "./styles";

const Header = ({ range }) => {
  const [open, setOpen] = useState(false);
  const cartSize = useAppSelector(state => state.cart.length);
  return (
    <Container data-test="header-container">
      <Link to="/">
        <img src={logo} alt="logo" width={120} data-test="company-logo" />
      </Link>

      {range !== "desktop" ? (
        <>
          <Burger open={open} handleOpen={val => setOpen(val)} />
          <StyledMenu open={open}>
            <Link to="/" className="link">
              <strong>Home</strong>
            </Link>
            <Link to="/search" className="link">
              <strong>Search</strong>
            </Link>
            <Cart to="/checkout">
              <div>
                <strong>Checkout</strong>
                <span>
                  {cartSize} {cartSize > 1 ? "items" : "item"}
                </span>
              </div>
              <ShoppingCartCheckoutIcon size={60} color="warning" />
            </Cart>
          </StyledMenu>
        </>
      ) : (
        <div className="link-container">
          <Link to="/" className="link">
            <strong>Home</strong>
          </Link>
          <Link to="/search" className="link">
            <strong>Search</strong>
          </Link>
          <Cart to="/checkout" className="link">
            <div>
              <strong>Checkout</strong>
              <span>
                {cartSize} {cartSize > 1 ? "items" : "item"}
              </span>
            </div>
            <ShoppingCartCheckoutIcon size={60} color="warning" />
          </Cart>
        </div>
      )}
    </Container>
  );
};

Header.propTypes = {
  range: PropTypes.string.isRequired,
};

export default Header;
