# Working with Arrow Functions

The ***Arrow function*** example below allows a developer to create a JavaScript function with fewer lines of code. What has changed?

 - **1ª)** We removed the keyword "fucntion";
 - **2ª)** We add the arrow after the parameters.

**NOTE:**  
Parentheses are not necessary if only one expression (instruction) is present in the same block:

[01-arrowFunctions.js](src/01-arrowFunctions.js)
```js
function display(result) {
  console.log(result); // eslint-disable-line no-console
}
 
const multiply = (x, y) => x * y;
display(multiply(5, 10));
```

**NOTE:**  
Parentheses are optional when only one parameter () is present. What does that mean? See the code below:

[02-arrowFunctions.js](src/02-arrowFunctions.js)
```js
const msg = message => message;
```

Let's go now:

 - Calls the **display()** function to display a message on the console;
 - Pass the **msg()** function as an argument;
 - It is an argument to the **msg()** function.

[02-arrowFunctions.js](src/02-arrowFunctions.js)
```js
function display(msg) {
  console.log(msg); // eslint-disable-line no-console
}

const msg = message => message;
display(msg('drigols - Software Engineer'));
```

---

**Rodrigo Leite -** *Software Engineer*
