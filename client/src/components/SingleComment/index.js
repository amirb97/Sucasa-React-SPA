import React from 'react';
import { useParams } from 'react-router-dom';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../../utils/queries';

import { useMutation } from '@apollo/client';
import { DELETE_REPLY } from '../../utils/mutations';

import ReplyForm from '../ReplyForm';

const SingleComment = () => {
    const commentId = useParams();
    const [deleteReply, { error }] = useMutation(DELETE_REPLY);

    async function handleDeleteSubmit(replyId) {
        console.log("Comment: " + commentId.id);
        console.log("Reply: " + replyId);

        try {
            await deleteReply({
                variables: {
                    commentId: commentId.id,
                    replyId: replyId
                },
            });
        } catch (e) {
            console.log(e);
        }
    };

    const { loading, data } = useQuery(QUERY_COMMENT, {
        variables: { id: commentId.id }
    });

    if (loading) {
        return <div>Loading...</div>
    }

    const comment = data.comment;

    const replies = comment?.replies || [];

    return (
        <div>
            <div>
                {Auth.loggedIn() ? (
                    <>
                      <h2 className='text-center m-3'>Leave a reply below or scroll down to see other user's replies!</h2>
                      <ReplyForm Id={comment._id} />
                    </>
                ) : (
                    <>
                      <h2 className='text-center m-3'>Scroll down to see other user's replies! Login to leave your own feedback!</h2>
                    </>
                )}
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
                    {Auth.loggedIn() ? (
                        <>
                            {Auth.getProfile().data.username==reply.username ? (
                                <>
                                  <button onClick={() => handleDeleteSubmit(reply._id)} className='btn btn-outline-danger mx-3'>Delete</button>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className='btn pe-none'>Login to edit and delete your comments!</div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
};

export default SingleComment;
