import React from "react"
import { useForm } from "react-hook-form"
import {

  Box,
  Button,

  Typography,

  Input,
} from "@mui/material"
import { useContext, useState } from "react"

import AppContext from "../../../contexts/App"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from "react-query"
import serialize from "../../../store/serialize"
import { userLogin } from "../../../actions/User/users"


const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
}).required();

export default function LoginForm({ setIsLogin }) {
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()
  const authContext = useContext(AppContext)
  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const loginInMutation = useMutation(userLogin)
  const Authorization = useContext(AppContext)
  const onSubmit = (data) => {
    setLoading(true)


    loginInMutation.mutate(data, {
      onSuccess: (res) => {
        console.log(`data logged in`, data)
        serialize("user", res.user)
          .then((serializedData) => {
            authContext.setAuthData({
              token: res.token,
              account: serializedData,
            })
            authContext.openSnackBar({
              message: "Login successful!",
            })
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
        //if the user is in the app close the dialog and redirect to my account

      }, onError: (err) => {
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
  return (

    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Login In Form</Typography>
        <Input {...register("userName")} />
        <p>{errors.userName?.message}</p>

        <Input {...register("password")} />
        <p>{errors.password?.message}</p>

        <Button type="submit" variant="contained">Submit</Button>
        <Button onClick={toggleLogin}>No Account? <br></br>SignUp</Button>
      </form>
      {Authorization ? <h1>Logged IN!</h1> : <h1>Not Logged in</h1>}
    </Box>
  );
}
