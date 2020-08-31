import React from 'react';
import DrawerWrapper from '../../components/Home/DrawerWrapper/DrawerWrapper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { makeStyles, Container, useTheme, withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';

import Banner from '../../components/Home/Banner/Banner'

const useStyles = makeStyles(theme => ({
    root: {

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
        }
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
                <Banner />

                <div className={classes.tabsNav}>
                    {/* <StyledTabs value={value} variant="scrollable"
                        scrollButtons="auto" onChange={handleChange} aria-label="styled tabs example">
                        <StyledTab label="Home" />
                        <StyledTab label="About" />
                        <StyledTab label="AMA" />
                        <StyledTab label="Reviews" />
                    </StyledTabs> */}
                    <Typography className={classes.padding} />
                    {/* <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        <Tab label="Item Four" {...a11yProps(3)} />
                        <Tab label="Item Five" {...a11yProps(4)} />
                        <Tab label="Item Six" {...a11yProps(5)} />
                        <Tab label="Item Seven" {...a11yProps(6)} />
                    </Tabs> */}


                </div>

            </div >
        </DrawerWrapper >

    );
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default Home;