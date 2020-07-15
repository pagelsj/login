import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the form', () => {

    it('should be invalid when the form is empty', () => {
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('should be valid when all data is entered', () => {
      component.loginForm.setValue({
        firstName: "firstName",
        lastName: "lastName",
        emailAddress: "test@test.com",
        password: "PaSSw0rd"
      });

      expect(component.loginForm.valid).toBeTruthy();
    });

  });

  describe('the first name field validation', () => {

    it('should be inValid if no data is entered', () => {
      const firstNameControl = component.loginForm.controls['firstName'];
      firstNameControl.setValue("");
      let errors = firstNameControl.errors || {};

      expect(errors.required).toBeTruthy();
    });

    it('should be valid if no data is entered', () => {
      const firstNameControl = component.loginForm.controls['firstName'];
      firstNameControl.setValue("Peter");
      let errors = firstNameControl.errors || {};

      expect(errors.required).toBeFalsy();
    });

  });

  describe('the last name field validation', () => {

    it('should be invalid if no data is entered', () => {
      const lastNameControl = component.loginForm.controls['lastName'];
      lastNameControl.setValue("");
      let errors = lastNameControl.errors || {};

      expect(errors.required).toBeTruthy();

    });

    it('should be valid if data is entered', () => {
      const lastNameControl = component.loginForm.controls['lastName'];
      lastNameControl.setValue("Pan");
      let errors = lastNameControl.errors || {};

      expect(errors.required).toBeFalsy();

    });

  });

  describe('the emailAddress field validation', () => {

    it('should be invalid if an invalid no email is entered', () => {
      const emailAddressControl = component.loginForm.controls['emailAddress'];
      emailAddressControl.setValue("");
      let errors = emailAddressControl.errors || {};

      expect(errors.required).toBeTruthy();


      expect(errors.required).toBeTruthy();
    });

    it('should be invalid if an invalid email is entered', () => {
      const emailAddressControl = component.loginForm.controls['emailAddress'];
      emailAddressControl.setValue("invalid email");

      let errors = emailAddressControl.errors || {};

      expect(errors.required).toBeFalsy();
      expect(errors.email).toBeTruthy();
    });

    it('should be valid if data is entered', () => {
      const emailAddressControl = component.loginForm.controls['emailAddress'];
      emailAddressControl.setValue("peter@pan.com");

      let errors = emailAddressControl.errors || {};

      expect(errors.required).toBeFalsy();

      expect(errors.email).toBeFalsy();
    });

  });

  describe('the password field validation', () => {

    it('should be inValid if no data is entered', () => {
      const passwordControl = component.loginForm.controls['password'];
      passwordControl.setValue("");

      let errors = passwordControl.errors || {};

      expect(errors.required).toBeTruthy();
    });

    it('should be inValid if the correct data is entered', () => {
      component.loginForm.setValue({
        firstName: "firstName",
        lastName: "lastName",
        emailAddress: "test@test.com",
        password: "firstName123"
      });
      const passwordControl = component.loginForm.controls['password'];

      let errors = passwordControl.errors || {};
      console.log(passwordControl.errors);
      expect(errors.password).toBeTruthy;
    });

    it('should be valid if the correct data is entered', () => {
      component.loginForm.setValue({
        firstName: "firstName",
        lastName: "lastName",
        emailAddress: "test@test.com",
        password: "PaSSw0rd"
      });
      const passwordControl = component.loginForm.controls['password'];

      let errors = passwordControl.errors || {};

      expect(errors.password).toBeFalsy();
    });

  });

  describe('onSubmit', () => {

    it('should call the validation method to check all inputs 1 last time', () => {
      spyOn(component, 'validateAllFormFields');
      component.onSubmit();

      expect(component.validateAllFormFields).toHaveBeenCalled()
    });

  });

});
