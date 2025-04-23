//decorator
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "Nueva propiedad";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "ABCD";
  print() {
    console.log("Hello World");
  }
}

console.log(SuperClass);

///imprimo la instancia
const myClass = new SuperClass();
console.log(myClass);
