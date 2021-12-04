import React, { useState } from 'react';
import Comment from './Comment';
import CommentFormTwo from './CommentFormTwo';
import { v4 as uuid } from 'uuid';

const CommentList = ({ data }) => {

  
  const [comments, setComments] = useState([ ...data ]);

  const addComment = (comment) => {
    const newComment = { ...comment, id: uuid() };
    setComments((state) => [...state, newComment]);
  };
  
  const removeComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const updateComment = (id, updatedQuote) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, comment: updatedQuote };
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
              remove={() => removeComment(comment.id)}
              user={comment.user}
              message={comment.message}
              time={comment.time}
              update={updateComment}
              key={comment.id}
              id={comment.id}
            />
          ))}
        </li>
      </ul>
    );
  };

  return (
    <div className='CommentList'>
      <CommentFormTwo addComment={addComment} />
      <p>{comments.length} comments</p>
      {renderComments()}
    </div>
  );
};

export default CommentList;