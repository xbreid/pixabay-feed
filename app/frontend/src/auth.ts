/**
 * This represents some generic auth provider API Object
 */
const apiAuthProvider = {
  isAuthenticated: false,
  async signin(values: LoginFormFields, callback: CallableFunction) {
    const token = localStorage.getItem('pf_token');
    await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token as string
      },
      body: JSON.stringify(values)
    }).then((response) => {
      response.json().then((data) => {
        apiAuthProvider.isAuthenticated = true;
        localStorage.setItem('pf_token', data.token);
        localStorage.setItem('pf_exp', data.exp);
        callback(data);
      });
    });
  },
  async signup(values: CreateFormFields, callback: CallableFunction) {
    await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    }).then((response) => {
      response.json().then((data) => {
        apiAuthProvider.signin({
          email: data.email,
          password: values.password
        }, callback);
      });
    });
  },
  signout(callback: CallableFunction) {
    apiAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { apiAuthProvider };