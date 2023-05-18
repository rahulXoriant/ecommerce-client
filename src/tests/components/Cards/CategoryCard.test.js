import { shallow } from "enzyme";
import { Provider } from "react-redux";

import CategoryCard from "../../../components/Cards/CategoryCard";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { checkProps, findByTestAtrr, testStore } from "../../../utils/testUtils";
import { allCategory, initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <CategoryCard {...componentProps} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow CategoryCard", () => {
  let component;
  const props = {
    category: allCategory[0],
  };
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      ...props,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should not throw warnings with expected props", () => {
    const propError = checkProps(component, props);
    expect(propError).toBeUndefined();
  });

  it("Should render category image", () => {
    const image = findByTestAtrr(component, "category-image");
    expect(image.length).toBe(1);
  });

  it("Should render category name", () => {
    const name = findByTestAtrr(component, "category-name");
    expect(name.text()).toBe(props.category.name);
  });
});
