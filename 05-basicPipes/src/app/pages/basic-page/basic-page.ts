import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal, Injectable, Inject, inject, LOCALE_ID } from '@angular/core';
import { avaliableCurrent, LocaleService } from '../../services/locale';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe,DatePipe],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export  default  class  BasicPage {
  localSer  = inject(LocaleService);
  CurrentLocal = signal(inject(LOCALE_ID)) ;
  title:string = "Pipes basicos";
  nameLower = signal('Fabian');
  nameUpper = signal('FABIAN');
  fullName = signal('FaBIan BaRbOn');
  date = signal(new Date());

  tikkingDateEffect = effect( (onCleanUp)=> {
    const interval = setInterval( ()=>{
      this.date.set( new Date());
      console.log("Tick!");

    },100 );
    onCleanUp(()=>{
      clearInterval(interval); //envio mi interval
    });
  } );


  changeLocale( locale : avaliableCurrent ) {
    console.log({locale});
    this.localSer.changeCurrent(locale);
    //this.localSer.changeCurrent(locale);
  }
}
