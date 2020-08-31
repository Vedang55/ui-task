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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProfileItem from '../Sidebar/ProfileItem';
import DrawerComponent from './DrawerComponent/DrawerComponent';

//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import MailOutline from '@material-ui/icons/MailOutline'

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
        backgroundColor: '#EEE',
        [theme.breakpoints.down('sm')]: {
            padding: '0 3vw',
        }
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
    const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
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

    const RightDrawerContent = (
        <React.Fragment>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: mobileScreen ? 'flex-start' : (rightDrawerOpen ? 'space-between' : 'center'),
                padding: theme.spacing(0, 2)
            }}>
                {!mobileScreen ? <IconButton onClick={() => { setRightDrawerOpen(state => !state) }}>
                    {rightDrawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton> : null}

                {rightDrawerOpen || (mobileScreen && leftDrawerOpen) ? <Typography variant='subtitle2'>
                    ONGOING CHATS
                </Typography> : null}
            </div>
            {(!rightDrawerOpen && !mobileScreen) || (!leftDrawerOpen && mobileScreen) ? <MailOutline style={{ alignSelf: 'center' }} /> : null}
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ProfileItem open={rightDrawerOpen} text={text} />
                ))}
            </List>
        </React.Fragment>
    )

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
            <DrawerComponent
                anchor="left"
                state={[leftDrawerOpen, setLeftDrawerOpen]} >
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
                {!leftDrawerOpen ? <FavoriteBorder style={{ alignSelf: 'center' }} /> : null}
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ProfileItem open={leftDrawerOpen} text={text} />
                    ))}
                </List>

                {mobileScreen ? (
                    <React.Fragment>
                        <Divider style={{ margin: theme.spacing(1, 0) }} />
                        {RightDrawerContent}
                    </React.Fragment>
                ) : null}
            </DrawerComponent>

            {/* Main Content */}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>


            {/* Right drawer */}
            {!mobileScreen ? (
                <DrawerComponent
                    state={[rightDrawerOpen, setRightDrawerOpen]}
                    anchor='right'>

                    {RightDrawerContent}
                </DrawerComponent>
            ) : null}

        </div>
    );
}
