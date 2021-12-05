import React, { useContext, useState, useRef } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import classNames from 'classnames';

import './Comment.css';

const Comment = ({ time, message, user, image, id, key, hidden }) => {
  const {
    setHoveredCommentId,
    hoveredCommentId,
    removeComment,
    updateComment,
  } = useContext(CommentContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const isDeletingRef = useRef(isDeleting);
  isDeletingRef.current = isDeleting;

  // // Conditionally displays the delete and edit buttons.
  const editAndDelete = classNames('Comment-popup', {
    hidden: hoveredCommentId !== id,
  });

  const showUndo = classNames('Comment-undo', {
    hidden: !isDeleting,
  });

  const commentText = classNames('Comment-comment', {
    hidden: isDeleting,
  });

  const showPopup = (id) => {
    setHoveredCommentId(id);
  };

  const undo = () => {
    setIsDeleting(false);
  };

  const triggerDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      if (isDeletingRef.current) {
        console.log('Inside conditional');
        removeComment(id);
      }
    }, 1000);
  };

  return (
    <div onMouseEnter={() => showPopup(id)} className='Comment'>
      <div className={commentText}>
        <Avatar alt={user} src={image} sx={{ width: 40, height: 40 }} />

        <div className='Comment-message'>
          <p>
            {user ? user : 'Guest'}∙{moment(time).fromNow()}
          </p>
          <p>{message}</p>
        </div>
      </div>
      <div className={editAndDelete}>
        <button onClick={triggerDelete}>Delete</button>
        <button onClick={updateComment}>Edit</button>
      </div>
      <div className={showUndo}>
        <button onClick={undo}>Undo</button>
      </div>
    </div>
  );
};

export default Comment;
