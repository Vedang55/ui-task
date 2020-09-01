import React, { useState, useLayoutEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProfileItem from '../Sidebar/ProfileItem';
import DrawerComponent from './DrawerComponent/DrawerComponent';


import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


//icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import MailOutline from '@material-ui/icons/MailOutline'
import NaturePeople from '@material-ui/icons/NaturePeople'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

//data
import { followedChannels, recommendedChannels } from '../../../assets/data/sidebars/left'
import { onGoingChats } from '../../../assets/data/sidebars/right'
import Badges from '../../../assets/data/Appbar/Badges'

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
        padding: theme.spacing(1, 1)
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
    },
    headerWithoutIcon: { padding: theme.spacing(1, 2) },
    sectionDesktop: {
        display: 'none',
        color: "black",
        margin: theme.spacing(0, 2, 0, 0),
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        color: "black",
        padding: theme.spacing(0, 1, 0, 0),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function DrawerWrapper(props) {
    const classes = useStyles();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={Badges.notifications} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={Badges.messages} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

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
                padding: theme.spacing(0, 2),
                flexShrink: 0
            }}>
                {!mobileScreen ? <IconButton onClick={() => { setRightDrawerOpen(state => !state) }}>
                    {rightDrawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton> : null}

                {rightDrawerOpen || (mobileScreen && leftDrawerOpen) ? <Typography className={mobileScreen ? classes.headerWithoutIcon : undefined}
                    style={{ paddingLeft: 0, paddingRight: 0 }} variant='subtitle2'>
                    ONGOING CHATS
                </Typography> : null}
            </div>
            {(!rightDrawerOpen && !mobileScreen) || (!leftDrawerOpen && mobileScreen) ? <MailOutline style={{ alignSelf: 'center' }} /> : null}
            <List>
                {onGoingChats.map((item, index) => (
                    <ProfileItem followedChannels open={leftDrawerOpen} item={item} />
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
                <div className={classes.sectionDesktop}>
                    <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </div>

            </AppBar>
            {renderMobileMenu}
            {renderMenu}

            {/* Left drawer */}
            <DrawerComponent
                anchor="left"
                state={[leftDrawerOpen, setLeftDrawerOpen]} >

                {/* Followed channels */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: leftDrawerOpen ? 'space-between' : 'center',
                    padding: theme.spacing(0, 2),
                    flexShrink: 0
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
                    {followedChannels.map((item, index) => (
                        <ProfileItem followedChannels open={leftDrawerOpen} item={item} />
                    ))}
                </List>


                {/* Recommended channels */}
                {leftDrawerOpen ? (
                    <Typography className={classes.headerWithoutIcon} variant='subtitle2'>
                        RECOMMENDED CHANNELS
                    </Typography>
                ) : <NaturePeople style={{ alignSelf: 'center' }} />}

                <List>
                    {recommendedChannels.map((item, index) => (
                        <ProfileItem recommendedChannels open={leftDrawerOpen} item={item} />
                    ))}
                </List>


                {/* Right drawer content onto the left drawer on mobile */}
                {mobileScreen ? (
                    <React.Fragment>
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
