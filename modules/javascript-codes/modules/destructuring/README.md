# Object Destructuring

To better understand how "Object Destructuring" works , suppose we have a data object for a particular person, see the code below:

[01-destructuringObjects.js](src/01-destructuringObjects.js)
```js
const data = {
  name: 'Rodrigo',
  lastName: 'Silva',
  age: 28,
  blog: 'https://drigols.github.io/',
  social: {
    twitter: 'https://twitter.com/drigols_code',
    github: 'https://github.com/drigols',
  },
};
```

Now imagine that you need to save this information in variables, see the code below:

[01-destructuringObjects.js](src/01-destructuringObjects.js)
```js
const name = data.name;
const lastName = data.lastName;
const age = data.age;
const linkTwitter = data.social.twitter;
const linkGithub = data.social.github;
```

**NOTE:**  
As you can see, this ends up being a problem. A simple way, with a different syntax, you will see below:

[01-destructuringObjects.js](src/01-destructuringObjects.js)
```js
const employee = {
  eName: 'drigols',
  eLastName: 'Silva',
  eAge: 28,
  eBlog: 'https://drigols.github.io/',
  social: {
    eTwitter: 'https://twitter.com/drigols_code',
    eGithub: 'https://github.com/drigols',
  },
};

const {
  eName, eLastName, eAge, eBlog, social,
} = employee;
```

Note that, with just a few lines, we simplify our code in a much more practical way of working, where the **{}** block receives the variables and we pass it the **"employee"** object.

**NOTE:**  

> Variable names must have the same name as the object's properties.

[01-destructuringObjects.js](src/01-destructuringObjects.js)
```js
display(eName);
display(eLastName);
display(eAge);
display(eBlog);
display(social.eTwitter);
display(social.eGithub);
```

You can also apply **destructuring** to arrays:

[02-destructuringArray.js](src/02-destructuringArray.js)
```js
function display(data) {
  console.log(data);
}

const arr = ['drigols', 'Software Engineer', 28, 'Goole'];
const [name, job, age, company] = arr;

display(name);
display(job);
display(age);
display(company);
```

**OUTPUT:**  
```
drigols
Software Engineer
28
Goole
```

**NOTE:**  
With the **destructuring**, it is also possible to change the values ​​of a variable without the need for temporary variables *(temp)*:

[03-destructuringSwapVariables.js](src/03-destructuringSwapVariables.js)
```js
let x = 10;
let y = 20;

console.log(`Valor de x: ${x}, Valor de y: ${y}`);

// Swap with destructuring.
[x, y] = [y, x];

console.log(`Valor de x: ${x}, Valor de y: ${y}`);
```

**OUTPUT:**  
```js
Valor de x: 10, Valor de y: 20
Valor de x: 20, Valor de y: 10
```

---

**Rodrigo Leite -** *Software Engineer*
