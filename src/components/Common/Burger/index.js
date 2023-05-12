import PropTypes from "prop-types";

import { StyledBurger } from "./styles";

const Burger = ({ open, handleOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => handleOpen(!open)} data-test="burger">
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
};

export default Burger;
