import React from "react";

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ()=>{
    return(
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <CircularProgress />
        </Grid>
    </Grid>
    );
}

export default Loading;