import { shallow } from "enzyme";
import { Provider } from "react-redux";

import Header from "../../../components/Common/Header";
import { useAppSelector } from "../../../store/redux-hooks";
import { testUserAppSelector } from "../../../store/test-app-selector";
import { findByTestAtrr, testStore } from "../../../utils/testUtils";
import { initialState } from "../../constants";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const { initialState, ...componentProps } = props;
  useAppSelector.mockImplementation(testUserAppSelector);
  const store = testStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <Header range={componentProps.range} />
    </Provider>,
  )
    .childAt(0)
    .dive();
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      initialState: initialState,
      range: "desktop",
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "header-container");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "company-logo");
    expect(logo.length).toBe(1);
  });
});
