import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";

import * as CartActions from "../../../store/modules/actions/cart.actions";
import { CheckoutProductCard as StyledCheckoutProductCard } from "./styles";

const CheckoutProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const increment = product => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount + 1));
  };

  const decrement = product => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount - 1));
  };

  const removeFromCart = product => {
    dispatch(CartActions.removeFromCart(product.id));
  };
  return (
    <StyledCheckoutProductCard key={product.id} className="product">
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
              <h4>{product.subtotal}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="product-subtotal-large-device">
        <h3>{product.subtotal}</h3>
      </div>
    </StyledCheckoutProductCard>
  );
};

CheckoutProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    isCashOnDeliveryAvailable: PropTypes.bool,
    image: PropTypes.string.isRequired,
  }),
};

export default CheckoutProductCard;
