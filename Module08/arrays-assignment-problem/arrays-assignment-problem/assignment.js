//task 1 
const arr = [4, 6, 3, 9, 1];
// //filter numbers greater than 5
// const arrFilter = arr.filter(items => {
//     return items > 5; 
// })
// //map every number to an object, 'num' 
// const arrMap = arr.map(items =>{
//     return { num : items};
// })
// //reduce array into single digit
// const arrReduce = arr.reduce((prevVal, curVal)=>{
//     return prevVal * curVal; 
// }, 1); 
// console.log(arrFilter);
// console.log(arrMap);
// console.log(arrReduce);

//task2 

function findMax(...arr){
    let max = arr[0]; 
    let min = arr[0];
    for(const item of arr){
        if(item > max){
            max = item; 
        }
        if(item< min){
            min = item; 
        }
    }
    return [min, max]; 
}
const [min, max] = findMax(...arr);
console.log(min, max);

//task 4 - make a list so theres no duplicates
const setTask = new Set();
setTask.add(4);
console.log(setTask);
setTask.add(4);
console.log(setTask);
