import React from 'react';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

import './Comment.css'


const Comment = ({time, message, user, image, remove, update, key, id}) => {

  return (
    <div className="Comment">
      <Avatar alt={user} src={image} sx={{ width: 40, height: 40 }} />

      <div className='Comment-comment'>
        <p>{user ? user : 'Guest'}∙{moment(time).fromNow()}</p>
        <p>{message}</p>
      </div>
      <div>
        <button onClick={remove}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Comment;

