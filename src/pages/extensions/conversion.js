const ChangeProductDollar = (details) => {
  if (details.averagePrice) {
    return { ...details, priceOne: details.priceOne / 1000, priceTwo: details.priceTwo / 1000, averagePrice: details.averagePrice / 1000 };
  } else {
    return { ...details, productPrice: details.productPrice / 1000 }
  }
}

const ChangeProductNaira = (details) => {
  if (details.averagePrice) {
    return { ...details, priceOne: details.priceOne * 1000, priceTwo: details.priceTwo * 1000, averagePrice: details.averagePrice * 1000 };
  } else {
    return { ...details, productPrice: details.productPrice * 1000 }
  }
}

export {ChangeProductDollar, ChangeProductNaira};