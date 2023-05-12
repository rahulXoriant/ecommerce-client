import CheckoutContainer from "../components/Containers/CheckoutContainer";
import { useAppSelector } from "../store/redux-hooks";
import { formatPrice } from "../utils/format";

const Checkout = () => {
  const cart = useAppSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );
  const total = useAppSelector(state =>
    formatPrice(
    ),
  );

  return <CheckoutContainer cart={cart} total={total} />;
};

export default Checkout;
