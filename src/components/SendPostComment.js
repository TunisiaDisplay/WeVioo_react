import React, { useState } from "react";

import { Button, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';

import dummyApi from "../api/dummyApi";


const SendPostComment = (props) => {

    const [msg, setMsg] = useState("");

    const onChangeHandler = (event) => {
        setMsg(event.target.value);
    }

    const sendCommentHandler = () => {
        //console.log('____send comment___');
        //console.log(msg);

        const saveComment = async () => {
            let newMsg = await dummyApi.post("/comment/create", {
                "message": msg,
                "owner": "60d0fe4f5311236168a109ca",
                "post": props.id
            });

            console.log("comment added with success");
            //console.log(newMsg.data);

            // simple solution to reload the list of comment on parent componet
            // for better UX
            // add the new msg @ the first position to be listed
            props.onSuccess([newMsg.data,...props.comments]);

            // reset the message text field
            setMsg("");

        }

        saveComment()
            .catch(error => console.log(error));
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