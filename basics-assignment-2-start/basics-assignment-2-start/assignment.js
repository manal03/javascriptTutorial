function func1(){
    alert('Greedy');
}
function func2(name){
    alert(`${name}`);
}
const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', func1)

function concate(name1, name2, name3){
    alert(`${name1} ${name2} ${name3}`)
}

concate('emily','emily2','emily3');