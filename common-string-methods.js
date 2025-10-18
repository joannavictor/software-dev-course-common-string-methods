/*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.
*/

// Define the string
const text = "Learning JavaScript is fun!";

// Check if "JavaScript" is in the string
const containsJavaScript = text.includes("JavaScript");
console.log(`Contains "JavaScript": ${containsJavaScript}`); // true

// Find the position of the word "fun"
const positionOfFun = text.indexOf("fun");
console.log(`Position of "fun": ${positionOfFun}`); // 24


/*
Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

*/ 

let originalText = " CODE BOOTCAMP ";

let cleanedText = originalText.trim().toLowerCase(); // "code bootcamp"

let finalText = cleanedText.replace("bootcamp", "JavaScript");

// Output the final result
console.log(finalText); // "code JavaScript"

/*

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.
*/

// Sentence to split
const sentence = "Coding is fun and educational";

// Split by space to get an array of words
const splitArray = sentence.split(" ");

// Output the result
console.log(splitArray);
// Output: [ 'Coding', 'is', 'fun', 'and', 'educational' ]


/*

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").

*/

// Multiline input string
const multiLine = `
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
`;

// Split the input into lines
const lines = multiLine.trim().split('\n');

// Extract customer name
const customerLine = lines[0]; // "Customer: John Doe"
const customerName = customerLine.split(': ')[1];

// Extract order items
const orderLine = lines[1]; // "Order: Apple, Banana, Grape"
const orderItems = orderLine.split(': ')[1].split(', ').map(item => item.trim());

// Convert total line to uppercase
const totalLine = lines[2].toUpperCase(); // "TOTAL: $20.50"

// Output results
console.log("Customer Name:", customerName);           // John Doe
console.log("Order Items:", orderItems);               // [ 'Apple', 'Banana', 'Grape' ]
console.log("Formatted Total:", totalLine);            // TOTAL: $20.50


/*
Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

/*
//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript; // Your code here
let codingPosition; // Your code here
let startsWithWelcome; // Your code here
let endsWithToday; // Your code here

// 2. Transforming
let lowercaseString; // Your code here
let uppercaseString; // Your code here
let trimmedString; // Your code here
let replacedString; // Your code here

// 3. Breaking Apart
let wordsArray; // Your code here

// 4. Retrieving
let firstCharacter; // Your code here
let extractedBootcamp; // Your code here

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});

*/
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding");
let startsWithWelcome = inputString.trim().startsWith("Welcome");
let endsWithToday = inputString.trim().endsWith("today.");

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");

// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");

// 4. Retrieving
let firstCharacter = trimmedString.charAt(0);
 
let extractedBootcamp = trimmedString.slice(
  trimmedString.indexOf("Bootcamp"),
  trimmedString.indexOf("Bootcamp") + "Bootcamp".length
);

// Log all results
console.log({
  hasJavaScript,
  codingPosition,
  startsWithWelcome,
  endsWithToday,
  lowercaseString,
  uppercaseString,
  trimmedString,
  replacedString,
  wordsArray,
  firstCharacter,
  extractedBootcamp,
});
