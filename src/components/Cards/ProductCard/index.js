import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import * as CartActions from "../../../store/modules/actions/cart.actions";
import { ProductCard as StyledProductCard } from "./styles";

const ProductCard = ({ product, amount }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartPending(id));
  };

  const increment = (product_id, present_amount) => {
    dispatch(CartActions.updateAmountPending(product_id, present_amount + 1));
  };

  const decrement = (product_id, present_amount) => {
    dispatch(CartActions.updateAmountPending(product_id, present_amount - 1));
  };

  const removeFromCart = (product) => {
    dispatch(CartActions.removeFromCart(product.id));
  };

  return (
    <StyledProductCard>
      <Card className="product-card" component="div">
        <CardContent>
          <img src={product.image} alt={product.title} />
          <Typography variant="h5" component="h5">
            {product.title}
          </Typography>
          <Typography variant="p" component="span">
            {product.priceFormatted}
          </Typography>
          <br />
          <Typography variant="h6">
            COD Available: {product.isCashOnDeliveryAvailable ? "Yes" : "No"}
          </Typography>
        </CardContent>
        <CardActions>
          {amount ? (
            <div className="cart-actions">
              <div className="cart-manupulation">
                <div className="cart-action-button">
                  <RemoveCircleOutlineIcon
                    style={{
                      fontSize: 36,
                      color: amount > 1 ? "#000" : "#888"
                    }}
                    onClick={() => decrement(product.id, amount)}
                  />
                </div>
                <div>
                  <input type="number" readOnly value={amount} />
                </div>
                <div className="cart-action-button">
                  <AddCircleOutlineIcon
                    style={{ fontSize: 36, color: "#000" }}
                    onClick={() => increment(product.id, amount)}
                  />
                </div>
              </div>
              <div className="cart-action-button">
                <DeleteIcon style={{ fontSize: 36 }} onClick={() => removeFromCart(product)} />
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <AddShoppingCartIcon size={16} color="#fff" />
              </div>
              <span>Add to Cart</span>
            </button>
          )}
        </CardActions>
      </Card>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    isCashOnDeliveryAvailable: PropTypes.bool,
    image: PropTypes.string.isRequired
  }),
  amount: PropTypes.number
};

export default ProductCard;
