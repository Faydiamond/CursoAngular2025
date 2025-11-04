interface Details{
   author:string ;
   year: number;
}

interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details
}

const audioPlayer:AudioPlayer ={
    audioVolume: 80,
    songDuration: 35,
    song: "Mess",
    details: {
        author:"Ed Sheran",
        year:2017
    }
}

const {audioVolume,songDuration,song:anotherSong , details : {author,year:yearSong}} =audioPlayer;

console.log(`The song is: ${anotherSong} -${yearSong} `);


//arreglos

const [,,trunks ='Not found' ]:string[] = ['Goku','Vegeta','Trunks']

console.error( "Personaje 3: " ,trunks  )

export {}