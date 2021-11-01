

import LoginForm from "./../../components/Forms/LoginForm"
import Page from "../Page"
import SignUpForm from '../../components/Forms/SignUpForm';
import { Paper } from '@mui/material';
import { useState } from 'react';
import MyTable from "../../components/MyTable";



const Login = () => {
    const [isLogin, setIsLogin] = useState(true)




    return (
        <Page>
            <MyTable />
        </Page>
    )
}

export default Login
