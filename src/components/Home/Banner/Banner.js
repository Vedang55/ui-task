import React from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles, Container, useTheme, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';
import colors from '../../../assets/styling/colors'

//data import
import UserProfile from '../../../assets/data/Home/UserProfile'


import SocialMediaFollowers from '../SocialMediaFollowers/SocialMediaFollowers'

const useStyles = makeStyles(theme => ({
    banner: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            flexDirection: 'column',
        },

        "& > div:nth-child(1)": {
            alignSelf: 'center',
            marginRight: 30,
            width: 80,
            [theme.breakpoints.down('sm')]: {
                marginRight: 0
            },
            flexShrink: 0
        },
        "& > div:nth-child(2)": {
            flexGrow: 5,
            backgroundColor: '#CCC', padding: theme.spacing(1, 3)
        },
        "& > div:nth-child(3)": {
            flexGrow: 2.5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'row'
            },
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column'
            }
        },
    },


    bannerImage: {
        width: '100%',
        maxWidth: '80px',
        objectFit: 'contain',

    },
    button: {
        backgroundColor: colors.accent,
        display: 'flex',
        justifyContent: 'flex-start',
        padding: theme.spacing(1, 2),
        margin: theme.spacing(1, 2),
        borderRadius: 0,
        minWidth: '13em',
        color: 'black',
        "& .buttonText": {
            color: 'white'
        },
        "&:hover": {
            backgroundColor: colors.accent
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8em'
        }
    },
    followersContainers: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    tabsNav: {
        marginTop: 30
    },
}))


const Home = () => {
    const classes = useStyles()
    const theme = useTheme()

    return (

        <div className={classes.banner}>
            <div>
                <img className={classes.bannerImage} src={UserProfile.details.image} />
            </div>
            <div>
                <Typography variant='h4'>
                    <Box fontWeight={'600'}>
                        {UserProfile.details.name}
                    </Box>
                </Typography>
                <Typography variant='subtitle1'>
                    <Box fontWeight={'500'}>
                        {UserProfile.details.title}
                    </Box>
                </Typography>
                <Typography variant='subtitle1'>
                    <Box fontWeight={'500'}>
                        {UserProfile.details.location}
                    </Box>
                </Typography>

                <div className={classes.followersContainers}>
                    {UserProfile.followers.map(item => <SocialMediaFollowers key={item.text + item.image} text={item.text} image={item.image} />)}
                </div>
            </div>

            <div className={classes.buttonContainer}>
                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<StarBorder />}
                >
                    <span className={'buttonText'}>
                        Subscribe
                        </span>
                </Button>

                <Button
                    variant="contained"
                    className={classes.button}
                    startIcon={<Chat />}
                >
                    <span className={'buttonText'}>
                        Send Message
                        </span>
                </Button>
            </div>

        </div>


    );
};


export default React.memo(Home);