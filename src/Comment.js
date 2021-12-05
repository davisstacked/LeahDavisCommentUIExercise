import React, { useContext, useState } from 'react';
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
  // update,
  // undo,
  id,
  key,
  hidden,
}) => {
  const {
    setHoveredCommentId,
    hoveredCommentId,
    removeComment,
    updateComment,
    setDeletingCommentId,
  } = useContext(CommentContext);

  const [isDeleting, setIsDeleting] = useState(false);

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

  // undo method
  const undo = () => {
    setIsDeleting(false);
    setDeletingCommentId('');
  };

  const triggerDelete = () => {
    setDeletingCommentId(id);
    // set the state to 'deleting
    setIsDeleting(true);
    // timeout -- after 5 seconds, sets stated to "hidden"

    // setTimeout(() => {
    //   // TO RESEARCH: why doesn't setTimeout know the current State?
    //   // How can it know the current state?
    //   removeComment();
    // }, 1000);
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
