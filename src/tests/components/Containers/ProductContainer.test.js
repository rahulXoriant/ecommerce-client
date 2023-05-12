import { shallow } from "enzyme";
import { Provider } from "react-redux";

import ProductContainer from "../../../components/Containers/ProductContainer";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";
import {
  allProductsWithFormattedPrice,
  filtersWithoutSearch,
  filtersWithSearch,
  initialState,
  productAmount,
} from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <ProductContainer {...componentProps} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow ProductContainer with all products and search enabled", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithSearch,
      products: {
        loading: false,
        value: allProductsWithFormattedPrice,
      },
      amount: productAmount,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should not load Loader or show no product message", () => {
    const noProductContainer = findByTestAtrr(component, "no-product-container");
    expect(noProductContainer.length).toBe(0);
    const productLoader = findByTestAtrr(component, "product-loader");
    expect(productLoader.length).toBe(0);
  });

  it("Should show all products", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(1);
    expect(findByTestAtrr(productList, "product-card").length).toBe(
      allProductsWithFormattedPrice.length,
    );
  });
});

describe("Shallow ProductContainer with no products and search enabled", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithSearch,
      products: {
        loading: false,
        value: [],
      },
      amount: productAmount,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show no products container", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-product-container");
    expect(noProductContainer.length).toBe(1);
    const productLoader = findByTestAtrr(component, "product-loader");
    expect(productLoader.length).toBe(0);
  });
});

describe("Shallow ProductContainer page loader and search enabled", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithSearch,
      products: {
        loading: true,
        value: null,
      },
      amount: productAmount,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show loader", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-product-container");
    expect(noProductContainer.length).toBe(0);
    const productLoader = findByTestAtrr(component, "product-loader");
    expect(productLoader.length).toBe(1);
  });
});

describe("Shallow ProductContainer with no products and search disabled", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...filtersWithoutSearch,
      products: {
        loading: false,
        value: [],
      },
      amount: productAmount,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "product-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should show no products filters", () => {
    const productList = findByTestAtrr(component, "product-filter");
    expect(productList.length).toBe(0);
  });

  it("Should show no products container", () => {
    const productList = findByTestAtrr(component, "product-list");
    expect(productList.length).toBe(0);
    const noProductContainer = findByTestAtrr(component, "no-product-container");
    expect(noProductContainer.length).toBe(1);
    const productLoader = findByTestAtrr(component, "product-loader");
    expect(productLoader.length).toBe(0);
  });
});
