 import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';


async function  sleep() {
  return new Promise (resolve => {
    setTimeout( ()=>{
      resolve(true);
    },2800 )
  })
}

export class FormUtils {

  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';


  static isValidField( form:FormGroup ,   fieldName:string):boolean | null {
    return (!!form.controls[fieldName].errors &&  form.controls[fieldName].touched );      //regresa un booleano
  }

  static   isValidFieldInArray( formArray: FormArray, index:number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    )
  }

  static getTextError( errors:ValidationErrors ) {
    console.log("Errores: " , errors);

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
        case 'email':
          //console.log(`Debe tener al menos ${errors[key].requiredLength} caracteres`);
          return ` el correo electronico debe tener un formato valido`;

        case 'emailTaken':
          //console.log(`Debe tener al menos ${errors[key].requiredLength} caracteres`);
          return ` el correo electronico ya se encuentra en uso`;

        case 'notStrider':
          //console.log(`Debe tener al menos ${errors[key].requiredLength} caracteres`);
          return ` el usuario strider no se puede utilizar, por fa cambielo.`;

        case 'pattern':
          if( errors['pattern'].requiredPattern === FormUtils.emailPattern ){
            return 'El correo electronico no tiene un formato valido'
          }



        return 'Error de patron expresion regular.'


         default:
          return `Error no controlado : ${key}.`
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


  static isFieldOneEqualFieldTwoo (field1:string,field2:string){
    //regreso una funcion
    return ( formGroup:AbstractControl )=> {
      const field1Value =formGroup.get(field1)?.value;
      const field2Value =formGroup.get(field2)?.value ;
      //console.log(field1Value , "  Dos  " , field2Value);

      return field1Value === field2Value ? null : { passwordNotEqual:true }

    }
  }

  static async checkServerResponse ( control : AbstractControl ) : Promise <ValidationErrors | null> {
    console.log("Validando contra el servidor.");

    await sleep();
    const formValue = control.value;

    if ( formValue === 'holamundo@gmail.com' ){
      return {
        emailTaken : true
      }
    }

    return null;
  }

  static notStrider(control : AbstractControl ) :ValidationErrors | null {
    //strider
     const formValue = control.value;

     return formValue==="strider" ? { notStrider:true } : null;
  }

  // me leee?

}
