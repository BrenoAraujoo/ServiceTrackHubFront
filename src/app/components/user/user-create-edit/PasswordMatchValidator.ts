import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function passwordMatchValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const password = control.get('password')?.value;
          const passwordConfirm = control.get('passwordConfirm')?.value;
          
          return password === passwordConfirm ? null : { passwordMismatch: true };
        };
}

