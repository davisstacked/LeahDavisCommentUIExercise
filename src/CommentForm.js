import React, { useState, useContext } from 'react';
import CommentContext from './context/CommentContext';
import Avatar from '@mui/material/Avatar';

import './form.css';

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
    <form className='form' onSubmit={handleSubmit}>
      <Avatar
        alt='Eliza Roo'
        src='./images/Avatar (1).png'
        sx={{ width: 48, height: 48 }}
      />
      <div className='form-container'>
        <textarea
          className='form-text-area'
          onChange={handleChange}
          name='message'
          value={comment.message}
          type='text'
        />
      <button className='form-button'>Add Comment</button>
      </div>
    </form>
  );
};

export default CommentForm;