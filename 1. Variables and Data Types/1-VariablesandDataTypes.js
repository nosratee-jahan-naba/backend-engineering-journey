// Modern variable declarations
const API_KEY = "your-api-key"; // Immutable
let userCount = 0; // Mutable
var oldStyle = "avoid in modern JavaScript"; // Function-scoped

// Primitive types
const name = "John Doe"; // string
const age = 25; // number
const isActive = true; // boolean
const data = null; // null
let undefined_var; // undefined

// Complex types
const user = { name: "John", age: 25 }; // object
const numbers = [1, 2, 3, 4, 5]; // array
const greet = function (name) {
  return `Hello, ${name}!`;
}; // function

// Let's see our variables in action
console.log("=== Variable Declarations ===");
console.log("API_KEY:", API_KEY);
console.log("userCount:", userCount);
console.log("oldStyle:", oldStyle);

console.log("\n=== Primitive Types ===");
console.log("name:", name, "(type:", typeof name + ")");
console.log("age:", age, "(type:", typeof age + ")");
console.log("isActive:", isActive, "(type:", typeof isActive + ")");
console.log("data:", data, "(type:", typeof data + ")");
console.log("undefined_var:", undefined_var, "(type:", typeof undefined_var + ")");

console.log("\n=== Complex Types ===");
console.log("user:", user, "(type:", typeof user + ")");
console.log("numbers:", numbers, "(type:", typeof numbers + ")");
console.log("greet function result:", greet("World"), "(type:", typeof greet + ")");

console.log("\n=== Variable Mutations ===");
userCount = 10;
console.log("userCount after mutation:", userCount);