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