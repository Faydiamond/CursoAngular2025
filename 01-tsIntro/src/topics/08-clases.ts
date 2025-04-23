export class Person {
  //public name: string;
  //private adress: string;

  constructor(public name: string, private adress: string = "No Adress") {
    //this.name = name;
    //this.adress = adress;
  }
}

export class Hero {
  // public person: Person; redundancia
  constructor(
    public aletEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const odin = new Person("Odin ", "Olimpo");
//const ironMan = new Hero("Iron Man", 40, "Tony"); //envie esto en orden primero el constructor de esta clase y despues el del padre

//danielMelero.adress = "Buenos aires";

const thor = new Hero("Thor", 40, "Thor Odin", odin);

console.log(thor);
