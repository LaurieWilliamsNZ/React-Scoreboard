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

function App (props) {
  return (
    <div className='scoreboard'>
      <Header title={props.title} />
      <div className='players'>
       {props.players.map((player, key) => {
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

App.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    playerName: React.PropTypes.string.isRequired,
    playerScore: React.PropTypes.number.isRequired,
    ID: React.PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: 'Scoreboard'
};

ReactDOM.render(
  <App players={PLAYERS} /> ,document.getElementById('root')
);