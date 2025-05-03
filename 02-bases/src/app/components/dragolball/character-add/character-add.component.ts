import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();
  addCharacter() {
    console.log('Aqii');
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    if (this.name().length >= 3) {
      /*
      console.log(
        `el nombre ingresado es: ${this.name()}, el poder ingresado es: ${this.power()}`
      );*/

      const newCharacter: Character = {
        id: Math.floor(Math.random() * 5555),
        name: this.name(),
        power: this.power(),
      };
      console.log(newCharacter);
      this.newCharacter.emit(newCharacter);
      this.name.set('');
      this.power.set(0);
      //this.chracters.update((list) => [...list, newCharacter]);
    }
  }
}
