//Exercise 1: Numbers

// 1.
let int = 11;
let floatNum = 6.3;

// 2. performing arithmetic operators
let num1 = 11;
let num2 = 4;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let exponentiation = [(num1 + num2) ** 2]; 

// 3. print all variables
console.log("Addition", addition);
console.log("Subtraction", subtraction);
console.log("Multiplication", multiplication);
console.log("Division", division);
console.log("Modulus", modulus);
console.log("Exponentiation", exponentiation);

// Exercise 2: Boolean and Operators

// 1.
let nom1 = 66;
let nom2 = 33;

// 2. Using comparison operators
let equalTo = nom1 == nom2;          
let NotEqualTo = nom1 != nom2;       
let GreaterThan = nom1 > nom2;      
let LessThan = nom2 < nom1;         

// Print
console.log("equalTo", equalTo);
console.log("NotEqualTo", NotEqualTo);
console.log("GreaterThan", GreaterThan);
console.log("LessThan", LessThan);

// 2. declare x and y and assign values
let x = 8;
let y = 12;

// b. Check if x is greater than y
let isGreater = x > y;
console.log("Is x greater than y?", isGreater);

// c. Check if x is less than or equal to y
let isLessOrEqual = x <= y;
console.log("Is x less than or equal to y?", isLessOrEqual);

// d. Check if x is equal to y
let isEqual = x == y;
console.log("Is x equal to y?", isEqual);

// e. Check if x is not equal to y
let isNotEqual = x != y;
console.log("Is x not equal to y?", isNotEqual);

// 3. Declare variables a and b with values true and false 

// Declare variables
let a = true;
let b = false;

// a.
let andResult = a && b;
console.log("a AND b:", andResult);

// b. 
let orResult = a || b;
console.log("a OR b:", orResult);

// c. 
let notResult = !a;
console.log(" NOT a:", notResult);

// 4. 
 // Declare variable p 
let p = 10;

// a. 
p += 5; 
console.log("p now is:", p);

// b. 
p -= 3;
console.log("p now is:", p);

// c.
p *= 2; 
console.log("p now is:", p);

// d.
p /= 4; 
console.log("p is:", p);

// e.
p %= 3; 
console.log("p now is:", p);

