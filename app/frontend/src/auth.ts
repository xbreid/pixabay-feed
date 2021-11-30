/**
 * This represents some generic auth provider API, like Firebase.
 */
const apiAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    apiAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    apiAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

export { apiAuthProvider };