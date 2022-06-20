import React from "react";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import PostCard from "../components/PostCard";


const Listing = () => {

    return (
        <Container maxWidth="lg">
            <h1>
                listing page
            </h1>
            <Grid container spacing={2}>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard />
                </Grid>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard img="/img/paella.jpg" />
                </Grid>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard />
                </Grid>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard img="/img/paella.jpg" />
                </Grid>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard />
                </Grid>
                <Grid item xs={8} md={5} lg={4}>
                    <PostCard img="/img/paella.jpg" />
                </Grid>
                <Grid item xs={12}>
                    <Pagination count={10} color="primary" />
                </Grid>
            </Grid>


        </Container>

    );
}

export default Listing;

