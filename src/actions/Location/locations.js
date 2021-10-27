import api from "../../store/api"

export const getLocations = () => {
    return api.get(`/app/location/list`).then((res) => res.data.locations
    )
}


