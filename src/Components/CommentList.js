import React, { useContext } from 'react';
import CommentContext from '../context/CommentContext';
import Comment from './Comment';

import './Comment.css'

const CommentList = () => {

  const { comments } = useContext(CommentContext);
  
    const renderComments = () => {
      return (
        <ul>
          <li
            className='Comment-list'
            style={{ listStyleType: 'none' }}>
            {comments.map((comment) => (
              <Comment
                className="single-comment"
                user={comment.user}
                message={comment.message}
                time={comment.time}
                image={comment.image}
                key={comment.id}
                id={comment.id}
              />
            ))}
          </li>
        </ul>
      );
    };
  
  return (
    <div className='Commentlist'>
      <p>{comments.length} comments</p>
      {renderComments()}
    </div>
  );
};

export default CommentList;