import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { PasswordValidator } from '../../validators/index';

import { UserDetailsPostService } from '../../services/index'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userDetailsPostService: UserDetailsPostService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
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
  }

  onSubmit() {

    if(this.loginForm.invalid)
      return;

    this.userDetailsPostService.post(this.loginForm.value)
      .subscribe(resp => {
        alert('Thank you for Signing up, ' + this.loginForm.get('firstName').value);

        // Error handling can be added here depending on what responses are returned.
      });
  }
}
