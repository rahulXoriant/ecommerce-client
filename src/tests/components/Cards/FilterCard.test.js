import { shallow } from "enzyme";
import { Provider } from "react-redux";

import FilterCard from "../../../components/Cards/FilterCard";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
// import { formatPrice } from "../../../utils/format";
import { checkProps, findByTestAtrr, testStore } from "../../../utils/testUtils";
import { filtersWithoutSearch, filtersWithSearch, initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <FilterCard
        isSearchEnabled={componentProps.isSearchEnabled}
        filters={componentProps.filters}
        handleSetFilter={componentProps.handleSetFilter}
      />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow FilterCard without Search", () => {
  let component;
  const props = {
    ...filtersWithoutSearch,
  };
  beforeEach(() => {
    component = setUp({
      ...props,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "filter-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should not throw warnings with expected props", () => {
    const propError = checkProps(component, props);
    expect(propError).toBeUndefined();
  });

  it("Should render filter title", () => {
    const wrapper = findByTestAtrr(component, "filter-title");
    expect(wrapper.length).toBe(1);
  });

  it("Should not render filter search input", () => {
    const wrapper = findByTestAtrr(component, "filter-search-input");
    expect(wrapper.length).toBe(0);
  });

  it("Should render is cod available checkbox", () => {
    const wrapper = findByTestAtrr(component, "filter-is-cod-available-checkbox");
    expect(wrapper.length).toBe(1);
  });
});

describe("Shallow FilterCard with search", () => {
  let component;
  const props = {
    ...filtersWithSearch,
  };
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...props,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "filter-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should not throw warnings with expected props", () => {
    const propError = checkProps(component, props);
    expect(propError).toBeUndefined();
  });

  it("Should not render filter title", () => {
    const wrapper = findByTestAtrr(component, "filter-title");
    expect(wrapper.length).toBe(0);
  });

  it("Should render filter search input", () => {
    const wrapper = findByTestAtrr(component, "filter-search-input");
    expect(wrapper.length).toBe(1);
  });

  it("Should render is cod available checkbox", () => {
    const wrapper = findByTestAtrr(component, "filter-is-cod-available-checkbox");
    expect(wrapper.length).toBe(1);
  });
});
