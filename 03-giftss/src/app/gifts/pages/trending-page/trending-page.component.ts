import { ChangeDetectionStrategy, Component,signal,inject, computed, viewChild, ElementRef, AfterViewInit }
from '@angular/core';
import { GiftListComponent } from "../../components/gift-list/gift-list.component";
import { CommonModule } from '@angular/common';
import { GifService } from '../../services/gifs';
import { ScrollStateService } from 'src/app/shared/scroll-state.service';



@Component({
  selector: 'app-trending-page',
  imports: [], //GiftListComponent
  templateUrl: './trending-page.component.html',

})




export default class TrendingPageComponent implements AfterViewInit{
  //gifs = signal(imageUrls);

  gifService = inject(GifService)
  scrollState = inject(ScrollStateService)

  gifs = computed( ()=> this.gifService.trendingGifs() )

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');


  ngAfterViewInit():void{
      const scrollDiv = this.scrollDivRef()?.nativeElement;
      if (!scrollDiv) return;
      scrollDiv.scrollTop =this.scrollState.trendingScrollState();
  }

  onScroll(event:Event){
    //console.log("Evento ", event);
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    //console.log(scrollDiv);
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const ClientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    debugger;

    console.log({  scrolTotal: scrollTop+ClientHeight,scrollHeight});
    const isABottom = scrollTop + ClientHeight + 300>= scrollHeight;

    //console.log(isABottom);
    this.scrollState.trendingScrollState.set(scrollTop);
    if ( isABottom ) {
      this.gifService.loadTrendinfGifs()
    }
  }

 }
