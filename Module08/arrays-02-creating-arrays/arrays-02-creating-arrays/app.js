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

const moreNumbers = Array(5);
const yetMoreNumbers = Array.of(3,4,5);
const evenMoreNumbers = Array.from('Hi!');


console.log(moreNumbers);
console.log(yetMoreNumbers);
console.log(evenMoreNumbers);

const array2 = [[3, 4], [5,2]];
for(const data of array2){
    for(const arr2 of data){
        console.log(arr2);
    }
}

const personalData = [0, 'Max', {memory : [3,4]}]
console.log(personalData[2].memory);