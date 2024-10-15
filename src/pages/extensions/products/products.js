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
      {id: 0, cartColor: "Olive green" },
      {id: 1, cartSize: "L" },
    ],
    cartAmt: 1,
    wishlistDate: "August 20, 2024",
    wishlistStock: "In stock, ready to be shippped"
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
      {id: 0, cartSize: "L" },
    ],
    cartAmt: 1,
    wishlistDate: "May 31, 2024",
    wishlistStock: "In stock, ready to be shippped"
  },
  {
    id: 2,
    productImage: product_three,
    productName: "karatima outwear",
    productPrice: 85,
    productAvailable: "SOLD OUT",
    productAvailableColor: "#C2272D",
    productDetails: [
      {id: 0, cartColor: "Olive green" },
    ],
    cartAmt: 1,
    wishlistDate: "August 24, 2024",
    wishlistStock: "In stock, ready to be shippped"
  },
  {
    id: 3,
    productImage: product_four,
    productName: "white dressed pants",
    productPrice: 85,
    productAvailable: "NEW IN",
    productAvailableColor: "#00A849",
    cartAmt: 1,
    wishlistDate: "June 19, 2024",
    wishlistStock: "In stock, ready to be shippped"
  },
  {
    id: 4,
    productImage: product_five,
    productName: "lime punch outerwear",
    priceOne: 109,
    priceTwo: 129,
    averagePrice: 121,
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    productDetails: [
      {id: 0, cartColor: "Navy blue" },
      {id: 1, cartSize: "XL" },
    ],
    cartAmt: 1,
    wishlistDate: "September 9, 2024",
    wishlistStock: "In stock, ready to be shippped"
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
      {id: 0, cartColor: "Army green" },
      {id: 1, cartSize: "XXL" },
    ],
    cartAmt: 1,
    wishlistDate: "February 14, 2024",
    wishlistStock: "In stock, ready to be shippped"
  },
  {
    id: 6,
    productImage: product_seven,
    productName: "lime punch outerwear",
    priceOne: 109,
    priceTwo: 129,
    averagePrice: 117,
    productAvailable: "BACK IN STORE",
    productAvailableColor: "#AECA2E",
    cartAmt: 1,
    wishlistDate: "April 1, 2024",
    wishlistStock: "In stock, ready to be shippped"
  },
  {
    id: 7,
    productImage: product_eight,
    productName: "cocoon davni dress",
    productPrice: 85,
    productAvailable: "HOT",
    productAvailableColor: "#FF421D",
    productDetails: [
      {id: 0, cartColor: "Moon black" },
      {id: 0, cartSize: "L" },
    ],
    cartAmt: 1,
    wishlistDate: "December 29, 2024",
    wishlistStock: "In stock, ready to be shippped"
  }
] 