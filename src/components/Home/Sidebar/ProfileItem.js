import React from 'react';

import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    profileImage: {
        marginRight: theme.spacing(2),
        width: 40,
        [theme.breakpoints.down('xs')]: {
            width: 30
        }
    },
    openSection: {
        display: 'flex',
        flexGrow: 1
    }
}))

const ProfileItem = (props) => {
    const open = props.open
    const classes = useStyles();
    const theme = useTheme();
    const item = props.item
    const followedChannels = props.followedChannels
    return (
        <ListItem
            className={classes.root}
            button key={props.text}>
            <div>
                <img
                    className={classes.profileImage}
                    src={item.image ? item.image : "https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png"} />
            </div>

            <div className={classes.openSection}>
                <div style={{ flexGrow: 1 }}>
                    <Typography>
                        {item.user}
                    </Typography>
                    <Typography variant="caption">
                        {followedChannels ? `${item.newVideos} new videos` : item.category}
                    </Typography>
                </div>

                <Typography variant="caption">
                    {followedChannels ? (item.status ? "Online" : "Offline") : (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div style={{ height: 10, width: 10, backgroundColor: 'red', marginRight: 5 }}></div>
                            <span>{item.count}</span>
                        </div>
                    )}
                </Typography>

            </div>


        </ListItem>
    );
};

export default ProfileItem;