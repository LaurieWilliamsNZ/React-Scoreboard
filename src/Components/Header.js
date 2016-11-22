import React from 'react';
import Stopwatch from '../Components/Stopwatch';

function Header (props) {
  return (
    <div className='header'>
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;