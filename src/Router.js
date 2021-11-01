import React, { Component, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


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

const Router = (props) => (


    // <Switch>

    //     <Route exact path='/public' component={Public} />
    //     <PrivateRoute path="/protected" component={Protected} />
    // </Switch>





    <Switch  >
        <Route exact path='/' component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/post" component={PostForm} />
        <Route path="/notfound" component={NotF} />
        <PrivateRoute exact path="/table" component={MyTable} />
        <PrivateRoute exact path="/people" component={MyUsersList} />
        <PrivateRoute exact path="/account" component={MyAccount} />
        <PrivateRoute exact path="/messages" component={MessageList} />
        <PrivateRoute exact path="/location/get/:id" component={Location} />
        <PrivateRoute exact path="/users/:id" component={User} />
        <PrivateRoute exact path="/users/detail/:id" component={UserDetails} />
        <PrivateRoute exact path="/users/message/:id" component={UserDetails} />


    </Switch >






)

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = useContext(AppContext);

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
}


export default Router;