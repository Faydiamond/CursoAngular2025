import {Product,taxCalculation} from './06-function-destructuring'

//funcionalidades encapsuladas, se transforman en modulos  lo que se exporta se expone al mundo exterior

const shoppingCart : Product[]=[
    {
        description:'sadfsgd',
        price:5
    },
    {
        description:'a1',
        price:5
    },
]


console.log(shoppingCart);
const tax:number = 0.15;
const [total,totalTax] = taxCalculation({
    products:shoppingCart,tax
})

console.log('Total ', total);

console.log('Tax ',totalTax);
