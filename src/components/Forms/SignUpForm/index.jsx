import React from "react";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../../actions/User/users"
import { useMutation } from "react-query"
export default function SighUpForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const signUpMutation = useMutation(userSignUp)
    const onSubmit = (data) => {
        console.log(data)
        signUpMutation.mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("userName", { required: true })} />
            {errors.firstName?.type === 'required' && "Username is required"}

            <input {...register("password", { required: true })} />
            {errors.password && "Password is required"}

            <input type="submit" />
        </form>
    );
}
