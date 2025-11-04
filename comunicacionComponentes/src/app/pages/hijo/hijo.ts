import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  @Input() userData!: {name:string, age:number};
  @Output() send_name = new EventEmitter<string>();
  ngOnInit(){
    if (!this.userData) console.log(`No existe data en el objeto > ${this.userData}`);

  }

  onClickName(name:string) {
    console.info({name});
    this.send_name.emit(name)
  }
}
