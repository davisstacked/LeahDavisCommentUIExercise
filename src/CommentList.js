import React, { useState } from 'react';
import Comment from './Comment';
import MouseOverPopover from './Popover';
import CommentFormTwo from './CommentFormTwo';
import useToggle from './hooks/useToggleState';
import { v4 as uuid } from 'uuid';

const CommentList = ({ data }) => {

  const [comments, setComments] = useState([ ...data]);
  const [prevState, setPrevState] = useState([]);
  const [hidden, setHidden] = useToggle(false);

  console.log(comments)

  const addComment = (message) => {
    const newComment = { ...message, id: uuid() };
    setComments((state) => [...state, newComment]);
  };
  
  const removeComment = (id) => {
    setPrevState(comments);
    setComments(comments.filter((comment) => comment.id !== id));
  };
  
  const undoDelete = () => {
    setComments(prevState);
  }

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
              remove={() => removeComment(comment.id)}
              undo={undoDelete}
              user={comment.user}
              message={comment.message}
              time={comment.time}
              image={comment.image}
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