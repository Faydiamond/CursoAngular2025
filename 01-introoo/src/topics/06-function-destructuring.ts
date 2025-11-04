 interface Product {
    description:string,
    price:number
}

const phone:Product = {
    description: "Iphone 16",
    price: 1000000
}

const tablet:Product = {
    description: "Ipad Air",
    price: 2000000,
}


const shoppingCart = [tablet,phone]
const tax = 0.15;


interface TaxCalOptions {
    tax:number;
    products : Product[]
}

function taxCalculation ({tax,products}:TaxCalOptions):  [number,number] {
    let total = 0;
    products.forEach  ( producto => {
        total+= producto.price
    } ); 
    return [total, total * tax]
}

const [total,totalTax] = taxCalculation({
    products:shoppingCart,tax
})

console.log('Total ', total);

console.log('Tax ',totalTax);

export { Product, taxCalculation }