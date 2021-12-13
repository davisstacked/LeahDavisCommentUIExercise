import React, { useContext, useRef } from 'react';
import CommentContext from '../context/CommentContext';
import EditIcon from '../assets/EditIcon';
import DeleteIcon from '../assets/DeleteIcon';
import classNames from 'classnames';

const CommentButtons = ({ setIsDeleting, isDeleting, id, handleToggleEditForm }) => {
  const { removeComment, hoveredCommentId } = useContext(CommentContext);

  // Delete/Edit popup
  const CommentPopup = classNames('Comment-popup', {
    hidden: hoveredCommentId !== id || isDeleting,
  });

  // ************* DELETE AND UNDO ***************

  // useRef in setTimeout to retrieve current state.
  // https://medium.com/programming-essentials/how-to-access-the-state-in-settimeout-inside-a-react-function-component-39a9f031c76f
  const isDeletingRef = useRef(isDeleting);
  isDeletingRef.current = isDeleting;

  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      if (isDeletingRef.current) {
        removeComment(id);
      }
    }, 5000);
  };

  // Undo Delete Button
  const handleUndoDelete = () => {
    setIsDeleting(false);
  };

  const CommentUndo = classNames('Comment-undo', {
    hidden: !isDeleting,
  });

  return (
    <>
      <div className={CommentPopup}>
        <button className='button' onClick={handleToggleEditForm}>
          <EditIcon />
        </button>
        <button className='button' onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      <div className={CommentUndo}>
        <div className='undo-delete-popup'>
          <span>Comment deleted.</span>
          <button className='undo-delete-button' onClick={handleUndoDelete}>
            Undo
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentButtons
