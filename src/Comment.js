import React, { useContext, useState, useRef } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import classNames from 'classnames';

import './Comment.css';

const Comment = ({ time, message, user, image, id}) => {
  const {
    setHoveredCommentId,
    hoveredCommentId,
    removeComment,
    updateComment,
  } = useContext(CommentContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const [edit, setEdit] = useState(false);
  const [newMessage, setNewMessage] = useState(message);
  
  // Conditionally displays the delete, edit, and undo buttons using classNames.
  const editAndDelete = classNames('Comment-popup', {
    hidden: hoveredCommentId !== id,
    hidden: isDeleting === true,
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

  // ************* DELETE AND UNDO ***************
  // useRef in setTimeout to retrieve current state.
  // https://medium.com/programming-essentials/how-to-access-the-state-in-settimeout-inside-a-react-function-component-39a9f031c76f
  const isDeletingRef = useRef(isDeleting);
  isDeletingRef.current = isDeleting;

  const handleDelete = () => {
    setIsDeleting(true);
 
    setTimeout(() => {
      if (isDeletingRef.current) {
        console.log('Inside conditional');
        removeComment(id);
      }
    }, 1000);
  };

  const undo = () => {
    setIsDeleting(false);
  };
 
// *************** EDIT **********************
  const handleUpdate = (e) => {
    e.preventDefault();
    // take new comment and pass up to Context.
    updateComment(id, newMessage);
    setEdit(false);
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const toggleForm = () => {
    setEdit(!edit);
  };


  // Conditionally renders based on Edit state either a form or the comment
  if (edit) {
    return (
      <div className='Comment'>
        <form className='Comment-edit-form' onSubmit={handleUpdate}>
          <textarea type='text' value={newMessage} name='message' onChange={handleChange} />
          <button onClick={handleUpdate}>Save</button>
        </form>
      </div>
    );
  } else {
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
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleForm}>Edit</button>
        </div>
        <div className={showUndo}>
          <button onClick={undo}>Undo</button>
        </div>
      </div>
    );
  }

};

export default Comment;
