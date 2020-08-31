import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ProfileItem from '../../Sidebar/ProfileItem';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import { Divider } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    hide: {
        display: 'none',
    },
    paper: {
        border: 'none',
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            display: 'none'
        },
        "&, & *": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
        }

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
    },
    search: {
        display: 'flex',
        padding: theme.spacing(2, 1, 2, 1),
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #CCC'
    },
    searchIcon: {
        color: 'black',
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    inputRoot: {
        backgroundColor: '#EEE',
        marginRight: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        flexGrow: 1
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        color: 'black',
    },
    barContent: {
        display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'scroll', overflowX: 'hidden',
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
            <div className={classes.barContent}>
                {props.children}
            </div>

            {leftDrawerOpen ? (<div className={classes.search}>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
            </div>) : null}


        </Drawer >
    );
};

export default DrawerComponent;