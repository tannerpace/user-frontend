import React from "react"
import { useForm, Controller } from "react-hook-form"
import {
  Paper,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Typography,
  Checkbox,
  Input,
} from "@mui/material"


import { userLogin } from "../../../actions/User/users"
import { useMutation } from "react-query"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
}).required();

export default function LoginForm({ setIsLogin }) {

  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const loginInMutation = useMutation(userLogin)
  const onSubmit = (data) => {
    console.log(data)
    loginInMutation.mutate(data)
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
    </Box>
  );
}
