# Build a Calculator

## Directions

This exercise will help you understand how to use JavaScript functions and algorithms. You will also work with the DOM and respond to user input.

### Step 1: Set up your project

- Create an `index.html` file
- Create a `main.css` file and link it to your `index.html` file
- Create a `main.js` file and link it to your `index.html` file

### Step 2: Build out the HTML and CSS

- Using the mockup provided below, create your HTML and CSS.

| Mockup                       | In Action                    |
| ---------------------------- | ---------------------------- |
| ![](calculator.jpg) | ![](calculator-in-action.gif) |

### Step 3: Write the JavaScript

This is the main part of the project. You will have to react to click events on each calculator button and update the display. Start small by making the numbers work, then move on to the operators, decimal button, and equals button.

When a user presses the equals button, evaluate the math expression they have created and put the result in the display. Further buttons pressed add operators and numbers after that result.

You _do not_ have to stop users from entering bad input. For instance, if a user enters `2.1.0 -+ 7`, you can let them enter that and do not have to show any special output when they try to evaluate it using the equals button. It is fine if you do prevent them from entering bad input, though.

You do not have to allow for chaining long calculations (like `2 + 4 * 7 - 2`), but you can.

**Hint**: One way of evaluating mathematical expressions is [eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). Another way is by using the [math.js](http://mathjs.org/) library.

### Bonus steps

You should find the above project challenging. However, if you complete it, here are more features you should attempt to add in.

* Show an error message when invalid input is given. Using [try-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) is your best bet here.
* Disallow invalid input.
* Allow for chaining long calculations. [Order of operations](https://en.wikipedia.org/wiki/Order_of_operations) must be honored.
* Handle edge situations. For example, if a user starts by pressing the decimal button, they generally expect to start a decimal number, which needs a 0 before the decimal point. Add that 0.
* Allow entry via the keyboard, not just clicking on buttons.
* Add a button for calculating the modulo of two numbers.
* Add a button for raising a number by a power.
* Add parentheses to control the order of evaluation.
