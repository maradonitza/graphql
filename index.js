import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import schema from './data/schema';
import { createRange, factorial, greeting, randomFunction, rockPaperScissors } from "./gameUtils";
import { getCharacter } from "./CharacterStore";

// The root provides a resolver function for each API endpoint
const root = { 
  product: () => {
    return {
      "id": 324345345435,
      "name": "Geronimo",
      "description": "Mel",
      "price": 33,
      "colour": "black",
      "inStock": true

    }
  },
  hello() {
    return "Geronimo"
  },
  rollDice(args) {
    var output = []
    for (var i = 0; i < args.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (args.numSides || 6)))
    }
    return output
  },
  rollDice2({numDice, numSides}) {
    var output = []
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)))
    }
    return output
  },
  playRPS: rockPaperScissors,
  range: createRange,
  greet: greeting,
  rand: randomFunction,
  fact: factorial,
  character: getCharacter  
}
 
var app = express()
 
// Create and use the GraphQL handler.
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)
 
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

// Start the server at port
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql")
