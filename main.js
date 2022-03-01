console.log('js is connected')
console.log('eval')

//const keys = ['grid-cell-1', 'grid-cell-2', 'grid-cell-3', 'grid-cell-4', 'grid-cell-5', 'grid-cell-6', 'grid-cell-7', 'grid-cell-8', 'grid-cell-9', 'grid-cell-10', 'grid-cell-11', 'grid-cell-12', 'grid-cell-13', 'grid-cell-14', 'grid-cell-15', 'grid-cell-16', 'grid-cell-17', 'grid-cell-18', 'grid-cell-19', 'grid-cell-20']

// let cleared = document.getElementById('clear');
// let equals = document.getElementById('equals');
let buttons = document.querySelectorAll(".button");
// let workString = '';
console.log("array of buttons", buttons);
//eval on equals button
//katy perry&cashcash

const display = document.getElementById("disPlay");
console.log('display div', display)

// const eval = document.getElementById('eval')
// eval.addEventListener('equals clicked', function() {
//     console.log('equals clicked')
//     let display = result.innerHTML
//     console.log(display)
//     result.innerHTML = eval(display)
// })

for (let button of buttons) {
    button.addEventListener("click", (event) => {
        if (event.target.id !== "eval") {
            display.innerText += event.target.id;
            console.log("event object", event.target.id);
        }
        if (event.target.id === "clear") {
            display.innerText = "";
        }
        if (event.target.id === "eval") {
            // let result = eval(display.innerText)
            display.innerText = eval(display.innerText)
            console.log(display);
            console.log('eval clicked')
        }
    });
}


//data buttons

// let display = document.getElementById('disPlay');
//     display.innerHTML= ''
//     console.log(display)

// zero.addEventListener('click', function() {
//     console.log(zero.innerHTML)
//     workString += zero.innerHTML
//     display.innerHTML = workString
// });

// one.addEventListener('click', function() {
//     console.log(one.innerHTML)
//     workString += one.innerHTML
//     display.innerHTML = workString
// });

// two.addEventListener('click', function() {
//     console.log(two.innerHTML)
//     workString += two.innerHTML
//     display.innerHTML = workString
// });

// three.addEventListener('click', function() {
//     console.log(three.innerHTML)
//     workString += three.innerHTML
//     display.innerHTML = workString
// });

// four.addEventListener('click', function() {
//     console.log(four.innerHTML)
//     workString += four.innerHTML
//     display.innerHTML = workString
// });

// five.addEventListener('click', function() {
//     console.log(five.innerHTML)
//     workString += five.innerHTML
//     display.innerHTML = workString
// });

// six.addEventListener('click', function() {
//     console.log(six.innerHTML)
//     workString += six.innerHTML
//     display.innerHTML = workString
// });

// seven.addEventListener('click', function() {
//     console.log(seven.innerHTML)
//     workString += seven.innerHTML
//     display.innerHTML = workString
// });

// eight.addEventListener('click', function() {
//     console.log(eight.innerHTML)
//     workString += eight.innerHTML
//     display.innerHTML = workString
// });

// nine.addEventListener('click', function() {
//     console.log(nine.innerHTML)
//     workString += nine.innerHTML
//     display.innerHTML = workString
// });

// //func buttons

// clear.addEventListener('click', function() {
//     console.log(clear.innerHTML)
//     workString = ''
//     display.innerHTML = workString 
// });

// equals.addEventListener('click', function() {
//     display.innerHTML = eval(display.innerHTML)
//     console.log(eval(display.innerHTML))
// });

// add.addEventListener('click', function() {
//     (display.innerHTML = display.innerHTML+plus);
//     console.log(display.innerHTML)
// });

// minus.addEventListener('click', function() {
//     console.log(minus.innerHTML)
//     workString += minus.innerHTML
//     display.innerHTML = workString
// })

// multiply.addEventListener('click', function() {
//     console.log(multiply.innerHTML)
//     workString += multiply.innerHTML
//     display.innerHTML = workString
// })
// let clicked = document.querySelector('calcButtons')
// clicked.addEventListener('click', function () {
//     console.log('clicked')
// })

// for (let button of calcButtons) {
//     button.addEventListener('click', (clicked) => {
//         console.log(clicked);
//         });
//     };
