import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import dummyApi from "../api/dummyApi";
import PostDetails from "../components/PostDetails";
import Loading from "../components/Loading";
import ListPostComments from "../components/ListPostComments";
import SendPostComment from "../components/SendPostComment";


const Detail = () => {

    let params = useParams();
    const navigate = useNavigate();

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

            <Button onClick={() => navigate(-1, { replace: true })} variant="contained" endIcon={<SendIcon />}>
                Back
            </Button>

            {
                !postDetails.id ?
                    <Loading />
                    :
                    <>
                        <PostDetails details={postDetails} />
                        <ListPostComments id={postDetails.id} />
                        <SendPostComment id={postDetails.id} />
                    </>
            }


        </Container>

    );
}

export default Detail;