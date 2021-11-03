import AppContext from "../contexts/App"
import jwtDecode from "jwt-decode"
import { useContext, useMemo } from "react"

const useIsLoggedIn = () => {
    const { token } = useContext(AppContext)
    return useMemo(() => {
        try {
            return Boolean(jwtDecode(token))
        } catch (e) {
            return false
        }
    }, [token])
}
export default useIsLoggedIn
