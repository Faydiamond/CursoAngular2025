import { ChangeDetectionStrategy, Component,input } from '@angular/core';
import { GifItemComponent } from "./gif-item/gif-item.component";
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gif.interface';
@Component({
  selector: 'gift-list',
  imports: [GifItemComponent],
  templateUrl: './gift-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftListComponent {
  gifs = input.required<Gif[]>();



}
