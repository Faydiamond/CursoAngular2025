import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  user ={
    name: 'Fabian',
    age : 31
  };

  recieve_notification (msg:string){
    alert(`Me lledo el mensaje y el mensaje es: ${msg}`)
  }
}
