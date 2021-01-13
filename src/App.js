/* 
  Code adapted from: https://medium.com/@marjuhirsh/a-beginners-account-of-building-a-pomodoro-clock-in-react-2d03f856b28a
*/

import { useState, useEffect, useRef } from 'react';
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

let sound;

const App = () => {
  const [tLabel, setTlabel] = useState('Session');
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [timerId, setTimerId] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState('25:00');
  const [time, setTime] = useState(1500);
  const [paused, setPaused] = useState(false);
  const [manipulated, setManipulated] = useState(false);
  const [cycle, setCycle] = useState('Session');
  const isFirstRun = useRef(true);

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
    setManipulated(true);
  }, [sessionTime]);

  // Starts another timer and changes label when the other runs out
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    tLabel === 'Session'
    ? timesUp(breakTime, 'Break')
    : timesUp(sessionTime, 'Session');
  }, [cycle]);

  const handleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setPaused(true);
      clearInterval(timerId);
    } else {
      // Depending on the label, whether the timer has been paused, or
      // if the lengths have been manipulated it will start the timer with
      // the appropriate length
      tLabel === 'Break'
      ? startTimer(breakTime * 60)
      : !paused
        ? startTimer(sessionTime * 60)
        : manipulated
          ? startTimer(sessionTime * 60)
          : startTimer(time);
    }
  }

  const reset = () => {
    clearInterval(timerId);
    setCurrentTime('25:00');
    setIsRunning(false);
    setPaused(false);
    setManipulated(false);
    setBreakTime(5);
    setSessionTime(25);
    setTlabel('Session');
    sound.pause();
    sound.currentTime = 0;
  }

  const startTimer = (duration) => {
    setIsRunning(true);
    setPaused(false);
    setManipulated(false);
    let minutes;
    let seconds;
    let currentTimer = setInterval(() => {
      setTimerId(currentTimer);
      duration--;
      setTime(duration);
      minutes = Math.floor(duration / 60);
      seconds = duration - minutes * 60;
      // Maintains mm:ss format for timer
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      setCurrentTime(`${minutes}:${seconds}`);
      // Switches cycle when time is up
      if (duration === 0) {
        playSound();
        if (tLabel === 'Session') {
          // timesUp(breakTime, 'Break');
          // setTlabel('Break');
          // duration = breakTime * 60;
          setCycle('Break');
        } else {
          // timesUp(sessionTime, 'Session');
          // setTlabel('Session');
          // duration = sessionTime * 60;
          setCycle('Session');
        }
      }
    }, 1000);
  }

  // Functions to run when time runs out
  const timesUp = (time, label) => {
    setTlabel(label);
    setIsRunning(false);
    clearInterval(timerId);
    startTimer(time * 60);
  }

  const playSound = () => {
    sound.currentTime = 0;
    sound.play().catch(err => console.log(err));
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
      <audio id='beep' ref={(element) => {sound = element}} src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' />
    </div>
  );
}

export default App;

