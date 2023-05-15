import { formatPrice } from "../../utils/format";

export const allCategory = [
  {
    id: 1,
    name: "TestCategory1",
    slug: "test-category-1",
  },
  {
    id: 2,
    name: "TestCategory2",
    slug: "test-category-2",
  },
];

export const allProducts = [
  {
    id: 1,
    title: "Test Name 1",
    price: 1000,
    category: "test-category-1",
    isCashOnDeliveryAvailable: true,
    image: "https://via.placeholder.com/300/0000FF/808080%20?Text=PAKAINFO.com",
  },
  {
    id: 2,
    title: "Test Name 2",
    price: 1500,
    category: "test-category-1",
    isCashOnDeliveryAvailable: false,
    image: "https://via.placeholder.com/300/0000FF/808080%20?Text=PAKAINFO.com",
  },
  {
    id: 3,
    title: "Test Name 3",
    price: 900,
    category: "test-category-2",
    isCashOnDeliveryAvailable: true,
    image: "https://via.placeholder.com/300/0000FF/808080%20?Text=PAKAINFO.com",
  },
];

export const allProductsWithFormattedPrice = allProducts.map(product => ({
  ...product,
  priceFormatted: formatPrice(product.price),
}));

export const productAmount = {
  1: 5,
  2: 3,
  3: 6,
};

export const product = {
  ...allProducts[0],
  priceFormatted: formatPrice(allProducts[0].price),
};

export const filtersWithoutSearch = {
  isSearchEnabled: false,
  filters: {
    isCashOnDeliveryAvailable: false,
  },
  handleSetFilter: jest.fn,
};

export const filtersWithSearch = {
  isSearchEnabled: true,
  filters: {
    isCashOnDeliveryAvailable: false,
    q: "abc",
    qFields: "title,category",
  },
  handleSetFilter: jest.fn,
};

export const cartProducts = [
  {
    ...product,
    amount: 2,
    subtotal: formatPrice(2 * product.price),
  },
];

export const initialState = {
  cart: [cartProducts],
  category: {
    value: allCategory,
    loading: false,
  },
  product: {
    value: allProducts,
    loading: false,
  },
};
