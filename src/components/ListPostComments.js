import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


import dummyApi from "../api/dummyApi";

const ListPostComments = (props) => {

    const { id } = props;
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await dummyApi.get(`/post/${id}/comment`);

            // set state with the result
            setCommentsList(response.data);
            console.log(JSON.stringify(response.data));
        }

        getComments()
            .catch(function (error) {
                console.log(error);
            });

    }, [id]);


    return (
        <Stack spacing={2}>
            {
                !commentsList.data ?
                    <Paper>
                        List of comments is loading ...
                    </Paper>
                    :
                    commentsList.data.map(c => {
                        return (
                            <Paper key={c.id}>
                                {c.message}
                            </Paper>
                        )
                    })
            }
        </Stack>
    );
}

export default ListPostComments;