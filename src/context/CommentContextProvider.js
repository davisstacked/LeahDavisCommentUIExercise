import React, { useState } from 'react';
import CommentContext from './CommentContext';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [hoveredCommentId, setHoveredCommentId] = useState('');

  const addComment = (comment) => {
    const newComment = {
      ...comment,
      id: uuid(),
      time: moment().format(),
    };
    setComments((state) => [...state, newComment]);
  };

  // put in service folder - commentService could be file
  const addUUID = (comment) => {
    const newComment = { ...comment, id: uuid() };
    setComments((state) => [...state, newComment])
  }

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
        addUUID,
        removeComment,
        setHoveredCommentId,
        hoveredCommentId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
