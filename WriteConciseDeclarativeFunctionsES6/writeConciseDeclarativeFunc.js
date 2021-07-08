/* Write Concise Declarative Functions with ES6
When defining functions within objects in ES5, we have to use the keyword function as follows:*/
const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
/*With ES6, you can remove the function keyword and colon altogether when defining functions in objects.
 Here's an example of this syntax: */
const person2 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};

//Exercise
/*Refactor the function setGear inside the object bicycle to use the shorthand syntax described above. */

// var nameCpu = window.prompt("Enter your cpu: ");
// alert(nameCpu + " selected. ");
// var nameGpu = window.prompt("Enter your graphic card");
// alert(nameGpu + " selected. ");
// var nameEnergy = window.prompt("Enter your energy");
// alert(nameEnergy + " selected. ");
// var nameRam = window.prompt("Enter your ram");
// alert(nameRam + " selected. ");
// var nameCarcase = window.prompt("Enter your carcase");
// alert(nameCarcase + " selected. ");
// var nameMotherBoard = window.prompt("Enter your mother board");
// alert(nameMotherBoard + " selected. ");
// var nameKeyboard = window.prompt("Enter your keyboard");
// alert(nameKeyboard + " selected. ");
// var nameMouse = window.prompt("Enter your mouse");
//lert(nameMouse + " selected. ");

let pcGamerConfig = {
  cpu: [],
  gpu: [],
  energy: [],
  ram: [],
  carcase: [],
  motherBoard: [],
  keyboard: [],
  mouse: [],

  newCpu(cpu) {
    this.cpu = cpu;

    return cpu;
  },
  newGpu(gpu) {
    this.gpu = gpu;

    return gpu;
  },
  newEnergy(energy) {
    this.energy = energy;

    return energy;
  },
  newRam(ram) {
    this.ram = ram;

    return ram;
  },
  newCarcase(carcase) {
    this.carcase = carcase;

    return carcase;
  },
  newMotherBoard(motherBoard) {
    this.motherBoard = motherBoard;
    return motherBoard;
  },
  newKeyboard(keyboard) {
    this.keyboard = keyboard;
    return keyboard;
  },
  newMouse(mouse) {
    this.mouse = mouse;
    return mouse;
  },
};

let allPcObj1 = {
  procesador: pcGamerConfig.newCpu("Intel"),
  graphic: pcGamerConfig.newGpu("480"),
  energy: pcGamerConfig.newEnergy("500w"),
  ram: pcGamerConfig.newRam("16 gb"),
  carcase: pcGamerConfig.newCarcase("eagle warrior"),
  motherBoard: pcGamerConfig.newMotherBoard("h 110m"),
  keyboard: pcGamerConfig.newKeyboard("g 213"),
  mouse: pcGamerConfig.newMouse("logitech"),
};

let allPcObj2 = {
  procesador: pcGamerConfig.newCpu("Amd"),
  graphic: pcGamerConfig.newGpu("1060 gtx"),
  energy: pcGamerConfig.newEnergy("1000w"),
  ram: pcGamerConfig.newRam("16 gb"),
  carcase: pcGamerConfig.newCarcase("eagle warrior 13"),
  motherBoard: pcGamerConfig.newMotherBoard("h 560"),
  keyboard: pcGamerConfig.newKeyboard("k19"),
  mouse: pcGamerConfig.newMouse("spartan"),
};

function showPC() {
  var newTitle = document.createElement("h1");
  var newContentTitle = document.createTextNode(`SETUP PC 1`);
  newTitle.appendChild(newContentTitle);
  var currentTitle = document.getElementById("h1");
  document.body.insertBefore(newTitle, currentTitle);

  for (let prop in allPcObj1) {
    allPcObj1.prop = allPcObj1[prop];

    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(`${allPcObj1[prop]}`);
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("pc1");
    document.body.insertBefore(newDiv, currentDiv);
  }
}
showPC();
function showPC2() {
  var newTitle2 = document.createElement("h1");
  var newContentTitle2 = document.createTextNode(`SETUP PC 2`);
  newTitle2.appendChild(newContentTitle2);
  var currentTitle2 = document.getElementById("h2");
  document.body.insertBefore(newTitle2, currentTitle2);

  for (let prop in allPcObj2) {
    allPcObj2.prop = allPcObj2[prop];
    var newDiv2 = document.createElement("div");
    var newContent2 = document.createTextNode(`${allPcObj2[prop]}`);
    newDiv2.appendChild(newContent2); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    var currentDiv2 = document.getElementById("pc2");
    document.body.insertBefore(newDiv2, currentDiv2);
  }
}

showPC2();
