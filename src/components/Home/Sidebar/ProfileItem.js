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
    return (
        <ListItem
            className={classes.root}
            button key={props.text}>
            <div>
                <img
                    className={classes.profileImage}
                    src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png" />
            </div>

            <div className={classes.openSection}>
                <div style={{ flexGrow: 1 }}>
                    <Typography>
                        pokimane
                        </Typography>
                    <Typography variant="caption">
                        5 new videos
                        </Typography>
                </div>

                <div>
                    <Typography variant="caption">
                        Offline
                        </Typography>
                </div>
            </div>


        </ListItem>
    );
};

export default ProfileItem;