//break stament

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }

// }


// let i = 10;
// while (i <= 20) {
//     console.log(i);
//     if (i == 14) {
//         break;
//     }
//     i = i + 1
// }


// let i = 21;
// while (i <= 32) {

//     if (i % 5 == 0) {
//         console.log(i);
//         break;
//     }
//     i = i + 1
// }


// for (let i = 10; i > 1; i--) {

//     if (i % 3 == 0) {
//         console.log(i);
//         break;
//     }

// }


// let count = 0
// for (let i = 3; i <= 15; i++) {
//     count++;
//     console.log(i);

//     if (count == 3) {
//         break;
//     }
// }


// let n = 514369
// while (n > 0) {
//     let digit = n % 10;
//     if (digit % 2 == 0) {
//         console.log(digit);
//         break

//     }
//     n = parseInt(n / 10);
// }


// let n = 1924016;
// while (n > 0) {
//     id = n % 10;
//     if (id < 3) {
//         console.log(id);
//         break
//     }
//     n = parseInt(n / 10);
// }


//////....................continue..........................



// for (let i = 11; i <= 20; i++) {
//     if (i == 13) {
//         continue;
//     }
//     console.log(i);
// }


// let n = 2015
// while (n <= 2026) {
//     if (n == 2022) {
//         continue
//     }
//     console.log(n);
//     n = n + 1
// }

//skip the even numbers in range of 1to10


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         continue
//     }
//     console.log(i);
// }

// the 1to5 numbers in 3in the skip
// let n = 1
// while (n <= 5) {
//     if (n == 3) {
//         n = n + 1
//         continue
//     }
//     console.log(n);
//     n = n + 1
// }

//write the code skip in the odd numbers


// let n = 123456
// while (n > 0) {
//     id = n % 10;

//     if (id % 2 != 0) {
//         n = parseInt(n / 10)
//         continue
//     }
//     console.log(id);
//     n = parseInt(n / 10)
// }



//Find the first even digit from the left in 753914286

// let n = 735914286

// while (n > 0) {
//     id = n % 10;

//     if (id % 2 == 0) {
//         n = parseInt(n / 10)
//         console.log(id);
//         break
//     }

//     n = parseInt(n / 10)

// }

//Find the first prime number between 50 and 100.

// for (let j = 50; j <= 100; j++) {

//     let count = 0;
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0) {
//             count += 1;
//         }
//     }
//     if (count == 2) {
//         console.log(j);
//         break

//     }
// }


//Find the first number whose digit sum is 10.


// for (let n = 1; n <= 100; n++) {

//     let x = n;
//     let sum = 0;

//     while (x > 0) {
//         let digit = x % 10;
//         sum = sum + digit;
//         x = parseInt(x / 10);
//     }

//     if (sum == 10) {
//         console.log(n);
//         break;
//     }
// }

//Find the first number with exactly 3 divisors between 1 and 100.


// for (let i = 1; i <= 100; i++) {
//     let count = 0
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             count += 1;
//         }
//     }
//     if (count == 3) {
//         console.log(i);
//         break;

//     }
// }


//Stop when 3 consecutive odd numbers occur between 1 and 50


// let count = 0
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 != 0) {
//         count += 1
//         if (count == 3) {
//             console.log(i);
//             break

//         }
//     }

// }


//Find the first palindrome between 10 and 500.

// for (let i = 10; i <= 500; i++) {
//     let n = i;
//     let rev = 0;
//     while (n > 0) {
//         let id = n % 10;
//         rev = rev * 10 + id;
//         n = parseInt(n / 10);
//     }
//     if (i == rev) {
//         console.log(i);
//         break
//     }
// }

//Find the first perfect number between 1 and 1000.


// for (let n = 1; n <= 1000; n++) {
//     let sum = 0
//     for (let i = 1; i < n; i++) {
//         if (n % i == 0) {
//             sum += i
//         }
//     }
//     if (sum == n) {
//         console.log(n);
//         break

//     }
// }



//Print the first 5 even numbers.


// let count = 0;

// for (let n = 1; n <= 100; n++) {

//     if (n % 2 == 0) {
//         console.log(n);
//         count++;
//     }

//     if (count == 5) {
//         break;
//     }
// }


//Print the first 5 prime numbers.

// let f_count = 0
// for (let j = 2; j <= 100; j++) {

//     let count = 0;
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0) {
//             count += 1;
//         }
//     }
//     if (count == 2) {
//         console.log(j);
//         f_count += 1

//     }
//     if (f_count == 5) {
//         break
//     }

// }

//Print the first 3 numbers divisible by 7.

// let count = 0;

// for (let n = 1; n <= 100; n++) {

//     if (n % 7 == 0) {
//         console.log(n);
//         count++;
//     }

//     if (count == 3) {
//         break;
//     }
// }



////////////////////continue////////////////////


//Print 1–30, skipping even numbers.


// for (let i = 1; i <= 30; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Print 1–40, skipping multiples of 4

// for (let i = 1; i <= 40; i++) {
//     if (i % 4 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Print 1–30, skipping numbers from 10–20

// for (let i = 1; i <= 30; i++) {
//     if (i >= 10 && i <= 20) {
//         continue;
//     }

//     console.log(i);
// }



//Print 1–50, skipping multiples of 3


// for (let i = 1; i <= 50; i++) {
//     if (i % 3 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Extract 502304, skipping digit 0

// let n = 50203;
// while (n > 0) {
//     let id = n % 10
//     n = parseInt(n / 10);
//     if (id == 0) {
//         continue;
//     }
//     console.log(id);

// }


//Extract 5832461, printing only even digits


// let n = 5832461;
// while (n > 0) {
//     let id = n % 10
//     n = parseInt(n / 10);
//     if (id % 2 != 0) {
//         continue;
//     }
//     console.log(id);

// }


//Extract 1432578, skipping odd digits


// let n = 1432578;
// while (n > 0) {
//     let id = n % 10
//     n = parseInt(n / 10);
//     if (id % 2 != 0) {
//         continue;
//     }
//     console.log(id);

// }


///Print 1–200, skipping multiples of 3 or 5


// for (let i = 1; i <= 200; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Print 1–500, skipping numbers with odd digit sum


// for (let i = 1; i <= 500; i++) {
//     let n = i;
//     let sum = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         sum = sum + digit;
//         n = parseInt(n / 10);
//     }

//     if (sum % 2 != 0) {
//         continue;
//     }

//     console.log(i);
// }




//These are JavaScript continue + break statement practice questions. Here are the simple codes.




///Print 1–50, skip multiples of 3, stop at 40


// for (let i = 1; i <= 50; i++) {

//     if (i == 40) {
//         break;
//     }

//     if (i % 3 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Print odd numbers, skip evens, stop at the first multiple of 7


// for (let i = 1; i <= 50; i++) {

//     if (i % 7 == 0) {
//         break;
//     }

//     if (i % 2 == 0) {
//         continue;
//     }

//     console.log(i);
// }


//Extract 5830421, skip odd digits, stop at 0


// let n = 5830421;

// while (n > 0) {

//     let digit = n % 10;
//     n = parseInt(n / 10);

//     if (digit == 0) {
//         break;
//     }

//     if (digit % 2 != 0) {
//         continue;
//     }

//     console.log(digit);
// }


//Extract 8325147, print digits until 5


// let n = 8325147;
// let result = "";

// while (n > 0) {

//     let digit = n % 10;
//     n = parseInt(n / 10);

//     if (digit == 5) {
//         break;
//     }

//     result = digit + result;
// }

// console.log(result);


//Search from 51, skip non-multiples of 9, stop at the first multiple of 9



// for (let i = 51; i <= 100; i++) {

//     if (i % 9 != 0) {
//         continue;
//     }

//     console.log(i);
//     break;
// }
