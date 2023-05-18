import { shallow } from "enzyme";
import { Provider } from "react-redux";

import CheckoutContainer from "../../../components/Containers/CheckoutContainer";
import { CONST_VALUE } from "../../../constants";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { formatPrice } from "../../../utils/format";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";
import { cartProducts, filtersWithSearch, initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <CheckoutContainer {...componentProps} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow CheckoutContainer with one product in cart", () => {
  let component;
  const cartTotal = formatPrice(
    cartProducts.reduce((product, acc) => product.amount * product.price + acc, 0),
  );
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        cart: cartProducts,
      },
      ...filtersWithSearch,
      cart: cartProducts,
      total: cartTotal,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "checkout-container");
    const heading = findByTestAtrr(wrapper, "heading");
    expect(heading.text()).toBe(CONST_VALUE.MY_CART);
    expect(wrapper.length).toBe(1);
  });

  it("Should not show no product message", () => {
    const noProductContainer = findByTestAtrr(component, "no-product-cart-container");
    expect(noProductContainer.length).toBe(0);
  });

  it("Should show all products in cart", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(1);
    expect(findByTestAtrr(productList, "product-card").length).toBe(cartProducts.length);
  });

  it("Should show correct total", () => {
    const renderedCartTotal = findByTestAtrr(component, "total");
    expect(renderedCartTotal.text()).toBe(cartTotal);
  });
});

describe("Shallow CheckoutContainer with no products", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithSearch,
      cart: [],
      total: formatPrice(0),
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "checkout-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show no products in cart", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-product-cart-container");
    expect(noProductContainer.text()).toBe(CONST_VALUE.NO_PRODUCTS_IN_CART);
    expect(noProductContainer.length).toBe(1);
  });
});
