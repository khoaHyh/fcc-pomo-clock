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
  // const [cycle, setCycle] = useState('Session');
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [currentTime, setCurrentTime] = useState('25:00');
  const [time, setTime] = useState(1500);
  const [paused, setPaused] = useState(false);
  const [manipulatedSesh, setManipulatedSesh] = useState(false);
  const [manipulatedBreak, setManipulatedBreak] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);
  const initRender = useRef(true);

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
    if (tLabel === 'Session') {
      if (sessionTime < 10) {
        setCurrentTime(`0${sessionTime}:00`);
      } else {
        setCurrentTime(`${sessionTime}:00`);
      }
    }
    setManipulatedSesh(true);
  }, [sessionTime]);

  useEffect(() => {
    if (tLabel === 'Break') {
      if (breakTime < 10) {
        setCurrentTime(`0${breakTime}:00`);
      } else { 
        setCurrentTime(`${breakTime}:00`);
      }
    }
    setManipulatedBreak(true);
  }, [breakTime]);

  useEffect(() => {
    if (initRender.current) {
      initRender.current = false;
      return;
    }

    if (!resetFlag) {
      tLabel === 'Break'
      ? timesUp(breakTime, 'Break')
      : timesUp(sessionTime, 'Session');
    } else if (tLabel === 'Break') {
      timesUp(breakTime, 'Break');
    }
    setResetFlag(false);
  }, [tLabel]);

  const handleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      setPaused(true);
      clearInterval(timerId);
    } else {
      // Depending on the label, whether the timer has been paused, or
      // if the lengths have been manipulated it will start the timer with
      // the appropriate length

      if (tLabel === 'Break') {
        if (!paused || manipulatedBreak) {
          startTimer(breakTime * 60);
        } else {
          startTimer(time);
        }
      } else {
        if (!paused || manipulatedSesh) {
          startTimer(sessionTime * 60);
        } else {
          startTimer(time);
        }
      }
    }
  }

  const reset = () => {
    clearInterval(timerId);
    setCurrentTime('25:00');
    setIsRunning(false);
    setPaused(false);
    setManipulatedSesh(false);
    setManipulatedBreak(false);
    setBreakTime(5);
    setSessionTime(25);
    setTlabel('Session');
    sound.pause();
    sound.currentTime = 0;
    setResetFlag(true);
  }

  const startTimer = (duration) => {
    setIsRunning(true);
    setPaused(false);
    setManipulatedBreak(false);
    setManipulatedSesh(false);
    let minutes;
    let seconds;
    let activeTimer = setInterval(() => {
      setTimerId(activeTimer);
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
          clearInterval(activeTimer);
          setTlabel('Break');
          return;
        } else {
          clearInterval(activeTimer);
          setTlabel('Session');
          return;
        }
      }
    }, 1000);
  }

  // Functions to run when time runs out
  const timesUp = (time) => {
    setIsRunning(false);
    clearInterval(timerId);
    startTimer((time * 60) + 1);
  }

  const playSound = () => {
    sound.currentTime = 0;
    sound.volume = 0.5;
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
      <audio 
        id='beep' 
        ref={(element) => {sound = element}}
        src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
      />
    </div>
  );
}

export default App;

