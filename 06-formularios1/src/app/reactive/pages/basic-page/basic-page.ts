import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [ JsonPipe ,ReactiveFormsModule],
  templateUrl: './basic-page.html',
  styleUrl: './basic-page.css',
})
export class BasicPage {

  private  fb = inject (FormBuilder);
  formutils = FormUtils;

  myForm:FormGroup =   this.fb.group({
    name : ['', [Validators.required,Validators.minLength(3)] ],  //1->el seteado por fedecto, 2=>validadores sincronos,3=>validadores asincronos
    price : [0,  [Validators.required,Validators.min(10)]] ,
    inStorage : [0,[Validators.required,Validators.min(0)]]
  });

  onSave() {
    //si no es valido
     if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
     }
     console.log(this.myForm.value);
     this.myForm.reset({
      name: '',
      price: 0,
      inStorage : 0
     });
  }

}
