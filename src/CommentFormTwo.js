import React, { useState } from 'react';

const CommentFormTwo = ({ addComment }) => {
  const [comment, setComment] = useState({ comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({ comment: '' });
  };

  const handleChange = (e) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <form className='CommentForm' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name='comment'
        value={comment.comment}
        type='text'
      />
      <button>Add Comment</button>
    </form>
  );
};

export default CommentFormTwo;