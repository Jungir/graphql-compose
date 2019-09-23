import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './index';
import cors from 'cors';
import mongoose from 'mongoose';
//connect to mongoDB:
let DATABASE_URL = 'mongodb://localhost:27017/graphMongoose';

//connect to db
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(()=>{
    console.log('connected to Db');
}).catch (err => {console.log('message', err.message);
});

const PORT = 4000;
const app = express();
app.use(cors());
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