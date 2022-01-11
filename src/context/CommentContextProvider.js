import React, { useState } from 'react';
import CommentContext from './CommentContext';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [hoveredCommentId, setHoveredCommentId] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const addComment = (comment) => {
    const newComment = {
      ...comment,
      id: uuid(),
      time: moment().format(),
    };
    setComments((state) => [...state, newComment]);
  };

  const removeComment = (id) => {
    if (id) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments,
        addComment,
        removeComment,
        setHoveredCommentId,
        hoveredCommentId,
        deleteId,
        setDeleteId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
