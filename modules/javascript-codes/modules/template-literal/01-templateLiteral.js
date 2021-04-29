/*
* Rodrigo Leite - Software Engineer
* 19/11/2017
*/

/* eslint-disable */

function display(text) {
  console.log(text); // eslint-disable-line no-console
}


// Creates a "person" object.
const person = {
  name: 'Rodrigo',
  age: 28,
  job: 'Software Engineer',
};


// Concatenates a text with the values of the properties of the "person" object.
const text = "My name: " + person.name + ", Age: " + person.age + ", Job: " + person.job;
display(text); // Display text.



const textTwo = `My name: ${person.name}, Age: ${person.age}, Job: ${person.job}`;
display(textTwo); // Display text.
