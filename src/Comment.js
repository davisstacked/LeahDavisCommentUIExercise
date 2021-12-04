import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const Comment = ({time, message, user}) => {

  return (
    <div>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <p>{user}</p>
    </div>
  );
}

export default Comment;

