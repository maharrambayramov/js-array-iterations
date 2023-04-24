// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
// ];


// const updatedStudents = students.map(student => {
//     return {
//         name: student.name,
//         points: student.points + 30
//     };
// });

// console.log(updatedStudents);


// Taak 2


// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// let formattedBdays = [];

// for (let i = 0; i < bdays.length; i++) {
//   if (bdays[i].includes('-')) {
//     formattedBdays.push(bdays[i].replace(/-/g, '/'));
//   } else {
//     formattedBdays.push(bdays[i]);
//   }
// }

// console.log(formattedBdays);



//Task 3


// let numbers = [1.5, 2.56, 5.1, 12.33];
// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] - Math.floor(numbers[i]) >= 0.5) {
//         newNumbers.push(Math.ceil(numbers[i]));
//     } else {
//         newNumbers.push(Math.floor(numbers[i]));
//     }
// }
// console.log(newNumbers);

//Task 4


// const b = "5,4,3,2,1";
// function sumNumbers(str) {
//     const numbers = str.match(/\d+/g).map(Number);
//     const sum = numbers.reduce((acc, val) => acc + val, 0);
//     return sum;
// }

// console.log(sumNumbers(b));



// Task 5


// const text = "I learn Fron-End Programming";

// const words = text.split(" ");
// const wordCount = words.length;

// if (wordCount === 1) {
//     console.log("1 sozden ibaretdir");
// } else {
//     console.log(" " + wordCount + " ");
// }

// Task 6


// const text = "introduction to algorithms";
// let result = "";

// const words = text.split(" ");
// for (let i = 0; i < words.length; i++) {
//     const firstLetter = words[i][0].toUpperCase();
//     const restOfWord = words[i].slice(1);
//     const capitalizedWord = firstLetter + restOfWord;
//     result += capitalizedWord + " ";
// }

// console.log(result.trim());



// Task 7


// const str = "Programming Principles";
// const char = "s";

// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//         count++;
//     }
// }

// console.log(char + " hərfi " + count + " dəfə");










