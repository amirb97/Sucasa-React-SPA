import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ eventId }) => {
  const [commentText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    try {
      await addComment({
        variables: { 
          commentText: commentText,
          eventId: eventId.id
        },
      });

      // clear form value
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
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
  );
};

export default CommentForm;
