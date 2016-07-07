const React = require('react');
const Tile = require('./Tile.jsx');

const Grid = React.createClass({

  render: function () {
    let i = 1;
    let tiles = [];
    while (i < this.props.gridSize + 1) {
      tiles.push(<Tile/>);
      i++;
    }

    return (<div>{ tiles }</div>);
  }

});

module.exports = Grid;
