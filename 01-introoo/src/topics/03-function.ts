import    '../interfaces/character.interface'




/*
function addNumber (a:number,b:number) : number {
    return a+b;
}

const addNumberArrow =(a:number,b:number) :string =>{
    return `${a+b}`;
}


function multiply ( firstNumber:number, secondNumberbase?:number,base :number=4) {
    return firstNumber*base;
}


const result : number = addNumber(5,12)
const result2 : string = addNumberArrow(5,12)
const multiplyResult = multiply(5,5)


console.log({result});
console.log({result2});
console.log({multiplyResult});
*/



/*
const healCharacter = ( character,amount ) =>{

}
*/

 interface Character {
    name:string;
    hp:number;
    showHp?:()=>void
}

const healCharacter = ( character:Character, amount:number )=>{
    character.hp+=amount;
 }

 const thor : Character = {
    name:'Thor',
    hp:59,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
        
    }
 }

 const reslult = healCharacter( thor,21 )

console.log(thor);
//console.log( {thor}  );

export {}