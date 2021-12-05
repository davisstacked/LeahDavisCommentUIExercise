import React, { useState, useContext } from 'react';
import CommentContext from './context/CommentContext';

import './CommentForm.css';

const CommentForm = () => {

  const { addState, setComments } = useContext(CommentContext);
  const [comment, setComment] = useState({ message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addState(comment, setComments);
    setComment({ message: '' });
  };

  const handleChange = (e) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <div className="CommentForm-container">
        <textarea
          className='CommentForm-textarea'
          onChange={handleChange}
          name='message'
          value={comment.message}
          type='text'
        />       
    </div>
      <button className="CommentForm-button">Add Comment</button>
    </form>
  );
};

export default CommentForm;