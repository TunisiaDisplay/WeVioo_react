import React, { useState, useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import dummyApi from '../api/dummyApi';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function MultipleSelect(props) {
  const [selectedTagList, setSelectedTagList] = useState([]);
  const [tags, setTags] = useState([]);


  useEffect(() => {
    const getTags = async () => {
      // tag api don't have params
      const response = await dummyApi.get('/tag/');

      // tag list is very long
      // put all of them on simple component can give a bad UX
      // we can put just a part of them on our component
      // some tags values are very long string we can take just the first 15 caracter for more better UX 
      // and we add an item that open a specific page to show all tags
      const tagsPart = response.data.data.slice(2, 8).map(tag => tag.substr(0, 15));

      // set state with the result
      setTags(tagsPart);
      //console.log(JSON.stringify(response.data));
    }

    getTags()
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    // console.log("_____tags____")
    // console.log(event);
    // console.log(value);

    /* 
      if one of the selected value contain the specific value _clear_all_
      we delete all selected tags
     */
    value.includes("_clear_all_") ?
      setSelectedTagList([]) :
      setSelectedTagList(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">{props.name || "Select Name"}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={selectedTagList}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {tags.map((tag) => (
          <MenuItem
            key={tag}
            value={tag}
          >
            {tag}
          </MenuItem>
        ))}

        {/* this option is added to clear all selected tags */}
        <MenuItem
          key={""}
          value={"_clear_all_"}
        >
          <em>Clear Tags</em>
        </MenuItem>


      </Select>
    </FormControl>
  );
}
