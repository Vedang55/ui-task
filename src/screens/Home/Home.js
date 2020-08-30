import React from 'react';
import DrawerWrapper from '../../components/Home/DrawerWrapper/DrawerWrapper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Container, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
    root: {

    },
    banner: {
        display: 'grid',
        gridTemplateColumns: '0.1fr 1.8fr 0.7fr',
        gridTemplateRows: '1fr',
        gap: '30px',
        alignItems: 'center'
    },
    bannerImage: {
        width: '100%'
    },
    button: {
        backgroundColor: '#9147ff',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: theme.spacing(1, 2),
        borderRadius: 0,
        color: 'black',
        "& .buttonText": {
            color: 'white'
        }
    }
}))

const Home = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <DrawerWrapper >
            <div className={classes.banner}>
                <div>
                    <img className={classes.bannerImage} src={"https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"} />
                </div>
                <div style={{ backgroundColor: '#CCC', padding: theme.spacing(1, 3) }}>
                    <Typography variant='h3'>
                        Pokimane
                    </Typography>
                    <Typography variant='subtitle1'>
                        Pokimane
                    </Typography>
                    <Typography variant='subtitle1'>
                        Toronto Canada
                    </Typography>
                </div>

                <div style={{
                    justifySelf: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Button
                        fullWidth
                        variant="text"
                        className={classes.button}
                        startIcon={<StarBorder />}
                        style={{ marginBottom: 20 }}
                    >
                        <span className={'buttonText'}>
                            Subscribe
                        </span>
                    </Button>

                    <Button
                        fullWidth
                        variant="text"
                        className={classes.button}
                        startIcon={<Chat />}
                    >
                        <span className={'buttonText'}>
                            Send Message
                        </span>
                    </Button>
                </div>

            </div>
            <div className={classes.root}>

            </div >
        </DrawerWrapper >

    );
};

export default Home;