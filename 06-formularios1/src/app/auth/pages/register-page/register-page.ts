import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [ JsonPipe,ReactiveFormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  private fb = inject (FormBuilder)
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name:     ['', [Validators.required, Validators.minLength(4), Validators.pattern(FormUtils.namePattern)  ]],//pattern=> patron
    email:
    ['',
      [Validators.required, Validators.minLength(4), Validators.email , Validators.pattern(FormUtils.emailPattern) ], //validaciones sincronas
      [ FormUtils.checkServerResponse ] //validaciones asincronas
    ],
    userName: [
      '',
       [Validators.required, Validators.minLength(6), Validators.pattern( FormUtils.notOnlySpacesPattern ) ,
        FormUtils.notStrider ]
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required, Validators.minLength(6)]],
  },
    //validacion a nivel de formualrio
    {
      validators : [
         this.formUtils.isFieldOneEqualFieldTwoo('password','password2')
      ]
    }
  );

  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
