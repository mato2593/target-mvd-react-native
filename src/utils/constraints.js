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
      minimum: 3,
      message: 'Name must contain at least 3 characters'
    },
    presence: {
      message: 'You forgot to put your name'
    }
  },
  email: {
    presence: {
      message: 'Email can\'t be blank'
    },
    email: {
      message: 'Oops! This email is not valid'
    }
  },
  password: {
    length: {
      minimum: 6,
      message: 'Password must contain at least 6 characters'
    },
    presence: {
      message: 'Password must contain at least 6 characters'
    }
  },
  passwordConfirmation: {
    equality: {
      attribute: 'password',
      message: 'Passwords don\'t match'
    }
  },
  gender: {
    inclusion: {
      within: ['MALE', 'FEMALE', 'OTHER']
    },
    presence: {
      message: 'You forgot to select your gender'
    }
  }
};

export const validations = (constraints, props = {}) =>
  data => validate(data.toJS(), constraints, props) || {};
