/** Arrays Intro 

// Original arrays from your code
let x = [];
let y = [1, 2, 3, 4, 5, 6, "ab", "bc", NaN, false, true, undefined];
let z = ["abc", "bc"];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Logging the arrays
console.log("x:", x); // Empty array: []
console.log("y:", y); // Mixed array with numbers, strings, NaN, booleans, and undefined
console.log("z:", z); // Array with two strings
console.log("arr:", arr); // Array with numbers 1 to 9

// === Mutability and Immutability: Arrays vs Strings ===

// --- Arrays are Mutable ---
// Arrays can be modified after creation (e.g., change elements, add, or remove).

// Example 1: Modifying an array element
let mutableArray = [10, 20, 30];
console.log("Original mutableArray:", mutableArray); // [10, 20, 30]
mutableArray[1] = 50; // Change element at index 1
console.log("After modifying index 1:", mutableArray); // [10, 50, 30]

// Example 2: Adding elements to an array
mutableArray.push(40); // Add 40 to the end
console.log("After push(40):", mutableArray); // [10, 50, 30, 40]

// Example 3: Removing elements from an array
mutableArray.pop(); // Remove the last element
console.log("After pop():", mutableArray); // [10, 50, 30]

// Example 4: Using splice to modify array
mutableArray.splice(1, 1, 100); // Remove 1 element at index 1 and insert 100
console.log("After splice(1, 1, 100):", mutableArray); // [10, 100, 30]

// --- Strings are Immutable ---
// Strings cannot be changed in place; operations create a new string.

// Example 5: Attempting to modify a string
let immutableString = "Hello";
console.log("Original string:", immutableString); // Hello
// immutableString[0] = "J"; // This does NOT work; strings are immutable
console.log("After attempting to modify index 0:", immutableString); // Still Hello

// Example 6: String methods create new strings
let newString = immutableString.toUpperCase(); // Creates a new string
console.log("Original string (unchanged):", immutableString); // Hello
console.log("New string from toUpperCase():", newString); // HELLO

// Example 7: Replacing part of a string
let replacedString = immutableString.replace("H", "J"); // Creates a new string
console.log("Original string (unchanged):", immutableString); // Hello
console.log("New string from replace():", replacedString); // Jello

// --- Practical Example with Your Arrays ---
// Modifying the 'y' array (mutable)
y[0] = 999; // Change the first element
console.log("Modified y array:", y); // [999, 2, 3, 4, 5, 6, "ab", "bc", NaN, false, true, undefined]

// Attempting to modify a string in 'z' array
let strFromZ = z[0]; // Take "abc" from z
// strFromZ[0] = "x"; // This does NOT work; strings are immutable
let modifiedStr = strFromZ.replace("a", "x"); // Creates a new string
console.log("Original string from z[0]:", strFromZ); // abc (unchanged)
console.log("New string after replace:", modifiedStr); // xbc

// --- Key Takeaways ---
// Arrays: Mutable - You can change elements, add, or remove them.
// Strings: Immutable - You cannot modify a string directly; methods return new strings.
// Use arrays when you need to modify data; use strings for fixed text or when immutability is desired.

 */

