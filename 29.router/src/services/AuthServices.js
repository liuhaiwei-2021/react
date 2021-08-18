/** @format */

class AuthServices {
  constructor() {
    this.isAuthenticated = false;
  }
  isAuthenticated() {
    return this.isAuthenticated;
  }
  signIn(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 1000);
  }
  signOut(callback) {
    this.autheisAuthenticatednticated = false;
    setTimeout(callback, 1000);
  }
}

export default new AuthServices();
