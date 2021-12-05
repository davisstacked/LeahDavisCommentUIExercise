import React, { useState } from 'react';
import CommentContext from './CommentContext';
import Comment from '../Comment';
import { v4 as uuid } from 'uuid';

const CommentContextProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  // const [prevState, setPrevState] = useState([]);
  const [hoveredCommentId, setHoveredCommentId] = useState('');
  const [deletingCommentId, setDeletingCommentId] = useState('');

  const addState = (message, setState) => {
    const newComment = { ...message, id: uuid() };
    setState((state) => [...state, newComment]);
  };

  console.log(comments);

  const removeComment = () => {
    console.log('in removeComment');
    console.log(deletingCommentId);
    // setPrevState(comments);
    if (deletingCommentId) {
      setComments(
        comments.filter((comment) => comment.id !== deletingCommentId)
      );
    }
  };

  // const undoDelete = () => {
  //   setComments(prevState);
  // };

  const updateComment = (id, updatedQuote) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, message: updatedQuote };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const renderComments = () => {
    return (
      <ul>
        <li style={{ listStyleType: 'none' }}>
          {comments.map((comment) => (
            <Comment
              // className={`shown-${comment.id}`}
              // hidden={hidden}
              // remove={() => removeComment(comment.id)}
              // undo={undoDelete}
              user={comment.user}
              message={comment.message}
              time={comment.time}
              image={comment.image}
              // update={() => updateComment(comment.id)}
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
        // prevState,
        // setPrevState,
        addState,
        updateComment,
        // undoDelete,
        removeComment,
        setHoveredCommentId,
        hoveredCommentId,
        setDeletingCommentId,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
