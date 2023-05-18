import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Search from "../../pages/Search";
import { useAppSelector } from "../../store/redux-hooks";
import { testUserAppSelector } from "../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../utils/testUtils";
import { allCategory, allProductsWithFormattedPrice, initialState } from "../constants";

jest.mock("../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <Search />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow Search page No Products", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        category: {
          loading: false,
          category: allCategory,
        },
        product: {
          loading: false,
          value: [],
        },
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "search-page");
    expect(wrapper.length).toBe(1);
  });
});

describe("Shallow Search page With Products", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        category: {
          loading: false,
          category: allCategory,
        },
        product: {
          loading: false,
          value: allProductsWithFormattedPrice,
        },
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "search-page");
    expect(wrapper.length).toBe(1);
  });
});
