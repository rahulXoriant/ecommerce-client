import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import { CONST_VALUE } from "../../../constants";
import { useAppSelector } from "../../../store/redux-hooks";
import Burger from "../Burger";
import { Cart, CartLink, Container, StyledMenu } from "./styles";

const Header = ({ range }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const cartSize = useAppSelector(state => state.cart.length);

  const handleMenuClick = (e, to) => {
    e.preventDefault();
    setOpen(false);
    navigate(to);
  };

  return (
    <Container data-test="header-container">
      <Link to="/">
        <img src={logo} alt="logo" width={120} data-test="company-logo" />
      </Link>

      {range !== "desktop" ? (
        <>
          <Burger open={open} handleOpen={val => setOpen(val)} />
          <StyledMenu open={open}>
            <button 
              className="link" 
              onClick={e => handleMenuClick(e, "")} 
            >
              <strong>{CONST_VALUE.HOME}</strong>
            </button>
            <button 
              className="link" 
              onClick={e => handleMenuClick(e, "search")} 
            >
              <strong>{CONST_VALUE.SEARCH}</strong>
            </button>
            <Cart 
              className="link" 
              onClick={e => handleMenuClick(e, "checkout")} 
            >
              <div>
                <strong>{CONST_VALUE.CHECKOUT}</strong>
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
          <CartLink to="/checkout" className="link">
            <div>
              <strong>Checkout</strong>
              <span>
                {cartSize} {cartSize > 1 ? "items" : "item"}
              </span>
            </div>
            <ShoppingCartCheckoutIcon size={60} color="warning" />
          </CartLink>
        </div>
      )}
    </Container>
  );
};

Header.propTypes = {
  range: PropTypes.string.isRequired,
};

export default Header;
