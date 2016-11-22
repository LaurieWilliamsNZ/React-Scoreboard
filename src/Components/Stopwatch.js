import React from 'react';

const Stopwatch = React.createClass({
  render () {
    return (
      <div className='stopwatch'>
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'>0</div>
        <button>Start</button>
        <button>Reset</button>
      </div>
    );
  }

});

export default Stopwatch;
