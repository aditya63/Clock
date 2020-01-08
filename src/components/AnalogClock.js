import React,{Component} from 'react';
import '../scss/AnalogClock.scss';

const AnalogClock = (props) => {
  const { title, hours, minutes, seconds } = props;

  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`
  };

  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  };

  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`
  };

  return (
      <div className="analog-clock">
        <h3>{title}</h3>
        <div className="clock-mid-circle" />
        <div className="dial seconds" style={secondsStyle} />
        <div className="dial minutes" style={minutesStyle} />
        <div className="dial hours" style={hoursStyle} />
      </div>
  );
}

export default AnalogClock;
