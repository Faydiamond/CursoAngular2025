import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  //template : ``,
  templateUrl:'./counter-page.component.html',
  styleUrl: './counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush //no zonejs  mejora producttividad
})
export class CounterPAgeComponent {
  counterNumber:number=10;
  counterSignal = signal(10)

  constructor() {
    setInterval( ()=>{
      //this.counterNumber += 1;
      this.counterSignal.update( (current)=> current+1 )
      console.log( this.counterNumber, ' Tick');

    },2000 )
  }

  decrementcounterNumber(value:number){
     this.counterNumber-=5;
     this.counterSignal.update( (currecntValue) => currecntValue-value )
  }

  incrementcounterNumber(value:number){
     this.counterNumber+=value;
     this.counterSignal.update( (currecntValue) => currecntValue+value )
  }

  resetcounterNumber() {
     this.counterNumber = 0;
     this.counterSignal.set(0)
  }
}
