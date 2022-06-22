import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

import dummyApi from "../api/dummyApi";


const Detail = () => {

    let params = useParams();

    const postId = params.id;
    const [postDetails, setPostDetails] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await dummyApi.get(`/post/${postId}`);

            // set state with the result
            setPostDetails(response.data);
            console.log(JSON.stringify(response.data));
        }

        getPost()
            .catch(function (error) {
                console.log(error);
            });


    }, [postId]);

    return (
        <Container maxWidth="lg">
            <h1>
                listing page
            </h1>

            {
                !postDetails.id ?
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CircularProgress />
                        </Grid>
                    </Grid>

                    :
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <h1>
                                detail page
                            </h1>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>
                                <img src={postDetails.image} alt="" />
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
                                        <text>{tag}</text>
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
            }


        </Container>

    );
}

export default Detail;

