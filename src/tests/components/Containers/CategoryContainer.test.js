import { shallow } from "enzyme";
import { Provider } from "react-redux";

import CategoryContainer from "../../../components/Containers/CategoryContainer";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";
import { allCategory, initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <CategoryContainer {...componentProps} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow CategoryContainer with all categories", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      categories: {
        loading: false,
        value: allCategory,
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should not load Loader or show no category message", () => {
    const noProductContainer = findByTestAtrr(component, "no-category-container");
    expect(noProductContainer.length).toBe(0);
    const productLoader = findByTestAtrr(component, "category-loader");
    expect(productLoader.length).toBe(0);
  });

  it("Should show all categories", () => {
    const productList = findByTestAtrr(component, "category-list");
    expect(productList.length).toBe(1);
    expect(findByTestAtrr(productList, "category-card").length).toBe(allCategory.length);
  });
});

describe("Shallow CategoryContainer with no categories", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      categories: {
        loading: false,
        value: [],
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show no categories container", () => {
    const productList = findByTestAtrr(component, "category-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-category-container");
    expect(noProductContainer.length).toBe(1);
    const productLoader = findByTestAtrr(component, "category-loader");
    expect(productLoader.length).toBe(0);
  });
});

describe("Shallow CategoryContainer page loader", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      categories: {
        loading: true,
        value: null,
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show loader", () => {
    const productList = findByTestAtrr(component, "category-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-category-container");
    expect(noProductContainer.length).toBe(0);
    const productLoader = findByTestAtrr(component, "category-loader");
    expect(productLoader.length).toBe(1);
  });
});
