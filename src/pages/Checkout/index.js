import { useSelector } from "react-redux";

import CheckoutContainer from "../../components/Containers/CheckoutContainer";
import { formatPrice } from "../../utils/format";

const Checkout = () => {
  const cart = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
  );
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  return (
    <CheckoutContainer cart={cart} total={total} />
  );
};

export default Checkout;
