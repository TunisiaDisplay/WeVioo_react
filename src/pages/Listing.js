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

    const [selectedUser, setSelectedUser] = useState();
    const [selectedTags, setSelectedTags] = useState([]);

    const limit = 6;
    const totalPageNumber = (postList.total || 0) / limit;

    useEffect(() => {
        // declare the async data fetching function
        const getPosts = async () => {

            const api_targert = selectedUser ? `/user/${selectedUser}/post` : '/post/' ;
            // get the data from the api
            const response = await dummyApi.get(api_targert, {
                params: {
                    page,
                    limit
                }
            });

            // set state with the result
            setPostList(response.data);
            //console.log(JSON.stringify(response.data));
        }

        // call the function && make sure to catch any error
        getPosts()
            .catch(function (error) {
                console.log(error);
            });
            
    }, [page,selectedUser]);


    useEffect(()=>{
        console.log('_________tag list change _____');
        console.log(selectedTags);

        
        // declare the async data fetching function
        const getPosts = async () => {

            // dummyApi accept just one id 
            // here we take just the first tag
            // we can discuss how we handle the filter change:
            //      * we clear a filter wen the other is change
            //      * we make two request to the api and we combine and fiter the result
            //      * we handle muti request parameters on backend code if we have the permission to do
            //      ....
            

            const api_targert = selectedTags ? `/tag/${selectedTags[0]}/post` : '/post/' ;
            // get the data from the api
            const response = await dummyApi.get(api_targert, {
                params: {
                    page,
                    limit
                }
            });

            // set state with the result
            setPostList(response.data);
            //console.log(JSON.stringify(response.data));
        }

        //  _____________________________*******this feature is incompleted & desactivated*******
        // remove the block comment to try it
        // we need to choose to resolve it on backend or frontend part

        /* getPosts()
            .catch(function (error) {
                console.log(error);
            }); */
    },[selectedTags,page]);

    const handlePageChange = (event, value) => {
        //api page start from 0 but pagination value start from 1
        // we retrive 1 to not skip any page
        setPage(value - 1);
    };

    
    // const handleUserChange = (event, value)=>{
    //     console.log("______user changed______");
    //     console.log(event.target.value);
    //     //console.log(event);
    //     //console.log(value);
    // };


    return (
        <Container maxWidth="lg">
            <h1>
                listing page
            </h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <SimpleSelect
                        name="Utilisateur"
                        onChangeHandler={setSelectedUser}
                    />

                    <MultipleSelect
                        name="Tags"
                        onChangeHandler={setSelectedTags}
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
                                <Grid item key={post.id} xs={8} md={5} lg={4}>
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

