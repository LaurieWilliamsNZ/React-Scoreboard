import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='scoreboard'>
        <div className='header'>
          <h1>Dashboard</h1>
          <div className='players'>
            <div className='player'>
              <div className='player-name'>
              Laurie Williams
              </div>
              <div className='player-score'>
                <div className='counter'>
                  <button className='counter-action decrement'>-</button>
                  <div className='counter-score'> 31 </div>
                  <button className='counter-action increment'>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


