import product_one from "./productImages/design_one.jpeg";
import product_two from "./productImages/design_two.jpeg";
import product_three from "./productImages/design_three.jpeg";
import product_four from "./productImages/design_four.jpeg";
import product_five from "./productImages/design_five.jpeg";
import product_six from "./productImages/design_six.jpeg";
import product_seven from "./productImages/design_seven.jpeg";
import product_eight from "./productImages/design_eight.jpeg";

export const productDetails = [
  {
    id: 0,
    productImage: product_one,
    productName: "sunflower jumpsuit",
    productPrice: 85,
    productDetails: [
      { cartColor: "Olive green" },
      { cartSize: "L" },
    ],
    cartAmt: 1
  },
  {
    id: 1,
    productImage: product_two,
    productName: "dust lightweight jacket",
    productPrice: 85,
    productAvailable: "50% OFF",
    productAvailableColor: "#FF421D",
    cutOff: 50,
    productDetails: [
      { cartSize: "L" },
    ],
    cartAmt: 1
  },
  {
    id: 2,
    productImage: product_three,
    productName: "karatima outwear",
    productPrice: 85,
    productAvailable: "SOLD OUT",
    productAvailableColor: "#C2272D",
    productDetails: [
      { cartColor: "Olive green" },
    ],
    cartAmt: 1
  },
  {
    id: 3,
    productImage: product_four,
    productName: "white dressed pants",
    productPrice: 85,
    productAvailable: "NEW IN",
    productAvailableColor: "#00A849",
    cartAmt: 1
  },
  {
    id: 4,
    productImage: product_five,
    productName: "lime punch outerwear",
    productPrice: "109.00   -   $129.00",
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    productDetails: [
      { cartColor: "Navy blue" },
      { cartSize: "XL" },
    ],
    cartAmt: 3,
    cartPrice: 121
  },
  {
    id: 5,
    productImage: product_six,
    productName: "dust lightweight jacket",
    productPrice: 85,
    doubleProductAvail: "NEW IN",
    doubleAvailColor: "green",
    productAvailable: "50% OFF",
    productAvailableColor: "red",
    cutOff: 50,
    productDetails: [
      { cartColor: "Army green" },
      { cartSize: "XXL" },
    ],
    cartAmt: 1
  },
  {
    id: 6,
    productImage: product_seven,
    productName: "lime punch outerwear",
    productPrice: "109.00   -   $129.00",
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    cartAmt: 5,
    cartPrice: 117
  },
  {
    id: 7,
    productImage: product_eight,
    productName: "cocoon davni dress",
    productPrice: 85,
    productAvailable: "HOT",
    productAvailableColor: "#FF421D",
    productDetails: [
      { cartColor: "Moon black" },
      { cartSize: "L" },
    ],
    cartAmt: 3
  }
] 