import React from 'react';
import Counter from './Counter';

function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        {props.playerName}
      </div>
      <div className='player-score'>
        <Counter playerScore={props.playerScore} />
      </div>
    </div>
    );
}
Player.propTypes = {
  playerName: React.PropTypes.string.isRequired,
  playerScore: React.PropTypes.number.isRequired
};

export default Player;

