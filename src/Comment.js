import React, { useContext, useState, useRef } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import classNames from 'classnames';

import './Comment.css';
import './form.css';

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
    }, 5000);
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

  // Conditionally disable button if user is typing
  const typing = newMessage.length > 0;
  const buttonOnOff = classNames('form-button', {
    formButtonDisabled: !typing,
    formButtonAbled: typing,
  });

  // Conditionally renders based on Edit state either a form or the comment
  if (edit) {
    return (
      <form className='CommentEditForm form' onSubmit={handleUpdate}>
        <Avatar alt={user} src={image} sx={{ width: 40, height: 40 }} />
        <div className='form-container'>
          <textarea
            className='form-text-area'
            type='text'
            value={newMessage}
            name='message'
            onChange={handleChange}
          />
          <button className={buttonOnOff} onClick={handleUpdate}>
            Save comment
          </button>
        </div>
      </form>
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
