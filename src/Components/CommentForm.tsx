import React, { useState, useContext } from 'react';
import CommentContext from '../context/CommentContext';
import classNames from 'classnames';

import './form.css';
import './Comment.css'

const CommentForm = () => {

  const { addComment, comments } = useContext(CommentContext);
  const [comment, setComment] = useState({ message: '' });

  // Conditionally disable button if user is typing
  const typing = comment.message.length > 0;
  const buttonOnOff = classNames('form-button', {
    formButtonDisabled: !typing,
    formButtonAbled: typing
  })

  const formTextArea = classNames('form-text-area', {
    formTyping: typing
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({ message: '' });
  };

  const handleChange = (e) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <form className='CommentForm form' onSubmit={handleSubmit}>
      <img
        className='CommentForm-avatar'
        alt={comments.user ? comments.user : 'Leah Davis'}
        src={comments.image ? comments.image : './images/LeahsAvatar.png'}
      />
      <div className='form-container'>
        <textarea
          className={formTextArea}
          placeholder='Comment'
          onChange={handleChange}
          name='message'
          value={comment.message}
        />
        <button type='submit' disabled={!typing} className={buttonOnOff}>
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;