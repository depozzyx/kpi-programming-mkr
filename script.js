// 1

// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// For cancelled input show “Canceled.”
// If the word’s length is odd - show the middle character.If word’s length is even - show the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”
// abcde
// len = 5
// len / 2 = 2.5
//  a[2] = c

const middleCharacters = (str) => {
    const len = str.length;

    if (str.trim().length == 0) return "Invalid value";

    if (len % 2 == 0) return str[len / 2 - 1] + str[len / 2];
    return str[len / 2 - 0.5];
};
console.log("// task1");
console.log(middleCharacters("test"));
console.log(middleCharacters("character"));
console.log(middleCharacters("B"));
console.log(middleCharacters(""));
console.log(middleCharacters("       "));

// 2
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
// ]
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     }
// Write function, which will get array above as a param and return an array with skills of all users, values should be unique
// Write function, which will get array above as a param and return total balance of all users, who has two friens and whose age is less than 30

const usersStats = (users) => {
    const uniqueSkills = users.reduce((prev, cur) => {
        const addSkills = cur.skills.filter((skill) => !prev.includes(skill));
        return [...prev, ...addSkills];
    }, []);
    const totalBalance = users.reduce((prev, cur) => prev + cur.balance, 0);

    return { uniqueSkills, totalBalance };
};
users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    },
];

console.log("// task2");
console.log(usersStats(users));

// 3
// Differences between operators spread and rest, examples of their use

// Rest operator and spread operator have the same syntaxis, but used in different places and solve different problems

console.log("// task3");
console.log(`
// Spread:
//  used to merge two or more arrays or objects
//  example:
//  a = [1, 2, 3]; b = [3, 4, 5]; 
//  ab = [...a, ...b]; console.log(ab) // => [1, 2, 3, 3, 4, 5]
//  example with objects:
//  a = {1: 100, 2: 1000}; b = {3: 10000}; 
//  ab = {...a, ...b}; console.log(ab) // => {1: 100, 2: 1000, 3: 10000}
// Rest:
//  is used inside the function argumets. 
//  not really used that much, as usually it's more convenient to pass one object with many
//  varying values and keys. plus i don't know how do you type this thing in typescript
//  example:
//  function func(...args) { 
//   return args;
//  }
//  console.log(func("a", "b", "c")); // => ["a", "b", "c"]
//  
`);

// 4

// Create list on user's names in html document. By click on name display alert 'Hello, {name}'
console.log("// task4");
const addUsersToDocument = (users, elem) => {
    let html = "";
    for (const user of users) {
        html += `<li onclick="console.log('Hello, ${user.name}')">${user.name}</li>`;
    }
    elem.innerHTML = html;
};
addUsersToDocument(users, document.querySelector("li#users"));
