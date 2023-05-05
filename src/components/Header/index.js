import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" width={120} />
      </Link>

      <div className="link-container">
        <Link to="/search" className="link">
          <strong>Search</strong>
        </Link>
        <Cart to="/checkout">
          <div>
            <strong>Checkout</strong>
            <span>
              {cartSize} {cartSize > 1 ? 'items' : 'item'}
            </span>
          </div>
          <ShoppingCartCheckoutIcon size={60} color="warning" />
        </Cart>
      </div>
    </Container>
  );
};

export default Header;
