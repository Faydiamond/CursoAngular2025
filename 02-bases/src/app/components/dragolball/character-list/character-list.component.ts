import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface'; //importo interfce
@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  chracters = input.required<Character[]>(); //obligatoria
  listName = input.required();
}
