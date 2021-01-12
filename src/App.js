import './App.css';
import ReactFCCtest from 'react-fcctest';
import ManList from './components/ManList';
import styled from 'styled-components';

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

const App = () => {

  return (
    <div className='App'>
      <ReactFCCtest />
      <ManList manipulateTime={manipulateTime} /> 
      <TimerContainer className="timer">
        <div id="timer-label">Session</div>
        <button id="start_stop">start/stop</button>
        <div id="time-left">
          <span></span>:
          <span></span>
        </div>
        <button id="reset">reset</button>
      </TimerContainer>
    </div>
  );
}

export default App;
