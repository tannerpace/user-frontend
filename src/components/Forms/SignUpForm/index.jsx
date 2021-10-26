import React from "react";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../../actions/User/users"
import { useMutation } from "react-query"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, 'Password must contain one uppercase one Special character a number and a letter.')
}).required();
export default function SighUpForm() {
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const signUpMutation = useMutation(userSignUp)
    const onSubmit = (data) => {
        console.log(data)
        signUpMutation.mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("userName")} />
            <p>{errors.userName?.message}</p>

            <input {...register("password")} />
            <p>{errors.password?.message}</p>

            <input type="submit" />
        </form>
    );
}
