const Gridfunc = {

  adjacentTop: function (position) {
    if (position - 5 > 0) {
      return position - 5;
    } else return false;
  },

  adjacentBottom: function (position, gridSize) {
    if ((position + 5 > 0) && (position + 5 <= gridSize)) {
      return position + 5;
    } else return false;
  },

  adjacentLeft: function (position) {
    if (position === 0) {
      return false;
    } else if ((position - 1) % 5 === 0) {
      return false;
    } else return position - 1;
  },

  adjacentRight: function (position, gridSize) {
    if (position + 1 > gridSize) {
      return false;
    } else if (position % 5 === 0) {
      return false;
    } else return position + 1;
  },

  adjacent: function (position1, position2, gridSize) {
    if (
      (adjacentTop(position1) === position2) ||
      (adjacentBottom(position1, gridSize) === position2) ||
      (adjacentLeft(position1) === position2) ||
      (adjacentRight(position1, gridSize) === position2)
    ) {
      return true;
    } else return false;
  },

  singleTile: function (array) {
    if (array.length === 1) {
      return true;
    }
  },

  twoAdjacentTiles: function (array, gridSize) {
    if (array.length != 2) {
      return false;
    } else if (adjacent(array[0], array[1], gridSize)) {return true;}
  },

  threeAdjacentTiles: function (array, gridSize) {
    if (array.length != 3) {
      return false;
    } else if (!(twoAdjacentTiles([array[0], array[1]], gridSize))) {
      return false;
    } else if (
      (array[1] === adjacentBottom(array[0], gridSize)) && (array[2] === adjacentBottom(array[1], gridSize)) ||
      (array[1] === adjacentRight(array[0], gridSize)) && (array[2] === adjacentRight(array[1], gridSize))
    ) {
      return true;
    } else return false;
  },

  fourAdjacentTiles: function (array, gridSize) {
    if (array.length != 4) {
      return false;
    } else if (!(threeAdjacentTiles([array[0], array[1], array[2]], gridSize))) {
      return false;
    } else if (
      (array[2] === adjacentBottom(array[1], gridSize)) && (array[3] === adjacentBottom(array[2], gridSize)) ||
      (array[2] === adjacentRight(array[1], gridSize)) && (array[3] === adjacentRight(array[2], gridSize))
    ) {
      return true;
    } else return false;
  },

  twoByTwoSquare: function (array, gridSize) {
    if (array.length != 4) {
      return false;
    } else if (
      (adjacent(array[0], array[1], gridSize)) &&
      (adjacent(array[2], array[3], gridSize)) &&
      (adjacentBottom(array[0], gridSize) === array[2])
    ) {
      return true;
    } else return false;
  },

  validSelectionGroup: function (array, gridSize) {
    if (
      singleTile(array) ||
      twoAdjacentTiles(array, gridSize) ||
      threeAdjacentTiles(array, gridSize) ||
      fourAdjacentTiles(array, gridSize) ||
      twoByTwoSquare(array, gridSize)
    ) {
      return true;
    } else return false;
  }

};

module.exports = Gridfunc;
