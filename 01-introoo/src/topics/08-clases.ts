
//molde para crear instancias
export class Person {
    //public name?:string;
    //public adress:string;

    constructor(public name:string,public address:string) {
        //this.name="Daniel";
        //this.adress ="Barrio 12";
    }
}

export class  Hero extends Person {
    
    constructor(public alterEgo : string,
        public age:number,
        public realName:string, public person:Person) {
        //construcctor del padre
        super(realName,'Nyc')
        
    }
}

const person = new Person('Iron man', 'Nyc')

const ironman = new Hero('Iron man',50,'Tony',person)

/*
ironman.name ='Ironam';
ironman.adress = 'Nyc';
*/
console.log(ironman);
