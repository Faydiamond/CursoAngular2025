import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gifs.ts';
import { GiftList } from '../../components/gift-list/gift-list.js';

@Component({
  selector: 'app-trending-page',
  imports: [GiftList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPage {
  gifService = inject(GifService)

}
