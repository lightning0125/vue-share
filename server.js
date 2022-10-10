const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/schema/typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./schema/resolvers');

const connectDB = require('./config/db');

const User = require('./models/User');
const Post = require('./models/Post');


// Connect Database
connectDB();

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