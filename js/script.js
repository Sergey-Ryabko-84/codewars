// CODEWARS

// 2022.09.08

// 6 kyu
// Multiples of 3 or 5
// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// Courtesy of projecteuler.net (Problem 1)
// -----------------------------Solution------------------------------
// function solution(number){
//     if (number < 0) {
//       return 0;
//     }
    
//     let total = 0;
    
//     for (let i = 0; i < number; i++ ) {
//         i % 3 === 0 || i % 5 === 0 ? total += i : null;
//     }
    
//     return total;
//   }

//   console.log(solution(10));
// *******************************************************************



// 6 kyu
// Who likes it?
// DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
// -----------------------------Solution------------------------------
// function likes(names) {
//     // TODO
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//       break;
//     case 1:
//       return `${names[0]} likes this`;
//       break;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//       break;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       break;
//     default:
//       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }
//   console.log(likes([]));
//   console.log(likes(['Peter']));
//   console.log(likes(['Jacob', 'Alex']));
//   console.log(likes(['Max', 'John', 'Mark']));
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// *******************************************************************



// 7 kyu
// Square Every Digit
// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
// -----------------------------Solution------------------------------
// function squareDigits(num){
//     return Number(num.toString().split('').map(number => Number(number) ** 2).join(''));
//   }

//   console.log(squareDigits(3212));
// *******************************************************************




// 6 kyu
// Unique In Order
// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// -----------------------------Solution------------------------------
// var uniqueInOrder=function(iterable){

//     if(typeof iterable === 'string') {
//         iterable = iterable.split('')
//     }

//     return iterable.reduce((result, element) => {
//         element !== result[result.length - 1] ? result.push(element) : null;
//         return result;
//     }, [])
// }

// *****2nd solution

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((elememt, idx, arr) => elememt !== arr[idx - 1]);
// }

//   console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A', 'B', 'C', 'D', 'A', 'B']
//   console.log(uniqueInOrder([1,2,2,3,3])); //[1,2,3]
// *******************************************************************




// 7 kyu
// Find the next perfect square!
// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
// -----------------------------Solution------------------------------
// function findNextSquare(sq) {
//     return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;
// }

// console.log(findNextSquare(319225)); //320356
// console.log(findNextSquare(155)); //-1
// *******************************************************************


// 2022.09.09

// 6 kyu
// Bit Counting
// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
// -----------------------------Solution------------------------------
// var countBits = function(n) {
//     return (n).toString(2).split('').reduce((total, num) => total += Number(num), 0);
//   };
// console.log(countBits(1234));
// *******************************************************************




// 6 kyu
// Sum of Digits / Digital Root
// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// -----------------------------Solution------------------------------
// function digitalRoot(n) {
//     if (n.toString().length === 1) return n;
//     return digitalRoot(n.toString().split('').reduce((sum, num) => sum += Number(num), 0));
//   }

// *****************************************
// function digitalRoot(n) {
//     let result = 0;
//     for (let i = n; i.toString().length > 1; i = i.toString().split('').reduce((sum, num) => sum += Number(num), 0)) {
//         result = i
//     }
//     return result.toString().split('').reduce((sum, num) => sum += Number(num), 0);
//   }
// *****************************************
//   console.log(digitalRoot(16));//7
//   console.log(digitalRoot(942));//6
//   console.log(digitalRoot(132189));//6
//   console.log(digitalRoot(493193));//2
// *******************************************************************




// 6 kyu
// Are they the "same"?
// DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.
// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.
// -----------------------------Solution------------------------------
// function comp(array1, array2){
//     if (array1 === null || array2 === null || array1.length !== array2.length) return false;
//     return array1.every(element1 => {
//         return array2.some((element2, idx2) => {
//             if (element2 === element1 ** 2) {
//                 array2.splice(idx2, 1);
//                 return true;
//             }
//             return false;
//         })
//     })
// }

// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]));//true
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]));//false
// console.log(comp([5,  2,  1,  4, 9,  7,  0, 4, 3,  9, 2,  4,  0,  0, 8, 1, 9,  2, 7],
//                 [49, 16, 64, 4, 81, 16, 1, 0, 16, 5, 81, 81, 25, 4, 9, 0, 49, 1, 0]));//false
// console.log(comp([],[]));//true
// console.log(comp([1],[]));//false
// console.log(comp([],[1]));//false
// *******************************************************************




// 6 kyu
// Sort the odd
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// -----------------------------Solution------------------------------
// function sortArray(array) {
//     // Return a sorted array.
//     const sortedArray = [];
//     const sortedOddArray = array.filter(numb => numb % 2).sort((a, b) => a - b)
//     for (const element of array) {
//         element % 2 === 0 ? sortedArray.push(element) : sortedArray.push(sortedOddArray.shift());
//     }
//     return sortedArray;
//   }

//   console.log(sortArray([7, 1]));
//   console.log(sortArray([5, 8, 6, 3, 4]));
//   console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//   console.log(sortArray([ 1, 11, 2, 8, 3, 4, 5 ])); //[ 1, 3, 2, 8, 5, 4, 11 ]
//   console.log(sortArray([ -17, -49, 26, -12, -32, 41, 30, 4, 9, 46, 18, 32 ])); //[ -49, -17, 26, -12, -32, 9, 30, 4, 41, 46, 18, 32 ]
// *******************************************************************


// 2022.09.10

// 6 kyu
// Count the smiley faces!
// DESCRIPTION
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
// -----------------------------Solution------------------------------
// function countSmileys(arr) {
//     if (arr.length === 0) return 0;
//     let total = 0;
//     for (const element of arr) {
//         let smile = element.slice('');
//         if (smile.length > 3 || smile.length < 2) {continue;} 
//         else if (smile.length === 2 && (smile[0] === ':' || smile[0] === ';') && (smile[1] === ')' || smile[1] === 'D')) 
//         {total += 1;} 
//         else if (smile.length === 3 && (smile[0] === ':' || smile[0] === ';') && (smile[1] === '-' || smile[1] === '~') && (smile[2] === ')' || smile[2] === 'D')) 
//         {total += 1;} 
//     }
//     return total;
// }

// *********************************************************************
// function countSmileys(arr) {
//     if (arr.length === 0) return 0;
//     let total = 0;
//     for (const element of arr) {
//     let smile = element.slice('');
//     switch (smile.length) {
//         case 2: if (smile.length === 2 && (smile[0] === ':' || smile[0] === ';') && (smile[1] === ')' || smile[1] === 'D')) total += 1; break;
//         case 3: if (smile.length === 3 && (smile[0] === ':' || smile[0] === ';') && (smile[1] === '-' || smile[1] === '~') && (smile[2] === ')' || smile[2] === 'D')) total += 1; break;    
//         default: break;
//         }
//     }
//     return total;
// }

// console.log(countSmileys([':)', ';(', ';}', ':-D'])); //2
// console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); //3
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //1
// *******************************************************************




// 5 kyu
// Extract the domain name from a URL
// DESCRIPTION
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
// -----------------------------Solution------------------------------
// function domainName(url){
//     let domaName = '';
//     let startIndex = '';
//     let endIndex = '';

//     if (url.includes('//')) startIndex = url.indexOf('//') + 2;
//     if (url.includes('www.')) startIndex = url.indexOf('www.') + 4;
//     domaName = url.slice(startIndex, url.length)

//     if (domaName.includes('.')) endIndex = domaName.indexOf('.');
//     domaName = domaName.slice(0, endIndex)

//     return domaName;
// }

// // ********************************************************************
// function domainName(url){
//     return  url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0];
// }

// console.log(domainName("http://github.com/carbonfive/raygun")); //"github"
// console.log(domainName("http://www.zombie-bites.com")); //"zombie-bites"
// console.log(domainName("https://www.cnet.com")); //"cnet"
// console.log(domainName("www.xakep.ru")); //"xakep"
// console.log(domainName("http://google.co.jp")); //"google"
// *******************************************************************




// 6 kyu
// Two Sum
// DESCRIPTION
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/
// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// -----------------------------Solution------------------------------
// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }    
// }
// *******************************************************************