import React, { Component } from 'react';
import './App.css';
import Player from './Components/Player';
import Header from './Components/Header';

class App extends Component {
  render () {
    this.props = {
      title: 'scoreboard',
      playerName: 'Laurie',
      score: 500
    };
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} />
        <div className='players'>
          <Player playerName={this.props.playerName} score={this.props.score} />
        </div>
      </div>
    );
  }
}

export default App;


