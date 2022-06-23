import React, { useState, useEffect } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dummyApi from '../api/dummyApi';

export default function SimpleSelect(props) {
    const [user, setUser] = useState('');
    const [userList, setUserList] = useState({});

    useEffect(() => {
        const getUsers = async () => {
            const response = await dummyApi.get('/user/', {
                params: {
                    page: "0",
                    limit: "5"
                }
            });

            // set state with the result
            setUserList(response.data);
            //console.log(JSON.stringify(response.data));
        }

        getUsers()
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const handleChange = (event) => {
        //console.log(event.target.value);

        // change list value of this list
        setUser(event.target.value);

        // change the selected user on parent component
        props.onChangeHandler(event.target.value);
    };



    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{props.name || "select name"}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={user}
                onChange={handleChange}
                label="User"
            >
                {/* All User option is created to clear the filter */}
                <MenuItem value="">
                    <em>All Users ...</em>
                </MenuItem>

                {
                    // if the user list is empty we render None item
                    // else we create an item for each element on the list
                    !userList.data ?
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        :
                        userList.data.map(user => {
                            return (
                                <MenuItem
                                    key={user.id}
                                    value={user.id}
                                >
                                    {user.firstName + user.lastName}
                                </MenuItem>
                            );
                        })
                }

                {/*
                    the list of user can be very long
                    if we try to create a item for each one of them it can make a bad UX
                    we can discuss many solutions and try them
                    (Other User) option is one of them, it's added to open an other page that containe all user saved on DB
                    this feature is not created yet
                */}
                <MenuItem value="">
                    <em>Other Users ...</em>
                </MenuItem>
            </Select>
        </FormControl>

    );
}
