import Auth from "./auth/Auth";

export default class State {
    handleUsernameChange(e) {
        this.username = e.target.value
    }

    handlePasswordChange(e) {
        this.password = e.target.value
    }

    getPassword() {
        return this.password
    }

    getUsername() {
        return this.username
    }

    signInByState() {
        let auth = new Auth();
        auth.signIn(this.username, this.password)
    }

    signUpByState() {
        let auth = new Auth();
        auth.signIn(this.username, this.password)
    }
}