import {
    getMe,


} from "../actions/authentication"
import { isEmpty } from "lodash"
import Deferred from "promise-deferred"
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { createContext } from "react"
import { useIndexedDB } from "react-indexed-db"
import { useMutation, useQuery } from "react-query"
import api from "../store/api"
import { useDebounce } from "use-lodash-debounce"
const AppContext = createContext()
export default AppContext
export const AppContainer = ({ children, ...props }) => {
    const { add, clear, getAll } = useIndexedDB("auth")
    const [authUser, setAuthUserState] = useState(null)
    const [token, setToken] = useState(null)
    const [shouldRender, setShouldRender] = useState(false)



    const setAuthData = ({ token, account }) => {
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
        // onSuccess: (res) => {
        //     setAuthUserState(res)
        //     setAuthData({ token, account: res })
        // },
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

    return (
        <AppContainer.Provider value={{
            setAuthData,
            setToken,
            removeAuthToken,
            setAuthUserState,
            token,
            authUser,
        }

        }>   {shouldRender && children}
            {!shouldRender && null}
        </AppContainer.Provider>
    )

}