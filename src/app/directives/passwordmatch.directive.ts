import { Directive } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordmatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useClass: PasswordmatchDirective,
    multi: true
  }]
})
export class PasswordmatchDirective {
  constructor() { }
  validate(form: FormGroup): ValidationErrors | null {
    if (!form.controls['Password'] || !form.controls['ConfirmPassword']) {
      return null
    }
    if (form.controls['Password'].errors && form.controls['ConfirmPassword'].errors) {
      return null;
    }
    if (form.controls['Password'].value !== form.controls['ConfirmPassword'].value) {
      form.controls['ConfirmPassword'].setErrors({ matchPassword: true });
      return { matchPassword: true }
    }
    return null;
    }
}
