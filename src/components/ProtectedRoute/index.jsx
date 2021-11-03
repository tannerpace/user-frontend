import useIsLoggedIn from "../../hooks/useIsLoggedIn"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"

// protected route component
const ProtectedRoute = (props) => {
    // destructures passed in component
    const { component: C, ...routeProps } = props
    const loggedIn = useIsLoggedIn()
    return (
        <Route
            {...routeProps}
            render={(p) =>
                loggedIn ? (
                    // if there is a token that is stored we render the component
                    <C {...p} {...routeProps} match={routeProps.computedMatch} />
                ) : (
                    // if there is not a token that is stored we redurect to /login
                    <div>
                        <Redirect
                            to={{
                                pathname: "/login",
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
