// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

function setArrayInitialValuesFalse (array) {
  for (index = 0; index < 16; index++) {
    array.push(false);
  }
}

setArrayInitialValuesFalse(kicks);
setArrayInitialValuesFalse(snares);
setArrayInitialValuesFalse(hiHats);
setArrayInitialValuesFalse(rideCymbals);

//console.log(kicks);

function toggleDrum (array, arrayIndex) {
  return array[arrayIndex] = !array[arrayIndex];
}

toggleDrum(kicks, 7);
toggleDrum(kicks, 11);
toggleDrum(kicks, 10);
console.log(kicks);

function clear (array) {
  array.forEach(function(element) {
    element = false;
    return array;
  });
}

clear(kicks);
console.log(kicks);
