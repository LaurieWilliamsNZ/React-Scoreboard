import React from 'react';

const AddPlayerForm = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },
  getInitialState () {
    return {
      playerName: ''
    };
  },
  onNameChange: function (e) {
    this.setState({ playerName: e.target.value });
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onAdd(this.state.playerName);
    this.setState({
      playerName: ''
    });
  },
  render () {
    return (
      <div className='add-player-form'>
        <form onSubmit={this.onSubmit}>
          <input type='text' value={this.state.playerName} onChange={this.onNameChange} />
          <input type='submit'value='Add Player to Form' />
        </form>
      </div>
    );
  }
});

export default AddPlayerForm;
