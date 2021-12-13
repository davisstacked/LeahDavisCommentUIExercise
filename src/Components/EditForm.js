import React, { useContext, useState } from 'react';
import CommentContext from '../context/CommentContext';
import classNames from 'classnames';

import './form.css';
import './Comment.css'

const EditForm = ({id, user, image, message, setEdit }) => {

  const [newMessage, setNewMessage] = useState(message);
  
  const { comments, setComments } = useContext(CommentContext);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    updateComment(id, newMessage);
    setEdit(false);
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const updateComment = (id, updatedMessage) => {
    const updatedMessages = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, message: updatedMessage };
      }
      return comment;
    });
    setComments(updatedMessages);
  };

  // Conditionally disable button if user is typing
  const typing = newMessage.length > 0;
  const formButton = classNames('form-button', {
    formButtonDisabled: !typing,
    formButtonAbled: typing,
  });

  return (
    <form className='EditForm form' onSubmit={handleUpdate}>
      <img
        className='EditForm-avatar'
        alt={user}
        src={image ?
          image :
          './images/LeahsAvatar.png'}
      />
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
}

export default EditForm
