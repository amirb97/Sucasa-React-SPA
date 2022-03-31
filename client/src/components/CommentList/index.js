import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
    if (!comments.length) {
        return <h3>There aren't any comments yet...</h3>;
    }
    return (
        <div>
            <h3>{title}</h3>
            {comments &&
            comments.map(comment => (
                <div key = {comment._id} className = 'card mb-3'>
                    <p>{comment.username} commented on {comment.createdAt}</p>
                    <div className = 'card-body'>
                        <p>{comment.commentText}</p>
                        <p className = 'mb-0'>
                            Replies: {comment.replyCount} ||  Click to{' '}
                            {thought.replyCount ? 'see' :'start'} discussion
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentList;