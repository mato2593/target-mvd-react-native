import validate from 'validate.js';

export const login = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  }
};

export const signUp = {
  name: {
    length: {
      minimum: 3
    },
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    length: {
      minimum: 6
    },
    presence: true
  },
  passwordConfirmation: {
    equality: 'password'
  },
  gender: {
    inclusion: {
      within: { male: 'male', female: 'female', other: 'other' },
    },
    presence: true
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints) || {};
