import { shallow } from "enzyme";

import Burger from "../../../components/Common/Burger";
import { findByTestAtrr } from "../../../utils/testUtils";

jest.mock("../../../store/redux-hooks");

const setUp = (props = {}) => {
  const component = shallow(<Burger open={props.open} handleOpen={props.handleOpen} />);
  return component;
};

describe("Burger Component", () => {
  let component;
  beforeEach(() => {
    component = setUp({
      open: false,
      handleOpen: jest.fn,
    });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "burger");
    expect(wrapper.length).toBe(1);
  });

  it("Should show 3 lines", () => {
    const wrapper = findByTestAtrr(component, "burger");
    expect(wrapper.length).toBe(1);
    expect(wrapper.find("div").length).toBe(3);
  });
});
