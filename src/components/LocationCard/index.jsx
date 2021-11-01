// a static functional componet that displays all information about a location
import { Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/material/Icon';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/material/Icon';
import ShareIcon from '@mui/material/Icon';
import MoreVertIcon from '@mui/material/Icon';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FcExpand, FcShare } from "react-icons/fc";
import { BsChevronExpand } from "react-icons/bs";
import { MdExpandLess } from 'react-icons/md'
import { GrFavorite } from 'react-icons/gr'
import { BiWind } from 'react-icons/bi'
import { GiWaveSurfer } from 'react-icons/gi'
import { GiIsland } from 'react-icons/gi'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutubeSquare, FaLinkedin, FaReddit } from 'react-icons/fa'
import { ImLinkedin, ImFacebook, ImInstagram, ImTwitter, ImYoutube } from 'react-icons/im'
import getLevelIcon from '../../utils/getLevelIcon';

import {
  EmailShareButton,
  FacebookShareButton,

  LinkedinShareButton,

  RedditShareButton,

} from "react-share";


const url = process.env.REACT_APP_API_ENDPOINT
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY



const containerStyle = {
  width: `345px`,
  height: `345px`


};



const MyMap = ({ lat, lng }) => {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */}

        <></>
      </GoogleMap>
    </LoadScript>
  )
}

const MyMapper = React.memo(MyMap)
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LocationCard({ location }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="location">
            {location.locationname.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={location.locationname}
        subheader={location.island}
      />
      <MyMapper lat={location.latitude} lng={location.longitude} />
      <CardContent>
        <Typography paragraph>
          Wind Directions <br></br> <BiWind></BiWind>  {location.winddirections}
        </Typography>
        <Typography paragraph>
          Wave Potential <br></br> <GiWaveSurfer></GiWaveSurfer>  {location.waves}
        </Typography>
        <Typography paragraph>
          Recomended level <br></br> {getLevelIcon(location.experience)}  {location.experience}
        </Typography>
        <Typography paragraph>Island<br></br><GiIsland></GiIsland>  {location.island}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <GrFavorite />
        </IconButton>
        <IconButton aria-label="share">
          <RedditShareButton url={`${url}/location/get/${location.id}`}><FaReddit /></RedditShareButton>
        </IconButton>
        <IconButton aria-label="share">
          <FacebookShareButton url={`${url}/location/get/${location.id}`}><FaFacebookSquare /></FacebookShareButton>
        </IconButton>
        <IconButton aria-label="share">
          <LinkedinShareButton url={`${url}/location/get/${location.id}`}><FaLinkedin /></LinkedinShareButton>
        </IconButton>
        <IconButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"

        ><FcExpand />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {location.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

