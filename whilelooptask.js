//Here are the simple JavaScript codes using while loops for all 5 questions.

//Find the sum of digits
//Example: 738 → 7 + 3 + 8 = 18


// let n = 738;
// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum = sum + digit;
//     n = parseInt(n / 10);
// }

// console.log(sum);


//Find the average of digits
//Example: 624 → (6 + 2 + 4) / 3 = 4



// let n = 624;
// let sum = 0;
// let count = 0;

// while (n > 0) {
//     let digit = n % 10;

//     sum = sum + digit;
//     count = count + 1;

//     n = parseInt(n / 10);
// }

// let average = sum / count;

// console.log(average);



//Find the sum of first digit and last digit
///Example: 936 → 9 + 6 = 15


// let n = 936;

// let last = n % 10;

// while (n >= 10) {
//     n = parseInt(n / 10);
// }

// let first = n;

// let sum = first + last;

// console.log(sum);


//Find the average of digits divisible by 5
//Example: 12575 → 5, 5, 5 → Average = 5


// let n = 12575;
// let sum = 0;
// let count = 0;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit % 5 == 0) {
//         sum = sum + digit;
//         count = count + 1;
//     }

//     n = parseInt(n / 10);
// }

// let average = sum / count;

// console.log(average);

//Difference between largest and smallest digit
//Difference between largest and smallest digit


// let n = 58321;

// let largest = 0;
// let smallest = 9;

// while (n > 0) {
//     let digit = n % 10;

//     if (digit > largest) {
//         largest = digit;
//     }

//     if (digit < smallest) {
//         smallest = digit;
//     }

//     n = parseInt(n / 10);
// }

// let difference = largest - smallest;

// console.log(difference);



//Print numbers from 10 to 150 divisible by both 3 and 5


// for (let i = 10; i <= 150; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i);
//     }
// }


//Count numbers from 200 down to 50 divisible by 7


// let count = 0;

// for (let i = 200; i >= 50; i--) {

//     if (i % 7 == 0) {
//         count = count + 1;
//     }
// }

// console.log(count);


//Print numbers from 120 down to 20 that are NOT divisible by 5


// for (let i = 120; i >= 20; i--) {

//     if (i % 5 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Find the average of all even numbers from 10 to 100

//let sum = 0;
// let count = 0;

// for (let i = 10; i <= 100; i++) {

//     if (i % 2 == 0) {
//         sum = sum + i;
//         count = count + 1;
//     }
// }

// let average = sum / count;

// console.log(average);

//Find the average of all factors of a given number
// let n = 12;
// let sum = 0;
// let count = 0;

// for (let i = 1; i <= n; i++) {

//     if (n % i == 0) {
//         sum = sum + i;
//         count = count + 1;
//     }
// }

// let average = sum / count;

// console.log(average);