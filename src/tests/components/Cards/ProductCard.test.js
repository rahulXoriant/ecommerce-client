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
      <ProductCard product={componentProps.product} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow ProductCard", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      product,
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

  it("should show correct price", () => {
    const price = findByTestAtrr(component, "product-price");
    expect(price.length).toBe(1);
  });
});
