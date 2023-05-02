import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" width={120} />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My Cart</strong>
          <span>{cartSize} {cartSize > 1 ? 'items' : 'item'}</span>
        </div>
        <ShoppingCartIcon size={48} color="rgb(241, 148, 32)" />
      </Cart>
    </Container>
  );
}