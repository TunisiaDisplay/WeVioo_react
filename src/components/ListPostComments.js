import React from "react";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


const ListPostComments = (props) => {

    return (
        <Stack spacing={2}>
            {
                !props.comments.length ?
                    <Paper>
                        List of comments is loading ...
                    </Paper>
                    :
                    props.comments.map(c => {
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