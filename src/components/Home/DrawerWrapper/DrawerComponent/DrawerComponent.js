import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ProfileItem from '../../Sidebar/ProfileItem';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    paper: {
        border: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#DDD',

    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: '#5dbcdf',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // necessary for content to be below app bar
        paddingTop: 60
    }
}));

const DrawerComponent = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [leftDrawerOpen, setLeftDrawerOpen] = props.state
    return (
        <Drawer
            anchor={props.anchor}
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: leftDrawerOpen,
                [classes.drawerClose]: !leftDrawerOpen,
            })
            }
            classes={{
                paper: clsx(classes.paper, {
                    [classes.drawerOpen]: leftDrawerOpen,
                    [classes.drawerClose]: !leftDrawerOpen,
                }),
            }}
        >
            <div className={classes.toolbar}> </div>
            {props.children}

        </Drawer >
    );
};

export default DrawerComponent;