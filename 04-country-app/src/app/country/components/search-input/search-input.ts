import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css'
})
export class SearchInput {
[x: string]: any;
     datosEnviados = output<string>();
     placeHolder = input('Buscar');

   onSearch (value:string) {
      console.log(value);
      this.datosEnviados.emit(value);
    }
}
