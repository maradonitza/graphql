// export var fakeDatabase = {}

// If Quote had any complex fields, we'd put them on this object.
export class Quote {
    constructor(id, { content, author }) {
      this.id = id
      this.content = content
      this.author = author
    }
}

// Should be after Quote definition:
export var fakeDatabase = {
  1: new Quote(1, { content: "Everything in the Universe is within you. Ask all from yourself", author: "Rumi" })
};

export function getQuote({ id }) {
    if (!fakeDatabase[id]) {
      throw new Error("no quote exists with id " + id)
      // return "no quote exists with id " + id;
    }
    return new Quote(id, fakeDatabase[id])
}

export function createQuote({ input }) {
    // Create a random id for our "database".
    var id = Math.max(...Object.keys(fakeDatabase).map(Number), 0)+1
    // Math.floor(Math.random()*3)

    fakeDatabase[id] = input
    return new Quote(id, input)
}

export function updateQuote({ id, input }) {
    if (!fakeDatabase[id]) {
      throw new Error("no message exists with id " + id)
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input
    return new Quote(id, input)
}