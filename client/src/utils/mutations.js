import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!, $eventId: String!) {
    addComment(commentText: $commentText, eventId: $eventId) {
      _id
      commentText
      createdAt
      username
      eventId
      replyCount
      replies {
        _id
      }
    }
  }
`;

export const ADD_REPLIES = gql`
  mutation addReply($commentId: ID!, $replyBody: String!) {
    addReply(commentId: $commentId, replyBody: $replyBody) {
      _id
      replyCount
      replies {
        _id
        replyBody
        createdAt
        username
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      _id
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation deleteReply($commentId: ID!, $replyId: ID!) {
    deleteReply(commentId: $commentId, replyId: $replyId)
      _id
      replyCount
      replies{
        _id
        replyBody
        username
      }
  }
`;

export const EDIT_COMMENT = gql `
  mutation editComment($commentId: ID!, $commentText: String!) {
    editComment(commentId: $commentId, commentText: $commentText)
      _id
      commentText
  }`
