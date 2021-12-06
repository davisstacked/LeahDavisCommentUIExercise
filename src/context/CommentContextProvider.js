import React, { useState } from 'react';
import CommentContext from './CommentContext';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [hoveredCommentId, setHoveredCommentId] = useState('');

  const addComment = (comment) => {
    const newComment = { ...comment, id: uuid(), time: moment().format() };
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

  const updateComment = (id, updatedMessage) => {
    const updatedMessages = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, message: updatedMessage };
      }
      return comment;
    });
    setComments(updatedMessages);
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments,
        addComment,
        addUUID,
        updateComment,
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
