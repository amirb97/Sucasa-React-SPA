import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import  { EDIT_COMMENT } from '../../utils/mutations';

const Modal = ({ onClose, currentComment }) => {
  const { _id } = currentComment;
  const [commentText, setBody] = useState(currentComment.commentText);
  const [characterCount, setCharacterCount] = useState(0);
  const [editComment, { error }] = useMutation(EDIT_COMMENT);

  const handleChange = (event) =>  {
    if (event.target.value.length <=280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  async function handleFormSubmit(event) {
    try {
      await editComment({
        variables: {
          commentId: _id,
          commentText: commentText
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <div className='col-12 mx-auto'>
          <h3 className='text-light text-center'>Edit your comment below!</h3>
          <p
            className={`m-0 text-light ${characterCount === 280 || error ? 'text-error' : ''}`}
          >
            Character Count: {characterCount}/280
            {error && <span className="m-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center"
            onSubmit={handleFormSubmit}
          >
            <textarea
              value={commentText}
              className="col-12 min-h-"
              onChange={handleChange}
            ></textarea>

            <button className="btn btn-outline-light mx-auto m-2" type="submit">
              Submit
            </button>
          </form>

          {error && <div>Something went wrong...</div>}
        </div>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;