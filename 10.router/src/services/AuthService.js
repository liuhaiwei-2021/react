/** @format */

class AuthService {
  constructor() {
    this.authenticated = true;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  signIn(callback) {
    this.authenticated = true;
    setTimeout(callback, 500);
  }
  signOut(callback) {
    this.aauthenticated = false;
    setTimeout(callback, 1000);
  }
}
export default new AuthService();
