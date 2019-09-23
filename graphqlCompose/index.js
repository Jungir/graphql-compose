const express = require('express');
const graphqlHTTP = require('express-graphql');
const {schema} = require('./schema/schema');


const PORT = 4000;
const app = express();

app.use(
  '/graphql',
  graphqlHTTP(async (request, response, graphQLParams) => {
    return {
      schema,
      graphiql: true,
      context: {
        req: request,
      },
    };
  })
);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/graphql`);
});