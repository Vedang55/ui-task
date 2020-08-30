import React from 'react';
import DrawerWrapper from '../../components/Home/DrawerWrapper/DrawerWrapper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles, Container, useTheme, withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import SocialMediaFollowers from '../../components/Home/SocialMediaFollowers/SocialMediaFollowers'

const useStyles = makeStyles(theme => ({
    root: {

    },
    banner: {
        display: 'grid',
        gridTemplateColumns: '80px 1.8fr 0.7fr',
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
    },
    followersContainers: {
        display: 'grid;',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '50px',
        gridRowGap: '20px'
    },
    tabsNav: {
        marginTop: 30
    },
}))

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: 'blue',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        opacity: 1,
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(17),
        minWidth: 0
    },
    selected: {
        color: '#9147ff',
    }

}))((props) => <Tab disableRipple {...props} />);

const Home = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <DrawerWrapper >

            <div className={classes.root}>
                <div className={classes.banner}>
                    <div>
                        <img className={classes.bannerImage} src={"https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"} />
                    </div>
                    <div style={{ backgroundColor: '#CCC', padding: theme.spacing(1, 3) }}>
                        <Typography variant='h4'>
                            <Box fontWeight={'600'}>
                                Pokimane
                        </Box>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Box fontWeight={'500'}>
                                Saas business coach
                        </Box>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Box fontWeight={'500'}>
                                Toronto Canada
                        </Box>
                        </Typography>

                        <div className={classes.followersContainers}>
                            <SocialMediaFollowers text="360k suscribers" image="https://www.northstar-alliance.org/wp-content/uploads/cache/2019/08/youtube-logo/609778702.jpg" />
                            <SocialMediaFollowers text="360k followers" image="https://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s1600/Twitter+logo+2012.png" />
                            <SocialMediaFollowers text="360k suscribers" image="https://www.northstar-alliance.org/wp-content/uploads/cache/2019/08/youtube-logo/609778702.jpg" />
                            <SocialMediaFollowers text="360k suscribers" image="https://www.northstar-alliance.org/wp-content/uploads/cache/2019/08/youtube-logo/609778702.jpg" />
                        </div>
                    </div>

                    <div style={{
                        justifySelf: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Button
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

                <div className={classes.tabsNav}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                        <StyledTab label="Home" />
                        <StyledTab label="About" />
                        <StyledTab label="AMA" />
                        <StyledTab label="Reviews" />
                    </StyledTabs>
                    <Typography className={classes.padding} />
                </div>
            </div >
        </DrawerWrapper >

    );
};

export default Home;