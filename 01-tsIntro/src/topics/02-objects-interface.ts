const skils: string[] = ["Bash", "Counter"];

interface Character {
  name: string;
  skills: string[];
  hp: number;
  homeTown?: string;
}

const strider: Character = {
  name: "Strader",

  skills: ["Bash", "Counter"],
  hp: 500,
};

strider.homeTown = "Riverdell";
console.table(strider);

export {};
