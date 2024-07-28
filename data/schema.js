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

    type Character {
        name: String
        coolnessFactor: Int
        quote: String        
        getName: String        
        #getQuote: String
    }
    
    type Query {
        product: Product,
        hello: String,
        rollDice(numDice: Int!, numSides: Int): [Int],
        rollDice2(numDice: Int!, numSides: Int): [Int],
        playRPS(player1: String, player2: String): String,
        range(m: Int, n: Int): [Int],
        greet: String,
        rand(x: Int): Int,
        fact(n: Float ): Float,
        character(choice: Int): Character

    }
`);

export default schema;
