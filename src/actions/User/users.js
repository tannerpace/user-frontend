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

// export const userLogin = (data) => {
//     return api.post("/app/user/auth", data).then((res) => res.data)
// }

//an action to get all users
export const getAllUsers = () => {
    return api.get("/app/user/all").then((res) => res.data.data)
}

//an action to message a user by id
export const messageUser = (id, data) => {
    return api.post(`/app/user/${id}/message`, data).then((res) => res.data)
}

//an action to get a user by id
export const getUserById = (id) => {
    return api.get(`/app/user/one/${id}`).then((res) => res.data.data)
}

//an acton to post a post
export const postPost = (data) => {
    return api.post("/app/user/post", data).then((res) => res.data)
}