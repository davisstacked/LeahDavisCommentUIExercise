import React, { useContext, useState, useRef } from 'react';
import EditForm from './EditForm';
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
  } = useContext(CommentContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const [edit, setEdit] = useState(false);


  // classNames - an external library to conditionally render CSS classes.
  // Conditionally displays the delete, edit, and undo buttons using classNames.

  //While 
  const Comment = classNames('Comment', {
    white: hoveredCommentId === id && isDeleting
  });

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

  const toggleForm = () => {
    setEdit(!edit);
  };

  // Conditionally renders based on Edit state either a form or the comment
  if (edit) {
    return (
      <EditForm
        image={image}
        id={id}
        user={user}
        message={message}
        setEdit={setEdit}

      />
    )} else {
    return (
      <div className={Comment} onMouseEnter={() => showPopup(id)}>
        <div className={commentComment}>
          <img
            className='Comment-avatar'
            alt={user}
            src={image ? image : './images/LeahsAvatar.png'}
            sx={{ width: 40, height: 40}}
          />

          <div className='Comment-text'>
            <p className='Comment-username-wrapper'>
              <span className='Comment-username'>{user ? user : 'Leah'}</span>∙
              <span className='Comment-time-posted'>
                {moment(time).fromNow()}
              </span>
            </p>
            <p className='Comment-message'>{message}</p>
          </div>
        </div>
        <div className={commentPopup}>
          <button className='button' onClick={toggleForm}>
            <EditIcon />
          </button>
          <button className='button' onClick={handleDelete}>
            <DeleteIcon />
          </button>
        </div>
        <div className={commentUndo}>
          <div className='undo-delete-popup'>
            <span>Comment deleted.</span>
            <button className='undo-delete-button' onClick={undo}>
              Undo
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Comment;
