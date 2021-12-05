import React, { useContext } from 'react';
import CommentContext from './context/CommentContext';

const CommentList = () => {

  const { renderComments, comments } = useContext(CommentContext);
  
  return (
    <div className='CommentList'>
      <p>{comments.length} comments</p>
      {renderComments()}
    </div>
  );
};

export default CommentList;