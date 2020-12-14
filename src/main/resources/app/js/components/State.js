import Auth from "./auth/Auth";

let credentialsHolder = {}

export default class State {
    handleUsernameChange(e) {
        credentialsHolder.username = e.target.value
    }

    handlePasswordChange(e) {
        credentialsHolder.password = e.target.value
    }

    getPassword() {
        return credentialsHolder.password
    }

    getUsername() {
        return credentialsHolder.username
    }

    signInByState() {
        let auth = new Auth();
        auth.signIn(credentialsHolder.username, credentialsHolder.password)
    }

    signUpByState() {
        let auth = new Auth();
        auth.signUp(credentialsHolder.username, credentialsHolder.password)
    }
}