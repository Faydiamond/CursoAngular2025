export interface Product {
  description: string;
  price: number;
}
/*
const laptop: Product = {
  description: "Msi Brabo 15 B7E",
  price: 3585000.99,
};

const server: Product = {
  description: "Servidor ubuntu",
  price: 5850000.99,
};
*/
export interface TaxCalculationOptions {
  products: Product[];
  tax: number;
}

export function taxCalculator({
  products,
  tax,
}: TaxCalculationOptions): [number, number] {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}
/*
const shopCart: Product[] = [laptop, server];
const tax = 0.2;

const [total, taxApply] = taxCalculator({ products: shopCart, tax });

console.log("LA tenes adentro");

console.log("Total ", total, "Total con impuesto: ", taxApply);
*/
