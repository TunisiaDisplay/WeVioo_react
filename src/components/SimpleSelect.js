import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const menu_items = [
    {
        "id": "60d0fe4f5311236168a10a0b",
        "firstName": "Margarita",
        "lastName": "Vicente"
    },
    {
        "id": "60d0fe4f5311236168a109ed",
        "firstName": "Kayla",
        "lastName": "Bredesen"
    },
    {
        "id": "60d0fe4f5311236168a109d5",
        "firstName": "Sibylle",
        "lastName": "Leibold"
    }
];

export default function SimpleSelect(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{props.name || "select name"}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    menu_items.map(m_item => {
                        return(
                            <MenuItem value={m_item.id}>{m_item.firstName + m_item.lastName}</MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>

    );
}
