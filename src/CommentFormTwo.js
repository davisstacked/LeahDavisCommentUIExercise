import React, { useState, useContext } from 'react';
import CommentContext from './context/CommentContext';

const CommentFormTwo = () => {

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
      <input
        onChange={handleChange}
        name='message'
        value={comment.message}
        type='text'
      />
      <button>Add Comment</button>
    </form>
  );
};

export default CommentFormTwo;