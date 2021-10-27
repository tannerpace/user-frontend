import React from "react"
import { useForm } from "react-hook-form"
import {
  Box,
  Button,
  Typography,
  Input,
} from "@mui/material"
import { useContext, useState, useEffect } from "react"
import App from "../../../contexts/App"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from "react-query"
import { useHistory } from "react-router-dom"
import serialize from "../../../store/serialize"
// import { userLogin } from "../../../actions/User/users"
import PropTypes from "prop-types"
import LinearProgress from '@mui/material/LinearProgress';



const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
}).required();

const LoginForm = ({ setIsLogin }) => {
  const [isUserAuthenticated, setUserAuthenticated] = useState(false)
  const history = useHistory()

  const queryClient = useQueryClient()

  const [loading, setLoading] = useState(false)

  const authContext = useContext(App)


  const { loginMutation } = useContext(App)



  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });















  const onSubmit = (data) => {
    setLoading(true)
    let values = data
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        console.log(` succsess res`, res)
        serialize("user", res.user)
          .then(async (serializedData) => {
            await authContext.setAuthData({
              token: res.token,
              account: serializedData,
            })
            authContext.openSnackBar({
              message: "Login successful!",
            })
            //if the user is in the app close the dialog and redirect to my account

            return queryClient.setQueryData("user", (oldState) => {
              return serializedData
            })
          })
          .catch((err) => {
            authContext.setAuthData({
              token: res.token,
              account: res.account,
            })
          })
      },
      onError: (err) => {
        console.error(err)
        authContext.openSnackBar({
          message: "Incorrect email address or password",
        })
        setLoading(false)
      },
    })
  }

  const toggleLogin = () => {
    setIsLogin()
  }
  console.log(`authContext.authUser`, authContext.authUser)

  useEffect(() => {
    if (authContext && authContext.token) {
      setLoading(false)

      //do something afterlogin


    }
  }, [authContext])

  return (

    <Box>
      {loading ? <LinearProgress color="secondary"></LinearProgress> : <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Login In Form</Typography>
        <Input {...register("userName")} />
        <p>{errors.userName?.message}</p>

        <Input {...register("password")} />
        <p>{errors.password?.message}</p>


        <Button onClick={toggleLogin}>No Account? <br></br>SignUp</Button>
        <Button type="submit" variant="contained">Submit</Button>
      </form>}


      {authContext.authUser ? <h1>Logged In!</h1> : <h1>Not Logged in</h1>}
    </Box>
  );
}
LoginForm.propTypes = {
  setIsLogin: PropTypes.func,

}

export default LoginForm