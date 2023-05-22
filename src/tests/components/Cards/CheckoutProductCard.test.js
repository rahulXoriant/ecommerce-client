import { shallow } from "enzyme";
import { Provider } from "react-redux";

import CheckoutProductCard from "../../../components/Cards/CheckoutProductCard";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { checkProps, findByTestAtrr, testStore } from "../../../utils/testUtils";
import { cartProducts, initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <CheckoutProductCard product={componentProps.product} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow CheckoutProductCard", () => {
  let component;
  const props = {
    product: cartProducts[0],
  };
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        cart: cartProducts,
      },
      ...props,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should not throw warnings with expected props", () => {
    const propError = checkProps(component, props);
    expect(propError).toBeUndefined();
  });

  it("Should render product image", () => {
    const image = findByTestAtrr(component, "product-image");
    expect(image.length).toBe(1);
  });

  it("Should show correct product title", () => {
    const title = findByTestAtrr(component, "product-title");
    expect(title.length).toBe(1);
    expect(title.text()).toBe(props.product.title);
  });

  it("should show correct price", () => {
    const price = findByTestAtrr(component, "product-price");
    expect(price.length).toBe(1);
    expect(price.text()).toBe(props.product.priceFormatted);
  });

  it("should show correct subtotal", () => {
    const subtotal = findByTestAtrr(component, "product-subtotal");
    expect(subtotal.length).toBe(1);
    expect(subtotal.text()).toBe(props.product.subtotal);
  });
});
