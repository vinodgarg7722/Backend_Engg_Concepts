// Console Output
console.log("hello world"); // Outputs: hello world

// Numbers
console.log(12);        // Integer: 12
console.log(12.35);     // Floating-point: 12.35
console.log(-45);       // Negative integer: -45
console.log(0);         // Zero: 0
console.log(-0);        // Negative zero: -0

// Strings
console.log("this is a string");           // Double quotes
console.log('this is single string');      // Single quotes
console.log(`this is backtick string`);    // Template literal (backticks)

// Booleans
console.log(true);   // Boolean: true
console.log(false);  // Boolean: false

// Undefined
console.log(undefined); // Undefined: represents an uninitialized or undefined value

// Null
console.log(null); // Null: represents intentional absence of value

// Object
console.log({name: "harshit", age: 22, city: "Delhi"}); // Object: { name: 'harshit', age: 22, city: 'Delhi' }

// typeof Operator
console.log(typeof 45);                    // number
console.log(typeof "harshit");             // string
console.log(typeof true);                  // boolean
console.log(typeof undefined);            // undefined
console.log(typeof null);                 // object (corner case in JavaScript)
console.log(typeof {name: "harshit", age: 22, city: "Delhi"}); // object
console.log(typeof 0);                    // number
console.log(typeof -0);                   // number
console.log(typeof NaN);                  // number (NaN is a special number value)

// Multiple values in one console.log
console.log(true, null, 13, "vinod"); // Outputs: true null 13 vinod

// process.stdout.write (writes without newline)
process.stdout.write("hello"); // Outputs: hello
process.stdout.write("world"); // Outputs: world (same line)

// Variables
let x = 10;      // let: block-scoped, reassignable
var y = 20;      // var: function-scoped, reassignable
const z = "abcd"; // const: block-scoped, cannot be reassigned
console.log(x, y, z); // Outputs: 10 20 abcd

// Arithmetic Operators
console.log(10 + 2);  // Addition: 12
console.log(10 - 2);  // Subtraction: 8
console.log(10 * 2);  // Multiplication: 20
console.log(10 / 2);  // Division: 5
console.log(10 ** 2); // Exponentiation: 100
console.log(10 % 2);  // Modulus: 0
console.log(5 / 2);   // Non-floor division: 2.5

// Floor Division
console.log(parseInt(5 / 2)); // 1st way: parseInt(2.5) -> 2
console.log(Math.floor(5 / 2)); // 2nd way: Math.floor(2.5) -> 2

// Assignment Operators
let a = 2;    // Assignment
a += 2;       // a = a + 2 -> 4
console.log(a); // 4
a -= 2;       // a = a - 2 -> 2
console.log(a); // 2
a *= 2;       // a = a * 2 -> 4
console.log(a); // 4
a /= 2;       // a = a / 2 -> 2
console.log(a); // 2
a %= 2;       // a = a % 2 -> 0
console.log(a); // 0


// Logical Operators in JavaScript
// Logical operators evaluate operands as booleans and then apply the operation.
// Operands are coerced to boolean values (true or false) before the operator is applied.

// AND (&&): Returns true if both operands are true, otherwise false
console.log((10 > 5) && (7 < 6)); // true && false -> false
console.log((10 > 5) && (7 > 2)); // true && true -> true
console.log((10 < 5) && (7 < 6)); // false && false -> false

// OR (||): Returns true if at least one operand is true, otherwise false
console.log((10 > 5) || (7 < 6)); // true || false -> true
console.log((10 < 5) || (7 < 6)); // false || false -> false
console.log((10 > 5) || (7 > 2)); // true || true -> true

// NOT (!): Inverts the boolean value of the operand
console.log(!(10 > 5)); // !true -> false
console.log(!(10 < 5)); // !false -> true

// NOR (Not OR): Can be simulated as !(a || b)
// Returns true only if both operands are false
console.log(!(10 > 5 || 7 < 6)); // !(true || false) -> !true -> false
console.log(!(10 < 5 || 7 > 8)); // !(false || false) -> !false -> true

// XOR (Exclusive OR): JavaScript doesn't have a built-in XOR operator for booleans,
// but it can be simulated as (a || b) && !(a && b)
// Returns true if exactly one operand is true, false if both are true or both are false
console.log((10 > 5 || 7 < 6) && !(10 > 5 && 7 < 6)); // (true || false) && !(true && false) -> true && !false -> true
console.log((10 > 5 || 7 > 2) && !(10 > 5 && 7 > 2)); // (true || true) && !(true && true) -> true && !true -> false
console.log((10 < 5 || 7 > 8) && !(10 < 5 && 7 > 8)); // (false || false) && !(false && false) -> false && !false -> false

// Combining Logical Operators
console.log((10 > 5 && 7 > 2) || !false); // (true && true) || true -> true || true -> true





// concept short circuiting
console.log(4 && 0); //0
console.log(4 || 0); //4
console.log(0 && 4); //0
console.log(0 || 4); //4


// 0-> considerd as false
// 1-> considerd as true

// Logical Operators and Short-Circuiting in JavaScript
// Logical operators (&&, ||) evaluate operands and may short-circuit, meaning they stop evaluation as soon as the result is determined.
// Non-boolean operands are returned as is, based on short-circuiting rules.

// Short-Circuiting with AND (&&)
// && returns the first falsy value or the last value if all are truthy
console.log(4 && 0); // 0 (4 is truthy, 0 is falsy, so returns 0)
console.log(0 && 4); // 0 (0 is falsy, so returns 0 without evaluating 4)
console.log(4 && 5); // 5 (both truthy, returns last value)

// Short-Circuiting with OR (||)
// || returns the first truthy value or the last value if all are falsy
console.log(4 || 0); // 4 (4 is truthy, so returns 4 without evaluating 0)
console.log(0 || 4); // 4 (0 is falsy, 4 is truthy, so returns 4)
console.log(0 || false); // false (both falsy, returns last value)

// Truthy and Falsy Values
// Falsy values: 0, "", null, undefined, NaN, false
// Truthy values: Non-zero numbers, non-empty strings, objects, arrays, true, etc.
console.log("Falsy examples:");
console.log(0 && "hello"); // 0 (falsy, stops evaluation)
console.log("" || null);   // null (both falsy, returns last)
console.log("Truthy examples:");
console.log(1 && "hello"); // hello (both truthy, returns last)
console.log(42 || "world"); // 42 (first truthy, stops evaluation)

// Practical Example of Short-Circuiting
// && can be used to execute code only if a condition is truthy
let user = { name: "Harshit" };
user && console.log(user.name); // Harshit (user is truthy, so console.log runs)

// || can be used to provide default values
let username = "";
console.log(username || "Guest"); // Guest (username is falsy, so returns "Guest")