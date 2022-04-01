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
                <h2 className='text-center m-3'>Leave a comment below or scroll down to see other users comments and reply!</h2>
                <CommentForm eventId={eventId} />
            </div>
            {comments.map(comment => (
                <div className='border shadow border-dark p-3 m-3' key={comment._id}>
                    <h3>{comment.username}  on  {comment.createdAt}</h3>
                    <p>{comment.commentText}</p>
                    <Link to={`/comment/${comment._id}`}>Replies:{comment.replyCount}</Link>
                </div>
            ))}
        </div>
    );
};

export default SingleEvent;
