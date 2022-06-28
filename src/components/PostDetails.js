import React from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';



const PostDetails = (props) => {

    const postDetails = props.details;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>
                    detail page
                </h1>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <img loading="lazy" src={postDetails.image} alt="" />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <text>{postDetails.likes}</text>
            </Grid>
            <Grid item xs={6}>
                <text>{postDetails.publishDate}</text>
            </Grid>
            <Grid item xs={12}>
                <text>{postDetails.text}</text>
            </Grid>
            <Grid item xs={12}>
                {
                    postDetails.tags.map(tag => {
                        return (
                            <Chip key={tag} label={tag} />
                        )
                    })
                }
            </Grid>
            <Grid item xs={12}>
                <img src={postDetails.owner.picture} alt="" />
                <text>{postDetails.owner.title}</text>
                <text>{postDetails.owner.firstName}</text>
                <text>{postDetails.owner.lastName}</text>
            </Grid>
            
            
        </Grid>

    );
}

export default PostDetails;