//decorador es como una funcion

function classDecorator <T extends { new (...args:any[]): {} }>(constructor:any) {
     return class extends constructor {
        newProperty = "New Property";
        hello = 'override';
     }
}

@classDecorator
export class SuperClass {
    public myProperty :string  = 'Abc612';

    print(){
        console.log("jola mundo");
        
    }
}

const sC = new SuperClass()
//sC.print();
//console.log(SuperClass);
