import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/actions/cart.actions';

export default function Category() {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data
        // .filter(product => product.category === category)
        .map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartPending(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={String(product.id)}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <AddShoppingCartIcon size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>

            <span>Add to Cart</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}