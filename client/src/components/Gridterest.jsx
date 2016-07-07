const React = require('react');
const Grid = require('./Grid.jsx');
const Nav = require('./Nav.jsx');

const Gridterest = React.createClass({

  getInitialState: function () {
    return { gridSize: 25 };
  },

  render: function () {
    return (<div>
            <Nav/>
            <Grid gridSize={this.state.gridSize}/>
            </div>);
  }

});

module.exports = Gridterest;
