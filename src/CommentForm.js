import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/styles';
import styles from './styles/CommentFormStyles';

const CommentForm = ({ addComment }) => {
  const [message, setMessage] = useState({ message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(message);
    setMessage({ message: '' });
  };

  const handleChange = (e) => {
    setMessage((state) => ({ ...state, [e.target.name]: e.target.value }));
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
