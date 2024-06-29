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
    productPrice: "85.00",
    productDetails: [
      { cartSize: "L" },
      { cartColor: "Olive green" },
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
      { cartSize: "XL" },
      { cartColor: "Navy blue" }
    ],
    cartAmt: 3
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
      { cartSize: "XXL" },
      { cartColor: "Army green" },
    ],
    cartAmt: 1
  },
  {
    id: 7,
    productImage: product_seven,
    productName: "lime punch outerwear",
    productPrice: "109.00   -   $129.00",
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    cartAmt: 5
  },
  {
    id: 6,
    productImage: product_eight,
    productName: "cocoon davni dress",
    productPrice: 85,
    productAvailable: "HOT",
    productAvailableColor: "#FF421D",
    productDetails: [
      { cartSize: "L" },
      { cartColor: "Moon black" }
    ],
    cartAmt: 3
  }
] 