import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

import PostCard from "../components/PostCard";
import MultipleSelect from "../components/MultipleSelect";
import SimpleSelect from "../components/SimpleSelect";

import dummyApi from "../api/dummyApi";


const Listing = () => {

    const [postList, setPostList] = useState({});
    const [page, setPage] = useState(0);

    const limit = 6;
    const totalPageNumber = postList.total/limit;

    useEffect(() => {
        // declare the async data fetching function
        const getPosts = async () => {
            // get the data from the api
            const response = await dummyApi.get('/post/', {
                params: {
                    page,
                    limit
                }
            });

            // set state with the result
            setPostList(response.data);
            //setTotal(response.data.total);
            console.log(JSON.stringify(response.data));
        }

        // call the function && make sure to catch any error
        getPosts()
            .catch(function (error) {
                console.log(error);
            });
    }, [page]);

    const handlePageChange = (event, value) => {
        //api page start from 0 but pagination value start from 1
        // we retrive 1 to not skip any page
        setPage(value-1);
      };

    return (
        <Container maxWidth="lg">
            <h1>
                listing page
            </h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SimpleSelect
                        name="Utilisateur"
                    />

                    <MultipleSelect
                        name="Tags"
                    />
                </Grid>

                {
                    // show infinite progress bar when the list is empty
                    !postList.data ?
                        <Grid item xs={12}>
                            <CircularProgress />
                        </Grid>
                        :
                        postList.data.map(post => {
                            return (
                                <Grid item xs={8} md={5} lg={4}>
                                    <PostCard post={post} />
                                </Grid>
                            );
                        })
                }

                <Grid item xs={12}>
                    {/* use function ciel instead of floor to see the last elements */}
                    <Pagination count={Math.ceil(totalPageNumber)} color="primary" onChange={handlePageChange} />
                </Grid>

            </Grid>


        </Container>

    );
}

export default Listing;

