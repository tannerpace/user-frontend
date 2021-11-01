import api from "../../store/api"

export const getLocations = () => {
    return api.get(`/app/location/list`).then((res) => res.data.locations
    )
}

export const getLocation = (id) => {
    return api.get(`/app/location/get/${id}`).then((res) => res.data.data
    )
}

