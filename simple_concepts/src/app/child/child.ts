import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() recived_user!:{name:string,age:number};
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(){
    if (!this.recived_user){

      console.log("No se ha recibido Usuario. " );

    }
    //debugger;
    console.log("Usuario recibido " , this.recived_user);
  }

  sendNotification() {
      const message = "Hey , I sent you a message";
      this.notifyParent.emit(message)
  }


}
