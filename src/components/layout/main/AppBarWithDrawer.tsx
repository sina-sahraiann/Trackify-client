import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import { userList } from '../../../services/list_of_all_users';
import { Avatar } from '@mui/material';
import { Offline, Online } from 'react-detect-offline';
import { UserContext } from '../../../providers/UserProvider';
import { useEffect, useState } from 'react';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window,
    children: React.ReactNode

}



const drawerWidth = 240;
const navItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '#'
    },
    {
        name: 'Log out',
        path: '/login'
    },
    {
        name: 'Sign up',
        path: '/signup'
    }

];

const mywindow: Window = window

const AppBarWithDrawer = (props: Props) => {

    const [navbarColor, setNavbarColor] = useState({
        bg: '#192B7D',
        color: 'white'
    });

    useEffect(() => {
        mywindow.addEventListener('scroll', changeNavbarColor);
        return () => {
            mywindow.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    const changeNavbarColor = () => {
        if (mywindow.scrollY > 0) {
            setNavbarColor({
                bg: '#ffffff',
                color: 'black',
            });
        } else {
            setNavbarColor({
                bg: '#192B7D',
                color: 'white'
            });
        }
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Trackify
            </Typography>

            <List>
                {navItems.map((item) => (
                    <NavLink key={item.name} to={item.path} >
                        {item.name}
                    </NavLink>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: navbarColor.bg, color: navbarColor.color, transition: '0.3s' }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        className={'text-start'}
                    >
                        <NavLink to={'/'}>
                            Trackify
                        </NavLink>

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <NavLink key={item.name} to={item.path} className='mr-10'>
                                {item.name}
                            </NavLink>
                        ))}
                    </Box>

                    <Link to={'/profile'}>
                        <Box>
                            <Avatar about='sina' src={userList[0].Avatarimage} />
                        </Box>
                    </Link>
                </Toolbar>
                <Offline>
                    <div style={{ color: 'white' }} className='bg-gray-700 flex font-mono justify-center'>
                        you are offline
                    </div>
                </Offline>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }} className='min-w-full'>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

export default AppBarWithDrawer