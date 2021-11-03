import React, { Component, useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from "./components/Route"
import Login from './pages/Login';
import MyTable from './components/MyTable';
import User from './components/User';
import MyUsersList from './components/UsersList';
import MessageList from './components/Messages';
import Location from './components/Location';
import AppContext from './contexts/App';

import NotFound from './pages/NotFound';
import MyAccount from './components/MyAccount';
import NotF from './components/NotF';
//import useHistory from react-router-dom
import { useHistory } from "react-router-dom";
import PostForm from './components/Forms/PostForm';
import UserDetails from './components/UserDetails';
import PropTypes from "prop-types"
const AppIndexRedirect = () => <Redirect to="/" />
const PageComponents = {
    AppIndexRedirect
}
export const appRouteConfig = [
    {
        "path": "/",
        "component": "App",
        "routes": [
            {
                "path": "/",
                "exact": true,
                "protected": false,
                "component": "AppIndex",
                "title": "Home",

            },
            {
                "path": "/login",
                "exact": true,
                "protected": false,
                "component": "AppLogin"
            },

            {
                "path": "/post",
                "exact": true,
                "protected": false,
                "component": "AppPostForm"
            },
            {
                "path": "/account",
                "exact": true,
                "protected": true,
                "component": "AppMyAccount"
            },
            {
                "path": "/messages",
                "exact": true,
                "protected": false,
                "component": "AppMessages"
            },
            {
                "path": "/table",
                "exact": true,
                "protected": false,
                "component": "AppTable"
            }
        ]
    }
]
// const Router = (props) => (

//     <Switch  >
//         <Route exact path='/' component={Login} />
//         <Route path="/login" component={Login} />
//         <Route path="/post" component={PostForm} />
//         <Route path="/notfound" component={NotF} />
//         <PrivateRoute exact path="/table" component={MyTable} />
//         <PrivateRoute exact path="/people" component={MyUsersList} />
//         <PrivateRoute exact path="/account" component={MyAccount} />
//         <PrivateRoute exact path="/messages" component={MessageList} />
//         <PrivateRoute exact path="/location/get/:id" component={Location} />
//         <PrivateRoute exact path="/users/:id" component={User} />
//         <PrivateRoute exact path="/users/detail/:id" component={UserDetails} />
//         <PrivateRoute exact path="/users/message/:id" component={UserDetails} />
//     </Switch >
// )

export const Router = ({ match }) => {
    let path = ""
    if (match) {
        path = match.path
    }

    return (
        <Switch>
            <Redirect
                from="/:url*(/+)"
                to={window.location.pathname.slice(0, -1) + window.location.search}
            />
            {appRouteConfig.map(({ component, ...rest }, i) => (
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