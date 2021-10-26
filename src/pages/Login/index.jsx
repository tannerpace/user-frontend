

import LoginForm from "./../../components/Forms/LoginForm"
import Page from "../Page"
import SignUpForm from '../../components/Forms/SignUpForm';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { useContext } from "react";
import AppContext from "../../contexts/App";


const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const authContext = useContext(AppContext)
    console.log(`authContext`, authContext)


    return (
        <Page>
            <Paper>
                {isLogin ? (<LoginForm setIsLogin={() => setIsLogin(false)} />) : <SignUpForm setIsLogin={() => setIsLogin(true)} />}
            </Paper>
        </Page>
    )
}

export default Login
