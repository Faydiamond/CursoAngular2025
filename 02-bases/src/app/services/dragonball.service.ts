import { computed, effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  dbzLoadCharacters = (): Character[] => {
    const characters = localStorage.getItem('dbzCharacters');
    return characters ? JSON.parse(characters) : [];
  };

  chracters = signal<Character[]>(this.dbzLoadCharacters());

  newCharacter(Character: Character) {
    this.chracters.update((list) => [...list, Character]);
  }

  saveToLocalStorage = effect(() => {
    console.log(`Hay ${this.chracters().length} personajes`);
    localStorage.setItem('dbzCharacters', JSON.stringify(this.chracters()));
  });
}

//dependency injection singleton
