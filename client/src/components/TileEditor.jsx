const React = require('react');

const TileEditor = React.createClass({

  getInitialState: function () {
    return { addingText: true,
             addingImg: false };
  },

  render: function () {
    return (
      <div className='tile-content-select-div'>
        <form>
          <select onChange={this.selectChange}>
            <option>Add text</option>
            <option>Something else</option>
          </select>
          <textarea/>
          <button>DONE</button>
        </form>
      </div>
    );
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
