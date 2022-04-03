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
    event.preventDefault();

    console.log(_id)
    console.log(commentText)

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
        <div className='col-10 mx-auto'>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
          >
            Character Count: {characterCount}/280
            {error && <span className="m-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center"
            onSubmit={handleFormSubmit}
          >
            <textarea
              placeholder="Leave a comment on this event..."
              value={commentText}
              className="form-input col-12"
              onChange={handleChange}
            ></textarea>

            <button className="btn btn-outline-dark mx-auto m-2" type="submit">
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