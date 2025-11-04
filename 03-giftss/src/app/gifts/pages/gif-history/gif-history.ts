import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable } from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gifs';
import { GiftListComponent } from '../../components/gift-list/gift-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [GiftListComponent],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css'
})
export default class GifHistory {

  gifService = inject (GifService)
  //observable a signal
  query = toSignal( inject(ActivatedRoute).params.pipe(
    map((params)=>params['query']  )
  ));


  gifsByKey = computed ( ()=>{
    return this.gifService.getHistoryGifs(this.query())
  });

  //.subscribe( (params)=>{ console.log(params['query']);});
}

