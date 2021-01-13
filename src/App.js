import { useState, useEffect } from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ManList from './components/ManList';
import styled from 'styled-components';

const TimerContainer = styled.div`
  margin: 0.75rem;
  padding: 0.5rem;
  width: 8rem;
  background-color: salmon;
  color: white;
  border: solid 1px black;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  margin: 0.25rem;
  padding: 0.2rem;
  width: 5rem;
  border: solid 1px grey;
  border-radius: 0.25rem;
  cursor:pointer;
  background-color: white;

  &:hover {
      background-color: #e1e1e1;
  }
`


const manipulateTime = [
  {
    label: 'break-label',
    decrement: 'break-decrement',
    length: 'break-length',
    increment: 'break-increment',
    text: 'Break Length'
  },
  {
    label: 'session-label',
    decrement: 'session-decrement',
    length: 'session-length',
    increment: 'session-increment',
    text: 'Session Length'
  }
];

const App = () => {
  const [tLabel, setTlabel] = useState('Session');
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timerId, setTimerId] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState('25:00');

  // Decrements the session or break length
  const handleDecrement = (label) => {
    if (!isRunning) {
      if (label === 'break-label') {
        if (breakTime !== 1) {
          setBreakTime(parseInt(breakTime) - 1);
        }
      } else {
        if (sessionTime !== 1) {
          setSessionTime(parseInt(sessionTime) - 1);
        }
      }
    }
  }

  // Increments the session or break length
  const handleIncrement = (label) => { 
    if (!isRunning) {
      if (label === 'break-label') {
        if (breakTime !== 60) {
          setBreakTime(parseInt(breakTime) + 1);
        }
      } else {
        if (sessionTime !== 60 ) {
          setSessionTime(parseInt(sessionTime) + 1);
        }
      }
    }
  }

  // Updates timer when session length is manipulated
  useEffect(() => {
    setCurrentTime(`${sessionTime}:00`);
  }, [sessionTime]);

  const handleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      console.log('if');
    } else {
      tLabel === 'Session'
      ? startTimer(sessionTime)
      : startTimer(breakTime);
      console.log('else');
    }
  }

  const reset = () => {
    clearInterval(timerId);
    setCurrentTime('25:00');
    setIsRunning(false);
    setBreakTime(5);
    setSessionTime(25);
  }

  const startTimer = (duration) => {
    setIsRunning(true);
    let time = duration * 60;
    let minutes;
    let seconds;
    let currentTimer = setInterval(() => {
      setTimerId(currentTimer);
      time--;
      minutes = Math.floor(time / 60);
      seconds = time - minutes * 60;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setCurrentTime(`${minutes}:${seconds}`);
      if (time === 0) {
        if (tLabel === 'Session') {
          timesUp(breakTime, 'Break');
        } else {
          timesUp(sessionTime, 'Session');
        }
      }
    }, 1000);
  }

  const timesUp = (time, label) => {
    setTlabel(label);
    setIsRunning(false);
    clearInterval(timerId);
    startTimer(time);
  }

  return (
    <div className='App'>
      <ReactFCCtest />
      <ManList 
        manipulateTime={manipulateTime} 
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        sessionTime={sessionTime}
        breakTime={breakTime}
      /> 
      <TimerContainer className="timer">
          <div id="timer-label">{tLabel}</div>
          <Button id="start_stop" onClick={handleTimer}>start/stop</Button>
          <div id="time-left">{currentTime}</div>
          <Button id="reset" onClick={reset}>reset</Button>
      </TimerContainer>
    </div>
  );
}

export default App;

