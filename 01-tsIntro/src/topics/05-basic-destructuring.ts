interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 5,
  songDuration: 4,
  song: "Caminante no hay camino",
  details: {
    author: "Maxxi Trusso",
    year: 1980,
  },
};

const { song, details } = audioPlayer;
const { author, year } = details;

console.log(`sond ${song} , detalles ${author} - ${year}`);

const [, , goten = "Not Found"]: string[] = ["Goku", "Gohan"];

console.error("personaje ", goten || "Personaje no existe");

export {};
