// a react functional component
import React, { useContext, useState } from 'react';
//import useForm from 'react-hook-form';
import { useForm } from 'react-hook-form';
//import action to post a new post
import { postPost } from '../../../actions/User/users';
//get the user from the appContext
import { appContext } from '../../../contexts/App';
import { useMutation } from "react-query"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Typography } from "@mui/material";
import AppContext from '../../../contexts/App';

//create a schema for the form
const schema = yup.object().shape({
    post: yup.string().required(),

});
//functional component for the post form
//usemutation is a hook that allows us to use the mutation function
//useForm is a hook that allows us to use the form function
//useAppContext is a hook that allows us to use the appContext

const PostForm = () => {
    const { authUser } = useContext(AppContext);
    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
    const [loading, setLoading] = useState(false);
    const postMutation = useMutation(postPost);












    const onSubmit = (values) => {
        setLoading(true);

        const data = {
            post: values.post,
            userId: authUser.id
        }

        console.log(`data`, data)
        postMutation.mutate(data, {
            onSuccess: (res) => {
                console.log(`res`, res)
                    .then(() => {
                        setLoading(false);
                    })





            },
            onError: (err) => {
                console.log(`err`, err)
            }
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("post")} placeholder="What's on your mind?" />

            <Button type="submit" color="primary">
                Post
            </Button>
        </form>
    );
};

export default PostForm;

