const myNums = [4, 6, 7, 23, 45, 50, 69, 100];

// Normal for loop that we're used to
let forSquares = [];
for (let i = 0; i < myNums.length; i++)
  forSquares.push(myNums[i]**2);
console.log("Normal for loop:", forSquares);

// for in which loop over KEYS
let forinSquares = [];
for (let key in myNums)
  forinSquares.push(myNums[key]**2);
console.log("for in:", forinSquares);

// for of which loop over VALUES
let forofSquares = [];
for (let value of myNums)
forofSquares.push(value**2);
console.log("for of:", forofSquares);

// forEach which accept a callback function
let forEachSquares = [];
myNums.forEach(myNum => { forEachSquares.push(myNum**2); });
console.log("forEach method:", forEachSquares);

// map works like forEach but also returns an array
const mapSquares = myNums.map(myNum => myNum**2);
console.log("map method:", mapSquares);

// filter which filters...
const filteredNums = myNums.filter(myNum => myNum > 40);
console.log("Filter out numbers that is <= 40:", filteredNums);

// reduce that return only one value
const Sum = myNums.reduce((acc, curNum) => acc + curNum, 0)
console.log("Sum:", Sum);