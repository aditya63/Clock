import React from 'react';
import '../scss/DigitalClock.scss'

const DigitalClock = ({hours, minutes, seconds, amPm}) => {
  return (
    <div className={"digital-clock"}>
      <section className="time">{hours}:{minutes}</section>
      <section className="amPm">{amPm}</section>
      <section className="seconds">{seconds}</section>
    </div>
  )
}

export default DigitalClock
