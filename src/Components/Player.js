import React from 'react';
import Counter from './Counter';

function Player (props) {
  return (
    <div className='player'>
      <div className='player-name'>
        <a className='remove-player' onClick={props.onRemove}>❌</a>
        {props.playerName}
      </div>
      <div className='player-score'>
        <Counter
          onScoreChange={props.playerScore}
          onChange={props.onScoreChange}
          playerScore={props.playerScore}
        />
      </div>
    </div>
    );
}
Player.propTypes = {
  playerName: React.PropTypes.string.isRequired,
  playerScore: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
};

export default Player;

