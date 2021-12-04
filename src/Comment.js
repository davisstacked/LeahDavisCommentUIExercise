import React from 'react';
import { pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import moment from 'moment';

import './Comment.css'


const Comment = ({time, message, user, image}) => {

  return (
    <div className="Comment">
      <Avatar alt={user} src={image} sx={{ width: 40, height: 40 }} />
      {/* <Avatar sx={{ bgcolor: pink[500] }}>
        <CameraAltIcon />
      </Avatar> */}

      <div className='Comment-comment'>
        <p>{user}∙{moment(time).fromNow()}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Comment;

