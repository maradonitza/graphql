import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import schema from './data/schema';


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
    return "Geronimo3"
  } 
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
