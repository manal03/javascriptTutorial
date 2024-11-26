//sets
// const ids = new Set([1,2,3]);
// ids.forEach(item=>{
//      console.log(item)
// });
// ids.add('hello')
// for(const item of ids.values()){
//     console.log(item);
// }

//maps
// const name1 = [{name : 'manali'}]
// const name2 = [{name : 'manuel'}]
// const ids2 = new Map([[name1, [{hobbies : ['soccer'], age : 20}]]])
// ids2.set(name2, [{hobbies : ['swimming'], age : 22}])

// for(const key of ids2.keys()){
//     console.log(key);
// }
// for(const value of ids2.values()){
//     console.log(value);
// }

// console.log(ids2.get(name1)[0])
// console.log(ids2.get(name1))

// let person1 = {name : 'manali'};
// const sets = new Set();
// sets.add(person1);
// person1 = null;
// console.log(sets);

const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const tempArray = originalArray.map(orig=>orig.price)
.reduce((prevVal, curVal)=>{
    return prevVal + curVal
}, 0)

console.log(tempArray)