import Box from "@mui/material/Box";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterCard from "../../components/Cards/FilterCard";
import ProductCard from "../../components/Cards/ProductCard";
import Loader from "../../components/Loader";
import * as ProductActions from "../../store/modules/actions/product.actions";
import { ProductContainer, ProductList } from "./styles";

const Category = () => {
  const [filters, setFilters] = useState({});
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
      const productFilter = {};
      Object.keys(filters).forEach(
        (filter) => (productFilter[filter] = filters[filter])
      );
      dispatch(ProductActions.getProductsPending(productFilter));
    };
    loadProducts();
  }, [filters]);

  return (
    <ProductContainer>
      <FilterCard isSearchEnabled={true} filters={filters} handleSetFilter={val => setFilters(val)} />
      {products.loading ? (
        <Loader />
      ) : isEmpty(products.value) ? (
        <Box className="no-product-container">
          <Box>No Products Available</Box>
        </Box>
      ) : (
        <ProductList>
          {products.value.map((product) => (
            <ProductCard key={product.id} product={product} amount={amount[product.id]} />
          ))}
        </ProductList>
      )}
    </ProductContainer>
  );
};

export default Category;
