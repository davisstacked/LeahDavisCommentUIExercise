import React, { useContext, useState, useRef } from 'react';
import CommentContext from '../context/CommentContext';
import EditIcon from '../assets/EditIcon';
import DeleteIcon from '../assets/DeleteIcon';
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
  const commentPopup = classNames('Comment-popup', {
    hidden: hoveredCommentId !== id || isDeleting,
  });

  const commentUndo = classNames('Comment-undo', {
    hidden: !isDeleting,
  });

  const commentComment = classNames('Comment-comment', {
    hidden: isDeleting,
  });

  // Opens the edit and delete pop-up 
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
  const formButton = classNames('form-button', {
    formButtonDisabled: !typing,
    formButtonAbled: typing,
  });

  // Conditionally renders based on Edit state either a form or the comment
  if (edit) {
    return (
      <form className='EditForm form' onSubmit={handleUpdate}>
        <img className="EditForm-avatar"alt={user} src={image} sx={{ width: 40, height: 40 }} />
        <div className='EditForm-container form-container'>
          <textarea
            className='EditForm-text-area form-text-area'
            type='text'
            value={newMessage}
            name='message'
            onChange={handleChange}
          />
          <button className={formButton} onClick={handleUpdate}>
            Save comment
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <div className='Comment' onMouseEnter={() => showPopup(id)}>
        <div className={commentComment}>
          <img
            className='Comment-avatar'
            alt={user}
            src={image}
          />

          <div className='Comment-text'>
            <p
              className='Comment-username-wrapper'
            >
              <span
                className='Comment-username' 
              >{user ? user : 'Guest'}
              </span>∙
              <span
                className='Comment-time-posted'
              >
                {moment(time).fromNow()}
              </span>
            </p>
            <p
              className="Comment-message"
            >{message}</p>
          </div>
        </div>
        <div className={commentPopup}>
          <button
            className="button"
            onClick={toggleForm}>
            <EditIcon />
          </button>
          <button
            className="button"
            onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </div>
        <div className={commentUndo}>
          <button onClick={undo}>Undo</button>
        </div>
      </div>
    );
  }
};

export default Comment;
