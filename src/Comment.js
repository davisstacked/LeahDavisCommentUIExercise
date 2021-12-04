import React from 'react';
import { pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const Comment = ({time, message, user, image}) => {

  return (
    <div>
      <Avatar alt={user} src={image} />
      {/* <Avatar sx={{ bgcolor: pink[500] }}>
        <CameraAltIcon />
      </Avatar> */}

      <p>{user}</p>
    </div>
  );
}

export default Comment;

