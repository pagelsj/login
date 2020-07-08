import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { PasswordValidator } from '../../validators/password/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() {

  }

  loginForm = new FormGroup({
    firstName: new FormControl('', [ Validators.required ]),
    lastName: new FormControl('', [ Validators.required ]),
    emailAddress: new FormControl('',
      [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
        PasswordValidator()
      ]
    )
  });

  onSubmit() {
    console.log('This form is valid and will submit now.');
  }
}
