import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import dummyApi from "../api/dummyApi";
import PostDetails from "../components/PostDetails";
import Loading from "../components/Loading";
import ListPostComments from "../components/ListPostComments";
import SendPostComment from "../components/SendPostComment";
import AuthContext from "../store/auth-context";


const Detail = () => {

    let params = useParams();
    const navigate = useNavigate();

    const postId = params.id;
    const [postDetails, setPostDetails] = useState({});
    const [commentsList, setCommentsList] = useState([]);

    const ctxUser = useContext(AuthContext);




    useEffect(() => {
        const getPost = async () => {
            const response = await dummyApi.get(`/post/${postId}`);

            // set state with the result
            setPostDetails(response.data);
            console.log(JSON.stringify(response.data));
        }

        const getComments = async () => {
            const response = await dummyApi.get(`/post/${postId}/comment`);

            // set state with the result
            setCommentsList(response.data.data);
            console.log(JSON.stringify(response.data.data));
        }

        getPost()
            .catch(function (error) {
                console.log(error);
            });

        getComments()
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

                        <ListPostComments
                            comments={commentsList} />

                        <SendPostComment
                            id={postDetails.id}
                            userId={ctxUser.userId}
                            comments={commentsList}
                            onSuccess={setCommentsList}
                        />
                    </>
            }
        </Container>

    );
}

export default Detail;