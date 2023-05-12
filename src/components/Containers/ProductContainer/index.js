import Box from "@mui/material/Box";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";

import FilterCard from "../../Cards/FilterCard";
import ProductCard from "../../Cards/ProductCard";
import Loader from "../../Common/Loader";
import { ProductContainer as StyledProductContainer, ProductList } from "./styles";

const ProductContainer = ({ isSearchEnabled, filters, handleSetFilter, products, amount }) => (
  <StyledProductContainer data-test="product-container">
    {isSearchEnabled || !isEmpty(products?.value) ? (
      <FilterCard
        data-test="product-filter"
        isSearchEnabled={isSearchEnabled}
        filters={filters}
        handleSetFilter={handleSetFilter}
      />
    ) : null}
    {products.loading ? (
      <Loader data-test="product-loader" />
    ) : isEmpty(products.value) ? (
      <Box className="no-product-container" data-test="no-product-container">
        <Box>No Products Available</Box>
      </Box>
    ) : (
      <ProductList data-test="product-list">
        {products.value.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            amount={amount[product.id]}
            data-test="product-card"
          />
        ))}
      </ProductList>
    )}
  </StyledProductContainer>
);

ProductContainer.propTypes = {
  isSearchEnabled: PropTypes.bool,
  filters: PropTypes.shape({
    isCashOnDeliveryAvailable: PropTypes.bool,
    q: PropTypes.string,
    qFields: PropTypes.string,
  }),
  handleSetFilter: PropTypes.func,
  products: PropTypes.shape({
    value: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceFormatted: PropTypes.string.isRequired,
        isCashOnDeliveryAvailable: PropTypes.bool,
        image: PropTypes.string.isRequired,
      }),
    ),
    loading: PropTypes.bool,
  }),
  amount: PropTypes.shape({
    [PropTypes.number]: PropTypes.number,
  }),
};

export default ProductContainer;
