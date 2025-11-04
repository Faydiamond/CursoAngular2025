import { Component, inject, signal } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifService } from '../../services/gifs.ts';
import { GiftList } from '../../components/gift-list/gift-list';

@Component({
  selector: 'app-search-page',
  imports: [GiftList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export default class SearchPage {

   gifService = inject(GifService);
  gifs = signal<Gif[]>([])

  onSearch(search:string){
    console.log(`a buscar: ${search}`);
      this.gifService.loadTrendinfGifsSearch(search)
    .subscribe( (response) =>{
      console.log( "serach responde :: " ,response)
      this.gifs.set(response)
    })
  }
}
