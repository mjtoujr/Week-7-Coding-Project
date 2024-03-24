/*Question 1:
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.*/
console.log('\nQuestion 1 setup - creating Ages array:\n');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log('Initial array contents:')
console.log(ages);
/*1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
-Do not use numbers to reference the last element, find it programmatically.
-ages[7] - ages[0] is not allowed!*/
console.log('\nQuestion 1a - Subtracting first element from last element:\n');
let lastFirst = (ages[ages.length-1]) - (ages[ages.length - ages.length]); //referencing element positions without using numbers
console.log(lastFirst);
/*1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/
console.log('\nQuestion 1b - adding age 55 to array:\n');
ages.push(55);
console.log('New Array contents:');
console.log(ages);
console.log('New subtraction of first element from last element:', lastFirst);
/*1c. Use a loop to iterate through the array and calculate the average age.*/
console.log('\nQuestion 1c - calculating average age:\n');
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //function to add the ages together
  } 
  let average = sum / arr.length; //dividing sum to get average
  console.log(average);
}
findAverage(ages);
/*Question 2:
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.*/
console.log('\nQuestion 2 setup - creating Names array:\n');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('Initial array contents:');
console.log(names);
/*2a. Use a loop to iterate through the array and calculate the average number of letters per name.*/
console.log('\nQuestion 2a - calculating average number of letters per name:\n');
function averageNameLength(arr) {
  let lengthTotal = arr.reduce(function(sum, name) {
    return sum + name.length; 
  }, 0); //function to add together all string lengths
  let averageLength = lengthTotal / arr.length; //divide by number of names
  console.log(averageLength);
};
averageNameLength(names);
/*2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.*/ 
console.log('\nQuestion 2b - concatenating all names:\n');
console.log(names.join(' ')); //Names on one line, separated by one space, no comma

//Question 3:
console.log('\nQuestion 3 - How do you access the last element of any array?\n');
console.log('Answer: By using .length; final position will always be arrayName[arrayName.length - 1].');

//Question 4:
console.log('\nQuestion 4 - How do you access the first element of any array?\n')
console.log('Answer: Normally, the first element of an array is at position 0, or arrayName[0].');

/*Question 5:
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/
console.log('\nQuestion 5 - Generating new array with name lengths:\n');
let nameLengths = []; //creating nameLengths
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length); //pushing the length of each name into the new array
};
console.log('Contents of nameLengths:')
console.log(nameLengths);

/*Question 6:
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
console.log('\nQuestion 6 - Calculating sum of all elements in nameLengths:\n');
let lengthsSum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  lengthsSum += nameLengths[i]; //adding all elements in the array
}
console.log('Total sum of all elements in nameLengths:');
console.log(lengthsSum);

/*Question 7:
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
console.log('\nQuestion 7 - Concatenating a word to itself:\n');
function concatenation(word, n) {
  let repeatString = '';
  for (let i = 0; i < n; i++) {
    repeatString += word; //adding word to itself n number of times
  } console.log(repeatString);
};
console.log('Demonstrating repeat concatenation with input of Greetings and 6:');
concatenation('Greetings', 6);


/*Question 8:
Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.*/
console.log('\nQuestion 8 - Generating full name:\n');
let fullname = (firstName, lastName) => {
  console.log(firstName + ' ' + lastName);
};
console.log('Demonstration full name combination with input of Richard and Finehouse:');
fullname('Richard', 'Finehouse');

/*Question 9:
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
console.log('\nQuestion 9 - Checking if array sum is greater than 100:\n');
function greaterThanHundred(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //adding all elements in the array
  } if (sum > 100) {
    console.log('True');
  } else {
    console.log('False');
  }
};
console.log('Results of greaterThanHundred with an array of [2, 12, 85, 32]:');
greaterThanHundred([2, 12, 85, 32]);
console.log('Results of greaterThanHundred with an array of [5, 9, 22, 1, 40]:');
greaterThanHundred([5, 9, 22, 1, 40]);

/*Question 10:
Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
console.log('\nQuestion 10 - Calculating an array average:\n');
let arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //function to add all elements together
  } 
  let average = sum / arr.length; //dividing sum to get average
  console.log(average);
};
console.log('Demonstrating arrayAverage with an array of [9, 82, 45, 72, 15]:');
arrayAverage([9, 82, 45, 72, 15]);

/*Question 11:
Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
console.log('\nQuestion 11 - Comparing averages of two arrays:\n');
let compareAverages = (arr1, arr2) => {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i]; //function to add all elements in first array together
  } 
  let average1 = sum1 / arr1.length; //dividing sum to get first array average
  for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i]; //function to add all elements in second array together
  } 
  let average2 = sum2 / arr2.length; //dividing sum to get second average
  if (average1 > average2) {
    console.log('True');
  } else {
    console.log('False');
  }
};
console.log('Demonstrating compareAverages with first array of [1, 2, 3, 4, 5] and a second array of [6, 7, 8, 9, 10]:');
compareAverages([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
console.log('Demonstrating compareAverages with first array of [6, 7, 8, 9, 10] and a second array of [1, 2, 3, 4, 5]:');
compareAverages([6, 7, 8, 9, 10], [1, 2, 3, 4, 5]);

/*Question 12:
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
console.log('\nQuestion 12 - Confirming conditions to buy a drink:\n');
let willBuyDrink = (isHotOutside, moneyInPocket) => {
  if (isHotOutside && moneyInPocket > 10.50) {
    return true;
  } else {
    return false;
  }
};
console.log('If it is cold outside and I have $20.00, should I buy a drink?');
console.log(willBuyDrink(false, 20));
console.log('If it is hot outside, and I have $8.75, should I buy a drink?');
console.log(willBuyDrink(true, 8.75));
console.log('If it is hot outside, and I have $10.53, should I buy a drink?');
console.log(willBuyDrink(true, 10.53));

/*Question 13:
Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/
console.log('\nQuestion 13 - Creating a function to determine if weekly temperatures were too hot or too cold:\n');
let weeklyTempComfort = (arr) => {
  if (arr.length !== 7) { //making sure that array has 7 elements
  return 'Error: Need temperatures for a full week';
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average = sum / arr.length; //calculating average temperature
    if (average > 90) {
      return 'Too hot; take steps to stay cool';
    } else if (average < 33) {
      return 'Too cold; please stay inside or bundle up';
    } else {
      return 'If you\'re from Michigan, this is perfectly fine to wander around outside in!';
    } //acceptable average temperature has range between 33 and 89
  }
};
console.log('\nDemonstrating weeklyTempComfort with an array of [99, 97, 95, 88, 90, 93, 85]:');
console.log(weeklyTempComfort([99, 97, 95, 88, 90, 93, 85]));
console.log('\nDemonstrating weeklyTempComfort with an array of [26, 30, 45, 31, 28, 22, 31]:');
console.log(weeklyTempComfort([26, 30, 45, 31, 28, 22, 31]));
console.log('\nDemonstrating weeklyTempComfort with an array of [25, 35, 45, 55, 65, 75, 85]:');
console.log(weeklyTempComfort([25, 35, 45, 55, 65, 75, 85]));
console.log('\nDemonstrating weeklyTempComfort with an array of [68, 72, 85]:');
console.log(weeklyTempComfort([68, 72, 85]));
console.log('\nFinal note - all temperatures in Fahrenheit.');