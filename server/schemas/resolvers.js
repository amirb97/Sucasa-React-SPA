const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Reply } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('comments')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('comments');
    },
    comments: async (parent, { eventId }) => {
      const params = eventId ? { eventId } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addReply: async (parent, { commentId, replyBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { $push: { replies: { replyBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    deleteComment: async (parent, { commentId }, context) => {
      if(context.user) {
        const deletedComment = await Comment.findOneAndDelete(
          { _id: commentId },
          { new: true, runValidators: true }
        );

        return deletedComment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deleteReply: async (parent, { commentId, replyId }, context) => {
      if (context.user) {
        const deletedReply = await Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $pull: { replies: { _id: replyId } }
          },
          { new: true, runValidators: true }
        );

        return deletedReply;
      }

      throw new AuthenticationError("You need to be logged in!")
    },
    editComment: async (parent, { commentId, commentText }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          { commentText: commentText},
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
