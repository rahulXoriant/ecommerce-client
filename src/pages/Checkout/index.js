import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as CartActions from "../../store/modules/actions/cart.actions";
import { formatPrice } from "../../utils/format";
import { CartContainer, Container, Total } from "./styles";

const Checkout = () => {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
  );
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const increment = (product) => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount + 1));
  };

  const decrement = (product) => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount - 1));
  };

  const removeFromCart = (product) => {
    dispatch(CartActions.removeFromCart(product.id));
  };

  return (
    <Container>
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
                <div key={product.id} className="product">
                  <div className="product-detail">
                    <div>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                      <div className="product-name">
                        <h4>{product.title}</h4>
                        <span>{product.priceFormatted}</span>
                      </div>
                      <div className="product-actions">
                        <button type="button">
                          <RemoveCircleOutlineIcon
                            style={{ fontSize: 24, color: product.amount > 1 ? "#000" : "#888" }}
                            onClick={() => decrement(product)}
                          />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button">
                          <AddCircleOutlineIcon
                            style={{ fontSize: 24, color: "#000" }}
                            onClick={() => increment(product)}
                          />
                        </button>
                        <button type="button" onClick={() => removeFromCart(product)}>
                          <DeleteIcon size={20} color="#7159c1" />
                        </button>
                      </div>
                      <div className="product-subtotal-small-device">
                        <div>
                          <h3>{product.subtotal}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-subtotal-large-device">
                    <h3>{product.subtotal}</h3>
                  </div>
                </div>
              ))}
            </div>
          </CartContainer>
          <footer>
            <button type="button">Place Order</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
};

export default Checkout;
