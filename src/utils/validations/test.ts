import { forgotPasswordValidate, resetPasswordValidate, signInValidate, signUpValidate } from '.';

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' };

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty',
      });
    });

    it('should return invalid email error', () => {
      const values = { email: 'invalid', password: '123' };

      expect(signInValidate(values)).toMatchObject({
        email: '"email" must be a valid email',
      });
    });
  });

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = { username: '', email: '', password: '' };

      expect(signUpValidate(values)).toMatchObject({
        username: '"username" is not allowed to be empty',
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty',
        confirm_password: '"confirm_password" is required',
      });
    });

    it('should return short username error', () => {
      const values = { username: '1234', email: '', password: '' };

      expect(signUpValidate(values)).toMatchObject({
        username: '"username" length must be at least 5 characters long',
        email: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String),
      });
    });

    it('should return invalid email error', () => {
      const values = { username: '', email: 'invalid', password: '123' };

      expect(signUpValidate(values)).toMatchObject({
        email: '"email" must be a valid email',
      });
    });

    it('should return error if passwords does not match', () => {
      const values = {
        username: 'test',
        email: 'test@test.com',
        password: '123',
        confirm_password: '1234',
      };

      expect(signUpValidate(values)).toMatchObject({
        confirm_password: 'confirm password does not match with password',
      });
    });
  });

  describe('forgotPasswordValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '' };

      expect(forgotPasswordValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
      });
    });

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email' };
      expect(forgotPasswordValidate(values).email).toMatchInlineSnapshot(`""email" must be a valid email"`);
    });
  });

  describe('resetPasswordValidate()', () => {
    it('should validate empty fields', () => {
      const values = { password: '', confirm_password: '' };

      expect(resetPasswordValidate(values)).toMatchObject({
        password: expect.any(String),
      });
    });

    it('should validate confirm password when empty', () => {
      const values = { password: '123', confirm_password: '' };

      expect(resetPasswordValidate(values).confirm_password).toMatchInlineSnapshot(`""confirm_password" is not allowed to be empty"`);
    });

    it('should validate confirm password when different', () => {
      const values = { password: '123', confirm_password: '321' };

      expect(resetPasswordValidate(values).confirm_password).toMatchInlineSnapshot(`"confirm password does not match with password"`);
    });
  });
});
