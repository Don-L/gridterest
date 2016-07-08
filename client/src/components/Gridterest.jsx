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
  }

});

module.exports = Gridterest;
