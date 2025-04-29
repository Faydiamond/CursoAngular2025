import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
CommonModule;
@Component({
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    //es una senal de string
    return `${this.name()} - ${this.age()}`;
  });

  capitalizedName = computed(() => {
    ///computed es solo lectura
    //cuando cambie el name o el age se va a computar
    return `${this.name().toLocaleUpperCase()}`;
  });

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman'); ///no depende del a terior
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman'); ///no depende del a terior
    this.age.set(45);
  }

  chageAge() {
    this.age.update((value) => 60);
  }
}
