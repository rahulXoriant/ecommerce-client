import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
configure({ adapter: new Adapter() });

import Header from "../../../components/Common/Header";
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
    const initialState = {
      cart: [
        {
          id: 2,
          title: "Puma Men Grey Dynamite Slip-On Sneakers",
          price: 2249,
          category: "sneakers",
          isCashOnDeliveryAvailable: true,
          image:
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19150424/2022/11/6/2e665785-7fd5-43aa-9036-96bb2e55d0ea1667717814913PumaMenGreyDynamiteSlip-OnSneakers1.jpg",
          amount: 1,
          priceFormatted: "₹2,249.00",
        },
      ],
      category: {
        value: [
          {
            id: 1,
            name: "Sneakers",
            slug: "sneakers",
          },
          {
            id: 2,
            name: "Boots",
            slug: "boots",
          },
          {
            id: 3,
            name: "Sliders",
            slug: "sliders",
          },
          {
            id: 4,
            name: "Heels",
            slug: "heels",
          },
          {
            id: 5,
            name: "Formal Shoes",
            slug: "formal-shoes",
          },
          {
            id: 6,
            name: "Hiking Shoes",
            slug: "hiking-shoes",
          },
        ],
        loading: false,
      },
      product: {
        value: null,
        loading: true,
      },
    };
    component = setUp({
      initialState,
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
