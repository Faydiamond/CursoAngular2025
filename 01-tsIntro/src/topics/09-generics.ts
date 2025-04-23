export function whatsMyType<T>(argument: T): T {
  return argument;
}

const whoIam = whatsMyType<string>("I am Fabian");
const nums = whatsMyType<number>(25);
const fruits = whatsMyType<string[]>(["appple", "pine apple"]); // ["appple", "pine apple"];

console.log(whoIam.split(" "));
console.log(nums);
console.log(fruits.join("-"));
