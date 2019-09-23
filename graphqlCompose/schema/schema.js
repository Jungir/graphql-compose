const {schemaComposer } = require('graphql-compose');
const { authors, posts } = require('../db/data');
const _ = require('lodash');
const AuthorTC = schemaComposer.createObjectTC({
    name: 'Author',
    fields: {
      id: 'Int!',
      firstName: 'String',
      lastName: 'String',
    },
  });
  
  const PostTC = schemaComposer.createObjectTC({
    name: 'Post',
    fields: {
      id: 'Int!',
      title: 'String',
      votes: 'Int',
      authorId: 'Int',
    },
  });

//relationships 
  PostTC.addFields({
    author: {
      type: AuthorTC,
      resolve: post => _.find(authors, { id: post.authorId }),
    },
  });
  
  AuthorTC.addFields({
    posts: {
      type: [PostTC],
      resolve: author => _.filter(posts, { authorId: author.id }),
    },
    postCount: {
      type: 'Int',
      description: 'Number of Posts written by Author',
      resolve: author => _.filter(posts, { authorId: author.id }).length,
    },
  });

 

// Requests which read data put into Query
schemaComposer.Query.addFields({
  posts: {
    type: '[Post]',
    resolve: () => posts,
  },
  author: {
    type: 'Author',
    args: { id: 'Int!' },
    resolve: (_, { id }) => _.find(authors, { id }),
  },
});

// Requests which modify data put into Mutation
schemaComposer.Mutation.addFields({
  upvotePost: {
    type: 'Post',
    args: {
      postId: 'Int!',
    },
    resolve: (_, { postId }) => {
      const post = _.find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      console.log('hello');
      return post;
    },
  },
});

// After Root type definition, you are ready to build Schema
// which should be passed to `express-graphql` or `apollo-server`
module.exports.schema = schemaComposer.buildSchema();