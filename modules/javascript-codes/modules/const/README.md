# Working with “const”

> With the keyword **"const"**, you can create a variable that does not allow you to change its values ​​`(we will see later that this is not true)`.

[01-const.js](src/01-const.js)
```js
function sayName(name) {
  console.log(name); // eslint-disable-line no-console
}
 
const name = 'Rodrigo Leite da Silva';
sayName(name);
```

Note that we have a function that displays the name on the console and a **variable name**. But what happens if we try to reassign the value of that constant?

[01-const.js](src/01-const.js)
```js
name = 'drigols';
```

**Outpu:**  
```
16:1  error  'name' is constant           no-const-assign
```

## STEP 01 - Create (or try to create) a constant object with the keyword "const"

[02-const.js](src/02-const.js)
```js
const person = {
  name: 'Rodrigo',
  age: 28,
};
```

## STEP 02 - Displays the values ​​and properties of the "person" object

[02-const.js](src/02-const.js)
```js
sayPerson(person);
```

## STEP 03 - Change the values ​​of the properties of the "person" object

[02-const.js](src/02-const.js)
```js
person.name = 'drigols - Software Engineer';
person.age = 15;
sayPerson(person);
```

## STEP 04 - Displays the new property values ​​for the "person" object

```js
/*
* { name: 'Rodrigo', age: 28 }
* { name: 'drigols - Software Engineer', age: 15 }
*/
```

As you can see, we change the values ​​of an object's properties, even with the keyword **"const"**.

Therefore, solving this problem is very simple. You simply freeze the object with the **freeze()** function of the "Object" object.

[02-const.js](src/02-const.js)
```js
// Freeze the Object.
Object.freeze(person);
```

## Step 05 - Now try to change the property values ​​of the "person" object.

[02-const.js](src/02-const.js)
```js
person.name = 'Rodrigo';
person.age = 10;
sayPerson(person);

{ name: 'Rodrigo', age: 28 }
{ name: 'drigols - Software Engineer', age: 15 }
{ name: 'drigols - Software Engineer', age: 15 }
```

**NOTE:**  
As you can see now, we have created an immutable object.

---

**Rodrigo Leite -** *Software Engineer*
