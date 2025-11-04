 import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

export class FormUtils {

  static isValidField( form:FormGroup ,   fieldName:string):boolean | null {
    return (!!form.controls[fieldName].errors &&  form.controls[fieldName].touched );      //regresa un booleano
  }

  static   isValidFieldInArray( formArray: FormArray, index:number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    )
  }

  static getTextError( errors:ValidationErrors ) {
    for (const key of Object.keys(errors)) {
      // console.log("KEyyyy " , key);
      switch (key) {
        case 'required':
          //console.log('El campo es obligatorio');
          return 'El campo es obligatorio';

        case 'minlength':
          //console.log(`Debe tener al menos ${errors[key].requiredLength} caracteres`);
          return `Minimo de ${errors['minlength'].requiredLength} caracteres`;

        case 'min':
          //console.log(`Debe tener al menos ${errors[key].requiredLength} caracteres`);
          return ` el valor minimo de ${errors['min'].min} caracteres`;
      }
    }
    return null;
  }

  static getFieldError( form:FormGroup, fieldName:string) :string | null  {
    const control = form.controls[fieldName] as AbstractControl | undefined;
    if (!control) return null;

    const errors = control.errors;

    if (!errors) return null;

    return FormUtils.getTextError(errors);
  }



  static getFieldErrorArray( formArray:FormArray, index:number) :string | null  {
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index].errors ?? {};
    return FormUtils.getTextError(errors);
  }


}
