import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const static_post = {
    "id": "60d21b4667d0d8992e610c85",
    "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
    "likes": 43,
    "link": "https://www.instagram.com/teddyosterblomphoto/",
    "tags": [
        "animal",
        "dog",
        "golden retriever"
    ],
    "text": "adult Labrador retriever",
    "publishDate": "2020-05-24T14:53:17.598Z",
    "owner": {
        "id": "60d0fe4f5311236168a109ca",
        "title": "ms",
        "firstName": "Sara",
        "lastName": "Andersen",
        "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    }
};



const Detail = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>
                    detail page
                </h1>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <img src={static_post.image} alt="" />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <text>{static_post.likes}</text>
            </Grid>
            <Grid item xs={6}>
                <text>{static_post.publishDate}</text>
            </Grid>
            <Grid item xs={12}>
                <text>{static_post.text}</text>
            </Grid>
            <Grid item xs={12}>
                {
                    static_post.tags.map(tag => {
                        return (
                            <text>{tag}</text>
                        )
                    })
                }
            </Grid>
            <Grid item xs={12}>
                <img src={static_post.owner.picture} alt="" />
                <text>{static_post.owner.title}</text>
                <text>{static_post.owner.firstName}</text>
                <text>{static_post.owner.lastName}</text>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
            </Grid>
            <Grid item xs={12}>
                <text>List of comments</text>
            </Grid>
        </Grid>

    );
}

export default Detail;

