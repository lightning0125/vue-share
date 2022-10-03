const { ApolloServer, gql } = require('apollo-server');
const connectDB = require('./config/db');

const User = require('./models/User');
const Post = require('./models/Post');

// Connect Database
connectDB();

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});