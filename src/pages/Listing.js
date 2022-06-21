import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

import PostCard from "../components/PostCard";
import MultipleSelect from "../components/MultipleSelect";
import SimpleSelect from "../components/SimpleSelect";

import dummyApi from "../api/dummyApi";

/*
const postList = {
    "data": [
        {
            "id": "60d21b4667d0d8992e610c85",
            "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
            "likes": 43,
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
        },
        {
            "id": "60d21b4967d0d8992e610c90",
            "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
            "likes": 31,
            "tags": [
                "snow",
                "ice",
                "mountain"
            ],
            "text": "ice caves in the wild landscape photo of ice near ...",
            "publishDate": "2020-05-24T07:44:17.738Z",
            "owner": {
                "id": "60d0fe4f5311236168a10a0b",
                "title": "miss",
                "firstName": "Margarita",
                "lastName": "Vicente",
                "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
            }
        },
        {
            "id": "60d21b8667d0d8992e610d3f",
            "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
            "likes": 16,
            "tags": [
                "dog",
                "pet",
                "canine"
            ],
            "text": "@adventure.yuki frozen grass short-coated black do...",
            "publishDate": "2020-05-24T05:44:55.297Z",
            "owner": {
                "id": "60d0fe4f5311236168a109ed",
                "title": "miss",
                "firstName": "Kayla",
                "lastName": "Bredesen",
                "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
            }
        },
        {
            "id": "60d21b3a67d0d8992e610c60",
            "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
            "likes": 7,
            "tags": [
                "canine",
                "pet",
                "mammal"
            ],
            "text": "Hiking with my dog in the woods. black labrador re...",
            "publishDate": "2020-05-23T22:56:11.424Z",
            "owner": {
                "id": "60d0fe4f5311236168a109d5",
                "title": "mrs",
                "firstName": "Sibylle",
                "lastName": "Leibold",
                "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
            }
        },
        {
            "id": "60d21bf967d0d8992e610e9b",
            "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
            "likes": 28,
            "tags": [
                "dog",
                "human",
                "animal"
            ],
            "text": "Two boys hug their dogs in a leaf pile in the fall...",
            "publishDate": "2020-05-23T18:52:32.613Z",
            "owner": {
                "id": "60d0fe4f5311236168a109f7",
                "title": "mrs",
                "firstName": "Jolanda",
                "lastName": "Lacroix",
                "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
            }
        },
        {
            "id": "60d21b7d67d0d8992e610d25",
            "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
            "likes": 18,
            "tags": [
                "dog",
                "animal",
                "pet"
            ],
            "text": "Bone salt and pepper schnauzer puppy",
            "publishDate": "2020-05-23T14:42:22.808Z",
            "owner": {
                "id": "60d0fe4f5311236168a109e4",
                "title": "mr",
                "firstName": "Pwry",
                "lastName": "Shylyrd",
                "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
            }
        },
    ],
    "total": 873,
    "page": 0,
    "limit": 6
};
*/

const Listing = () => {

    const [postList, setPostList] = useState({});
    const [page, setPage] = useState(0);

    const limit = 6;

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
        setPage(value);
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
                    <Pagination count={10} color="primary" onChange={handlePageChange} />
                </Grid>

            </Grid>


        </Container>

    );
}

export default Listing;

