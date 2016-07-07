const React = require('react');
const TileEditor = require('./TileEditor.jsx');

const Tile = React.createClass({

  getInitialState: function () {
    return { editing: false,
             content: null};
  },

  render: function () {
    if (this.state.editing === false) {
      return <div className='tileContainer'
                  onClick={this.onTileClick}
             >
             </div>;
    } else {
      return <TileEditor onTextSubmit={this.onTextSubmit}
                         processText={this.processText}
             />;
    };
  },

  onTileClick: function () {
    this.setState({ editing: true });
  },

  processText: function (e) {
    this.setState({ content: e.target.value });
  },

  onTextSubmit: function (e) {
    e.preventDefault();
    console.log(e.target.value);
  }

});

module.exports = Tile;
