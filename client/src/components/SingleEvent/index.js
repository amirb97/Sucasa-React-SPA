import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CommentForm from '../CommentForm';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../../utils/queries';

const SingleEvent = (props) => {
    const eventId = useParams();

    const { loading, data } = useQuery(QUERY_COMMENTS, {
        variables: { eventId: eventId.id }
    });

    const comments = data?.comments || [];

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <div>
            <div>
                {Auth.loggedIn() ? (
                    <>
                      <h2 className='text-center m-3'>Leave a comment below or scroll down to see other user's comments and reply!</h2>
                      <CommentForm eventId={eventId} />
                    </>
                ) : (
                    <>
                      <h2 className='text-center m-3'>Scroll down to see other user's comments and replies! Login to leave your own feedback!</h2>
                    </>
                )}
            </div>
            {comments.map(comment => (
                <div className='border shadow border-dark rounded p-3 m-3' key={comment._id}>
                    <h3>{comment.username}  on  {comment.createdAt}</h3>
                    <p>{comment.commentText}</p>
                    <Link to={`/comment/${comment._id}`} className="text-decoration-none btn btn-outline-dark">Replies:{comment.replyCount}</Link>
                </div>
            ))}
        </div>
    );
};

export default SingleEvent;
