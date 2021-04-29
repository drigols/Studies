# Working with default parameters

One of the new features of ES6 is the default parameter. With this functionality, when we create a function by declaring its parameters, we can already define values ​​that will be default if they call this function, no value will be passed as an argument for this parameter. See the example below:

[01-defaultParameter.js](01-defaultParameter.js)
```js
function employee(name = 'anonymous', business = 'Google') {
  console.log(`Nome: ${name}, ${business}`);
}

employee();
employee(undefined, 'IBM');
employee('drigols');
employee('Rodrigo', 'Amazon');
```

**OUPUT:**  
```js
Nome: anonymous, Google
Nome: anonymous, IBM
Nome: drigols, Google
Nome: Rodrigo, Amazon
```

**NOTE:**  
As you can see when we don't pass a certain parameter, it uses the default and this is very interesting in some applications.

---

**Rodrigo Leite -** *Software Engineer*
