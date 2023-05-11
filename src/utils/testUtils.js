import checkPropTypes from "check-prop-types";
import configureStore from "redux-mock-store";

// import { middleware } from "../store";
// import rootReducer from "../store/modules/reducer/root.reducer";

export const checkTestCase = (caseNo, fnc, input, expectedOutput) => {
  it(`Test Case ${caseNo}`, () => {
    expect(fnc(input)).toBe(expectedOutput);
  });
};

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, "props", component.name);
  return propsErr;
};

export const testStore = initialState => {
  const mockStore = configureStore();
  return mockStore(initialState);
};
