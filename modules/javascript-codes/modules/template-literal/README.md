# Working with "Template Literals"

[01-templateLiteral.js](01-templateLiteral.js)
```js
function display(text) {
  console.log(text);
}

const person = {
  name: 'Rodrigo',
  age: 28,
  job: 'Software Engineer',
};


const text = "My name: " + person.name + ", Age: " + person.age + ", Job: " + person.job;
display(text);
```

See how hard it is to concatenate these values, and as the number of values ​​(variables) increases, it becomes even more difficult.


## Is there a simpler way? Yes - Template Literals

To code using the Literal Model - ES6, we DO NOT use single quotes **('...')** or double quotes **("...")**. We use ***(`)*** instead.

This ES6 encoding model allows us to encode without having to use the **"+"** sign for concatenation. Instead, we use:

```js
${variable}
```

**Exemplo:**  

[01-templateLiteral.js](01-templateLiteral.js)
```js
const textTwo = `My name: ${person.name}, Age: ${person.age}, Jobs: ${person.job}`;
display(textTwo);
```

---

**Rodrigo Leite -** *Software Engineer*
