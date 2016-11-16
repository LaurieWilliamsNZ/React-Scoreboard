import React from 'react';

function Counter (props) {
  return (
    <div className='counter'>
      <button className='counter-action decrement'>-</button>
      <div className='counter-score'> {props.playerScore} </div>
      <button className='counter-action increment'>+</button>
    </div>
  );
}
export default Counter;
