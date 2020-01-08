import React,{Component} from 'react';
import '../scss/Clock.scss';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';

export default class Clock extends Component {
  clockInterval = "";
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  handleDate() {
    const date = new Date();
    let amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    let formatHours = date.getHours() % 12;
    formatHours = formatHours ? formatHours : 12;
    let hours = this.formatTime(formatHours);
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds, amPm });
  }

  formatTime(time) {

    return time < 10 ? `0${time}` : time;
  }

  render() {
    const { hours, minutes, seconds, amPm } = this.state;
    const { title } = this.props;

    return (
      <main className="clock-panel">
        <section className="clock analog">
          <AnalogClock
            title={title}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </section>

        <section className="clock digital">
          <DigitalClock
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            amPm={amPm}
          />
        </section>
      </main>
    );
  }
}
