import { useState } from 'react';
import uuid from 'uuid/v4';

export default initialComments => {

  const [comments, setComments] = useState([]);
  const [prevState, setPrevState] = useState([]);

  return {
    addComment: (message) => {
    const newComment = { ...message, id: uuid() };
    setComments((state) => [...state, newComment]);
    },
    removeComment: (id) => {
      setPrevState(comments);
      setComments(comments.filter((comment) => comment.id !== id));
    },
    undoDelete: () => {
      setComments(prevState);
    },
    // toggleTodo: (todoId) => {
    //   const updatedTodos = todos.map((todo) =>
    //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    //   );
    //   setTodos(updatedTodos);
    // },
    updateComment: (id, updatedQuote) => {
      const updatedComments = comments.map((comment) => {
      if (comment.id === id) {
        return { ...comment, message: updatedQuote };
      }
      return comment;
    });
    setComments(updatedComments);
  },
  };
};



