import React from 'react';
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core';

const SocialMediaFollowers = (props) => {
    return (
        <div style={{ display: 'flex', marginRight: 20, marginBottom: 10, marginTop: 10, alignItems: "center" }}>
            <img style={{
                width: 25,
                height: 25,
                marginRight: 10,
                objectFit: "contain"
            }} src={props.image} />

            <Typography noWrap variant="caption">
                <Box fontWeight='500'>
                    {props.text}
                </Box>
            </Typography>
        </div>
    );
};

export default SocialMediaFollowers;