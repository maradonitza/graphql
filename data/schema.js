import {buildSchema} from "graphql";

// Construct a schema, using GraphQL schema language

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        colour: String
        inStock: Boolean

    }
    
    type Query {
        product: Product,
        hello: String
    }
`);

export default schema;
