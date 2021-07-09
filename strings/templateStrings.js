/*A new feature of ES6 is the template literal. This is a special type of string 
that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use string interpolation features to create strings.

Consider the code below: */

const person = {
  name: "Emmanuel",
  age: 25,
};

const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

console.log(greeting);

/*A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), 
to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output.
 This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. 
 Basically, you won't have to use concatenation with the + operator anymore.
 To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }.
  Similarly, you can include other expressions in your string literal, for example ${a + b}. 
  This new way of creating strings gives you more flexibility to create robust strings. */

//Exercise
/* Use template literal syntax with backticks to create an array of list element (li) strings.
   Each list element's text should be one of the array elements from the failure property 
   on the result object and have a class attribute with the value text-warning.
    The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).*/

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>',
];

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeListSuccess(arr) {
  const arrSuccess = arr.map((item) => `<li class="text-warning">${item}</li>`);
  return arrSuccess;
}

function funcionListaError(arr) {
  const arrError = arr.map((item) => `<li class="error">${item}</li>`);
  return arrError;
}

function skipedList1(arr) {
  const skipedList1 = arr.map((item) => `<li class="skiped">${item}</li>`);
  return skipedList1;
}

const resultError = funcionListaError(result.failure);
const resultSuccess = makeListSuccess(result.success);
const skipedListTotal = skipedList1(result.skipped);
const allList = [resultError, resultSuccess, skipedListTotal];
console.log(allList);

//Another example
const miHtml = {
  h1: ["soy un h1", "soy un h2", "soy un h3", "soy un h4"],
  p: [
    "soy un parrafo",
    "soy un parrafo color negro",
    "soy un parrafo color blanco",
    "soy un parrafo color amarillo",
    "soy un parrafo color azul",
  ],
  a: ["soy un enlace", "soy un enlace sin raya"],
};

function mostrarTitulos(arr) {
  const titulos = arr.map((lol) => `<h1>${lol}</h1>`);
  return titulos;
}
let h = mostrarTitulos(miHtml.h1);

function mostrarP(arr) {
  const parrafos = arr.map((xd) => `${xd}`);
  return parrafos;
}
let p = mostrarP(miHtml.p);

function mostrarA(arr) {
  const mostrarEnlaces = arr.map((item) => `${item}`);
  return mostrarEnlaces;
}

let a = mostrarA([miHtml.a]);

let allHtml = [h, p, a];
console.log(allHtml);
