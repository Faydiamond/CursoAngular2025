import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  title: string = 'Pagina no encontrada';
}
