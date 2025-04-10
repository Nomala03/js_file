// Exercise 1: Temperature check

//1. 
let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

//2. 
let temperature = 20; 

switch (true) {
    case (temperature < 0):
      console.log("It's freezing!");
      break;
    case (temperature >= 0 && temperature <= 15):
      console.log("It's cold.");
      break;
    case (temperature >= 16 && temperature <= 25):
      console.log("It's mild.");
      break;
    default:
      console.log("It's warm.");
      break;
  }

// Exercise 2: Divisibility

//1.
let number = 36; 

if (number % 2 && number % 3 ) {
  console.log("Divisible by both.");
} else if (number % 2) {
  console.log("Divisible by 2.");
} else if (number % 3) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// 2. 
let number = 15;

switch (true) {
  case (number % 2 && number % 3):
    console.log("Divisible by both.");
    break;
  case (number % 2):
    console.log("Divisible by 2.");
    break;
  case (number % 3 === 0):
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
    break;
}

// Exercise 3: For loops

// 1. 
Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ,10]

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// 2.
Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 1; i < 20; i += 2) {
    console.log(i);
  }

// 3.
let sum = 0;

for (let i = 0; i < 100; i++) {
  sum += i;
}

console.log("Sum of numbers from 1 to 100 is:", sum);

// 4.
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//5. 
const num = [3, 7, 2, 5, 10, 6];

let largest = num[0]; 

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("The largest number is:", largest);

// Exercise 4: While loops

// 1. 
console.log("Numbers from 1 to 10:");
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 2.
console.log("Even numbers from 1 to 20:");
let j = 1;
while (j < 20) {
  console.log(j);
  j += 2;
}

// 3.
let sum = 0;
for (let i = 0; i < 100; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

// 4.
console.log("Multiples of 5 less than 50:");
for (let i = 0; i < 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

//Exercise 5: Do while loops

// 1.
console.log("Numbers from 1 to 10:");
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// 2. 
let sumDoWhile = 0;
let j = 1;
do {
  sumDoWhile += j;
  j++;
} while (j <= 100);
console.log("Sum of numbers from 1 to 100:", sumDoWhile);

// 3.
let number;
do {
  number = parseInt(prompt("Enter a number greater than 10:"));
} while (number <= 10);
console.log("Valid number entered:", number);

// 4.
let guess;
let correctNumber = Math.floor(Math.random() * 10) + 1; 

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  if (guess !== correctNumber) {
    console.log("Incorrect guess. Try again!");
  }
} while (guess !== correctNumber);

console.log("Congratulations! You guessed the correct number:", correctNumber);




