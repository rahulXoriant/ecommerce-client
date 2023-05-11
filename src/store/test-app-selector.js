const state = {
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

export const testUserAppSelector = fnc => fnc(state);
