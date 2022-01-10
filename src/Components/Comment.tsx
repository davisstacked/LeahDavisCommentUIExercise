import React, { useContext, useState } from 'react';
import EditForm from './EditForm';
import CommentContext from '../context/CommentContext';
import moment from 'moment';
import classNames from 'classnames';
import CommentButtons from './CommentButtons';

import './Comment.css';
import './form.css';

interface CommentInfo {
  time: string;
  message: string;
  user: string;
  image: string;
  id: string;
}

const Comment = ({ time, message, user, image, id }: CommentInfo) => {
  const { setHoveredCommentId, hoveredCommentId } = useContext(CommentContext);

  const [edit, setEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // On hover over comment display Edit and Delete Popup
  const handleEditAndDeletePopup = (id: string) => {
    setHoveredCommentId(id);
  };

  // Conditionally renders based on Edit state either a form or the comment
  const handleToggleEditForm = () => {
    setEdit(!edit);
  };

  // Classnames for DELETING COMMENT (hiding comment) (had to be two separate because the entire comment isn't totally hidden. Only reduced to 1px so the Undo button knows where it is)
  const Comment = classNames('Comment', {
    hideComment: hoveredCommentId === id && isDeleting,
  });

  const CommentComment = classNames('Comment-comment', {
    hidden: isDeleting,
  });

  if (edit) {
    return (
      <EditForm
        image={image}
        id={id}
        user={user}
        message={message}
        setEdit={setEdit}
      />
    );
  } else {
    return (
      <div
        className={Comment}
        onMouseEnter={() => handleEditAndDeletePopup(id)}
      >
        <div className={CommentComment}>
          <img
            className='Comment-avatar'
            alt={user ? user : 'Leah Davis'}
            src={image ? image : './images/LeahsAvatar.png'}
          />
          <div className='Comment-text'>
            <p className='Comment-username-wrapper'>
              <span className='Comment-username'>
                {user ? user : 'Leah Davis'}
              </span>
              ∙
              <span className='Comment-time-posted'>
                {moment(time).fromNow()}
              </span>
            </p>
            <p className='Comment-message'>{message}</p>
          </div>
        </div>
        <CommentButtons
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
          id={id}
          handleEditAndDeletePopup={handleEditAndDeletePopup}
          handleToggleEditForm={handleToggleEditForm}
        />
      </div>
    );
  }
}

export default Comment;
