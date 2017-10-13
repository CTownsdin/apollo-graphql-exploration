import express from 'express';
const app = express();
import bodyParser from 'body-parser';  // needed just for POST.
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mySchema from './schema';

const myGraphQLSchema = mySchema;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(3000, console.log('apollo express server listening on 3000'));