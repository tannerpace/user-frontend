import {
    getMe,
    login,

} from "../actions/authentication"

import { isEmpty } from "lodash"
import Deferred from "promise-deferred"
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { createContext } from "react"
import { useIndexedDB } from "react-indexed-db"
import { useMutation, useQuery, useQueryClient } from "react-query"
import api from "../store/api"
import { useDebounce } from "use-lodash-debounce"

const AppContext = createContext()
export default AppContext


export const AppContainer = ({ children, ...props }) => {
    const { add, clear, getAll } = useIndexedDB("auth")
    const [authUser, setAuthUserState] = useState(null)
    const [token, setToken] = useState(null)
    const [shouldRender, setShouldRender] = useState(false)
    const queryClient = useQueryClient()

    const setAuthData = ({ token, account }) => {

        console.log(`setting auth data for account`, account)
        clear().then(() => {
            add({ name: "token", token, account }).then(
                () => {
                    api.defaults.headers.common["Authorization"] = token
                    setAuthUserState(account)
                    setToken(token)


                },
                (error) => {
                    console.log(error)
                }
            )
        })
    }

    useEffect(() => {
        // indexdb
        getAll()
            .then((res) => {
                if (!isEmpty(res)) {
                    api.defaults.headers.common["Authorization"] = res[0].token
                    setAuthUserState(res[0].account)
                    setToken(res[0].token)

                }
            })
            .finally(() => {
                setShouldRender(true)
            })
    }, [])

    // Watch token updates and run getMe call
    const getMeQuery = useQuery(["getMe", token], () => getMe(true), {
        enabled: Boolean(token),
        onSuccess: (res) => {
            setAuthUserState(res)
            setAuthData({ token, account: res })
        },
    })

    const removeAuthToken = () => {
        return new Promise((resolve, reject) => {
            clear().then(() => {
                setToken("")
                resolve()
                // remove queries from cache (helps cleaning up when logging back in)
            })
        })
    }
    const loginMutation = useMutation(login)


    return (
        <AppContext.Provider value={{
            setAuthData,
            setToken,
            token,
            authUser,
            setAuthUserState,
            loginMutation,
            removeAuthToken,

        }

        }>   {shouldRender && children}
            {!shouldRender && null}
        </AppContext.Provider>
    )

}

AppContainer.propTypes = {
    children: PropTypes.node,

}