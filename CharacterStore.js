
// Define the base Character class
export class Character {
    constructor(name, coolnessFactor, quote) {
        this.name = name;
        this.coolnessFactor = coolnessFactor;
        this.quote = quote;
    }

    getName() {
        return this.name;
    }

    getQuote() {
        return this.quote;
    }
}

// Define the Zeus subclass
export class Zeus extends Character {
    constructor() {
        super("Zeus", -1, "Here, let me turn you into a swan");
    }

    // You can add more methods or properties specific to Zeus if needed
}

// Define the Nietzsche subclass
export class Nietzsche extends Character {
    constructor() {
        super("Nietzsche", 100, "Es ist oft in der Unsicherheit der eigene Wille zur Macht zu entdecken");
    }

    // You can add more methods or properties specific to Nietzsche if needed
}

// Implement the getCharacter function
export function getCharacter({choice}) {
    if (choice === 1) {
        return new Zeus();
    } else if (choice === 2) {
        return new Nietzsche();
    } else {
        throw new Error("Invalid choice. Please choose 1 for Zeus or 2 for Nietzsche.");
    }
}

// Example usage:
try {
    const character1 = getCharacter({choice: 1});
    console.log(character1.getName()); // Outputs: Zeus

    const character2 = getCharacter({choice: 2});
    console.log(character2.getName()); // Outputs: Nietzsche

    const characterInvalid = getCharacter({choice: 3}); // Throws an error
} catch (error) {
    console.error(error.message);
}

// Export the function for use in other files
// module.exports = rockPaperScissors;

