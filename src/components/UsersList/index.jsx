
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { Button, Typography } from "@mui/material"
import { useQuery } from 'react-query';
import { messageUser } from '../../actions/User/users';
import { getAllUsers } from '../../actions/User/users';
import Loader from 'react-loader-spinner';
import User from '../User';
import { Box } from '@mui/system';

const MyUsersList = () => {
    const { data } = useQuery('users', getAllUsers);
    const users = data?.map(user => {
        return (
            <User key={user.id} data={user} />
        )
    }
    )

    return (
        <Box>
            <Button variant="h4" gutterBottom>
                {users}
            </Button>
        </Box>)

}
export default MyUsersList;
