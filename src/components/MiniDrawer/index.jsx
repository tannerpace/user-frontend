import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageIcon from '@mui/icons-material/Message';
import PageviewIcon from '@mui/icons-material/Pageview';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import PeopleIcon from '@mui/icons-material/People';
import AppContext from '../../contexts/App';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Router from '../../Router';
import { withRouter } from 'react-router';
import { useContext } from 'react';
import { MenuItem } from '@mui/material';
import { FaHome } from 'react-icons/fa';
import useStyles from "./styles"

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MiniDrawer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const { removeAuthToken } = useContext(AppContext);
    const history = useHistory();
    const authContext = useContext(AppContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        removeAuthToken();
        history.push("/");
    }
    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar position="fixed" open={open} className={classes.top}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        kite.io
                    </Typography>
                    {authContext.authUser && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle onClick={handleLogout} />
                                <MenuItem onClick={handleClose}>Logout{authContext.authUser.userName}</MenuItem>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Link to="/account">
                    <List >
                        <ListItem>
                            <IconButton>
                                <ListItemIcon>
                                    <FaHome />
                                </ListItemIcon>
                                <ListItemText primary="Manage Account" />
                            </IconButton>
                        </ListItem>
                    </List>
                </Link>
                <Divider />
                <List >
                    <Link to="/people">
                        <ListItem>
                            <IconButton>
                                <ListItemIcon>
                                    <PeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary="People" />
                            </IconButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List >
                    <Link to="/messages" >
                        <ListItem>
                            <IconButton>
                                <ListItemIcon>
                                    <MessageIcon />
                                </ListItemIcon>
                                <ListItemText primary="Messages" />
                            </IconButton>
                        </ListItem></Link>
                </List>
                <Divider />
                <Link to="/table">
                    <List >
                        <ListItem>
                            <IconButton>
                                <ListItemIcon>
                                    <PageviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="Locations" />
                            </IconButton>
                        </ListItem>
                    </List>
                </Link>
                <Divider />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
                <DrawerHeader />
                <Router />
            </Box>
        </Box>
    );
}

export default withRouter(MiniDrawer);