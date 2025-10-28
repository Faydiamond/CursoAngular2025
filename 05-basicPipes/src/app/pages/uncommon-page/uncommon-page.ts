import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe,I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const clien1 ={
  name : 'Fabian',
  age: 31,
  gender: 'male',
  address: 'Bogota, colombia'
};

const clien2 ={
  name : 'Laura',
  age: 33,
  gender: 'female',
  address: 'Tenjo, colombia'
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card,I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe,UpperCasePipe,KeyValuePipe,TitleCasePipe,AsyncPipe],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css',
})
export default class UncommonPage {
  title:string = 'Pipes no tan comunes';
  subtitle:string = 'Incluidos en angular';
  //i18nselect
  client = signal(clien1);

  invitationMap = {
    male:'invitarlo',
    female : 'invitarla'
  };

  changeClient () {
    if ( this.client() === clien1) {
      this.client.set(clien2);
      return;
    }

    this.client.set(clien1);
  }

  //I18nplural
  clientsMap = signal({
    '=0':'No tenemos ningun cliente esperando',
    '=1':'Tenemos un cliente esperando',
    '=2':'Tenemos dos clientes esperando',
    other:'Tenemos # clientes esperando',
  });

  clients = signal([
    'Fabian',
    'Camila',
    'MArtin',
    'Sonia',
    'Leidy',
    'Diana'
  ])

  deleteClient(){
    console.log(this.clients().length);

    this.clients.update((before)=> before.slice(1)  );
  };

  //KeyValue Pipe
  profile ={
    name : 'Fabian',
    age : 32,
    adress : 'Bogota'
  }

  //Async pipe
  promiseValue : Promise<string> = new Promise ((resolve,reject)=>{
    setTimeout( ()=>{
      reject("Tenemos un error");
      //resolve("hay data");
      console.log("Promesa finalizada");

    },3400);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value +1 ),
    tap( (value) => console.log('tap: ', value)) //efectos secundarios
  );


}
