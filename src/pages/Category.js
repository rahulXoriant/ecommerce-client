import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductContainer from "../components/Containers/ProductContainer";
import * as ProductActions from "../store/modules/actions/product.actions";

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

  return (
    <ProductContainer
      isSearchEnabled={false}
      filters={filters}
      handleSetFilter={(val) => setFilters(val)}
      products={products}
      amount={amount}
    />
  );
};

export default Category;
