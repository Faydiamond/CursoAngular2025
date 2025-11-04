import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';
import { GifService } from '../../services/gifs';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',

})
export default class SearchPageComponent {
  //gifs:any ;
  gifService = inject(GifService);
  gifs = signal<Gif[]>([])

  onSearch(query:string) {
    console.log({query});
    //this.gifs = computed( ()=> this.gifService.loadTrendinfGifsSearch(query) )
    this.gifService.loadTrendinfGifsSearch(query)
    .subscribe( (response) =>{
      //console.log( "serach responde :: " ,response)
      this.gifs.set(response)
    })
    //console.log(" gifs ", this.gifs);
  }
}
