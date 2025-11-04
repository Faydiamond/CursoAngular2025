import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { environment } from '../../../environments/environment';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
private http = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = true;
  searchHistory= signal<Record<string,Gif[]>>({})
  searchHistoryKeys=computed(()=> Object.keys(this.searchHistory()) );

  constructor  () {
    this.loadTrendinfGifs();
    //this.loadTrendinfGifsSearch('trunks');
    //console.log("Prueba esto>> " ,`${environment.giphyUrl}/gifs/search?api_key=${environment.giphApiKey}&q=trunks` );
  }

  loadTrendinfGifs () {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}gifs/trending`,{
      params:{
        api_key: environment.giphApiKey,
        limit:10
      }
    }).subscribe( (response) => {
      //console.log({response});
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading = false;
      console.log({gifs});
    })
  }

  loadTrendinfGifsSearch (query:string) {
    let endpoint =`${environment.giphyUrl}gifs/search?api_key=${environment.giphApiKey}&q=${query}`
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

}
