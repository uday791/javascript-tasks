// // Named Function — Without Arguments & Without Return

// 1. Check Even or Odd
// function evenOdd() {
//   let n = 10;

//   if (n % 2 == 0) console.log("Even");
//   else console.log("Odd");
// }
// evenOdd();

// // 2. Check Positive or Negative
// function positiveNegative() {
//   let n = -5;

//   if (n >= 0) console.log("Positive");
//   else console.log("Negative");
// }
// positiveNegative();

// // 3. Check Leap Year
// function leapYear() {
//   let year = 2024;

//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//     console.log("Leap Year");
//   else console.log("Not a Leap Year");
// }
// leapYear();

// // 4. Largest of Two Numbers
// function largestTwo() {
//   let a = 25,
//     b = 40;

//   if (a > b) console.log(a);
//   else console.log(b);
// }
// largestTwo();

// // 5. Largest of Three Numbers
// function largestThree() {
//   let a = 10,
//     b = 50,
//     c = 30;

//   if (a > b && a > c) console.log(a);
//   else if (b > c) console.log(b);
//   else console.log(c);
// }
// largestThree();

// // 6. Print 1 to 10
// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// printNumbers();

// // 7. Print Even Numbers 1 to 50
// function printEven() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) console.log(i);
//   }
// }
// printEven();

// // 8. Print Odd Numbers 1 to 50
// function printOdd() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 2 != 0) console.log(i);
//   }
// }
// printOdd();

// // 9. Sum of 1 to 100
// function sumNumbers() {
//   let sum = 0;

//   for (let i = 1; i <= 100; i++) {
//     sum += i;
//   }

//   console.log(sum);
// }
// sumNumbers();

// // 10. Reverse a Number
// function reverseNumber() {
//   let n = 12345;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   console.log(rev);
// }
// reverseNumber();

// // 11. Count Digits
// function countDigits() {
//   let n = 123456;
//   let count = 0;

//   while (n > 0) {
//     count++;
//     n = parseInt(n / 10);
//   }

//   console.log(count);
// }
// countDigits();

// // 12. Sum of Digits
// function sumDigits() {
//   let n = 12345;
//   let sum = 0;

//   while (n > 0) {
//     sum += n % 10;
//     n = parseInt(n / 10);
//   }

//   console.log(sum);
// }
// sumDigits();

// // 13. Palindrome Number
// function palindrome() {
//   let n = 121;
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   if (original == rev) console.log("Palindrome");
//   else console.log("Not Palindrome");
// }
// palindrome();

// // 14. Prime Number
// function prime() {
//   let n = 17;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) count++;
//   }

//   if (count == 2) console.log("Prime");
//   else console.log("Not Prime");
// }
// prime();

// // 15. Prime Numbers 1 to 100
// function primeRange() {
//   for (let n = 2; n <= 100; n++) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) count++;
//     }

//     if (count == 2) console.log(n);
//   }
// }
// primeRange();

// // Named Function — With Arguments & Without Return

// // 1. Even or Odd
// function evenOdd(n) {
//   if (n % 2 == 0) console.log("Even");
//   else console.log("Odd");
// }
// evenOdd(20);

// // 2. Positive or Negative
// function positiveNegative(n) {
//   if (n >= 0) console.log("Positive");
//   else console.log("Negative");
// }
// positiveNegative(-10);

// // 3. Leap Year
// function leapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
//     console.log("Leap Year");
//   else console.log("Not a Leap Year");
// }
// leapYear(2024);

// // 4. Largest of Two
// function largestTwo(a, b) {
//   if (a > b) console.log(a);
//   else console.log(b);
// }
// largestTwo(25, 40);

// // 5. Largest of Three
// function largestThree(a, b, c) {
//   if (a > b && a > c) console.log(a);
//   else if (b > c) console.log(b);
//   else console.log(c);
// }
// largestThree(10, 50, 30);

// // 6. Print Range
// function printRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// printRange(1, 10);

// // 7. Print Even Numbers
// function evenRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) console.log(i);
//   }
// }
// evenRange(1, 50);

// // 8. Print Odd Numbers
// function oddRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 2 != 0) console.log(i);
//   }
// }
// oddRange(1, 50);

// // 9. Sum of Range
// function sumRange(start, end) {
//   let sum = 0;

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   console.log(sum);
// }
// sumRange(1, 100);

// // 10. Reverse Number
// function reverseNumber(n) {
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   console.log(rev);
// }
// reverseNumber(12345);

// // 11. Count Digits
// function countDigits(n) {
//   let count = 0;

//   while (n > 0) {
//     count++;
//     n = parseInt(n / 10);
//   }

//   console.log(count);
// }
// countDigits(123456);

// // 12. Sum of Digits
// function sumDigits(n) {
//   let sum = 0;

//   while (n > 0) {
//     sum += n % 10;
//     n = parseInt(n / 10);
//   }

//   console.log(sum);
// }
// sumDigits(12345);

// // 13. Palindrome
// function palindrome(n) {
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   if (original == rev) console.log("Palindrome");
//   else console.log("Not Palindrome");
// }
// palindrome(121);

// // 14. Prime
// function prime(n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) count++;
//   }

//   if (count == 2) console.log("Prime");
//   else console.log("Not Prime");
// }
// prime(17);

// // 15. Prime Numbers in Range
// function primeRange(start, end) {
//   for (let n = start; n <= end; n++) {
//     let count = 0;

//     for (let i = 1; i <= n; i++) {
//       if (n % i == 0) count++;
//     }

//     if (count == 2) console.log(n);
//   }
// }
// primeRange(1, 100);

// // Named Function — Without Arguments & With Return

// // 1. Return Number
// function getNumber() {
//   let n = 10;
//   return n;
// }
// let a = getNumber();
// console.log(a);

// // 2. Even or Odd
// function evenOdd() {
//   let n = 20;

//   if (n % 2 == 0) return "Even";
//   else return "Odd";
// }
// console.log(evenOdd());

// // 3. Positive or Negative
// function positiveNegative() {
//   let n = -10;

//   if (n >= 0) return "Positive";
//   else return "Negative";
// }
// console.log(positiveNegative());

// // 4. Leap Year
// function leapYear() {
//   let year = 2024;

//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return "Leap Year";
//   else return "Not Leap Year";
// }
// console.log(leapYear());

// // 5. Largest of Two
// function largestTwo() {
//   let a = 25,
//     b = 40;

//   if (a > b) return a;
//   else return b;
// }
// console.log(largestTwo());

// // 6. Largest of Three
// function largestThree() {
//   let a = 10,
//     b = 50,
//     c = 30;

//   if (a > b && a > c) return a;
//   else if (b > c) return b;
//   else return c;
// }
// console.log(largestThree());

// // 7. Sum of Range
// function sumRange() {
//   let sum = 0;

//   for (let i = 1; i <= 100; i++) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumRange());

// // 8. Reverse Number
// function reverseNumber() {
//   let n = 12345;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   return rev;
// }
// console.log(reverseNumber());

// // 9. Count Digits
// function countDigits() {
//   let n = 123456;
//   let count = 0;

//   while (n > 0) {
//     count++;
//     n = parseInt(n / 10);
//   }

//   return count;
// }
// console.log(countDigits());

// // 10. Sum of Digits
// function sumDigits() {
//   let n = 12345;
//   let sum = 0;

//   while (n > 0) {
//     sum += n % 10;
//     n = parseInt(n / 10);
//   }

//   return sum;
// }
// console.log(sumDigits());

// // 11. Palindrome
// function palindrome() {
//   let n = 121;
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   return original == rev;
// }
// console.log(palindrome());

// // 12. Factorial
// function factorial() {
//   let n = 5;
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }

//   return fact;
// }
// console.log(factorial());

// // 13. Prime
// function prime() {
//   let n = 17;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) count++;
//   }

//   return count == 2;
// }
// console.log(prime());

// // 14. Count Divisors
// function countDivisors() {
//   let n = 24;
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) count++;
//   }

//   return count;
// }
// console.log(countDivisors());

// // 15. Perfect Number
// function perfectNumber() {
//   let n = 28;
//   let sum = 0;

//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) sum += i;
//   }

//   return sum == n;
// }
// console.log(perfectNumber());

// // Named Function — With Arguments & With Return

// // 1. Even or Odd
// function evenOdd(n) {
//   if (n % 2 == 0) return "Even";
//   else return "Odd";
// }
// console.log(evenOdd(20));

// // 2. Positive or Negative
// function positiveNegative(n) {
//   if (n >= 0) return "Positive";
//   else return "Negative";
// }
// console.log(positiveNegative(-10));

// // 3. Leap Year
// function leapYear(year) {
//   if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return "Leap Year";
//   else return "Not Leap Year";
// }
// console.log(leapYear(2024));

// // 4. Largest of Two
// function largestTwo(a, b) {
//   if (a > b) return a;
//   else return b;
// }
// console.log(largestTwo(25, 40));

// // 5. Largest of Three
// function largestThree(a, b, c) {
//   if (a > b && a > c) return a;
//   else if (b > c) return b;
//   else return c;
// }
// console.log(largestThree(10, 50, 30));

// // 6. Sum of Range
// function sumRange(start, end) {
//   let sum = 0;

//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumRange(1, 100));

// // 7. Reverse Number
// function reverseNumber(n) {
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   return rev;
// }
// console.log(reverseNumber(12345));

// // 8. Count Digits
// function countDigits(n) {
//   let count = 0;

//   while (n > 0) {
//     count++;
//     n = parseInt(n / 10);
//   }

//   return count;
// }
// console.log(countDigits(123456));

// // 9. Sum of Digits
// function sumDigits(n) {
//   let sum = 0;

//   while (n > 0) {
//     sum += n % 10;
//     n = parseInt(n / 10);
//   }

//   return sum;
// }
// console.log(sumDigits(12345));

// // 10. Palindrome
// function palindrome(n) {
//   let original = n;
//   let rev = 0;

//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = parseInt(n / 10);
//   }

//   return original == rev;
// }
// console.log(palindrome(121));

// // 11. Factorial
// function factorial(n) {
//   let fact = 1;

//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }

//   return fact;
// }
// console.log(factorial(5));

// // 12. Prime
// function prime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }
// console.log(prime(17));

// // 13. Count Divisors
// function countDivisors(n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) count++;
//   }

//   return count;
// }
// console.log(countDivisors(24));

// // 14. Perfect Number
// function perfectNumber(n) {
//   let sum = 0;

//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) sum += i;
//   }

//   return sum == n;
// }
// console.log(perfectNumber(28));

// // 15. Fibonacci
// function fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     result += a + " ";

//     let c = a + b;
//     a = b;
//     b = c;
//   }

//   return result;
// }
// console.log(fibonacci(10));