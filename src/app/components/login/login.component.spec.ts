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

    it('should be valid if data is entered', () => {
      const firstNameControl = component.loginForm.controls['firstName'];
      let errors = firstNameControl.errors || {};

      expect(errors['required']).toBeTruthy();

      firstNameControl.setValue("this is the firs name");

      expect(errors['required']).toBeTruthy();
    });

  });

  describe('the last name field validation', () => {

    it('should be valid if data is entered', () => {
      const lastNameControl = component.loginForm.controls['lastName'];
      let errors = lastNameControl.errors || {};

      expect(errors['required']).toBeTruthy();

      lastNameControl.setValue("this is the firs name");

      expect(errors['required']).toBeTruthy();
    });

  });

  describe('the emailAddress field validation', () => {

    it('should be valid if data is entered', () => {
      const emailAddressControl = component.loginForm.controls['emailAddress'];
      let errors = emailAddressControl.errors || {};

      expect(errors['required']).toBeTruthy();

      emailAddressControl.setValue("this is the firs name");

      expect(errors['required']).toBeTruthy();
    });

  });

  describe('the password field validation', () => {

    it('should be valid if data is entered', () => {
      const passwordControl = component.loginForm.controls['password'];
      let errors = passwordControl.errors || {};

      expect(errors['required']).toBeTruthy();

      passwordControl.setValue("this is the firs name");

      expect(errors['required']).toBeTruthy();
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
