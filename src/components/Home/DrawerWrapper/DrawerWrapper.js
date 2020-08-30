import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import ProfileItem from '../Sidebar/ProfileItem';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        height: 60
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
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
        border: 'none'
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
        border: 'none'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        height: 60
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0, 10),
        backgroundColor: '#EEE'
    },
    search: {
        display: 'flex',
        padding: theme.spacing(1, 0)
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
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
        color: 'black',
    },
    toolbarContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    logoimage: {
        height: '100%',
        position: 'absolute',
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            height: 50,
            alignSelf: 'center'
        }
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

    useLayoutEffect(() => {
        if (leftDrawerOpen) {
            setRightDrawerOpen(false)
        }
    }, [leftDrawerOpen])

    useLayoutEffect(() => {
        if (rightDrawerOpen) {
            setLeftDrawerOpen(false)
        }
    }, [rightDrawerOpen])

    return (
        <div className={classes.root}>

            <AppBar
                elevation={0}
                position="fixed"
                className={classes.appBar}
            >
                <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABlZWVLS0u4uLh8fHz19fWmpqaurq6jo6OVlZXz8/PMzMzo6OgwMDATExOcnJxFRUWCgoJycnKMjIxaWlq+vr5eXl45OTkiIiLCwsKxdHPtAAACd0lEQVR4nO3d227bMBBFUTtNFCdOmrhxLu3/f2iBPrRyOLpEpGY0p3s/kxKWYYAmIMq7HRERERERERERERERERERERER0X/f+fQtrNMPD+E+sisH4LW88KQufAwFegjv5YWxQAfhg7zwRV4YDFxfGLsYeghjF0MHYbEYvr5dr97bjaOwWAxdfggfHIXFl+Zm5Rv+6dZPWC6GasJyMVQTFkA1obEYigmNxVBLaO0MtYTWzlBLaAC1hObOUEpo7gylhFcIVwthqxCuF8JWIVwvhK1CuF4bF3bHf3XmiN6Aozlg48LX3uhna0DXv575GWxc2J92Zw1AiLBdCGdMQ4gQYWUIZ0xDiBBhZQhnTEOIEGFlCGdMQ4gQYWUIZ0xDiBBhZQhnTEOIEGFlCAd6lxce7v92frAGdOfeiIzCBiFsFcL1QtiqOOGzuvDiKIui8PKsjqDw02EkPeHn01ZywuI4mZqwPC/3vuLdAoQl8Ml+zLhN/kJnoL/QG+gudAd6C/2BzsIAoK8wAugqDAF6CmOAjsIgoJ8wCugmDAN6CeOATsJAoC1s/TazSKAtHOuxuMTHVy/hCmwg/L5tYL1w68Bq4eaBtcLtAyuFCYB1wgzAKmEKYI0wB7BCmAS4XJgFuFiYBrhUmAe4UJgIuEyYCbhImAq4RJgLuEC48Q1vvfBnMuDXhdmAF4/CSgJ3vw4T3U4b9vvzyHz7TV8bqpv22W/7StNRHThDmBw4LcwOnBSmB04J8wMnhALAcaECcFQoARwTagBHhCLAYaEKcFAoAxwS6gAHhEJAW6gENIVSwF33UfyLthaQiIiIiIiIiIiIiIiIiIiIiIgott9LyjdV7U0GqwAAAABJRU5ErkJggg=="}
                    className={classes.logoimage} />
                <div className={classes.toolbarContent}>
                    <div className={classes.search}>
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
                    </div>
                </div>

            </AppBar>

            {/* Left drawer */}
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: leftDrawerOpen,
                    [classes.drawerClose]: !leftDrawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: leftDrawerOpen,
                        [classes.drawerClose]: !leftDrawerOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}> </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: leftDrawerOpen ? 'space-between' : 'center',
                    padding: theme.spacing(0, 2)
                }}>
                    {leftDrawerOpen ? <Typography variant='subtitle2'>
                        FOLLOWED CHANNELS
                    </Typography> : null}

                    <IconButton onClick={() => { setLeftDrawerOpen(state => !state) }}>
                        {!leftDrawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ProfileItem open={leftDrawerOpen} text={text} />
                    ))}
                </List>

            </Drawer>

            {/* Main Content */}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>


            {/* Right drawer */}

            <Drawer
                anchor='right'
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: rightDrawerOpen,
                    [classes.drawerClose]: !rightDrawerOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: rightDrawerOpen,
                        [classes.drawerClose]: !rightDrawerOpen,
                    }),
                }}
            >
                <div className={classes.toolbar}> </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: rightDrawerOpen ? 'space-between' : 'center',
                    padding: theme.spacing(0, 2)
                }}>
                    <IconButton onClick={() => { setRightDrawerOpen(state => !state) }}>
                        {rightDrawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                    {rightDrawerOpen ? <Typography variant='subtitle2'>
                        ONGOING CHATS
                    </Typography> : null}
                </div>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ProfileItem open={rightDrawerOpen} text={text} />
                    ))}
                </List>

            </Drawer>

        </div>
    );
}
