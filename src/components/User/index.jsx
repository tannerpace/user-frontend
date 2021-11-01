import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const User = ({ data }) => {
    // const id = data.user.id
    return (<>
        <Link to={`/users/detail/${data.id}`}>
            <Card sx={{ maxWidth: 345 }}><CardHeader>{data.userName}</CardHeader>
                <Avatar src={"https://i.pravatar.cc/100"} />
                <Divider />
                <CardContent>{data.userName}</CardContent>
            </Card>
        </Link>
        <pre>{JSON.stringify(data)}</pre>
    </>
    )
}
// export the component
export default User
