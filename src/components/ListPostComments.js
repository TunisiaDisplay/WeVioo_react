import React from "react";
import { Grid } from "@mui/material";

const ListPostComments = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <text>List of comments</text>
            </Grid>
        </Grid>
    );
}

export default ListPostComments;