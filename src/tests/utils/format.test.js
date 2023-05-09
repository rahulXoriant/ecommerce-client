import { formatPrice, jsonToQueryString } from "../../utils/format";

describe("Testing Utils", () => {
  describe("Formats", () => {
    describe("formatPrice", () => {
      const testCases = [
        {
          input: 0,
          expectedValue: "₹0.00"
        },
        {
          input: 1000,
          expectedValue: "₹1,000.00"
        },
        {
          input: 2781541202,
          expectedValue: "₹2,78,15,41,202.00"
        },
        {
          input: -2781541202,
          expectedValue: "-₹2,78,15,41,202.00"
        },
        {
          input: null,
          expectedValue: "₹0.00"
        },
        {
          input: undefined,
          expectedValue: "₹0.00"
        },
        {
          input: "abc",
          expectedValue: "₹0.00"
        },
        {
          input: "1000",
          expectedValue: "₹1,000.00"
        }
      ];
      testCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}`, () => {
          expect(formatPrice(testCase.input)).toBe(testCase.expectedValue);
        });
      });
    });
    describe("jsonToQueryStrings", () => {
      const testCases = [
        {
          input: {},
          expectedValue: ""
        },
        {
          input: { category: "sneakers" },
          expectedValue: "category=sneakers"
        },
        {
          input: { q: "adidas", qFields: "title,category", isCashOnDeliveryAvailable: true },
          expectedValue: "q=adidas&qFields=title%2Ccategory&isCashOnDeliveryAvailable=true"
        },
        {
          input: null,
          expectedValue: ""
        },
        {
          input: undefined,
          expectedValue: ""
        }
      ];
      testCases.forEach((testCase, index) => {
        it(`Test Case ${index + 1}`, () => {
          expect(jsonToQueryString(testCase.input)).toBe(testCase.expectedValue);
        });
      });
    });
  });
});
