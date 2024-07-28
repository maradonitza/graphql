// gameUtils.js

/**
 * Determines the winner of a Rock, Paper, Scissors game.
 *
 * @param {string} player1 - The choice of player 1 ('rock', 'paper', or 'scissors').
 * @param {string} player2 - The choice of player 2 ('rock', 'paper', or 'scissors').
 * @returns {string} The result of the game.
 */


export function rockPaperScissors({player1, player2}) {
    // Dictionary to determine the winner
    const rules = {
        'rock': 'scissors',
        'scissors': 'paper',
        'paper': 'rock'
    };
    
    // Check for invalid inputs
    const validChoices = Object.keys(rules);
    // console.log(player1);
    console.log(player2);
    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
        return "Invalid input! Choices must be 'rock', 'paper', or 'scissors'.";
    }
    
    // Check for a tie
    if (player1 === player2) {
        return "It's a tie!";
    }
    
    // Determine the winner
    if (rules[player1] === player2) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}


// Example usage (can be removed or commented out in production)
console.log(rockPaperScissors({ player1: 'rock', player2: 'scissors'}));  // Output: Player 1 wins!
console.log(rockPaperScissors({ player1: 'paper', player2: 'rock'}));     // Output: Player 1 wins!
console.log(rockPaperScissors({ player1: 'scissors', player2: 'rock'}));  // Output: Player 2 wins!
console.log(rockPaperScissors({ player1: 'scissors', player2: 'scissors'}));  // Output: It's a tie!
console.log(rockPaperScissors({ player1: 'rock', player2: 'paper'}));  // Output: Player 2 wins!

export function greeting() {
    return "Hello Geronimo"
}

export function randomFunction({x}) {
    return x*10000;
}

/**
 * Calculates the factorial of a given integer.
 *
 * @param {number} n - The integer for which the factorial is to be calculated.
 * @returns {number} The factorial of the given integer.
 */

export function factorial({n}) {
    if (n < 0) {
        return -1; // Factorial is not defined for negative numbers
    }
    if (n === 0 || n === 1) {
        return 1; // 0! and 1! are both 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
console.log(factorial({n: 5}));  // Output: 120
console.log(factorial({n: 0}));  // Output: 1
console.log(factorial({n: 1}));  // Output: 1
console.log(factorial({n: 10})); // Output: 3628800
console.log(factorial({n: -3})); // Output: -1 (Factorial is not defined for negative numbers)

/**
 * Returns an array containing all integers between the two given numbers (inclusive),
 * ordered from the smaller number to the larger number.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number[]} An array containing the ordered range of integers.
 */
export function createRange({a, b}) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    const rangeArray = [];
    
    for (let i = min; i <= max; i++) {
        rangeArray.push(i);
    }
    
    return rangeArray;
}

// Example usage
console.log(createRange({a: 5, b: 10}));  // Output: [5, 6, 7, 8, 9, 10]
console.log(createRange({a: 10, b: 5}));  // Output: [5, 6, 7, 8, 9, 10]
console.log(createRange({a: -3, b: 2}));  // Output: [-3, -2, -1, 0, 1, 2]
console.log(createRange({a: 7, b: 7}));   // Output: [7]

// Export the function for use in other files
// module.exports = rockPaperScissors;

