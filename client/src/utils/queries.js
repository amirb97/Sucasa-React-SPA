import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query comments($eventId: String) {
    comments(eventId: $eventId) {
      _id
      commentText
      createdAt
      username
      eventId
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_COMMENT = gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      createdAt
      username
      eventId
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
        replyCount
      }
    }
  }
`;
