# Working with “let”

> A variable declared with the keyword `let` - **CANNOT BE REWRITTEN IN THE SAME SCOPE**.

In fact, a variable declared with the keyword **"let"** needs its values ​​to be reassigned. It makes sense, because otherwise, what we really need is a constant **(const)**:

De fato, uma variável declarada com a palavra-chave **"let"** precisa que seus valores sejam reatribuídos. Faz sentido, porque, caso contrário, o que realmente precisamos é uma constante **(const)**:

See the codes below:

[01-let.js](src/01-let.js)
```js
let animal = 'cat';
sayAnimal(animal);
```


```js
let animal = 'cat';
let animal = 'dog';
```

**Output:**  

```
The following error would result:
U SyntaxError: Identifier 'animal' has already been declared.
```

This is because we are trying to create a variable that has already been created with the reserved word `"let"` **in the same scope**.

**NOTE:**  
The code below would result in an error because a variable declared in the *global scope* is available in the other internal blocks.


[02-let.js](src/02-let.js)
```js
// let animal = 'Elephant';


/* SECOND SCOPE. */
{
  // Animal variable declared with "let" in the SECOND SCOPE.
  let animal = 'cat';
  sayAnimal(animal);

  animal = 'catTwo';
  sayAnimal(animal);
}


/* THIRD SCOPE. */
{
  // Animal variable declared  with "let" in THIRD SCOPE.
  let animal = 'dog';
  sayAnimal(animal);

  animal = 'dogTwo';
  sayAnimal(animal);
}
```

**Rodrigo Leite -** *Software Engineer*
