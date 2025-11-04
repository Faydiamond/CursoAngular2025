import { ChangeDetectionStrategy, Component,input } from '@angular/core';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifItemComponent {
  imageUrl = input.required<string>()   //signal
 }
