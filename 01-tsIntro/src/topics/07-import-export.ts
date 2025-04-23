import { Product, taxCalculator } from "./06-function-destructuring";

const shopCart: Product[] = [
  {
    description: "Iphone 8",
    price: 3500000,
  },
  {
    description: "Iphone Se 2",
    price: 2500000,
  },
];

const [total, tax] = taxCalculator({ products: shopCart, tax: 0.15 });
console.log("total", total);
console.log("tax", tax);
