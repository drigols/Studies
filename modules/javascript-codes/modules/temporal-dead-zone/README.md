# Temporal Dead Zone - (Hoisting)

```js
console.log(x) // "undefined"
var x = 100;
```

**What?**  
> Well people are following: when we declare a variable with the keyword **"var"**, it is as if, when the interpreter starts his work, he already reserves spaces in memory for these variables **(var)**, however, their values ​​have not yet been defined as is the case with **"undefined"**.

This is also known in JavaScript as **"Hoisting"**. But this is not interesting and can even cause some problems that we will not mention here.

**NOTE:**  
The important thing is to know that when we create variables with the keywords **"let"** and **"const"**, this is no longer possible in JavaScript.

[01-temporalDeadZone.js](01-temporalDeadZone.js)
```js
// Error 01
console.log(x);
let x = 10;

// Error 02
console.log(y);
const y = 20;
```

This would be the result using the keywords **"let"** and **"const"**.

**Output:**
```js
Uncaught ReferenceError: x is not defined
Uncaught ReferenceError: y is not defined
```

---

**Rodrigo Leite -** *Software Engineer*
