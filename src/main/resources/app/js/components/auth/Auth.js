import constants from "../constants/contants";

const STORAGE_AUTH_HEADER_KEYWORD = "AuthHeader"
const CURRENT_USER_ID = "UserId"
const CURRENT_USER_NAME = "UserName"

const AUTH_HEADER_NAME = "Authorization"

export default class Auth {

    getCurrentUserId() {
        return window.localStorage.getItem(CURRENT_USER_ID)
    }

    getCurrentUserName() {
        return window.localStorage.getItem(CURRENT_USER_NAME)
    }

    authHeaderName() {
        return AUTH_HEADER_NAME
    }

    signOff() {
        window.localStorage.removeItem(STORAGE_AUTH_HEADER_KEYWORD)
        window.localStorage.removeItem(CURRENT_USER_ID)
        window.localStorage.removeItem(CURRENT_USER_NAME)
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
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({
            username: username,
            password: password
        }))
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText)
            let authHeader = json["type"] + " " + json["token"]
            window.localStorage.setItem(STORAGE_AUTH_HEADER_KEYWORD, authHeader)
            window.localStorage.setItem(CURRENT_USER_ID, json.id)
            window.localStorage.setItem(CURRENT_USER_NAME, json.username)
        }
        return false
    }

    signIn(username, password) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", constants.backendHost + "/api/auth/signin", false)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify({
            username: username,
            password: password
        }))
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.responseText)
            let authHeader = json["type"] + " " + json["token"]
            window.localStorage.setItem(STORAGE_AUTH_HEADER_KEYWORD, authHeader)
            window.localStorage.setItem(CURRENT_USER_ID, json.id)
            window.localStorage.setItem(CURRENT_USER_NAME, json.username)
        }
        return false
    }
}