console.log('js is connected')
console.log('equals')

//const keys = ['grid-cell-1', 'grid-cell-2', 'grid-cell-3', 'grid-cell-4', 'grid-cell-5', 'grid-cell-6', 'grid-cell-7', 'grid-cell-8', 'grid-cell-9', 'grid-cell-10', 'grid-cell-11', 'grid-cell-12', 'grid-cell-13', 'grid-cell-14', 'grid-cell-15', 'grid-cell-16', 'grid-cell-17', 'grid-cell-18', 'grid-cell-19', 'grid-cell-20']

let display = document.getElementById('display');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

const calcButtons = document.querySelectorAll(".button");
console.log("buttons array", calcButtons);

const dataButtons = document.querySelectorAll(".data button");
console.log("data buttons array", dataButtons);

const funcButtons = document.querySelectorAll(".func button");
console.log("func buttons array", funcButtons);

const equalsButton = document.querySelector('[equals]');
console.log("equals", equals);

const clearButton = document.querySelector('[clear]');
console.log("clear", clear);



let clicked = document.querySelector('.button')
clicked.addEventListener('click', function () {
    console.log(clicked)
})

for (let button of calcButtons) {
    button.addEventListener('click', (clicked) => {
        console.log(clicked);
        });
    };
