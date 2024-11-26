// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// console.log(hobbies);
// hobbies.unshift('Coding');
// console.log(hobbies);
// hobbies.shift(); //you cant add anything in here
// console.log(hobbies);

// hobbies.splice(0, 1); 
// console.log(hobbies)

// const testResults = [2, 0.3, -2, 4];
// const testResultsArray = testResults.slice(); 
// testResults.push(5);
// console.log(testResultsArray);

// const personData = [{Name: 'Manuel'},{Name: 'Manali'}]
// const findManuel = personData.find((person, index, persons)=>{
//     return person.Name === 'Manuel';
// });

// const findManuelIndex = personData.findIndex((person, index, persons)=>{
//     return person.Name == 'Manali';

// })
// console.log(findManuelIndex);







let tax = 0.19; 

// const adjustPrice = prices.map((price, idx, prices)=>{
//     const taxAdjust = {index: idx , taxAdjPrice : price * (1 + 0.19)}
//         return taxAdjust; 
// })

// console.log(adjustPrice);

// const sortedPrice = prices.sort((a, b)=>{
//     if(a>b){
//         return 1; 
//     }else if(a===b){
//         return 0;
//     }else{
//         return -1;
//     }
// })

// const filterPrices = prices.filter(price=> price > 6);

// console.log(sortedPrice);
// console.log(filterPrices);

// const priceSum = prices.reduce((prevVal, curVal, index, prices)=>{
//     return prevVal + curVal; 
// }, 0);

// const priceSum = prices.reduce((prevVal, curVal) => prevVal + curVal, 0);

// console.log(priceSum);


// const data = 'newyork;10.99;5';
// const data2 = data.split(';');
// console.log(data2)

// const data3 = ['you','better','get','a','job','xoxo']
// console.log(data3.join(' '));
// const prices = [0, 3,4,42, 23, 0.3];

// console.log(Math.min(...prices))

// const persons = [{name : 'emily', age : 19, hobbies : ['soccer', 'basketball']}, {name : 'aysha', age: 21}, {hobbies : ['soccer', 'basketball']}];
// console.log(...persons)

// const copiedPerson = [...persons.map(person =>({
//     name : person.name,
//     age : person.age,
//     hobbies : person.hobbies
// }))]

// console.log(copiedPerson)
// persons[0].age = 21
// persons[0].hobbies[0] = 'water'
// console.log(copiedPerson)

const data = ['manali','bisht', 30, 'Mrs']

const [firstName, lastName, ...temporary] = data

console.log(firstName, lastName, temporary);
