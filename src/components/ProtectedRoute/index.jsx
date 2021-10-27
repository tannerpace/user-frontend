import AppContext from "../../contexts/App"
import PropTypes from "prop-types"
import { useContext, useEffect } from "react"
import {
    Redirect,
    Route,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from "react-router-dom"

// protected route component
const ProtectedRoute = (props) => {
    // destructures passed in component
    const { component: C, ...routeProps } = props
    const { token, isSuperAdmin, isAdmin } = useContext(AppContext)

    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        if (isAdmin && !isSuperAdmin) {
            if (
                location.pathname === "/requests" ||
                (location.pathname.includes("/requests") &&
                    location.pathname.split("/")[2]) ||
                location.pathname === "/entities" ||
                (location.pathname.includes("/entities") &&
                    location.pathname.split("/")[2]) ||
                location.pathname === "/admins" ||
                (location.pathname.includes("/admins") &&
                    location.pathname.split("/")[2])
            ) {
                history.push("/dashboard")
            }
        } else if (isSuperAdmin && !isAdmin) {
            if (
                location.pathname === "/dashboard" ||
                location.pathname === "/applicants" ||
                (location.pathname.includes("/applicants") &&
                    location.pathname.split("/")[2]) ||
                location.pathname === "/boards" ||
                (location.pathname.includes("/boards") &&
                    location.pathname.split("/")[2]) ||
                location.pathname === "/messages" ||
                (location.pathname.includes("/messages") &&
                    location.pathname.split("/")[2])
            ) {
                history.push("/requests")
            }
        }
    }, [location.pathname, isSuperAdmin, isAdmin])

    return (
        <Route
            render={(p) =>
                token ? (
                    // if there is a token that is stored we render the component
                    <C {...p} {...routeProps} match={routeProps.computedMatch} />
                ) : (
                    // if there is not a token that is stored we redurect to /login
                    <div>
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: routeProps.location,
                                },
                            }}
                        />
                    </div>
                )
            }
        />
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.func,
}

export default ProtectedRoute
