import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  //selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroPAgeComponent {
  name = signal('Ironman');
  age = signal(45)

  heroDesc = computed( ()=> `${this.name()} - ${this.age()}` )
  capitalizedName= computed (()=> this.name().toUpperCase()  );

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22)
  }

  resetForm(){
    this.age.set(45);
    this.name.set('Ironman ');
  }



}
