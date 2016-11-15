import React from 'react';
import Counter from './Counter';

function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        {props.playerName}
      </div>
      <div className='player-score'>
        <Counter score={props.score} />
      </div>
    </div>
    );
}
Player.propTypes = {
  playerName: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

export default Player;
