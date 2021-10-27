import Route from "./components/Route"
import NotFound from "./pages/NotFound"
import PropTypes from "prop-types"
import { Redirect, Switch } from "react-router-dom"

const PageComponents = {}
const componentsReq = require.context("./pages", true, /^(.*\.(jsx$))[^.]*$/im)
componentsReq.keys().filter(x => x.indexOf("index.jsx") > -1).forEach(x => {
    // https://regexr.com/54uqs - selects ./ and /pages/ from file locations
    // https://regexr.com/54uqv - selects index.jsx files
    const componentName = x.replace(/\/(\w|:|-)+\.jsx$/g, "").replace(/(\/pages\/|\.\/)/g, "")
    PageComponents[componentName] = componentsReq(x).default
})
export const userRouteConfig = [
    {
        "path": "/",
        "component": "User",
        "routes": [
            {
                "path": "/",
                "exact": true,
                "protected": false,
                "component": "Login"
            },


            {
                "path": "/my-account",
                "exact": true,
                "protected": true,
                "component": "UserMyAccount"
            },



            {
                "path": "/games",
                "protected": false,
                "component": "Games",
                "routes": [
                    {
                        "path": "/games",
                        "protected": false,
                        "component": "GamesList",
                        "routes": [
                            {
                                "exact": true,
                                "path": "/games/:game_id",
                                "protected": false,
                                "component": "GamelistGame"
                            }
                        ]
                    }
                ]
            },
            {
                "path": "/messages",
                "protected": true,
                "component": "Messages",
                "routes": [
                    {
                        "path": "/messages",
                        "protected": true,
                        "component": "MessagesList",
                        "routes": [
                            {
                                "exact": true,
                                "path": "/messages/:message_id",
                                "protected": true,
                                "component": "MessagesListMessage"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
export const Router = ({ routes, match }) => {
    let path = ""
    if (match && match?.path !== "/") {
        path = match.path
    }

    return (
        <Switch>
            {/* <Redirect from="/:url*(/+)" to={window.location.pathname.slice(0, -1) + window.location.search} /> */}
            {routes.map(({ component, ...rest }, i) => (
                <Route key={i} {...rest} component={PageComponents[component]} />
            ))}
            <Route path={`${path}/*`} component={NotFound} />
        </Switch>
    )
}

Router.propTypes = {
    "routes": PropTypes.array,
    "match": PropTypes.object
}
export default Router
