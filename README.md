How to test: 

--


<!-- query {
  getMessage
}

mutation {
  setMessage(message: "Geronimo") 
} -->



--
query {
  getQuote(id: "1") {
    id
    content
  }
}

mutation {
  createQuote(input: { content: "Amor fati" }) {
    id
    content
  }
}


mutation {
  createQuote(input: { content: "Alis volat propriis: she flies with her own wings" }) {
    id
    content
  }
}

mutation {
  updateQuote(id: 2, input: { content: "Deal with it." }) {
    id
    content
  }
}


