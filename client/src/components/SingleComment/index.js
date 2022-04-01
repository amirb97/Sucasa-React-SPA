import React from 'react';
import { useParams } from 'react-router-dom';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../../utils/queries';

import CommentForm from '../CommentForm';

const SingleComment = () => {
    const commentId = useParams();

    const { loading, data } = useQuery(QUERY_COMMENT, {
        variables: { id: commentId.id }
    });

    if (loading) {
        return <div>Loading...</div>
    }

    const comment = data.comment;

    const replies = comment?.replies || [];

    console.log(comment);
    console.log(replies);
    return (
        <div>
            <div>
                <h2 className='text-center m-3'>Leave a reply below or scroll down to see other users replies!</h2>
                <CommentForm />
            </div>
            <div className='border shadow border-dark p-3 m-3' key={comment._id}>
                <h4>{comment.username} on {comment.createdAt}</h4>
                <p>{comment.commentText}</p>
                <p>Replies:{comment.replyCount}</p>
            </div>
            {replies.map(reply => (
                <div className='col-8 border shadow border-dark p-3 m-3 mx-auto' key={reply._id}>
                    <h4>{reply.username} on {reply.createdAt}</h4>
                    <p>{reply.replyBody}</p>
                </div>
            ))}
        </div>
    )
};

export default SingleComment;
