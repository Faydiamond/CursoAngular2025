import { Component, input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import { GifItem } from './gif-item/gif-item';

@Component({
  selector: 'gift-list',
  imports: [GifItem],
  templateUrl: './gift-list.html',
  styleUrl: './gift-list.css'
})
export class GiftList {
  gifs = input.required<Gif[]>();
}
