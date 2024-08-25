let shopingCart = [
  { courseName: "JavaScript", price: 999 },
  { courseName: "Python", price: 1099 },
  { courseName: "Web Development", price: 3999 },
  { courseName: "Data Science", price: 1299 },
];

let amountToPay = shopingCart.reduce(function (acc, item) {
  console.log(`acc: ${acc} and item: ${item.price}`);
  return acc + item.price;
}, 0);
console.log(`Amount to pay: ${amountToPay}`);
