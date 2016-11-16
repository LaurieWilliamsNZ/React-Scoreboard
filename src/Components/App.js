import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Player from '../Components/Player';
import Header from '../Components/Header';

const PLAYERS = [
  {
    playerName: 'Archer',
    playerScore: 34,
    ID: 1
  },
  {
    playerName: 'Pam',
    playerScore: 54,
    ID: 2
  },
  {
    playerName: 'Woodhouse',
    playerScore: 35,
    ID: 3
  }
];

const App = React.createClass({
  PropTypes: {
  title: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    playerName: React.PropTypes.string.isRequired,
    playerScore: React.PropTypes.number.isRequired,
    ID: React.PropTypes.number.isRequired
  })).isRequired,
  },
  getInitialState () {
    return {
      players: this.props.initialPlayers
    };
  },
  getDefaultProps () {
    return {
      title: 'Scoreboard'
    };
  },
  render (props) {
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} />
        <div className='players'>
          {this.state.players.map((player, key) => {
            return (
              <Player
                playerName={player.playerName}
                playerScore={player.playerScore}
                key={player.ID}
              />);
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App initialPlayers={PLAYERS} /> ,document.getElementById('root')
);