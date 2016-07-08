const React = require('react');
const Grid = require('./Grid.jsx');
const Nav = require('./Nav.jsx');
const Gridfunc = require('./Gridfunc.js');

const Gridterest = React.createClass({

  getInitialState: function () {
    return { gridSize: 30,
             selected: [] };
  },

  render: function () {
    Gridfunc.hello();
    return (<div>
            <Nav/>
            <Grid gridSize={this.state.gridSize}
                  onClick={this.onTileClick}
              />
            </div>);
  },

  onTileClick: function (position) {
    if (this.state.selected.indexOf(position) < 0) {
      let tiles = this.state.selected.concat([position]);
      this.setState({ selected: tiles });
    } else {
      let tiles = this.state.selected.filter(tile => tile != position);
      this.setState({ selected: tiles });
    }
  },

  // adjacentOrFirstSelected: function (position) {
  //   if (this.state.selected.length === 0) {
  //     return true;
  //   } else if ((this.state.selected.indexOf(position + 5) >= 0) || (this.state.selected.indexOf(position - 5) >= 0)) {
  //     return true;
  //   } else if ((this.state.selected.indexOf(position + 1) >= 0) || (this.state.selected.indexOf(position - 1) >= 0)
  // },

  adjacentTop: function (position) {
    if (position - 5 > 0) {
      return position - 5;
    } else return false;
  },

  adjacentBottom: function (position) {
    if ((position + 5 > 0) && (position + 5 <= this.state.gridSize)) {
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

  adjacentRight: function (position) {
    if (position + 1 > this.state.gridSize) {
      return false;
    } else if (position % 5 === 0) {
      return false;
    } else return position + 1;
  },

  adjacent: function (position1, position2) {
    if (
      (adjacentTop(position1) === position2) ||
      (adjacentBottom(position1) === position2) ||
      (adjacentLeft(position1) === position2) ||
      (adjacentRight(position1) === position2)
    ) {
      return true;
    } else return false;
  },

  singleTile: function (array) {
    if (array.length === 1) {
      return true;
    }
  },

  twoAdjacentTiles: function (array) {
    if (array.length != 2) {
      return false;
    } else if (adjacent(array[0], array[1])) {return true;}
  },

  threeAdjacentTiles: function (array) {
    if (array.length != 3) {
      return false;
    } else if (!(twoAdjacentTiles(array[0], array[1]))) {
      return false;
    } else if (
      (array[1] === adjacentBottom(array[0])) && (array[2] === adjacentBottom(array[1])) ||
      (array[1] === adjacentRight(array[0])) && (array[2] === adjacentRight(array[1]))
    ) {
      return true;
    } else return false;
  },

  fourAdjacentTiles: function (array) {
    if (array.length != 4) {
      return false;
    } else if (!(threeAdjacentTiles([array[0], array[1], array[2]]))) {
      return false;
    } else if (
      (array[2] === adjacentBottom(array[1])) && (array[3] === adjacentBottom(array[2])) ||
      (array[2] === adjacentRight(array[1])) && (array[3] === adjacentRight(array[2]))
    ) {
      return true;
    } else return false;
  },

  twoByTwoSquare: function (array) {
    if (array.length != 4) {
      return false;
    } else if (
      (adjacent(array[0], array[1])) &&
      (adjacent(array[2], array[3])) &&
      (adjacentBottom(array[0]) === array[2])
    ) {
      return true;
    } else return false;
  },

  validSelectionGroup: function (array) {
    if (
      singleTile(array) ||
      twoAdjacentTiles(array) ||
      threeAdjacentTiles(array) ||
      fourAdjacentTiles(array) ||
      twoByTwoSquare(array)
    ) {
      return true;
    } else return false;
  }

});

module.exports = Gridterest;
