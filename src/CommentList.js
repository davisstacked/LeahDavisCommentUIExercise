import React, { useState, useContext } from 'react';
import CommentContext from './context/CommentContext';
import CommentFormTwo from './CommentFormTwo';
import useToggle from './hooks/useToggleState';


const CommentList = ({ data }) => {

  const { renderComments, comments, setComments, prevState, setPrevState, addComment, updateComment, undoDelete, removeComment } = useContext(CommentContext);
  
  return (
    <div className='CommentList'>
      <CommentFormTwo addComment={addComment} />
      <p>{comments.length} comments</p>
      {renderComments()}
    </div>
  );
};

export default CommentList;