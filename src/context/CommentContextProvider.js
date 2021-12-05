import React, { useState } from 'react';
import CommentContext from './CommentContext';
import Comment from '../Comment';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  // const [prevState, setPrevState] = useState([]);
  const [hoveredCommentId, setHoveredCommentId] = useState('');

  // put in Comment Page - pass down thru props. 
  const addComment = (comment) => {
    const newComment = { ...comment, id: uuid(), time: moment().format() };
    setComments((state) => [...state, newComment]);
  };

  // put in service folder - commentService could be file
  const addUUID = (comment) => {
    const newComment = { ...comment, id: uuid() };
    setComments((state) => [...state, newComment])
  }

  console.log(comments);

  // put in CommentPage
  const removeComment = (id) => {
    if (id) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  // if it doesnt work look to remove comment message
  const updateComment = (id, updatedMessage) => {
    const updatedMessages = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, message: updatedMessage };
      }
      return comment;
    });
    setComments(updatedMessages);
  };

  const renderComments = () => {
    return (
      <ul>
        <li style={{ listStyleType: 'none' }}>
          {comments.map((comment) => (
            <Comment
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
    <CommentContext.Provider
      value={{
        renderComments,
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
