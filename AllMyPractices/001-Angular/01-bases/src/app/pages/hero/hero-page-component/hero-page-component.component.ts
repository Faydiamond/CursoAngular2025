import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page-component',
  imports: [],
  templateUrl: './hero-page-component.component.html',
  styleUrl: './hero-page-component.component.css',
})
export class HeroPageComponentComponent {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }
  capitalizedName = computed(() => {
    return `${this.name().toUpperCase()}`;
  });

  changeHero() {
    this.name.update((value) => 'Spiderman');
  }
  changeAge() {
    this.age.update((value) => 22);
  }
  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
