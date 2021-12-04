import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/styles';
import styles from './styles/CommentFormStyles';

const CommentForm = ({ addProps }) => {
  const [comment, setComment] = useState({ comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment({ comment: '' });
  };

  const handleChange = (e) => {
    setComment((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addComment(value);
        reset();
      }}
    >
      <TextField
        // value={value}
        // onChange={handleChange}
        variant='outlined'
      />
      <Button variant='contained'>Save Comment</Button>
    </form>
  );
};

export default CommentForm;
