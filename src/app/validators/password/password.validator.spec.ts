import { PasswordValidator } from './password.validator';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

describe('maxTextLength', () => {
  const passwordValidator = PasswordValidator();
  const formGroup = new FormGroup({
    firstName : new FormControl('Peter'),
    lastName : new FormControl('pan'),
    password : new FormControl('', [PasswordValidator()])
  })

  it('should return null if the password has more than 8 characters, 1 UPPERCASE and 1 lowercase', () => {
    formGroup.get('password').setValue('CaptainHook');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toBeNull();
  });

  it('should fail validation if the password contains the firstname field value', () => {
    formGroup.get('password').setValue('PeterHook');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toEqual({ 'error': 'Invalid password' });
  });

  it('should fail validation if the password contains the lastname field value', () => {
    formGroup.get('password').setValue('CaptainPan');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toEqual({ 'error': 'Invalid password' });
  });

  it('should fail validation if the password contains less than 8 characters', () => {
    formGroup.get('password').setValue('Ab');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toEqual({ 'error': 'Invalid password' });
  });

  it('should fail validation if the password contains less than 1 UPPERCASE character but more than 8 character length', () => {
    formGroup.get('password').setValue('abcdefghijk');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toEqual({ 'error': 'Invalid password' });
  });

  it('should fail validation if the password contains  less than 1 lowercase character but more than 8 character length', () => {
    formGroup.get('password').setValue('ABCDEFGHIJK');
    let controlError = formGroup.get('password').errors;

    expect(controlError).toEqual({ 'error': 'Invalid password' });
  });
});
