import { isEmpty } from "lodash";

export const formatPrice = num => {
  if (isNaN(num)) num = 0;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(num);
};

export const jsonToQueryString = json => {
  if (isEmpty(json)) return "";
  return Object.keys(json)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
    })
    .join("&");
};
