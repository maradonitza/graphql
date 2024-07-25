import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 8080; // or any port you prefer

app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
});

const root = {hello: () => "Hi, I'm Geronimo!"}

app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: root,
    graphiql: true

}));
