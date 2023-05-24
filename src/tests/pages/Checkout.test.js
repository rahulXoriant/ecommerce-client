import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Checkout from "../../pages/Checkout";
import { useAppSelector } from "../../store/redux-hooks";
import { testUserAppSelector } from "../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../utils/testUtils";
import { cartProducts, initialState } from "../constants";

jest.mock("../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <Checkout />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow Checkout page No Product in cart", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "checkout-page");
    expect(wrapper.length).toBe(1);
  });
});

describe("Shallow Checkout page With Products in cart", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        cart: [cartProducts],
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "checkout-page");
    expect(wrapper.length).toBe(1);
  });
});
