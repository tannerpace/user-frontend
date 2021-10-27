import api from "../store/api"
import serialize from "../store/serialize"

// export const getMe = () => {
//     const url = `/app/user/me`
//     return api.get(url).then((res) => serialize("user", res.data.user))
// }

export const getMe = () => {
    const url = `/app/user/me`
    return api.get(url).then((res) => res.data.user)
}

export const login = (data) => {
    return api.post("/app/user/auth", data).then((res) => res.data)
}

export const updateUserProfile = (data) => {
    return api.put("/admin/user", data).then((res) => res.data)
}

export const updatePassword = (data) => {
    return api.put("/admin/user/password", data).then((res) => res.data)
}


