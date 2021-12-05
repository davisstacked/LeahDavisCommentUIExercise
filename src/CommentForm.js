import React, { useState, useContext } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';

import './CommentForm.css';

const CommentForm = () => {

  const { addComment } = useContext(CommentContext);
  const [comment, setComment] = useState({ message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({ message: '' });
  };

  const handleChange = (e) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <Avatar
        alt='Eliza Roo'
        src='./images/Avatar (1).png'
        sx={{ width: 40, height: 40 }}
      />
      <div className='CommentForm-container'>
        <textarea
          className='CommentForm-textarea'
          onChange={handleChange}
          name='message'
          value={comment.message}
          type='text'
        />
      <button className='CommentForm-button'>Add Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;