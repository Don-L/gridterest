const React = require('react');
const TileEditor = require('./TileEditor.jsx');

const Tile = React.createClass({

  getInitialState: function () {
    return {
      editing: false,
      content: null,
      imgURL: null
    };
  },

  render: function () {
    // let colour = {backgroundColor: 'yellow' };
    if (this.state.editing === false) {
      return <div className='tileContainer'
                  onClick={this.toggleEditing}
             >
             <p>{this.state.content}</p>
             <img
               className='one-tile-image'
               src={this.state.imgURL}
             />
             </div>;
    } else {
      return <TileEditor onTextSubmit={this.onTextSubmit}
                         processText={this.processText}
                         content={this.state.content}
                         processImgURL={this.processImgURL}
                         onImgSubmit={this.onImgSubmit}
             />;
    };
  },

  toggleEditing: function () {
    if (this.state.editing === false) {
      this.setState({ editing: true });
    } else {
      this.setState({ editing: false });
    }
  },

  processText: function (e) {
    this.setState({ content: e.target.value });
  },

  onTextSubmit: function (e) {
    e.preventDefault();
    this.toggleEditing();
  },

  processImgURL: function (e) {
    this.setState({ imgURL: e.target.value });
  },

  onImgSubmit: function (e) {
    e.preventDefault();
    this.toggleEditing();
  }

});

module.exports = Tile;
