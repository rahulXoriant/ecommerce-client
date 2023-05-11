import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

import CategoryCard from "../../../components/Cards/CategoryCard";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <CategoryCard range={componentProps.range} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Shallow CategoryCard", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      category: {
        id: 1,
        name: "Test Name",
        slug: "test-slug",
      },
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "category-card");
    expect(wrapper.length).toBe(1);
  });

  it("Should render category image", () => {
    const image = findByTestAtrr(component, "category-image");
    expect(image.length).toBe(1);
  });
});
