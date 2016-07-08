const React = require('react');
const TileEditor = require('./TileEditor.jsx');

const Tile = React.createClass({

  getInitialState: function () {
    return {
      editing: false,
      content: null,
      imgURL: null,
      selected: false
    };
  },

  render: function () {
    // let colour = {backgroundColor: 'yellow' };
    if (this.state.editing === false) {
      if (this.state.selected === true) {
        return <div className='tileContainer-selected'
                    onDoubleClick={this.toggleEditing}
                    onClick={this.toggleSelect}
               >
                 <p>{this.state.content}</p>
                 <div className='one-tile-image-div'>
                   <img
                     className='one-tile-image'
                     src={this.state.imgURL}
                   />
                </div>
               </div>;
      } else return <div className='tileContainer'
                         onDoubleClick={this.toggleEditing}
                         onClick={this.toggleSelect}
                    >
                      <p>{this.state.content}</p>
                      <div className='one-tile-image-div'>
                        <img
                          className='one-tile-image'
                          src={this.state.imgURL}
                        />
                      </div>
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
  },

  toggleSelect: function () {
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }

    this.props.onClick(this.props.position);
  }

});

module.exports = Tile;
