const React = require('react');
const Grid = require('./Grid.jsx');
const Nav = require('./Nav.jsx');

const Gridterest = React.createClass({

  getInitialState: function () {
    return { gridSize: 30,
             selected: [] };
  },

  render: function () {
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

  adjacentOrFirstSelected: function () {
    
  }

});

module.exports = Gridterest;
