import { Component, input } from '@angular/core';


@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.html',
  styleUrl: './gif-item.css'
})
export class GifItem {
    imageUrl = input.required<string>()   //signal
}
