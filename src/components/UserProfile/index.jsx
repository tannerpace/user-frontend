// a componet to display the user profile
import React from 'react';
import { useQuery } from 'react-query';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { getUserById } from '../../actions/User/users';
import { Typography } from '@mui/material/Typography';


const UserProfile = () => {
    const { data } = useQuery('users', getUserById);
    const user = data;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="firstinitial">
                        {user.charAt(0)}
                    </Avatar>
                }

                title={user.userName}

            />

            <CardContent>
                <Typography paragraph>
                    {user.userName}
                </Typography>

            </CardContent>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    bio : {/* {user.bio} */}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default UserProfile;