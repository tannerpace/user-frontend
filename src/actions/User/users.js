import api from "../../store/api"
export const userSignUp = (data) => {
    return api.post("/app/users", data).then((res) => res.data)
}
export const updateNewUser = () => {
    return api.post("app/users/new-user/").then((res) => res.data)
}