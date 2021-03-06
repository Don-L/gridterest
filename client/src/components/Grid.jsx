const React = require('react');
const Tile = require('./Tile.jsx');

const Grid = React.createClass({

  render: function () {
    let i = 1;
    let tiles = [];
    while (i < this.props.gridSize + 1) {
      tiles.push(<Tile key={i} position={i} onClick={this.props.onClick}/>);
      i++;
    }

    return (<div className='grid-div'>{ tiles }</div>);
  }

});

module.exports = Grid;
