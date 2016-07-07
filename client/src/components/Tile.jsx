const React = require('react');
const TileEditor = require('./TileEditor.jsx');

const Tile = React.createClass({

  getInitialState: function () {
    return { editing: false };
  },

  render: function () {
    if (this.state.editing === false) {
      return <div className='tileContainer'
                  onClick={this.onClick}
             >
             </div>;
    } else {
      return <TileEditor/>;
    };
  },

  onClick: function () {
    this.setState({ editing: true });
  }

});

module.exports = Tile;
