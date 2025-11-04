import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";


@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {
  received_name :string='';
  user={name:'Fabian', age:30}

  onReceivedName(name:string) {
    this.received_name = name;
    console.log(`Recibido en el padre: ${this.received_name}`);

  }
}
