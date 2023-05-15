import { shallow } from "enzyme";
import { Provider } from "react-redux";

import ProductCard from "../../../components/Cards/ProductCard";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";
import { initialState, product } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <ProductCard {...componentProps} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow ProductCard, ProductNot in Cart", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      product,
      amount: 0
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should render product image", () => {
    const image = findByTestAtrr(component, "product-image");
    expect(image.length).toBe(1);
  });

  it("Should show correct product title", () => {
    const title = findByTestAtrr(component, "product-title");
    expect(title.length).toBe(1);
  });

  it("Should show correct price", () => {
    const price = findByTestAtrr(component, "product-price");
    expect(price.length).toBe(1);
  });

  it("Should show add to cart button", () => {
    const addToCartButton = findByTestAtrr(component, "add-to-cart-action");
    expect(addToCartButton.length).toBe(1);
  });

  it("Should not show cart action buttons", () => {
    const cartActionButton = findByTestAtrr(component, "cart-action-button");
    expect(cartActionButton.length).toBe(0);
  });
});

describe("Shallow ProductCard, Product in Cart", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      product,
      amount: 2
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should render product image", () => {
    const image = findByTestAtrr(component, "product-image");
    expect(image.length).toBe(1);
  });

  it("Should show correct product title", () => {
    const title = findByTestAtrr(component, "product-title");
    expect(title.length).toBe(1);
  });

  it("Should show correct price", () => {
    const price = findByTestAtrr(component, "product-price");
    expect(price.length).toBe(1);
  });

  it("Should not show add to cart button", () => {
    const addToCartButton = findByTestAtrr(component, "add-to-cart-action");
    expect(addToCartButton.length).toBe(0);
  });

  it("Should show cart action buttons", () => {
    const cartActionButton = findByTestAtrr(component, "cart-action-button");
    expect(cartActionButton.length).toBe(3);
  });
});
