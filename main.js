console.log('js is connected')
console.log('equals')

//const keys = ['grid-cell-1', 'grid-cell-2', 'grid-cell-3', 'grid-cell-4', 'grid-cell-5', 'grid-cell-6', 'grid-cell-7', 'grid-cell-8', 'grid-cell-9', 'grid-cell-10', 'grid-cell-11', 'grid-cell-12', 'grid-cell-13', 'grid-cell-14', 'grid-cell-15', 'grid-cell-16', 'grid-cell-17', 'grid-cell-18', 'grid-cell-19', 'grid-cell-20']

let eval = document.getElementById('eval');

const numButtons = document.querySelectorAll(".button");
console.log("buttons array", numButtons);

//selects the DOM to isolate the display window and makes it into a variable called display
const display = document.getElementById("display");
console.log("display");

for (let button of numButtons) {
    button.addEventListener('click', (button) => {
        display.innerText += button.innterText
        }); //this allows us to log in the display over and over
    };

    clear.addEventListener('click', () => {
        display.innterText = " "
    })

    eval.addEventListener('click', () => {
        console.log("button clicked")
        display.innterText = eval(display.innterText)
        console.log("button clicked")
    });