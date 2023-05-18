import { shallow } from "enzyme";

import Loader from "../../../components/Common/Loader";
import { findByTestAtrr } from "../../../utils/testUtils";

jest.mock("../../../store/redux-hooks");

const setUp = () => {
  const component = shallow(<Loader />);
  return component;
};

describe("Loader Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "loader");
    expect(wrapper.length).toBe(1);
  });
});
