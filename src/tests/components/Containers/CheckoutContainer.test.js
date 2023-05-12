import { shallow } from "enzyme";
import { Provider } from "react-redux";

import CheckoutContainer from "../../../components/Containers/CheckoutContainer";
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

describe("Shallow CheckoutContainer with all products", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithSearch,
      cart: cartProducts,
      total: formatPrice(cartProducts.reduce((product, acc) => product.subtotal + acc, 0)),
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "checkout-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should not show no product message", () => {
    const noProductContainer = findByTestAtrr(component, "no-product-cart-container");
    expect(noProductContainer.length).toBe(0);
  });

  it("Should show all products", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(1);
    expect(findByTestAtrr(productList, "product-card").length).toBe(cartProducts.length);
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

  it("Should show no products container", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-product-cart-container");
    expect(noProductContainer.length).toBe(1);
  });
});
