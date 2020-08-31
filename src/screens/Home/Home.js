import React from 'react';
import DrawerWrapper from '../../components/Home/DrawerWrapper/DrawerWrapper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Container, useTheme, withStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Banner from '../../components/Home/Banner/Banner'
import HomeTab from './HomeTab';

const useStyles = makeStyles(theme => ({
    root: {

    },
    tabsNav: {
        marginTop: 30,
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
        minWidth: 0,
        fontSize: theme.typography.pxToRem(17),
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
        }
    },
    selected: {
        color: '#9147ff',
    }

}))((props) => <Tab disableRipple {...props} />);

const Home = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <DrawerWrapper >

            <div className={classes.root}>
                {/* Profile Banner */}
                <Banner />
                <div className={classes.tabsNav}>
                    <StyledTabs value={currentTab} variant="scrollable"
                        scrollButtons="auto" onChange={handleTabChange} aria-label="styled tabs example">
                        <StyledTab label="Home" />
                        <StyledTab label="About" />
                        <StyledTab label="AMA" />
                        <StyledTab label="Reviews" />
                    </StyledTabs>
                    <Typography className={classes.padding} />
                    {currentTab === 0 ? <HomeTab /> : null}

                </div>

            </div >
        </DrawerWrapper >

    );
};

export default Home;