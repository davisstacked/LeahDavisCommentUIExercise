import React from 'react';

const Comment = ({time, message, user}) => {

  return (
    <div>
      <p>{user}</p>
    </div>
  )
}

export default Comment;
