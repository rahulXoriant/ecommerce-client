import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import * as CartActions from "../../store/modules/actions/cart.actions";
import * as ProductActions from "../../store/modules/actions/product.actions";
import { ProductContainer, ProductList } from "./styles";

const Category = () => {
  const [filters, setFilters] = useState({});
  const { categorySlug } = useParams();
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    const loadProducts = async () => {
      const productFilter = { category: categorySlug };
      Object.keys(filters).forEach((filter) => (productFilter[filter] = filters[filter]));
      dispatch(ProductActions.getProductsPending(productFilter));
    };
    loadProducts();
  }, [filters]);

  const handleFilterChange = (type) => {
    switch (type) {
    case "COD":
      if (Object.prototype.hasOwnProperty.call(filters, "isCashOnDeliveryAvailable")) {
        setFilters((prev) =>
          Object.keys(prev)
            .filter((key) => key !== "isCashOnDeliveryAvailable")
            .reduce((acc, key) => {
              acc[key] = prev[key];
              return acc;
            }, {})
        );
      } else {
        setFilters((prev) => ({
          ...prev,
          isCashOnDeliveryAvailable: true
        }));
      }
      break;
    default:
      break;
    }
  };

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
    <ProductContainer>
      {products.loading ? (
        <Loader />
      ) : isEmpty(products.value) ? (
        <Box className="no-product-container">
          <Box>No Products Available</Box>
        </Box>
      ) : (
        <>
          <Card className="filters" component="div">
            <CardContent>
              <Box>Filters</Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!filters.isCashOnDeliveryAvailable}
                    onChange={() => handleFilterChange("COD")}
                    inputProps={{ "aria-label": "controlled" }}
                    sx={{ padding: 0 }}
                  />
                }
                label="COD Available"
              />
            </CardContent>
          </Card>
          <ProductList>
            {products.value.map((product) => (
              <Card className="product-card" key={String(product.id)} component="div">
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
                  {amount[product.id] ? (
                    <div className="cart-actions">
                      <div className="cart-manupulation">
                        <div className="cart-action-button">
                          <RemoveCircleOutlineIcon
                            style={{
                              fontSize: 36,
                              color: amount[product.id] > 1 ? "#000" : "#888"
                            }}
                            onClick={() => decrement(product.id, amount[product.id])}
                          />
                        </div>
                        <div>
                          <input type="number" readOnly value={amount[product.id]} />
                        </div>
                        <div className="cart-action-button">
                          <AddCircleOutlineIcon
                            style={{ fontSize: 36, color: "#000" }}
                            onClick={() => increment(product.id, amount[product.id])}
                          />
                        </div>
                      </div>
                      <div className="cart-action-button">
                        <DeleteIcon
                          style={{ fontSize: 36 }}
                          onClick={() => removeFromCart(product)}
                        />
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
            ))}
          </ProductList>
        </>
      )}
    </ProductContainer>
  );
};

export default Category;
