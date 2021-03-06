import React from 'react';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import StarBorder from '@material-ui/icons/StarBorder';
import Chat from '@material-ui/icons/Chat';
import colors from '../../assets/styling/colors'
import Rating from '@material-ui/lab/Rating';

//data
import UserContent from '../../assets/data/Home/Usercontent'
import UserProfile from '../../assets/data/Home/UserProfile'


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

const ContentBox = (props) => {
    const item = props.item
    return (
        <div
            style={{ padding: 0 }}
            {...props}>
            <img style={{
                width: "100%",
                height: '75%',
                objectFit: 'cover'
            }}
                src={item.thumbnail} />

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                <Typography gutterBottom variant="subtitle2">
                    {item.title}
                </Typography>

                <Typography variant="subtitle2">
                    {item.category}
                </Typography>
            </div>
        </div>
    )
}


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
            height: '22em',
            minHeight: 280,
            [theme.breakpoints.down('md')]: {
                // height: 300
            }
        },
        [theme.breakpoints.down('xs')]: {
            gridGap: theme.spacing(5)
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
        "&:hover": {
            backgroundColor: colors.accent
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

                        {[...UserProfile.aboutMe].splice(0, 4).map(item => {
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
                        <Rating name="read-only" value={UserProfile.review.stars} readOnly />
                        </Typography>
                        <Typography variant="h5">
                            {UserProfile.review.text}
                        </Typography>
                        <ReadMoreButton />
                    </div>
                </div>

                <div className={[classes.contentContainer, classes.gridContanier].join(" ")}>
                    {UserContent.map(item => {
                        return (
                            <ContentBox item={item} className={classes.overviewBoxes} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomeTab;