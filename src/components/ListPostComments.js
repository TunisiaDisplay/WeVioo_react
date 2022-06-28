import React from "react";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


const ListPostComments = (props) => {

    return (
        <Stack spacing={2}>
            {
                !props.comments.length ?
                    <Chip
                        label="List of comments is loading ..."
                    />
                    :
                    props.comments.map(c => {
                        return (
                            <Chip label={c.message} />
                        )
                    })
            }
        </Stack>
    );
}

export default ListPostComments;