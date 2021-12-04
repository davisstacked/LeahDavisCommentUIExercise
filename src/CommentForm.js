import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import styles from './styles/CommentFormStyles';

import './CommentForm.css';

const CommentForm = ({ addComment }) => {

  // const [comment, setComment] = useState({ comment: '' });
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addComment(comment);
  //   setComment({ comment: '' });
  // }

  // const handleChange = (e) => {
  //   setComment(state => ({...state, [e.target.name]: e.target.value}))
  // }

  return (
    <form
    // onSubmit={(e) => {
    //   e.preventDefault();
    //   addTodo(value);
    //   reset();
    // }}
    >
      <TextField
        className="hello"
        style={{
          width: "77rem",
          height: "12rem",
          position: "static",
          left: "0rem",
        }}
        // value={value}
        // onChange={handleChange}
        margin='normal'
        variant='outlined'
      />
    </form>
  );
}

export default CommentForm;
