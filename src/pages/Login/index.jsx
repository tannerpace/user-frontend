
import Box from '@mui/material/Button';
import LoginForm from "./../../components/Forms/LoginForm"
import Page from "../Page"


const Login = () => {


    return (
        <Page>
            <Box
                height="100vh"
                width="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <LoginForm />
            </Box>
        </Page>
    )
}

export default Login
