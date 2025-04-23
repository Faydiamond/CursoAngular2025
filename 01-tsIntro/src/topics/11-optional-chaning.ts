export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Daniel Melero",
};

const passenger2: Passenger = {
  name: "Daniel Esteban",
  children: ["Julieta", "Ana"],
};

const printChildren = (passenger: Passenger) => {
  //let howManyChildren =passenger?.children?.length === undefined ? 0 : passenger.children.length;
  const howManyChildren = passenger?.children?.length || 0;
  console.log(` ${passenger.name} tiene  ${howManyChildren} hijos.`);
};

const printChildrenCero = (passenger: Passenger): number => {
  //let howManyChildren =passenger?.children?.length === undefined ? 0 : passenger.children.length;
  if (!passenger.children) return 0;
  const howManyChildren = passenger?.children?.length || 0;
  console.log(` ${passenger.name} tiene  ${howManyChildren} hijos.`);
  return howManyChildren;
};

printChildren(passenger1);
printChildren(passenger2);

printChildrenCero(passenger1);
printChildrenCero(passenger2);
