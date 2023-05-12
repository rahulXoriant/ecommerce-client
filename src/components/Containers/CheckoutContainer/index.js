import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import CheckoutProductCard from "../../../components/Cards/CheckoutProductCard";
import { CartContainer, CheckoutContainer as StyledCheckoutContainer, Total } from "./styles";

const CheckoutContainer = ({ cart, total }) => (
  <StyledCheckoutContainer data-test="checkout-container">
    {isEmpty(cart) ? (
      <Box className="no-product-cart-container" data-test="no-product-cart-container">
        <Box>No Products in Cart</Box>
      </Box>
    ) : (
      <>
        <CartContainer data-test="cart-container">
          <div>
            <h2>My Cart</h2>
          </div>
          <div className="product-details" data-test="product-list">
            {cart.map(product => (
              <CheckoutProductCard key={product.id} product={product} data-test="product-card" />
            ))}
          </div>
        </CartContainer>
        <footer>
          <button type="button">Place Order</button>

          <Total>
            <span>Total:</span>
            <h2>{total}</h2>
          </Total>
        </footer>
      </>
    )}
  </StyledCheckoutContainer>
);

CheckoutContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceFormatted: PropTypes.string.isRequired,
      subtotal: PropTypes.string.isRequired,
      isCashOnDeliveryAvailable: PropTypes.bool,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  total: PropTypes.string.isRequired,
};

export default CheckoutContainer;
