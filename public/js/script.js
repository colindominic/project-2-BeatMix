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
  if (!array || arrayIndex > 15 || !arrayIndex){
    return;
  }
  return array[arrayIndex] = !array[arrayIndex];
}

//toggleDrum(kicks, 7);
//toggleDrum(kicks, 11);
//toggleDrum(kicks, 10);
//console.log(kicks);

function clear (array) {
  if (!array) {
    return;
  }

  if (isValidDrumName(array)) {
    return array.fill(false);
  } else {
    return;
  }

}

//clear(kicks);
//console.log(kicks);

function invert (array) {
  if (!array) {
    return;
  }

  if (!isValidDrumName(array)) {
    return;
  }

  for (arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    array[arrayIndex] = !array[arrayIndex];
  }
}

function isValidDrumName (drumName) {
  return (drumName === 'kicks' || drumName === 'snares' || drumName === "hiHats" || drumName === 'rideCymbals');
}

//invert(kicks);
//console.log(kicks);

function getNeighborPads (x, y, size) {
  let neighbours = [];

  if (x < 0 || x >= size || y < 0 || y >= size || size < 1) {
    return neighbours;
  }

  neighbours.push([x - 1, y]);
  neighbours.push([x + 1, y]);
  neighbours.push([x, y + 1]);
  neighbours.push([x, y - 1]);

  return neighbours.filter(function (neighbour) {
    return neighbour.every(function (value) {
      return value >= 0 && value < size;
    });
  });
}
