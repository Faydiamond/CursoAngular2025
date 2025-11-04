

export interface Passenger {
    name:string;
    children?: string[];

}


const passenger1: Passenger = {
    name :'Daniela'
}


const passenger2: Passenger = {
    name :'Yulieth',
    children:['Juanita']
}

const printChildren = (passenger:Passenger) =>{
    const howManyChildrens  = passenger.children?.length || 0;
    console.log(howManyChildrens);
    
}

printChildren(passenger1);
printChildren(passenger2);