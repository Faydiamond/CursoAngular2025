import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragolball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragolball/character-add/character-add.component';
import { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
