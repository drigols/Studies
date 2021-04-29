# Trabalhando com "Property Shorthand"

Let's look at a very interesting way of working on object initialization:

[01-propertyShorthand.js](src/01-propertyShorthand.js)
```js
function display(text) {
  console.log(text);
}

const name = 'Rodrigo';
const age = 27;
const job = 'Software Engineer';


// OLD JS.
const person = {
  name: name,
  age: age,
  job: job,
};
display(person);
```

**NOTE:**  
In other languages **(such as Java)**, we need to use the keyword **"this"** to differentiate local variables `(scope)` from global variables.

An interesting thing about *ES6* is that it allows you to omit the properties names if they have the same name as the variables . See the example below:

[01-propertyShorthand.js](src/01-propertyShorthand.js)
```js
// ES6.
const personTwo = {
  name,
  age,
  job,
};
display(personTwo);
```

**NOTE:**  
Another thing is that in ES6 we can also omit the keyword "function" within an object, see the example below:

[02-propertyShorthand.js](src/02-propertyShorthand.js)
```js
const person = {
  hello() {
    console.log('Hello World!');
  },
};

person.hello();
```

---

**Rodrigo Leite -** *Software Engineer*
