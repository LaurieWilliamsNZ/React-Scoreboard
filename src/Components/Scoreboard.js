import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/App.css';
import Player from '../Components/Player';
import Header from '../Components/Header';
import AddPlayerForm from '../Components/AddPlayerForm';

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

let nextID = 4;

const Scoreboard = React.createClass({
  PropTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      playerName: React.PropTypes.string.isRequired,
      playerScore: React.PropTypes.number.isRequired,
      ID: React.PropTypes.number.isRequired
    })).isRequired
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
  onScoreChange (key, delta) {
    this.state.players[key].playerScore += delta;
    this.setState(this.state);
  },
  onPlayerAdd: function (playerName) {
    console.log('player added', playerName);
    this.state.players.push({
      playerName: playerName,
      ID: nextID,
      playerScore: 0
    });
    this.setState(this.state);
    nextID += 1;
  },
  onRemovePlayer: function (key) {
    this.state.players.splice(key, 1);
    this.setState(this.state.players);
  },
  render: function () {
    return (
      <div className='scoreboard'>
        <Header title={this.props.title} />
        <div className='players'>
          {this.state.players.map((player, key) => {
            return (
              <Player
                onScoreChange={delta => this.onScoreChange(key, delta)}
                playerName={player.playerName}
                onRemove={onRemovePlayer => { this.onRemovePlayer(key); }}
                playerScore={player.playerScore}
                key={player.ID}
              />
              );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
});

ReactDOM.render(
  <Scoreboard initialPlayers={PLAYERS} /> ,document.getElementById('root')
);
export default Scoreboard;
