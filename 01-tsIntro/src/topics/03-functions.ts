function addNumbers(n1: number, n2: number): number {
  //obligatorios
  return n1 + n2;
}

const resolve: string = addNumbers(5, 15).toString();
console.log(resolve);

const addNumbersArrow = (n1: number, n2: number): string => {
  return `${n1 + n2}`;
};

const result = addNumbersArrow(50, 50);
console.log(result);

function multiply(n1: number, n2?: number, base: number = 2): number {
  return n1 * base;
}

const result2: number = multiply(4);
console.table(result2);

interface Character {
  name: string;
  showHp: () => void;
  hp: number;
}

const healtCare = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 68,
  showHp() {
    console.log(`puntos de vida ${this.hp}`);
  },
};

healtCare(strider, 12);

strider.showHp();

export {};
