import React from 'react'
// import { useParams } from 'react-router'
//import action to get user by id
import { getUserById } from '../../actions/User/users'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
//import reactquery
import { useQuery } from 'react-query'
const UserDetails = () => {
    //get data from server
    const { id } = useParams();
    const { data, status } = useQuery(["user", id], () => getUserById(id))


    if (status.isLoading) return <div>Loading...</div>
    if (status.error) return <div>Error!</div>
    return (
        <>
            {data ? (<Link to={`/user/message/${data.id}`}>
                <Card sx={{ maxWidth: 345 }}><CardHeader>{data.userName}</CardHeader>
                    <Avatar src={"https://i.pravatar.cc/100"} />
                    <Divider />
                    <CardContent><Typography>{data.userName}</Typography><Typography> Bio : {data.bio}</Typography><Typography>WebSite : {data.website}</Typography></CardContent>
                </Card>
            </Link>) : (<div>...no data</div>)}

            <pre>{JSON.stringify(data)}</pre>

        </>
    )
}
// export the component
export default UserDetails
