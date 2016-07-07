const React = require('react');

const TileEditor = React.createClass({

  getInitialState: function () {
    return { addingText: true,
             addingImg: false,
             userText: null };
  },

  render: function () {
    if (this.state.addingText === true) {
      return (
        <div className='tile-content-select-div'>
          <form onSubmit={this.props.onTextSubmit}>
            <select onChange={this.selectChange}>
              <option>Add text</option>
              <option>Add image</option>
            </select><br/>
          <textarea
            value={this.props.content}
            onChange={this.props.processText}/><br/>
            <input type='submit'/>
          </form>
        </div>
      );
    } else {
      return (
        <div className='tile-content-select-div'>
          <form onSubmit={this.props.onImgSubmit}>
            <select onChange={this.selectChange}>
              <option>Add text</option>
              <option>Add image</option>
            </select><br/>
          <input type='text'
                 placeholder='Image URL'
                 onChange={this.props.processImgURL}
                 /><br/>
            <textarea placeholder='Add your caption here'/><br/>
            <input type='text' placeholder='(optional) Link for tile'/><br/>
            <input type='submit'/>
          </form>
        </div>
      );
    }
  },

  selectChange: function () {
    if (this.state.addingText === true && this.state.addingImg === false) {
      this.setState({ addingText: false });
      this.setState({ addingImg: true });
    } else {
      this.setState({ addingText: true });
      this.setState({ addingImg: false });
    }
  }


});

module.exports = TileEditor;
