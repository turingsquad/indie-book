import constants from "../constants/contants";

const STORAGE_AUTH_HEADER_KEYWORD = "AuthHeader"

const AUTH_HEADER_NAME = "Authorization"

export default class Auth {

    authHeaderName() {
        return AUTH_HEADER_NAME
    }

    getAuthHeader() {
        return window.localStorage.getItem(STORAGE_AUTH_HEADER_KEYWORD)
    }

    isAuthenticated() {
        return this.getAuthHeader() != null
    }

    signUp(username, password) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/auth/signup", false)
        xhr.send(JSON.stringify({
            username: username,
            password: password
        }))
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText)
            let authHeader = json["type"] + " " + json["token"]
            window.localStorage.setItem(STORAGE_AUTH_HEADER_KEYWORD, authHeader)
        }
        return false
    }

    signIn(username, password) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/auth/signin", false)
        xhr.send(JSON.stringify({
            username: username,
            password: password
        }))
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText)
            let authHeader = json["type"] + " " + json["token"]
            window.localStorage.setItem(STORAGE_AUTH_HEADER_KEYWORD, authHeader)
        }
        return false
    }
}