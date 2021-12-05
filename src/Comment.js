import React, { useContext } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import classNames from 'classnames';

import './Comment.css';

const Comment = ({
  time,
  message,
  user,
  image,
  remove,
  update,
  undo,
  id,
  key,
  hidden,
}) => {

  const { setHoveredCommentId, hoveredCommentId } = useContext(CommentContext);

  const showPopup = (id) => {
    setHoveredCommentId(id);
  };

  // // Conditionally displays the delete and edit buttons.
  const editAndDelete = classNames({
    "Comment-popup": true,
    "hidden": hoveredCommentId !== id
  })

  return (
    <div onMouseEnter={() => showPopup(id)} className='Comment'>
      <div className='Comment-comment'>
        <Avatar alt={user} src={image} sx={{ width: 40, height: 40 }} />

        <div className='Comment-message'>
          <p>
            {user ? user : 'Guest'}∙{moment(time).fromNow()}
          </p>
          <p>{message}</p>
        </div>
      </div>
      <div className={editAndDelete}>
        <button onClick={remove}>Delete</button>
        <button onClick={update}>Edit</button>
        <button onClick={undo}>Undo</button>
      </div>
    </div>
  );
};

export default Comment;
