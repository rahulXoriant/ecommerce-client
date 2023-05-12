import React, { useEffect, useState } from "react";

import ProductContainer from "../components/Containers/ProductContainer";
import * as ProductActions from "../store/modules/actions/product.actions";
import { useAppDispatch, useAppSelector } from "../store/redux-hooks";

const Category = () => {
  const [filters, setFilters] = useState({});
  const amount = useAppSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.product);
      Object.keys(filters).forEach(filter => (productFilter[filter] = filters[filter]));
      dispatch(ProductActions.getProductsPending(productFilter));
    };
    loadProducts();
  }, [filters]);

  return (
    <ProductContainer
      isSearchEnabled={true}
      filters={filters}
      handleSetFilter={val => setFilters(val)}
      products={products}
      amount={amount}
    />
  );
};

export default Category;
