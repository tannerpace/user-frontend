import React from "react";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../../actions/User/users"
import { useMutation } from "react-query"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
const schema = yup.object({
    userName: yup.string().required(),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.')
}).required();
export default function SignUpForm({ setIsLogin }) {
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const signUpMutation = useMutation(userSignUp)
    const onSubmit = (data) => {
        console.log(data)
        signUpMutation.mutate(data)
    }
    const toggleLogin = () => {
        setIsLogin()
    }
    return (
        <Box >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography>Sign Up Form</Typography>
                <Input {...register("userName")} />
                <p>{errors.userName?.message}</p>

                <Input {...register("password")} />
                <p>{errors.password?.message}</p>

                <Button type="submit" variant="contained">Submit</Button>
                <Button onClick={toggleLogin}>Have Account? <br></br>Login</Button>
            </form>
        </Box>
    );
}
