import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Home from "../../pages/Home";
import { useAppSelector } from "../../store/redux-hooks";
import { testUserAppSelector } from "../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../utils/testUtils";
import { allCategory, initialState } from "../constants";

jest.mock("../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <Home />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow Home page No Categories", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-page");
    expect(wrapper.length).toBe(1);
  });
});

describe("Shallow Home page With Categories", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: {
        ...initialState,
        category: {
          loading: false,
          category: allCategory,
        },
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-page");
    expect(wrapper.length).toBe(1);
  });
});
