

import LoginForm from "./../../components/Forms/LoginForm"
import Page from "../Page"
import SignUpForm from '../../components/Forms/SignUpForm';
import { Paper } from '@mui/material';
import { useState } from 'react';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true)


    return (
        <Page>
            <Paper>
                {isLogin ? (<LoginForm setIsLogin={() => setIsLogin(false)} />) : <SignUpForm setIsLogin={() => setIsLogin(true)} />}
            </Paper>
        </Page>
    )
}

export default Login
