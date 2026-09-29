// for (let j = 1; j <= 5; j++) {
//     for (let i = 1; i <= 5; i++) {
//         if (j + i == 5) {
//             console.log(sum);
//         }


//     }
// }



// for (let i = 1; i <= 10; i++) {
//     let n = i;
//     if (n % 2 == 0) {
//         console.log(n);
//     }

// }


// |||||||||||||||||||||||


// for (let i = 1; i <= 5; i++) {
//     let n = i;
//     for (let j = 1; j <= 10; j++) {
//         console.log(n, "x", j, "=", (n * j));

//     }


// }

// for (let i = 1; i <= 5; i++) {
//     let n = i;
//     let fact = 1
//     for (let j = 1; j <= n; j++) {
//         fact = fact * j

//     }
//     console.log(fact);


// }



// let n = 13
// let count = 0
// for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         count += 1
//     }
//     if (count == 2) {
//         console.log("prime");



//     }
// }

// for (let i = 100; i <= 200; i++) {
//     let n = i;
//     let rev = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = parseInt(n / 10);
//     }

//     if (i === rev) {
//         console.log(i);
//     }
// }



// Find the sum of all prime numbers between 20 and 150.


// for (j = 20; j <= 150; j++) {
//     let n = j
//     let count = 0
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0) {
//             count += 1
//         }
//     }
//     if (count == 2) {
//         console.log(j);
//     }

// }


// let sum = 0;
// let count = 0;

// for (let i = 1; i <= 1000; i++) {
//     let div = 0;
//     for (let j = 1; j < i; j++) {
//         if (i % j === 0) {

//             div += i;
//         }
//     }
//     if (div === i) {
//         console.log(j);
//         sum += j;
//         count++;
//     }
// }
// let avg = sum / count;
// console.log(avg);


//Find the average of all perfect numbers between 1 and 1000.
// let sum = 0;
// let count = 0;

// for (let i = 1; i <= 1000; i++) {
//     let div = 0;
//     for (let j = 1; j < i; j++) {
//         if (i % j == 0) {

//             div += j;
//         }
//     }
//     if (div == i) {
//         console.log(i);
//         sum += i;
//         count++;
//     }
// }
// let avg = sum / count;
// console.log(avg);

//Palindrome Numbers
//Print all palindrome numbers between 100 and 500.

// for (let i = 100; i <= 500; i++) {
//     let n = i;
//     let rev = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = parseInt(n / 10);
//     }

//     if (i === rev) {
//         console.log(i);
//     }
// }


//Print all numbers between 120 and 850 whose digit sum is exactly 10.

// for (let i = 120; i < 850; i++) {
//     let n = i
//     if (i % 10 == 0) {
//         console.log(i);

//     }
// }



//Print all leap years between **1900 and 2026**.


// for (let i = 1900; i <= 2026; i++) {
//     if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
//         console.log(i);

//     }
// }


//Print all numbers between 10 and 300 that have exactly 3 factors.

// for (let j = 1; j <= 300; j++) {
//     let n = j
//     let fact = 0
//     for (let i = 1; i <= j; i++) {
//         if (j % i == 0) {
//             fact += 1;


//         }
//     }
//     if (fact == 3) {
//         console.log(j);

//     }
// }


//Print the prime factors of every number between 20 and 50.



// for (let n = 20; n <= 50; n++) {
//     let temp = n;
//     console.log("Prime factors of " + n + ":");

//     for (let i = 2; i <= temp; i++) {
//         while (temp % i === 0) {
//             console.log(i);
//             temp = temp / i;
//         }
//     }
// }



//Print all Armstrong numbers between **100 and 999**.

// for (let i = 100; i <= 999; i++) {
//     let n = i
//     let sum = 0

//     while (n > 0) {
//         let digit = n % 10
//         sum = sum + (digit * digit * digit)
//         n = parseInt(n / 10);
//     }
//     if (sum == i) {
//         console.log(i);

//     }
// }



