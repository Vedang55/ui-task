import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';
import colors from '../../assets/styling/colors'
import Rating from '@material-ui/lab/Rating';


const ReadMoreButton = () => {
    return (
        <Typography style={{
            position: "absolute",
            right: 10,
            bottom: 10
        }}>
            Read More...
        </Typography>
    );
};


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(3),

    },

    gridContanier: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: theme.spacing(10),
        gridRowGap: theme.spacing(10),
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        backgroundColor: "white",
        "& > div": {
            height: 280,
            [theme.breakpoints.down('md')]: {
                // height: 300
            }
        },
        [theme.breakpoints.down('lg')]: {

        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        },
    },

    overviewRow: {

        "& > div:nth-child(1)": {
            backgroundImage: `url(https://camo.githubusercontent.com/22f902f38e11536e88b7755a73280ceb13279adb/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067)`,
            objectFit: 'center',
            backgroundSize: 'contain',
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'center'
        },
        "& > div:nth-child(2)": {

        }
    },
    overviewBoxes: {
        padding: theme.spacing(2, 4),
        backgroundColor: '#DDD',
        position: 'relative'
    },

    bookSlotButton: {
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
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8em'
        },
    },



    contentContainer: {
        marginTop: theme.spacing(10),
    }

}))

const HomeTab = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <Typography variant="h6">
                Connect With Me
            </Typography>
            <div style={{ backgroundColor: 'white' }}>
                <div className={[classes.overviewRow, classes.gridContanier].join(" ")}>
                    <div>
                        <Button
                            variant="text"
                            className={classes.bookSlotButton}
                            startIcon={<Chat />}
                        >
                            <span className={'buttonText'}>
                                Book A slot
                        </span>
                        </Button>
                    </div>

                    <div className={classes.overviewBoxes}>
                        <Typography style={{ color: colors.accent, marginBottom: theme.spacing(2) }} variant="h5">
                            About Me
                    </Typography>

                        {["Marketing", "Startups", "Early Stage Funding", "Product Design"].map(item => {
                            return (<Typography variant="h5" gutterBottom>
                                {item}
                            </Typography>
                            )
                        })}
                        <ReadMoreButton />

                    </div>
                    <div className={classes.overviewBoxes}>
                        <Typography style={{ color: colors.accent, marginBottom: theme.spacing(2), display: 'flex', justifyContent: 'space-between' }} variant="h5">
                            Reviews
                        <Rating name="read-only" value={4} readOnly />
                        </Typography>
                        <Typography variant="h5">
                            Mike has worked out a brilliant model for quity sharing., he's got an answer for everything
                        </Typography>
                        <ReadMoreButton />
                    </div>
                </div>

                <div className={[classes.contentContainer, classes.gridContanier].join(" ")}>
                    <div className={classes.overviewBoxes}></div>
                    <div className={classes.overviewBoxes}></div>
                    <div className={classes.overviewBoxes}></div>    <div className={classes.overviewBoxes}></div>

                </div>
            </div>
        </div>
    );
};

export default HomeTab;