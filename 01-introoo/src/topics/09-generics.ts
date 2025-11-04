

export function whatsMyType<T>(argument:T) :T {
    return argument;
}

let amIString = whatsMyType<string>("Hello World");
let amINumber = whatsMyType<number>(50);
let amIArray = whatsMyType<number[]>  ([4,5,1]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));