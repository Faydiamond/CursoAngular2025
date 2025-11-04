import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse} from '../interfaces/giphy.interfaces'
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const GIF_KEY ='gifs';

const loadFromLocalStorage = ()=>{
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';//record<string,gifs[]>
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return gifs;
}

@Injectable({
  providedIn: 'root'
})
//toda la logica va en el servicio
export class GifService {
  private http = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);


  searchHistory= signal<Record<string,Gif[]>>(loadFromLocalStorage())
  searchHistoryKeys=computed(()=> Object.keys(this.searchHistory()) );

  constructor  () {
    this.loadTrendinfGifs();
    //this.loadTrendinfGifsSearch('trunks');
    //console.log("Prueba esto>> " ,`${environment.giphyUrl}/gifs/search?api_key=${environment.giphApiKey}&q=trunks` );
  }

  loadTrendinfGifs () {
    if (this.trendingGifsLoading() ) return;
    this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params:{
        api_key: environment.giphApiKey,
        limit:20,
        offset:this.trendingPage()*20
      }
    }).subscribe( (response) => {
      //console.log({response});
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.update(currentGifs=> [...currentGifs,...gifs]);
       this.trendingPage.update(currenttrendingPage=>currenttrendingPage+1   );
      this.trendingGifsLoading.set(false);
      //console.log({gifs});
    })
  }

  loadTrendinfGifsSearch (query:string) : Observable<Gif[]>{
    let endpoint =`${environment.giphyUrl}/gifs/search?api_key=${environment.giphApiKey}&q=${query}`
   console.log("Endpoint>> " ,endpoint);

    return this.http.get<GiphyResponse>(endpoint,{
      params:{
        //api_key: environment.giphApiKey,
        limit:25
      }
    }).pipe(
      //encadenar observadores
      map( ({data})=>data ),   ///dessestructuro data
      map( (items)=>GifMapper.mapGiphyItemsToGifArray(items) ),

      //historial
      tap( items=>{
        this.searchHistory.update( history=> ({
          ...history,
          [query.toLocaleLowerCase() ]:items,
        }))
      })
    );

    /*.subscribe( (response) => {
      //console.log({response});

      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      console.log("response search" ,{gifs});
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading = false;

    })*/
  }


  getHistoryGifs(query:string):Gif[]{
    return this.searchHistory()[query] ?? [];
  }

  saveGifsToLocalStorage = effect (()=>{
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY,historyString);
  })


  trendingGroupGif = computed<Gif[][] | null>(() => {


    if (!this.trendingGifs() || this.trendingGifs().length === 0) {
      console.log("es nulo");
      return null; // 🔥 si está vacío devuelve null
    }

    const groups: Gif[][] = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      console.log("paso por aqui");

      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    console.log("Groups: ", groups);

    return groups;
  });


}
