import React, {useState } from "react";

import { Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';

const SendPostComment = (props) => {

    const [msg, setMsg] = useState("");

    const onChangeHandler = (event) => {
        setMsg(event.target.value);
    }

    const sendCommentHandler = () => {
        console.log('____send comment___');
        console.log(msg);
    }


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    value={msg}
                    onChange={onChangeHandler}
                />
                <Button onClick={sendCommentHandler} >send</Button>
            </Grid>
        </Grid >
    );
}

export default SendPostComment;