import React from 'react';

const Counter = React.createClass({
  getInitialState () {
    return {
      playerScore: this.props.initialScore
    };
  },
  incrementScore: function (e) {
    this.setState({
      playerScore: (this.state.playerScore + 1)
    });
  },
  decrementScore: function (e) {
    this.setState({
      playerScore: (this.state.playerScore - 1)
    });
  },
  render () {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}>-</button>
        <div className='counter-score'> {this.state.playerScore} </div>
        <button className='counter-action increment' onClick={this.incrementScore}>+</button>
      </div>
    );
  }
});
export default Counter;
