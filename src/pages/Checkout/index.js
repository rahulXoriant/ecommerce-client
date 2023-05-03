import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/modules/actions/cart.actions';
import { formatPrice } from '../../utils/format';
import { isEmpty } from 'lodash';
import { Box } from '@mui/material';

const Checkout = () => {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const increment = (product) => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount + 1));
  }

  const decrement = (product) => {
    dispatch(CartActions.updateAmountPending(product.id, product.amount - 1));
  }

  return (
    <Container>
      {isEmpty(cart) ? (
        <Box className="no-product-cart-container">
          <Box>
            No Products in Cart
          </Box>
        </Box>
      ) : (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Products</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>

            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <RemoveCircleOutlineIcon
                          size={20}
                          color="rgb(241, 148, 32)"
                          onClick={() => decrement(product)}
                        />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button">
                        <AddCircleOutlineIcon
                          size={20}
                          color="rgb(241, 148, 32)"
                          onClick={() => increment(product)}
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <DeleteIcon size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <button type="button">Finalize Order</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </>
      )}
    </Container>
  );
}

export default Checkout;
