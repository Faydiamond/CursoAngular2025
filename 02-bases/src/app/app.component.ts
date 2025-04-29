import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'uno';
  programadorUno: Person = {
    name: 'Fabian',
    age: 30,
  };
}

interface Person {
  name: string;
  age: number;
}
