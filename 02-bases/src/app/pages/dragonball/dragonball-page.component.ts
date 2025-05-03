import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragolball/character-list/character-list.component';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballComponent {
  // chracters: Character[]
  /*
  chracters: Character[] = [
    {
      id: 1,
      name: 'Goku',
      power: 'Kameha hame ha',
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 'Resplandor Final',
    },
    {
      id: 3,
      name: 'Goten',
      power: 'Kameha hame ha',
    },
    {
      id: 4,
      name: 'Trunks',
      power: 'Kameha hame ha',
    },
  ];*/

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  chracters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8000,
    },
    {
      id: 3,
      name: 'Goten',
    },
    {
      id: 4,
      name: 'Trunks',
      power: 4000,
    },
    {
      id: 5,
      name: 'Yamcha',
      power: 400,
    },
  ]);
  name = signal('Pikolo');
  power = signal(100);
  addCharacter() {
    console.log('Aqii');
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    if (this.name().length >= 3) {
      console.log(
        `el nombre ingresado es: ${this.name()}, el poder ingresado es: ${this.power()}`
      );
      const newCharacter: Character = {
        id: this.chracters.length + 1,
        name: this.name(),
        power: this.power(),
      };

      this.chracters.update((list) => [...list, newCharacter]);
    }
  }
}
interface Character {
  id: number;
  name: string;
  power?: number | undefined | null;
}
