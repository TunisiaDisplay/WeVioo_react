import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "@mui/system";

import dummyApi from "../api/dummyApi";
import PostDetails from "../components/PostDetails";
import Loading from "../components/Loading";


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
                    <Loading />
                    :
                    <PostDetails details={postDetails} />
            }


        </Container>

    );
}

export default Detail;