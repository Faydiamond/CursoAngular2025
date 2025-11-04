import { Component, inject, signal } from '@angular/core';
import { Counter } from '../services/counter';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  counter=inject(Counter);


}
