import React from 'react';

const Stopwatch = React.createClass({
  getInitialState () {
    return {
      running: false,
      elapsedTime: 0,
      previousTime: 0
    };
  },
  componentDidMount () {
    this.interval = setInterval(this.onTick, 100);
  },
  componentWillUMount () {
    clearInterval(this.interval);
  },
  onTick () {
    if (this.state.running) {
      let now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      });
    }
  },
  onStart () {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  },
  onStop () {
    this.setState({running: false});
  },
  onReset () {
    this.setState({
      running: true,
      elapsedTime: 0,
      previousTime: Date.now()
    });
  },
  render () {
    const startStop = this.state.running;
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className='stopwatch'>
        <h2>Stopwatch</h2>
        <div className='stopwatch-time'>{seconds}</div>
        {startStop ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }

});

export default Stopwatch;
