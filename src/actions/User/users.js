import api from "../../store/api"

export const userSignUp = (data) => {
    return api.post("/app/user", data).then((res) => res.data)
}
export const updateNewUser = () => {
    return api.post("app/user/new-user/").then((res) => res.data)
}

export const forgotPassword = (data) => {
    return api.post("/app/user/forgot", data)
}

export const pin = (data) => {
    return api.post("/app/user/pin", data)
}

export const userLogin = (data) => {
    return api.post("/app/user/auth", data).then((res) => res.data)
}

