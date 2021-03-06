import React from 'react';

function Counter (props) {
  return (
    <div className='counter'>
      <button
        className='counter-action decrement'
        onClick={function () { props.onChange(-1); }}> -
      </button>
      <div className='counter-score'> {props.playerScore} </div>
      <button
        className='counter-action increment'
        onClick={function () { props.onChange(+1); }}> +
      </button>
    </div>
  );
}
Counter.propTypes = {
  playerScore: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default Counter;
