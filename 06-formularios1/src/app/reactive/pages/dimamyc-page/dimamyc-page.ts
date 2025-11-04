import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dimamyc-page',
  imports: [ JsonPipe,ReactiveFormsModule ],
  templateUrl: './dimamyc-page.html',
  styleUrl: './dimamyc-page.css',
})
export class DimamycPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  favoriteGames: this.fb.array([
    this.fb.control('Metal Gear', [Validators.required]),
    this.fb.control('Death Stranding', [Validators.required])
  ], [Validators.minLength(3)])
});

  get favoriteGames(){
    return this.myForm.get('favoriteGames')as FormArray;
  }


  constructor() {
    console.log("Error " ,this.myForm.errors);

  }

  newFavorite = new FormControl('', Validators.required);

  onAddToFavorites() {
    if (this.newFavorite.invalid) return;//no es valido
    const newGame = this.newFavorite.value;
    console.log("Entra");

    this.favoriteGames.push(this.fb.control(newGame,Validators.required));
    this.newFavorite.reset();
  }

  onDeleteFavorite(imdex : number) {

    this.favoriteGames.removeAt(imdex);
  }

  onSubmit(){
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
