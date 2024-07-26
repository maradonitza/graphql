import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 8080; // or any port you prefer

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!!');
});

const root = { product: () => {
    return {
      "id": 324345345435,
      "name": "Geronimo",
      "description": "Mel",
      "price": 33,
      "soldout": 333
    }
  } 
}

app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: root,
    graphiql: true

}));

app.listen(PORT, () => {
  console.log("Running server on localhost:${PORT}/graphql");
});
