// Object Destructuring 1 - What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// Object Destructuring 2 - What does the following code return/print?
let planetFacts = {
    numPlanets2: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let {numPlanets2, ...discoveryYears} = planetFacts;
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



// Object Destructuring 3 - What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
};

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})); // Your name is Alejandro and you like purple
console.log(getUserData({firstName: "Melissa"})); // Your name is Melissa and you like green
console.log(getUserData({})); // Your name is undefined and you like green





// Array Destructuring 1 - What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi



// Array Destructuring 2 - What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
];

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // (3) ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']



// Array Destructuring 3 - What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // (3) [10, 30, 20]



// ES5 Assigning Variables to Object Properties
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
var a = obj.numbers.a;
var b = obj.numbers.b;

// ES2015 Object Destructuring
const obj2 = {
    numbers: {
        a2: 1,
        b2: 2
    }
};
const {a2,b2} = obj2.numbers;
console.log(obj2); // {numbers: {…}}




// ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr); // [1, 2]
console.log(arr[0]); // 1
console.log(arr[1]); // 2



// write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.
const racers = [
    {first: 'Tom'},
    {second: 'Margaret'}, 
    {third: 'Allison'},
    {rest: ['David', 'Pierre']}, 
];

function raceResults({first, second, third, ...rest}){
    return first, second, third, rest;
};
console.log(raceResults((racers))); // {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])); // {0: 'Tom', 1: 'Margaret', 2: 'Allison', 3: 'David', 4: 'Pierre'}


const raceResults2 = ([first, second, third, ...rest]) => ({first, second, third, rest});
console.log(raceResults2((racers)));
