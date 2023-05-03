import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import { ProductContainer, ProductList } from './styles';
import * as CartActions from '../../store/modules/actions/cart.actions';
import * as ProductActions from '../../store/modules/actions/product.actions';
import Loader from '../../components/Loader';
import { isEmpty } from 'lodash';
import { Box } from '@mui/material';

const Category = () => {
  const [filters, setFilters] = useState({});
  const { categorySlug } = useParams();
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);

  useEffect(() => {
    const loadProducts = async () => {
      const productFilter = { category: categorySlug };
      Object.keys(filters).forEach(filter => productFilter[filter] = filters[filter])
      dispatch(ProductActions.getProductsPending(productFilter));
    }
    loadProducts();
  }, [filters]);

  const handleFilterChange = (type) => {
    switch(type) {
      case 'COD':
        console.log(filters.hasOwnProperty('isCashOnDeliveryAvailable'))
        if (filters.hasOwnProperty('isCashOnDeliveryAvailable')) {
          setFilters(prev => Object.keys(prev)
            .filter(key => key !== "isCashOnDeliveryAvailable")
            .reduce((acc, key) => {
              acc[key] = prev[key];
              return acc;
            }, {})
          )
        } else {
          setFilters(prev => ({
            ...prev,
            isCashOnDeliveryAvailable: true,
          }));
        }
        break;
      default:
        break;
    }
  }

  const handleAddProduct = (id) => {
    dispatch(CartActions.addToCartPending(id));
  }

  console.log(filters)

  return (
    <ProductContainer>
      {products.loading ? (
        <Loader />
      ) : isEmpty(products.value) ? (
        <Box className="no-product-container">
          <Box>
            No Products Available
          </Box>
        </Box>
      ) : (
        <>
          <Card className='filters' component="div">
            <CardContent>
              <Box>
                Filters
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!filters.isCashOnDeliveryAvailable}
                    onChange={() => handleFilterChange('COD')}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{ padding: 0 }}
                  />
                }
                label="COD Available"
              />
            </CardContent>
          </Card>
          <ProductList>
            {products.value.map(product => (
            <Card className='product-card' key={String(product.id)} component="div">
              <CardContent>
                <img src={product.image} alt={product.title} />
                <Typography variant="h5" component="h5">
                  {product.title}
                </Typography>
                <Typography variant="p" component="span">
                  {product.priceFormatted}
                </Typography>
              </CardContent>
              <CardActions>
                <button type="button" onClick={() => handleAddProduct(product.id)}>
                  <div>
                    <AddShoppingCartIcon size={16} color="#fff" />
                    {amount[product.id] || 0}
                  </div>

                  <span>Add to Cart</span>
                </button>
              </CardActions>
            </Card>
          ))}
          </ProductList>
        </>
      )}
    </ProductContainer>
  );
}

export default Category;
