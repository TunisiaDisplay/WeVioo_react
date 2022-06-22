import React from "react";

import { Grid } from "@mui/material";
import TextField from '@mui/material/TextField';


const SendPostComment = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
            </Grid>
        </Grid >
    );
}

export default SendPostComment;