import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import CheckoutProductCard from "../../../components/Cards/CheckoutProductCard";
import { CartContainer, CheckoutContainer as StyledCheckoutContainer, Total } from "./styles"

const CheckoutContainer = ({ cart, total }) => (
  <StyledCheckoutContainer>
    {isEmpty(cart) ? (
      <Box className="no-product-cart-container">
        <Box>No Products in Cart</Box>
      </Box>
    ) : (
      <>
        <CartContainer>
          <div>
            <h2>My Cart</h2>
          </div>
          <div className="product-details">
            {cart.map((product) => (
              <CheckoutProductCard key={product.id} product={product} />
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
)

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
      image: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  total: PropTypes.string.isRequired,
};

export default CheckoutContainer;
