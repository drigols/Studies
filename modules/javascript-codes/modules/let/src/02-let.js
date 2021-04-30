/*
* Rodrigo Leite - Software Engineer
* 19/11/2017
*/

function sayAnimal(animal) {
  console.log(animal); // eslint-disable-line no-console
}

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
