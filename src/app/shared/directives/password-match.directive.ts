import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS } from '@angular/forms';
import { passwordMatch } from '../validators/password-match';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true
    }
  ]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    return passwordMatch(control);
  }

}
